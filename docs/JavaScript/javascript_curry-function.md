---
sidebar_position: 42
description: Curry function
---

# Curry function

可以將函式的運算，思考為**設定**和**資料**兩個階段。<br />
而 curry function 是將函式的運算邏輯先拆分出來，先設定，往後再呼叫該函式時候，只做資料上運算。

## 優點

- 語意化：因將參數拆分出來，命名上更為清晰。
- 延遲執行：會在**資料**階段再去執行邏輯上的運算。
- 參數沿用：如果有多個**設定**階段的參數是一樣的，可利用 curry function 建立好函式，再劃分使用。

## 範例

**非 Curry function**

```javascript
const add = (x, y) => x + y;
console.log(add(1, 2)); // 3
```

**Curry function**

```javascript
const add = (x) => (y) => x + y;
const addOne = add(1); // 會將增加的數增加 1
const addTwo = add(2); // 會將增加的數增加 2
console.log(addOne(2)); // 3
console.log(addTwo(3)); // 5
```

## Reference

> [Functional Programming 常用基本技巧及應用與 RxJS 應用](https://ithelp.ithome.com.tw/articles/10243832)
