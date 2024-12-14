---
sidebar_position: 12
description: 運算式與運算子
---

# 運算式與運算子

## 可選串連運算子(?.)

當一個 object 無法確定是否有該屬性時，當如果為 `undefined` 或 `null`，又往下層選擇屬性時，會導致程式發生錯誤。使用可選串連運算值可以確保當無該屬性，回傳 `undefined` 且停止往下繼續動作

```javascript
const data = {
  name: "Hsing",
  sex: "male",
  favorite: {
    ball: ["basketball", "table tennis"],
  },
};

let movie;
// 當沒使用可選串連運算子需要一層一層來避免沒有屬性的錯誤產生
// highlight-next-line
if (data && data.favorite && data.favorite.movie) {
  movie = data.favorite.movie;
}

// 使用可選串連運算子
const movie = data?.favorite?.movie; // undefined
```

## 空值合併(??)

當左邊的值為 `null` 或 `undefined`，回傳右邊的值，不然就回傳左邊值

```javascript
undefined ?? 123; // 123
null ?? "abc"; // 'abc'
NaN ?? 123; // NaN
0 ?? "abc"; // 0
```

## 位元運算子 - 位元 AND(&)

將值轉為二進位，再做 `AND`

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
Number & 1;
/*
1 => 奇數
0 => 偶數
*/
```

## Reference

> [運算式與運算子 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)
