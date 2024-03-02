---
sidebar_position: 41
description: isNaN() vs Number.isNaN()
---

# isNaN() vs Number.isNaN()

## isNaN()

判斷值是否為 NaN(Not a Number)，js 會轉型來判斷，如果無法轉成數字，那將會`return true`<br />
example:

```javascript
isNaN(NaN); // true
isNaN("abc"); // true
isNaN("123"); // false
isNaN(""); // false
isNaN([]); // false
isNaN(true); // false
isNaN(false); // false
```

## Number.isNaN()

ES6 後所新增，不會強制轉換非數字的值，它只為在值本身為 NaN 時候才會`return true`<br />
會出現 NaN 的狀況

```javascript
Math.sqrt(-1); // NaN，無法對負數進行平方根運算
0 / 0; // NaN，零除以零
Infinity - Infinity; // NaN，無窮減去無窮
parseInt("Hello"); // NaN，無法將非數字字符串轉換為數字
Number("123abc"); // NaN，無法將包含非數字字符的字符串轉換為數字
parseFloat("NaN"); // NaN，parseFloat 解析 "NaN" 字符串會返回 NaN
```

example:

```javascript
Number.isNaN(NaN); // true
Number.isNaN("abc"); // false
Number.isNaN("123"); // false
Number.isNaN(""); // false
Number.isNaN([]); // false
Number.isNaN(true); // false
Number.isNaN(false); // false
```

## Reference

> [MDN - isNAN()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN)<br /> > [MDN - Number.isNaN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
