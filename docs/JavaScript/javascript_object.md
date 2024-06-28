---
sidebar_position: 21
description: Object
---

# Object

## 宣告

### 物件實字 (Object Literals)

給予一個空物件直接宣告為物件

```javascript
const obj = {};
```

### 建構式

```javascript
const data = {};
const obj = new Object(data);
```

:::tip
使用建構式需要注意。<br />如果是 `new Object(1)` 的話，會產生一個數字的包裹物件 `Number {1}`。<br />如果是字串， `new Object('1')` 的話，會產生一個數字的包裹物件 `String {1}`。
:::

純值無法再被賦予屬性，而當用建構式產生的物件，即便是 `Number` 或 `String`，是可以再指定屬性的。

```javascript
const text = "純文字";
text.name = "純值";
console.log(text); // 純文字

const num = new Object(1);
num.name = "數字";
console.log(num); // Number {1, name: '數字'}

const str = new Object("1");
str.name = "字串";
console.log(str); // String {'1', name: '字串'}
```

## 刪除

可以使用 `delete` 來刪除物件裡的一個屬性。

```javascript
const data = {
  name: "名稱",
};
delete data.name; // true
```

:::tip
屬性才可以刪除，變數不行。
:::

```javascript
var abc = 123; // 當使用 var ，會被註冊到 window 的物件裡
def = 456; // 未宣告，會被當成是屬性，等同於 window.def = 456;
delete def; // true，window 物件已刪除
delete abc; // false，變數不能被刪除
```

## Reference
> [JavaScript 核心篇 - 六角學院](https://www.udemy.com/course/javascript-adv/)
