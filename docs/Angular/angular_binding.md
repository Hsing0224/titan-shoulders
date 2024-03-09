---
sidebar_position: 5
description: Angular binding
---

# 繫結

## 單向繫結 (One-way Binding)

### 內嵌繫結 (Interpolation)

可利用 `{{ }}` 將資料顯示出來

```typescript
title: string = "Hello World";
```

```html
<h1>{{ title }}</h1>
```

:::note
雖然在 `{{ }}` 內可以做運算，但建議還是寫在 `ts` 內。讓 code 分離較簡潔也方便維護。
:::

:::caution
當然你也可以用在 html 標籤裡的 attribute，不過這用**屬性繫結**來綁定會更好維護和管理。

```html
<h1 title="{{ title }}">{{ title }}</h1>
```

:::

### 屬性繫結 (Property Binding)

以 a 標籤為例，在 DOM 物件中，有一個 href 屬性，該屬性的原文為 Property<br />
可以開啟開發者工具，側邊欄的頁籤指到 `Properties` ，則可以看到該 `tag` 的 `Properties` 。

```typescript
url = "https://www.google.com/";
text = "This is link.";
```

```html
<a [href]="url" [textContent]="text"></a>
<!-- 輸出為
<a href="https://www.google.com/">This is link.</a>
-->
```

### 屬性繫結 (Attribute Binding)

在 HTML 規格中，標籤內屬性的原文為 Attribute<br />
而當類似 W3C 規範的可以自由擴充的 Attribute `data-*` ，就可以使用

```typescript
title = "This is title.";
```

```html
<a href="https://www.google.com/" [attr.data-title]="title">This is link.</a>
<!-- 輸出為
<a href="https://www.google.com/" data-title="This is title.">This is link.</a>
-->
```

### 類別繫結 (Class Binding)

可以單個設定，或是傳入一組 object 。<br />
可用三元判斷，或者傳入變數 (boolean) 來控制 class 的顯示 / 隱藏。

```typescript
isTrue = true;
```

```html
<div [ngClass]="{'true-style': isTrue, 'false-style': !isTrue}"></div>
<div [class]="{'true-style': isTrue, 'false-style': !isTrue}"></div>
<div [class.true-style]="isTrue" [class.false-style]="!isTrue"></div>
```

### 樣式繫結 (Style Binding)

可以單個設定，或是傳入一組 object 。<br />
可用三元判斷，或者傳入值來控制 style 的數值或顯示 / 隱藏。

```typescript
isTrue = true;
fontSize = 12;
```

```html
<div
  [ngStyle]="{'backgroundColor': isTrue ? 'green' : 'red', 'fontSize.px': fontSize}"
></div>
<div
  [style]="{'background-color': isTrue ? 'green' : 'red', 'font-size.px': fontSize}"
></div>
<div
  [style.background-color]="isTrue ? 'green' : 'red'"
  [style.font-size.px]="fontSize"
></div>
```

### 事件繫結 (Event Binding)

將事件綁定在 html 上，當觸發事件，就呼叫 ts 內的 method。也可以將事件或值傳遞進去給 method 使用。

```html
<!--
另一種寫法，但較不易閱讀，不推薦。
<button type="button" on-click="onClick($event)">Button</button>
-->
<button type="button" (click)="onClick($event)">Button</button>
```

```typescript
onClick(event) {
  console.log(event);
}
```

:::tip
在 `Class` 裡的不是 `function` 而是 `method` 。
:::

## 雙向繫結 (Two-way Binding)

當在建置頁面的時候，有時需求是在 `input` 輸入值時，要立刻處理並且顯示在網頁上。這時我們可以使用雙向繫結來處理這個需求。

### 使用方式

語法為**屬性繫結**跟**事件繫結**的結合。<br />
`[()]` _在盒子裡的有根香蕉_，而綁定一個 `Property`。

```typescript
keyword = "";
```

```html
<input type="search" [(ngModel)]="keyword" />
```

:::tip
需要引入 `FormsModule`
:::

## Reference

> [理解 Angular - 繫結 ](https://angular.tw/guide/property-binding) <br /> > [Angular 開發實戰：從零開始](https://www.udemy.com/course/angular-zero/) <br /> > [凱哥寫程式 - Angular 入門教學](https://www.youtube.com/playlist?list=PLneJIGUTIItu6QrNxEBAUgTXZaHIpO8D9)
