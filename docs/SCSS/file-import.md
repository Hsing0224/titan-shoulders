---
sidebar_position: 10
description: SCSS 檔案引入
---

# SCSS 檔案引入

在專案開發上，會依不同職責劃分各個 SCSS 檔案。<br />
最終再利用引入的方式將所需的 SCSS 檔案匯集起來。

:::note

- 檔名為 `_`，不會被編譯成實體的檔案
- 引入時可以不用寫副檔名

:::

## 範例檔案

```scss title="_color.scss"
$primary-color: red;
$secondary-color: green !default;
$third-color: blue;
```

```scss title="_mixin.scss"
@mixin square($value) {
  width: $value;
  height: $value;
}
```

## @import

該 SCSS 使用 `@import` 引入時，也會一併將該 SCSS 裡所 `@import` 的 SCSS 引入。<br />

:::danger
官網已經將 `@import` 標註為棄用。
:::

```scss title="_utils.scss"
@import "color";
@import "mixin";

// 假設有個檔案也有 $primary-color
$primary-color: yellow;
```

```scss title="main.scss"
.test {
  font-size: 24px;
}

@import "./utils";

.text {
  color: $primary-color;
}
.box {
  @include square(30px);
}
```

編譯後

```css index.css
.test {
  font-size: 24px;
}

/*
$primary-color 更改了顏色導致不是最一開始設定的
*/
.text {
  color: yellow;
}

.box {
  width: 30px;
  height: 30px;
}
```

## @forward

`@forward` 感覺像是前置的宣告設定，無法在 `@forward` 抓取引入檔案的變數。<br />
如果要使用引入檔的變數，需搭配 `@use` 使用。

### as

可以利用 `as` 來將命名作為轉換，當引入該檔案使用，則會依照 `as` 後的名稱去呼叫變數等方法。<br />
`*` 來表示該檔案裡各個命名。

```scss title="_utils.scss"
@forward "color" as color-*;
@forward "mixin" as test*;
```

```scss title="main.scss"
@use "./utils";

.text {
  color: $color-primary-color;
}
.box {
  @include testsquare(30px);
}
```

### show

### hide

### with

## @use

- 有自己的命名空間
- 不會引入檔案本身的引入
- 只會編譯一次檔案，即便被多個引入
