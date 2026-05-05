---
sidebar_position: 30
sidebar_label: SCSS 檔案引入
description: 檔案引入
---

# 檔案引入

在專案開發上，會依不同職責劃分各個 SCSS 檔案，最終再利用引入的方式將所需的 SCSS 檔案匯集起來。<br />
SCSS 檔案引入有三種相關的方式，分別是 `@import`、`@forward`、`@use`。

:::note

- 檔名前綴為 `_`，不會被編譯成實體的檔案
- 引入時可以不用寫副檔名

:::

## 寫在前面的結論

|              | @import | @forward |   @use   |
| :----------: | :-----: | :------: | :------: |
|    作用域    |  全局   |   全局   | 自身檔案 |
| 隨意位置引入 |   ✅    |    ❌    |    ❌    |
|  程式碼覆蓋  |   ✅    |    ❌    |    ❌    |
|  程式碼重複  |   ✅    |    ❌    |    ❌    |
|    配置性    |   ❌    |    ✅    |    ✅    |

- 作用域：變數影響的範圍
- 隨意位置引入：在任何位置引入
- 程式碼覆蓋：variable、mixin、extend、function 命名一樣的狀況是否會覆蓋
- 程式碼重複：當重複引入檔案時是否會重複編譯
- 配置性：當 variable 使用 `!default`，可否利用 `with` 帶入的方式替換值

## 如何使用

- @import: 可隨時隨地的引用，方法最為簡單，將整份檔案寫入指定的位置。
- @forward: 將 SCSS 檔案轉發的功能。須放在開頭。
  - show / hide: 轉發時可指定想顯示、隱藏哪些。
  - as: 引入時替檔案加上前綴。
  - with: 將引入檔案內的 `!default` 來給予設定值。
- @use: 本身帶有命名空間的引入，預設的命名空間為檔名。
  - as: 變更命名空間，也可使用 `*` 讓命名空間取消變為全域，使用上需注意變數重複導致覆蓋的問題。
  -

## @import

### 優點

簡單易用。

### 缺點

檔案容易肥大，或覆蓋問題，造成維護上困難。

:::caution
方便但需注意的方法。<br />
在使用 `@import`，特性是會一併引入這支檔案裡印入的檔案。
:::

:::danger
官網已經將 `@import` 標註為棄用。
:::

```scss
@import "utils";
@import "insert";
@import "insert";
.test {
  color: block;
}
@import "insert"; // 隨意插入
@import "insert"; // 編譯後會有許多 insert 裡的實體樣式
```

## @forward

### 優點

只負責轉發的動作，而轉發之外也可控制引入檔案的呈現。

### 缺點

本身不具備 SCSS 的功能模組，意味著 variable、mixin、extend、function 都無法使用。

:::note
**as**, **show**, **hide**, **with**，皆無法用在 extend 的設定上。
:::

### as

將變數值加上前綴<br />
利用 `as` 來將命名作為轉換，當引入檔案使用，則會依照 `as` 後的名稱去呼叫變數等方法。<br />
`*` 來表示該檔案裡各個命名。

:::tip

- 變數: 以 `as var-*` 為例，正確寫法為 `$var-xxxxx`
- extend: 無需使用前綴，即便取了前綴也無法套用。
- `*` 需放在結尾
  :::

```scss
@forward "variable" as var-*; // 使用 * 將檔案內各項名稱
@forward "mixin" as mixin*; // 也可以不打 dash，只是會很醜
@forward "extend" as extend-*; // extend 使用別名是無效的
// This will error
@forward "function" as *; // 這樣是不允許的寫法，有寫跟沒寫一樣
@forward "function";
```

```scss
@use "main";
@forward "insert";
@forward "insert";
@forward "insert"; // insert 在編譯時，實體的樣式只會編譯出一次

.color-primary {
  // This will error
  color: main.var-$primary-color; // 前綴會針對名稱，變數符號 ($) 須在最前面
  color: main.$var-primary-color;
  @include main.mixinsquare(50px);
  // This will error
  @extend %extend-button-default
      !optional; // 可使用 !optional 來避免編譯錯誤而中斷編譯
  // This will error
  @extend extend-%button-default;
}
```

### show

可以限制只想要被取用的

```scss title="_utils.scss"
@forward "variable" as var-* show $var-primary-color, $var-third-color; // 當有別名的時候， show 及 hide 就需遵守命名規範
```

### hide

讓引入的檔案除了指定隱藏的值之外，其餘皆可使用。

```scss title="_utils.scss"
@forward "mixin" as mixin-* hide mixin-is-hide; // 當有別名的時候， show 及 hide 就需遵守命名規範
```

:::danger
`@forward` 無法使用 show / hide 去指定 extend 的設定
:::

### with

```scss title="_utils.scss"
@forward "variable" as var-* show $var-primary-color, $var-third-color with($secondary-color:
        blue !default);
```

當引入的檔案有設定 `!default` 時，即可使用 with 去設定變數，有幾項需注意的地方

- 須寫在所有設定的最後
- 當有設定前綴 (as) 時，with 裡面的變數是引用檔裡面的，故不用加上前綴
- 目前 (2024/12/11) vscode 的套件會顯示語法的錯誤，但仍是可以編譯和作用的。

## @use

### 優點

- 本身帶有命名空間

### 缺點

- 每次都要打前綴(as \* 除外)

```scss
@use "main";
@use "insert" as a; // 同個檔案會有 error 導致編譯中斷，需要將來源需要取不同的 namespace 避免衝突，
@use "insert" as b;
@use "insert" as c; // insert 在編譯時，實體的樣式只會編譯出一次

.color-primary {
  // This will error
  color: main.$primary-color; // 🤐 無法獲取 main.$primary-color 的值
}
```

:::danger

如果在引入後重新指定了變數的樣式，會導致原先的樣式被覆蓋

```scss title="insert.scss"
@use "variable";
variable.$primary-color: black; // ❗️ 這行會導致所有引入 variable 的 $primary-color 被覆寫
```

:::

### as

與 `@forward` 不同，`@use` 的 `as` 為別名。<br />
原本預設都是以檔案名稱作為 namespace，而使用 `as` 則可以將 namespace 替換掉。

```scss title="main.scss"
@use "main" as var;
.color-primary {
  color: var.$primary-color;
}
.color-secondary {
  color: var.$secondary-color;
}
```

:::note
也可以使用 `@use "main" as *;` 這樣的技巧，在宣告引入的變數時，則不需要額外寫 namespace

```scss title="main.scss"
@use "main" as *;
.color-primary {
  color: $primary-color;
}
.color-secondary {
  color: $secondary-color;
}
```

:::

### 私有成員

可以在變數、mixin、extend、function 的名稱加上 `-`，設定為私有成員。<br />
引入私有成員會 error 導致編譯中斷。

```scss
// 變數
$-secondary-color: blue;

// mixin
@mixin -square($value) {
  width: $value;
  height: $value;
}

// extend
%-list-reset {
  list-style: none;
  margin: 0;
  padding: 0;
}

// function
@function -calculate-rem($px, $base-font-size: 16px) {
  @return calc($px / $base-font-size) * 1rem;
}
```

### with

同 `@forward` 的做法；當引入的檔案也有使用 `!default`，依照當下的檔案 -> 引入的檔案，來定義該變數所設定的值。

```scss
@forward "variable" as var-* with($secondary-color: yellow !default);
```

```scss
@use "main" with($secondary-color: yellowgreen !default);
.color-primary {
  color: main.$primary-color; // yellowgreen
}
```

## reference

> [sass-lang - import](https://sass-lang.com/documentation/at-rules/import/)<br />[sass-lang - use](https://sass-lang.com/documentation/at-rules/use/)<br />[sass-lang - forward](https://sass-lang.com/documentation/at-rules/forward/)
