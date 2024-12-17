---
sidebar_position: 40
description: 淺拷貝與深拷貝
---

# 淺拷貝與深拷貝

在 JavaScript 的資料型別主要分為

- Primitive type data，`string`、`number`、`boolean`、`undefined`、`null`、`symbol`，複製時會 call by value
- Object data，`object`、`array`、`function`，複製時是屬於 call by Reference

## 淺拷貝(Shallow Copy)

當要複製一個陣列或物件，因 JavaScript 的特性，陣列或物件是屬於 call by Reference

```javascript
const arr = [0, 1, 2];
const newArr = arr;
newArr[0] = 3;
console.log(arr); // [3, 1, 2];

const obj = { name: "Stan", age: 10 };
const newObj = obj;
newObj.name = "Eric";
console.log(obj); // { name: 'Eric', age: 10 }
```

當要複製一個陣列或物件，受到 call by Reference 特性影響，我們可以用幾個方式來達成淺拷貝<br />

### 陣列淺拷貝的方法

```javascript
const arr = [0, 1, 2];

//slice()
const sliceArr = arr.slice();

//from()
const fromArr = Array.from(arr);

//spread operator(展開運算子)
const operatorArr = [...arr];

// 結果
sliceArr[0] = 3;
console.log(arr); // [0, 1, 2];

fromArr[0] = 3;
console.log(arr); // [0, 1, 2];

operatorArr[0] = 3;
console.log(arr); // [0, 1, 2];
```

### 物件淺拷貝的方法

```javascript
const obj = { name: "Stan", age: 10 };

// assign
const assignObj = Object.assign({}, obj);

// spread operator(展開運算子)
const operatorObj = { ...obj };

assignObj.name = "Eric";
console.log(obj); // { name: 'Stan', age: 10 }

operatorObj.name = "Kyle";
console.log(obj); // { name: 'Stan', age: 10 }
```

:::tip
以上方法只適用一維的陣列和一層的物件，在二維以上和兩層的物件就會因為 call by Reference 而受到影響
:::

```javascript
const arr = [0, 1, [2, 3]];
const newArr = [...arr];
newArr[0] = 4;
console.log(arr); // [0, 1, [2, 3]]; 一維沒有問題
newArr[2][0] = 5;
console.log(arr); // [0, 1, [5, 3]];

const obj = {
  name: "Stan",
  age: 10,
  info: { gender: "Male", hobby: "Playing basketball" },
};
const newObj = { ...obj };
newObj.name = "Eric";
console.log(obj); // { name: 'Stan', age: 10, info: { gender: 'Male', hobby: 'Playing basketball'} }; 一層沒有問題
newObj.info.hobby = "Playing video games";
console.log(obj); // { name: 'Stan', age: 10, info: { gender: 'Male', hobby: 'Playing video games'} };
```

## 深拷貝(Deep Copy)

:::info
時代在變，現在可以直接使用 `structuredClone()` 來做深拷貝。
:::

<!-- TODO -->
<!-- 補充 structuredClone() 使用方法 -->

當要複製陣列或物件有兩層以上，如果需要完全獨立，就必須使用深拷貝

```javascript
// 常見方法是使用 JSON.parse() 和 JSON.stringify() 來做深拷貝
const arr = [0, 1, [2, 3]];
const newArr = JSON.parse(JSON.stringify(arr));
newArr[2][0] = 4;
console.log(arr); // [0, 1, [2, 3]];

const obj = {
  name: "Stan",
  age: 10,
  info: { gender: "Male", hobby: "Playing basketball" },
};
const newObj = JSON.parse(JSON.stringify(obj));
newObj.info.hobby = "Playing video games";
console.log(obj); // { name: 'Stan', age: 10, info: { gender: 'Male', hobby: 'Playing basketball'} }
```

利用 `JSON.parse()` 和 `JSON.stringify()`，雖然可以解決兩層以上 call by Reference 的問題，但還是有些狀況會造成 value 損壞

```javascript
const obj = {
  undefined: undefined,
  notANumber: NaN,
  infinity: Infinity,
  regExp: /.*/,
  date: new Date("1999-12-31T23:59:59"),
  say: function () {
    console.log("hello");
  },
};
console.log(JSON.parse(JSON.stringify(obj)));
/*
{
  notANumber: null,
  infinity: null,
  regExp: {},
  date: '1999-12-31T15:59:59.000Z'
}

undefined -> 遺失
NaN、Infinity -> null
regExp -> {}
new Date -> 直接輸出內容為字串
function -> 遺失
*/
```

利用 `typeof` 並使用遞迴的方式來做深拷貝

```javascript
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])
  );
}
```

## Reference

> [Shallow copy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)<br /> [Deep copy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)<br /> [為了轉生而點技能-JavaScript，day8(淺筆記-物件之淺層複製與深層複製 - openthedoor2004](https://ithelp.ithome.com.tw/articles/10282829)<br /> [JS 中的淺拷貝 (Shallow copy) 與深拷貝 (Deep copy) 原理與實作 - 城市碼農](https://www.programfarmer.com/articles/2021/javascript-shallow-copy-deep-copy)
