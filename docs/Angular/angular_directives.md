---
sidebar_position: 4
description: Directives
---

# Directives (指令)

## 元件型指令

例如 `<app-header></app-header>` ，這個 HTML 標籤背後代表就是一個 `Component` 。

## 屬性型指令 (Attribute Direction)

會修改元素的外觀或行為

### ngModule

使用方法可參考[繫結 - 雙向繫結](/docs/Angular/angular_binding.md#雙向繫結-two-way-binding)

### ngStyle

使用方法可參考[繫結 - 樣式繫結](/docs/Angular/angular_binding.md#樣式繫結-style-binding)

### ngClass

使用方法可參考[繫結 - 類別繫結](/docs/Angular/angular_binding.md#類別繫結-class-binding)

## 結構型指令 (Structure Directives)

結構型指令會帶有一個 `*` ，這是語法糖的一種。

:::caution
在簡易寫法時，Angular 只允許一個結構型指令
:::

### ngSwitch

搭配 `ngSwitchCase` 和 `ngSwitchDefault` 使用。

```html
<div [ngSwitch]="condition">
  <div *ngSwitchCase="'A'">當 condition 符合條件 A 時。</div>
  <div *ngSwitchCase="'B'">當 condition 符合條件 B 時。</div>
  <div *ngSwitchCase="'C'">當 condition 符合條件 C 時。</div>
  <div *ngSwitchDefault>都沒有符合結果則為 ngSwitchDefault</div>
</div>
```

### ngFor

```html
<ul>
  <li *ngFor="let item of dataList;">
    <img [src]="item.img" alt="" />
    <h3>{{ item.title }}</h3>
    <div class="content" [innerHTML]="item.content"></div>
  </li>
</ul>
```

使用 `ngFor`，也有幾項能夠利用的區域變數

- `index`:number，輸出索引值
- `count`:number，輸出長度
- `first`:boolean，第一個則會輸出 `true`
- `last`:boolean，最後一個則會輸出 `true`
- `even`:boolean，偶數則會輸出 `true`
- `odd`:boolean，奇數則會輸出 `true`

```html
<ul>
  <li *ngFor="let item of dataList; index as i; let length = count">
    <!-- 
    兩種寫法：
    index as i
    將 index 賦予給 i
    let length = count
    將 count 賦予給 length
    -->
    <img [src]="item.img" alt="" />
    <h3>{{ item.title }}</h3>
    <div class="content" [innerHTML]="item.content"></div>
  </li>
</ul>
```

:::danger
TODO: trackBy 待補
:::

### ngIf

利用 `true || false`，來決定是否要顯示在頁面上。<br />
因為一個元素只能一個結構型指令的限制關係，如果多一個 element 來放置結構型指令，則會改變 HTML 的結構；故可以用 `ng-container` 替代，保持 HTML 結構上的完整。

```html
<ul>
  <ng-container *ngFor="let item of dataList;">
    <li *ngIf="item.title">
      <img [src]="item.img" alt="" />
      <h3>{{ item.title }}</h3>
      <div class="content" [innerHTML]="item.content"></div>
    </li>
  </ng-container>
</ul>
```

### ngTemplateOutlet

搭配範本變數及頁面範本使用，來輸出 `ng-template`，也可以帶值進去，讓資料的呈現有更大的彈性。<br />
[另一種寫法](/docs/Angular/angular_template-reference.md#ngtemplateoutlet)

```html
<ng-container
  *ngTemplateOutlet="data.length ? hasData : empty; context: context"
></ng-container>
<ng-template #hasData let-value let-data="name">
  有資料時會顯示，也會顯示傳入的值： {{ value }}, {{ data }}
</ng-template>
<ng-template #empty> 當資料是空的時候顯示這個 </ng-template>
```

```typescript
context = {
  $implicit: "abc",
  name: 123,
};
```

## Reference

> [Angular 開發實戰：從零開始](https://www.udemy.com/course/angular-zero/) <br />
> [圖像 Angular 開發入門：打造高靈活度的網頁應用程式 (iT邦幫忙鐵人賽系列書)](https://www.tenlong.com.tw/products/9789864349821)