---
sidebar_position: 11
---

# Array
## 影響到原本陣列的methods
- .fill()
- .forEach()
- .shift()
- .pop()
- .push()
- .reverse()
- .sort()
## 回傳一個新的陣列的methods
- .concat()
- .filter()
- .flat()
- .map()
- Array.from()
- .reduce()
- .with()
---
## Array()
建立一個陣列，必須注意的是當只有一個是Number的值輸入，會產生為陣列的長度
```javascript
const arr = new Array(3); // [empty × 3]
console.log(arr[0]); // undefined

const arr2 = new Array('3'); // ['3']
console.log(arr2[0]); // '3'
```
需產生陣列可以參考使用`[3]`或`Array.of(3)`來建立
## .at()
類似arr[index]這樣取值，但bracket notation方式不允許負數，`.at()`可以允許是負數，它會從後面數
```javascript
const arr = [0, 1, 2, 3];
arr[arr.length - 1]; // 3
arr.at(-1); // 3
```
## .concat()
將多組Array合併
```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const result = a.concat(b, c); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 也可以使用展開運算子
// const result = [...a, ...b, ...c];
```
## .every()
檢查Array的值，如果全符合才會`true`
```javascript
const arr = [0, 1, 2, 3];
arr.every(value => value < 10); // true
/*
  arr.every(function(value){
    return value < 10;
  });
*/
```
## .fill()
填滿給予的值，也可以設定要填滿範圍(可接受負數)
```javascript
/*
  fill的參數
  - value 陣列要填滿的值
  - [start] 可接受負值，負值為從陣列往後數
  - [end] 可以接受負值，指定的位置需在start往後的索引才有作用
*/
const arr = Array(3).fill(true); // [true, true, true]
arr.fill(false, -2, -1); // [true, false, true]
```
## .filter()
篩選符合條件的值，`會返回一個新的Array`
```javascript
/*
  filter的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [10, 90, 20, 80, 30, 70, 40, 60, 50];
const result = arr.filter(value => value > 55); //[90, 80, 70, 60]
```
## .find()
返回符合條件的第一個值，如果沒找到會返回`undefined`
```javascript
/*
  find的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [0, 1, 2, 3, 4];
const result = arr.find(value => value > 2); // 3
```
## .findIndex()
返回符合條件的第一個值的索引值，如果沒找到會回傳`-1`
```javascript
/*
  findIndex的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [10, 20, 30, 40, 50];
const result = arr.findIndex(value => value > 35); // 3
```
## .findLast()
類似`.find()`，它是從最後開始找，故回傳是從最後開始找的第一個符合的值，如果沒有找到會返回`undefined`
```javascript
/*
  findLast的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [0, 1, 2, 3, 4];
const result = arr.findLast(value => value > 2); // 4
```
> 跟.indexOf()的差異在indexOf()是傳入一個值，而.findIndex()是傳入條件
## .findLastIndex()
類似`.findIndex()`，從最後開始找，回傳第一個符合的索引值，如果沒找到會回傳`-1`
```javascript
/*
  findLastIndex的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [10, 20, 30, 40, 50];
const result = arr.findLastIndex(value => value > 35); // 4
```
## .flat()
扁平化陣列，可填入深度，預設為`1`，`會返回一個新的Array`
```javascript
/*
  flat的參數
  - [depth] 指定要扁平化的深度，預設為1
*/
const arr = [0, 1, 2, [3, [4]]];
const result = arr.flat(2); // [0, 1, 2, 3, 4]
/*
  輸出同樣的結果：
  const result = arr.flat().flat();
  const result = arr.flat(Infinity);
*/
```
## .forEach()
為陣列每個元素做處理
```javascript
/*
  forEach的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [0, 1, 'a', 'b'];
arr.forEach(element => console.log(element));
// 0
// 1
// 'a'
// 'b'
```
## Array.from()
可將arrayLike轉為Array來使用，或是對於Array的每個元素還做處理
> arrayLike，類似array，但無array的方法
```javascript
/*
  from的參數
  - arrayLike 想轉換成陣列的值
  - [mapFn]
    - element 當前的值
    - index 當前值的索引
  - [thisArg]
*/
const links = document.querySelectorAll('a'); // NodeList[...]
const linkArr = Array.from(links); // [...]

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from(Array(4), (num, i) => i); // [0, 1, 2, 3]
```
## .includes()
判斷陣列裡是否有包含的值來回傳`true` or `false`
```javascript
/*
  includes的參數
  - searchElement 要查詢的值
  - [fromIndex] 可填入負值，從指定的位置往後找
*/
const arr = ['abc', 123, 'def'];
arr.includes(12); // false
arr.includes('123'); // false
arr.includes(123); // true
```
## .indexOf()
判斷陣列裡是否有指定的值，沒有就回傳`-1`
```javascript
/*
  indexOf的參數
  - searchElement 要查詢的值
  - [fromIndex] 可填入負值，從指定的位置往後找
*/
const arr = [0, 1, 2, 3, 4, '5', 6];
arr.indexOf(5); // -1
```
## .isArray()
檢查是否為array，並回傳`true`或`false`
```javascript
/*
  isArray的參數
  - value 要判斷的值
*/
Array.isArray([]); // true
Array.isArray(Array.prototype); // true
```
## .join()
將陣列轉成字串(一維)，並在每個element中間插入一個區隔的符號(預設為`,`)
```javascript
/*
  join的參數
  - [separator] 替換分隔的字符
*/
const arr = [0, 1, 2, 3];
arr.join('-'); // '0-1-2-3'

// join會將有二維以上的陣列扁平化的特性
const deepArr = [0, 1, [2, 3, [4, 5, [6, 7]]]];
deepArr.join(); // '0,1,2,3,4,5,6,7'
```
~~奇淫技巧~~<br>
如果搭配字串的.split()，可以達到扁平化陣列的效果，但有個問題是裡面的值不能有`,`，避免輸出錯誤
```javascript
const deepArr = [0, 1, [2, 3, [4, 5, [6, 7]]]];
deepArr.join().split(','); // ['0', '1', '2', '3', '4', '5', '6', '7']
```
> 結論:還是乖乖用.flat()
## .lastIndexOf()
與`.indexOf`相同，但它是由後面往前找，會回傳符合的第一個索引，*意味為陣列裡最後一個*，當都沒有符合則回傳`-1`
```javascript
/*
  lastIndexOf的參數
  - searchElement 要查詢的值
  - [fromIndex] 可填入負值，從指定的位置往後找
*/
const arr = [0, 1, 2, 2, 1, 0];
arr.lastIndexOf(1); // 4
```
## .map()
會回傳一組新的陣列，該陣列為回傳的值組成
```javascript
/*
  map的參數
  - callbackFn
    - element 當前的值
    - index 當前值的索引
    - array 傳入的array本身
  - [thisArg]
*/
const arr = [1, 2, 3, 4];
arr.map(value => value * 2); // [2, 4, 6, 8]
```
## Array.of()
以輸入的引數來建立一個Array
```javascript
/*
  of的參數
  - element1, ..., elementN
*/
const arr = Array.of(5); // [5]
```
## .pop()
丟出陣列最後一個值，會回傳丟出的值
```javascript
const arr = ['a', 'b', 'c'];
arr.pop(); // 'c'
console.log(arr); // ['a', 'b']
```
## .push()
將引數加入陣列的最後，會回傳陣列的長度
```javascript
/*
  push的參數
  - [element1, ..., elementN]
*/
const arr = ['a', 'b', 'c'];
arr.push('d', 'e', 'f'); // 6
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f']
```
## .reduce()
對陣列每個值做處理之外，還有一個值來記錄上次的結果，可達成累進的運算
```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, current)=>acc+current, 0); // 15
/*
  reduce的參數
  - callbackFn
    - accumulator 上一次計算
    - currentValue 當前的值
    - array 傳入的array本身
  - initialValue 當第一次執行時，做為accumulator的值用
*/
```
## .reverse()
將陣列的值反轉，會影響到原本的陣列，如果不想要影響原本的陣列，可使用`.toReversed()`
```javascript
const arr = [0, 1, 2];
arr.reverse(); // [2, 1, 0]
```
## .shift()
會從陣列的第0個丟出，會回傳丟出的值
```javascript
const arr = ['a', 'b', 'c'];
arr.shift(); // 'a'
console.log(arr); // [1, 2, 3]
```
## .slice()
會回傳切割的陣列區間(start作為起始點往後數)，不影響原本的陣列
```javascript
const arr = [0, 1, 2, 3];
arr.slice(2, 3); // [2];
/*
  slice的參數
  - [start] 索引值，可為負數(往後數)
  - [end] 結束的索引值(不包含)，如start是負數，如果結束值小於起始值的索引值，則回傳[]
*/
```
## .some()
陣列裡是否至少一個符合判斷，回傳`true`或`false`
```javascript
const arr = [0, 1, 2, 3];
arr.some(element => element % 2 === 0); // true
arr.some(element => element > 5); // false
```
## .sort()
默認排序是將元素轉為字符，按照UTF-16碼以升冪排序。<br>
兩者以 `-1`, `0`, `1`來決定排序
| `compareFn(a, b)`回傳值 | 順序                   |
| :---------------------: | ---------------------- |
|           -1            | `a`在`b`前，`[a, b]`   |
|            0            | 保持原來順序           |
|            1            | `a`在`b`之後，`[b, a]` |

`.sort()`會影響原本的陣列，如果不想要影響原本的陣列，可使用`.toSorted()`
```javascript
/*
  sort的參數
  - [compareFn] 傳入比較的函式，回傳值必須是-1, 0 , 1
*/
const arr = [40, 1, 5, 200];
arr.sort(); // [1, 200, 40, 5]

function compareNumbers(a, b) {
  return a - b;
}
arr.sort(compareNumbers); // [1, 5, 40, 200]
```
## .splice()
在指定的位置，移除/替換/新增新的元素<br>
`.splice()`會影響原本的陣列，如果不想要影響原本的陣列，可使用`.toSpliced()`
```javascript
/*
  splice的參數
  - start 索引值，可為負數(往後數)
  - [deleteCount] 刪除的個數，數值為索引值往後n個
  - [item, ..., itemN] 在start位置塞入
*/

const arr = ['a', 'b', 'c', 'd'];
arr.splice(0, 0, 'e'); // ['e', 'a', 'b', 'c', 'd']
arr.splice(-1, 1, 'f'); // ['e', 'a', 'b', 'c', 'f']
arr.splice(2, 0, 'g'); // ['e', 'a', 'g', 'b', 'c', 'f']
```
## .unshift()
將元素加入陣列裡，並回傳陣列的長度
```javascript
/*
  unshift的參數
  - [element1, ..., elementN]
*/
const arr = [1, 2, 3];
arr.unshift(4, 5); // 5
console.log(arr); // [4, 5, 1, 2, 3]
```
## .with()
可指定替換陣列裡的元素並回傳一個新的陣列
```javascript
/*
  with的參數
  - index 索引值，可為負數(往後數)
  - value 要替換的值
*/

const arr = [0, 1, 2, 3];
arr.with(-1, 4); // [0, 1, 2, 4]
```

## Reference
> [MDN - Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)