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