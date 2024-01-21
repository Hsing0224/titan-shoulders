---
sidebar_position: 5
description: Angular binding
---

# 繫結

## 單向繫結 (One-way Binding)

### 文字插值 (Text interpolation)

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
當然你也可以用在 html 標籤裡的 attribute，不過這用**屬性繫結**來綁定會更好。

```html
<h1 title="{{ title }}">{{ title }}</h1>
```

:::

### 屬性繫結 (Property Binding)

### 屬性繫結 (Attribute Binding)

### 類別繫結 (Class Binding)

### 樣式繫結 (Style Binding)

### 事件繫結 (Event Binding)

將事件綁定在 html 上，當觸發事件，就呼叫 ts 內的 function。也可以將事件或值傳遞進去給 function 使用。

```html
<button type="button" (click)="onClick($event)">Button</button>
```

```typescript
onClick(event) {
  console.log(event);
}
```

## 雙向繫結 (Two-way Binding)

## Reference

> https://angular.tw/guide/property-binding
