---
sidebar_position: 12
description: Set
---

# Set
`Set`可以視為是一個內容只有唯一值的Array

```javascript
const setArray = new Set();

// add
setArray.add(1); // Set(1) {1}
setArray.add('Hello'); // Set(2) {1, 'Hello'}
setArray.add({name: 'Hsing', sex: 'male'}); // Set(3) {1, 'Hello', {…}}

// 因裡面有值了所以不會新增
setArray.add(1); // Set(3) {1, 'Hello', {…}}
// NaN跟undefined也被視為唯一值，即使 NaN !== NaN

// 不過array跟object是可以成功的
setArray.add({name: 'Hsing', sex: 'male'}); // Set(4) {1, 'Hello', {…}, {…}}

// delete
setArray.delete(1); // true
setArray.delete(1); // 因為1已被刪掉，如果沒這個值則返回false
setArray.delete({name: 'Hsing', sex: 'male'}); // false，這樣是刪不掉的

// has
setArray.has(1); // false
setArray.has('Hello'); // true
setArray.has({name: 'Hsing', sex: 'male'}); // false

// size
setArray.size; // 3

// clear
setArray.clear(); // Set(0) {size: 0}


const arr = [1, 1, 2, 3, 4, 5, 4];

setArray.add(arr); //
```

以剛剛範例，當傳入是`array`或`object`，在`delete`及`has`都失效。<br />
聰明的你一定發現，就是`call by reference`所影響的

```javascript
const obj = {name: 'Hsing', sex: 'male'};
const setArray = new Set();

setArray.add(obj); // Set(1) {{…}}
setArray.has(obj); // true
setArray.delete(obj); // true
```

用`Set`唯一值的特性，來去除掉重複的值
```javascript
const arr = [1, 1, 2, 3, 4, 5, 4];
const setArray = new Set(arr); // Set(5) {1, 2, 3, 4, 5}
const uniqueArr = [...setArray]; // [1, 2, 3, 4, 5]
```
當如果已經都存在，也可以用迴圈方式來將值一一丟入`Set`裡
```javascript
const setArray = new Set();
const arr = [1, 1, 2, 3, 4, 5, 4];

for(value of arr) {
  setArray.add(value);
} // Set(5) {1, 2, 3, 4, 5}
const uniqueArr = [...setArray]; // [1, 2, 3, 4, 5]

```