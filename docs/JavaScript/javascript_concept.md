---
sidebar_position: 1
description: 關於js的那些觀念
---

# JavaScript的那些觀念

## 立即函式(Immediately-Invoked Function Expression, IIFE)
```javascript
(function(){

})();
```

## 函式陳述式
```javascript
function fn() {};
```
## 函式表達式
```javascript
const fn = function() {};
```

## 作用域控制
```javascript
// 因為block({})的關係，a不會互相影響到
{
	const a = 1;
}
{
	const a = 2;
}
```

## 連續賦值
```javascript
const obj = {
	value: 1
};
Object.defineProperty(obj, 'value', {
	writable: false
});
const b = obj.value = 3;
/*
等號運算子會回傳一個結果
> obj.value = 3，雖然obj.value不會被覆寫，但等號運算子會回傳3，3再賦值給b，所以b=3
*/
```
:::danger
並不推薦使用連續賦值
:::

## 運算子優先順序
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

## Reference
[六角學院 - JavaScript 心機文法篇 - JS 面試常見核心知識](https://www.youtube.com/watch?v=8U5kbb1SvJg)
[MDN - 語句和聲明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
[MDN - 運算子優先順序](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)