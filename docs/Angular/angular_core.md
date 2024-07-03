---
sidebar_position: 20
description: Angular core
---

# Angular Core
有些方法是直接放在 Angular Core 裡，可直接做使用。不需額外 import Module 來使用。

## @if, @else if, @else
```html
if(score > 50) {
<p>你得分大於 50</p>
} @else if (score > 30) {
<p>你得分大於 30</p>
} @else {
<p>你的得分未滿 30</p>
}
```

## @for
```typescript
users = [
	{id: 0, name: 'Sarah'},
	{id: 1, name: 'Amy'},
	{id: 2, name: 'Rachel'},
	{id: 3, name: 'Jessica'}
];
```

```html
@for(user of users; track user.id; let count = $count, index = $index) {
<p>{{ user.name }} - {{ index }} - {{ count }}</p>
} @empty {
<p>空的</p>
}
```

### track
追蹤函數，設定唯一值讓 Angular 的效能提高。
:::caution
雖然 $index 是可以 work ，但可能會導致不必要的渲染。<br />
且萬一順序有發生變化，可能會使 track 的值錯誤導致錯誤的更新。
:::

### 區域變數
`@for` 有幾個區域變數可以使用。可參考 (/docs/Angular/angular_directives.md#ngFor)

### @empty
當 `@for` 的 $count 為 0 時，如果有 `@empty` ，則會顯示該 scope 的內容。