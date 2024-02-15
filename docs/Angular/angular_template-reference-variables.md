---
sidebar_position: 6
description: Template Reference Variables
---

# 範本參考變數

在 `Template` 的 `HTML` 標籤套用範本變數的語法( `#name` ) 來宣告。

```html
<input type="text" #input />
```

## 另一種寫法
範本變數的語法是 `#` ，也可以使用 `ref-` 來宣告範本變數
```html
<input type="text" ref-input />
```

## 在 `HTML` 使用

當宣告範本變數，如果  `HTML` 標籤的話。就代表是這個標籤的 DOM 物件。

```html
<input type="text" #input ngModel />
<div>{{ input.value }}</div>
```

:::tip
如果要雙向綁定，需要加上 `ngModel`，並引入 `FormsModule`
:::

## 在 `directive` 使用

當宣告範本變數為 `directive` 的話。就代表是這個該 Component ，可以存取該 Component 的 Property 。

```html input.component.html
<input type="text" [(ngModel)]="value">
```

```typescript input.component.ts
value = '';
```

```html app.component.html
<app-input #input></app-input>
<div>{{ input.value }}</div>
```

:::danger
當然也可以透過範本參考變數來修改 Component 裡的值，但建議不要這樣做。<br />任務拆分清楚也方便日後的維護。
:::

## Reference

> [Angular 開發實戰：從零開始](https://www.udemy.com/course/angular-zero/) <br />