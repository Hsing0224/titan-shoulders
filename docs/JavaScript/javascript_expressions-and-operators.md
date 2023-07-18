---
sidebar_position: 1
---

# 運算式與運算子
## 空值合併(??)
當左邊的值為`null`或`undefined`，回傳右邊的值，不然就回傳左邊值
```javascript
undefined ?? 123 // 123
null ?? 'abc' // 'abc'
NaN ?? 123 // NaN
0 ?? 'abc' // 0
```
## 位元運算子 - 位元AND(&)
將值轉為二進位，再做`AND`
```javascript
10 & 7 = 2;
/*
  1010
  0111
  ----
  0010
*/
```
利用這個特性可以判斷奇數和偶數
```javascript
Number & 1
/*
1 => 奇數
0 => 偶數
*/
```

## Reference
> [MDN - 運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)