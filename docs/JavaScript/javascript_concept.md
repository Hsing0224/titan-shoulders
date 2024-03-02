---
sidebar_position: 10
description: 關於JS的那些觀念
---

# JavaScript 的那些觀念

## 直譯式語言

`JavaScript` 是直譯式的語言，它不經過編譯，而是直接使用直譯器解析後，直接放到環境執行。優點是彈性較大。<br />
[了解 `JavaScript` 的直譯器如何解析](https://esprima.org/index.html)

## RHS (Right-hand side)

取值來自右邊的變數上。

## LHS (Left-hand side)

賦予值到左邊的變數上。

## 立即函式(Immediately-Invoked Function Expression, IIFE)

```javascript
(function () {})();
```

## 函式陳述式

```javascript
function fn() {}
// 函式陳述式又為具名函式
```

## 函式表達式

```javascript
const fn = function () {};
// 函式表達式又為匿名函式
```

:::note
依照 JavaScript 特性來看，函式陳述式會被 Hoisting，而函式表達式則是變數先被建立，再被賦予函式。
:::

## 作用域控制

```javascript
// 因為 block({}) 的關係，a 不會互相影響到
{
  const a = 1;
}
{
  const a = 2;
}
```

```javascript
var name = "Hsing";
function sayHi() {
  var name = "Chen";
  name = "Hsing Chen";
}
sayHi();
console.log(name); // 'Hsing'
// 如果 sayHi() 沒有 var ，則會是 'Hsing Chen'
```

當 `sayHi()` 裡的 `name`，有宣告，其作用域是在 scope 裡並不會影響到外面的 `name`。<br />
而如果 `sayHi()` 的 `name` 是直接賦予值，則會改變。

## 連續賦值

```javascript
const obj = {
  value: 1,
};
Object.defineProperty(obj, "value", {
  writable: false,
});
const b = (obj.value = 3);
/*
等號運算子會回傳一個結果
> obj.value = 3，雖然obj.value不會被覆寫，但等號運算子會回傳3，3再賦值給b，所以b=3
*/
```

:::danger
並不推薦使用連續賦值
:::

## 運算子優先順序

可參考 [MDN 上的運算子優先序](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence#%E8%A1%A8%E6%A0%BCtable)

當優先順序相等，就會依照相依性來處理先後順序

```javascript
const a = 1 + 2 * 3;
/*
1. 2 * 3
2. 1 + 6
3. 由右至左賦予a
*/

console.log(1 > 2 > 3); // false
/*
1. 1 > 2 = false
2. false > 3 = false
*/

console.log(3 < 2 < 1); // true
/*
1. 3 < 2 = false
2. false(轉型為0) < 1 = true
*/
```

## 相等與不相等

### 嚴格相等、不相等

`===` || `!==`<br />
可以除了判斷數值之外，也會判斷型別是否相同來回傳 `true` || `false`。

```javascript
// 一些特殊的情況
console.log(NaN === NaN); // false
console.log(-0 === +0); // true
```

### 寬鬆相等、不相等

`==` || `!=`<br />
**布林與字串會被轉換成數字型別**，但 `Null` 和 `undefined` 不會被轉為數字型別。

```javascript
console.log(true == "true"); // false, Number('true') 會回傳 NaN
console.log(Number(null)); // 0
console.log(null == 0); // false, null 在寬鬆相等不會被轉為數字型別
console.log(null == undefined); // true, null 跟 undefined 在寬鬆相等是一致的
```

物件與非物件，會用包裹物件做轉換。

```javascript
console.log(Number([10])); // 10
console.log(String(["A"])); // A
```

物件與物件比對，是比對參考位置。

```javascript
console.log({} == {}); // false
console.log([] == []); // false
```

## Truthy 和 Falsy

[JavaScript Equality Table/](https://dorey.github.io/JavaScript-Equality-Table/)

## Reference

> [六角學院 - JavaScript 心機文法篇 - JS 面試常見核心知識](https://www.youtube.com/watch?v=8U5kbb1SvJg)<br /> > [六角學院 - JavaScript 核心篇](https://www.udemy.com/course/javascript-adv/)<br /> > [MDN - 語句和聲明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)<br /> > [MDN - 運算子優先順序](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
