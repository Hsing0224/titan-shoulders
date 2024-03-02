---
sidebar_position: 21
description: Set & Map
---

# Set & Map

## Set

`Set`可以視為是一個內容只有唯一值的 Array(但他不是 Array)

```javascript
const testSet = new Set();

// add
testSet.add(1); // Set(1) {1}
testSet.add("Hello"); // Set(2) {1, 'Hello'}
testSet.add({ name: "Hsing", sex: "male" }); // Set(3) {1, 'Hello', {…}}

// 因裡面有值了所以不會新增
testSet.add(1); // Set(3) {1, 'Hello', {…}}
// NaN跟undefined也被視為唯一值，即使 NaN !== NaN

// 不過array跟object是可以成功的
testSet.add({ name: "Hsing", sex: "male" }); // Set(4) {1, 'Hello', {…}, {…}}

// delete
testSet.delete(1); // true
testSet.delete(1); // 因為1已被刪掉，如果沒這個值則返回false
testSet.delete({ name: "Hsing", sex: "male" }); // false，這樣是刪不掉的

// has
testSet.has(1); // false
testSet.has("Hello"); // true
testSet.has({ name: "Hsing", sex: "male" }); // false

// size
testSet.size; // 3

// clear
testSet.clear(); // Set(0) {size: 0}
```

以剛剛範例，當傳入是`array`或`object`，在`delete`及`has`都失效。<br />
聰明的你一定發現，就是`call by reference`所影響的

```javascript
const obj = { name: "Hsing", sex: "male" };
const testSet = new Set();

testSet.add(obj); // Set(1) {{…}}
testSet.has(obj); // true
testSet.delete(obj); // true
```

### 唯一值

用`Set`唯一值的特性，來去除掉重複的值

```javascript
const arr = [1, 1, 2, 3, 4, 5, 4];
const testSet = new Set(arr); // Set(5) {1, 2, 3, 4, 5}
const uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]
```

當如果已經都存在，也可以用迴圈方式來將值一一丟入`Set`裡

```javascript
const testSet = new Set();
const arr = [1, 1, 2, 3, 4, 5, 4];

for (value of arr) {
  testSet.add(value);
} // Set(5) {1, 2, 3, 4, 5}
const uniqueArr = [...testSet]; // [1, 2, 3, 4, 5]
```

### 迭代器

在`Set`中，key 和 value 都是同一個

```javascript
const testSet = new Set([1, 2, 3, 4, 5]);
testSet.keys(); // SetIterator {1, 2, 3, 4, 5}
testSet.values(); // SetIterator {1, 2, 3, 4, 5}

// 可以用entries()來看key => value
testSet.entries(); // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}
```

### 轉陣列

```javascript
const testSet = new Set([1, 2, 3, 4, 5]);

// 使用Array.from()
const fromArray = Array.from(testSet); // (5) [1, 2, 3, 4, 5]

// 利用展開運算子
const spreadArray = [...testSet]; // (5) [1, 2, 3, 4, 5]
```

## Map

- key 的靈活性： `Map`的 Key 可以是數字、字串、物件、函式、 symbol
  :::tip
  一般 Object 的 key 只能`string`或`symbol`
  :::
- 資料插入的順序

```javascript
const testMap = new Map();

// set(key, value)
testMap.set(123, "number key's value");
testMap.set("stringKey", "string key's value");

// has(key)
testMap.has(123); // true

// 如果再給一次，值會覆蓋
testMap.set(123, "number key's value change");

const obj = { name: "Hsing", sex: "male" };
testMap.set(obj, "object key's value");

const funcKey = () => "functionKey";
testMap.set(funcKey, "function key's value");

const symbolKey = Symbol("symbolKey");
testMap.set(symbolKey, "symbol key's value");

// size
testMap.size; // 5

// get(key)
testMap.get(123); // number key's value change
testMap.get("stringKey"); // string key's value
testMap.get(obj); // object key's value
testMap.get(funcKey); // function key's value
testMap.get(symbolKey); // symbol key's value

// delete(key)
testMap.delete(123); // true(如果沒有該key則返回false)

// clear
testMap.clear(); // Map(0) {size: 0}

testMap.set(0, "zeroValue");
testMap.set("one", "oneValue");
testMap.set(2, "twoValue");
testMap.set("three", "threeValue");
testMap.set(4, "fourValue");

// forEach
testMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});
/*
0 => zeroValue
one => oneValue
2 => twoValue
three => threeValue
4 => fourValue
*/
```

### 迭代器

```javascript
// keys()，返回一個key的迭代器
const keysIterator = testMap.keys(); // MapIterator {0, 'one', 2, 'three', 4}
for (const key of keysIterator) {
  console.log(key);
}
/*
0
one
2
three
4
*/

// values()，返回一個value的迭代器
const valuesIterator = testMap.values(); // MapIterator {'zero value', ... , 'four value'}
for (const value of valuesIterator) {
  console.log(value);
}
/*
zeroValue
oneValue
twoValue
threeValue
fourValue
*/

// entries()，返回Map所有內容的迭代器
const entriesIterator = testMap.entries(); // MapIterator {0 => 'zero value', ... , 4 => 'four value'}
for (const [key, value] of entriesIterator) {
  console.log(`${key} => ${value}`);
}
/*
0 => zeroValue
one => oneValue
2 => twoValue
three => threeValue
4 => fourValue
*/
```

### 轉陣列

```javascript
// 用這方法可以快速建立Map的資料
const testMap = new Map([
  [0, "zero"],
  [1, "one"],
  [2, "two"],
]); // Map(3) {0 => 'zero', 1 => 'one', 2 => 'two'}

// keys() & values()
const mapArray = [...testMap.values()]; // ['zero', 'one', 'two']

// entries()
const entriesArray = [...testMap.entries()]; // [Array(2), Array(2), Array(2)]
console.log(entriesArray[0]); // [0, 'zero']
```

### clone

```javascript
const originMap = new Map([
  [0, "zero"],
  [1, "one"],
  [2, "two"],
]); // Map(3) {0 => 'zero', 1 => 'one', 2 => 'two'}
const newMap = new Map(originMap); // Map(3) {0 => 'zero', 1 => 'one', 2 => 'two'}

originMap.set(0, "zero change"); // Map(3) {0 => 'zero change', 1 => 'one', 2 => 'two'}
newMap.set(1, "one change"); // Map(3) {0 => 'zero', 1 => 'one change', 2 => 'two'}
```

### Object，新增資料後的順序

當 Object 新增資料，key 為數字的時候，其實數字會轉換成字串。而也會導致資料順序上的不一致<br />
如果有考量到順序及數字，可選擇使用`Map`

```javascript
const obj = {
  0: "zeroValue",
  one: "oneValue",
  2: "twoValue",
  three: "threeValue",
  4: "fourValue",
}; // {0: 'zeroValue', 2: 'twoValue', 4: 'fourValue', one: 'oneValue', three: 'threeValue'}

obj[0] === obj["0"]; // true

for (const key in obj) {
  console.log(key);
}
/*
這邊也是字串的0、2、4
0
2
4
'one'
'three'
*/

// 利用Object.entries()來取值
Object.entries(obj)[1]; // ['2', 'twoValue']
```
