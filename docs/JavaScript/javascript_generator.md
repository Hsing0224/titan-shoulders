---
sidebar_position: 31
description: GeneratorFunction
---

# GeneratorFunction

產生器，可以將它想像成是一個，叫它一次才會動一次的函式。

## 如何使用

`function *name`或是`function* name`，都是可以的。他都是名稱為`name`的 generator function

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
  // return 'end';
}

/*
可以這樣寫
function *generator() {
  ...
}
const generator = function* () {
  ...
}

如果是在object內
const obj = {
  *generator() {
    ...
  }
}
*/

const iterator = generator();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: undefined, done: true}
// 如果在generator function最後寫一個return，那當最後一個的時後會是{value: 'end', done: true}
```

## yield

當執行 generator function 時，就會得到一個`iterator`，而執行了`.next()`這個方法，就會執行函式的內容，直到遇到`yield`時，函式就會暫停，直到下次呼叫`.next()`

### yield\*

當 generator function 在執行內容時，遇到`yield*`，這時會把控制權移交到另一個函式，由另一個 generator function 執行，直到 done 為 true 才又回到原本的函式裡

```javascript
function* delegate() {
  yield 3;
  yield 4;
}
function* generator() {
  yield 1;
  yield 2;
  yield* delegate();
  yield 5;
  yield 6;
}
const iterator = generator();
iterator.next().value; // 1
iterator.next().value; // 2
iterator.next().value; // 3
iterator.next().value; // 4
iterator.next().value; // 5
iterator.next().value; // 6
```

## .next()

使用`.next()`可以走訪到一個`yield`，回傳會是一個 object`{value: yield的值, done: 此函式是否已經結束}`<br />
Generator function 的執行分成兩個階段

1. 啟動: 在呼叫`.next()`時，函式還沒正式開始，而是在第一個`yield`之前暫停
2. 恢復: 再次呼叫`.next()`，函式從上次暫停的地方恢復執行

### .next()傳參數

需要注意執行第一次`.next()`時，參數是無效的，因為是把參數塞入上一個`yield`的地方，而`yield`本身並沒有回傳值，或是只會回傳`undefined`，所以當沒有值傳入時候，並不是回傳`yield`接續的值，而是`undefined`

```javascript
function* generator() {
  for (let i = 0; true; i++) {
    console.log(`nextValue: ${yield i}`);
  }
}
const iterator = generator();
iterator.next("a"); // {value: 0, done: false}
iterator.next("b"); // nextValue: b {value: 1, done: false}
iterator.next(); // nextValue: undefined {value: 2, done: false}
iterator.next("d"); // nextValue: d {value: 3, done: false}
iterator.next("e"); // nextValue: e {value: 4, done: false}
```

## .return()

如果使用 return，會直接結束 generator function 並回傳指定的值。之後再使用`.next()`呼叫時則不會執行接下來的值

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator = generator();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.return("end"); // {value: 'end', done: true}
iterator.next(); // {value: undefined, done: true}
```

或是在 generator function 裡加入 return，也是一樣效果

```javascript
function* generator() {
  yield 1;
  yield 2;
  return;
  yield 3;
}
const iterator = generator();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: undefined, done: true}
iterator.next(); // {value: undefined, done: true}
```

## .throw()

此方法是從 generator function 丟出一個 error，並結束，之後再使用`.next()`呼叫時則不會執行接下來的值

```javascript
function* generator() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    // 如果沒用return，回傳的done還會是false
    return `Error Message: ${error}`;
  }
}
const iterator = generator();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.throw("error"); // {value: 'Error Message: error', done: true}
iterator.next(); // {value: undefined, done: true}
```

也可以從函式裡面丟出一個錯誤

```javascript
function* generator() {
  try {
    yield 1;
    yield 2;
    throw new Error("Custom error");
    yield 3;
  } catch (error) {
    return error.message;
  }
}
const iterator = generator();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 'Custom error', done: true}
iterator.next(); // {value: undefined, done: true}
```

## for...of

使用`for...of`可以自動執行 generator function 產生的 iterator 物件，此方法不需要使用`.next()`

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
for (let value of generator()) {
  console.log(value);
}
/*
1
2
3
*/
```

## 費波那契數

費氏數列由 0 和 1 開始，之後的費波那契數就是由之前的兩數相加而得出，首幾個費波那契數是：1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610

```javascript
function* fibonacciSequence() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibonacciGenerator = fibonacciSequence();

for (let i = 0; i < 10; i++) {
  console.log(fibonacciGenerator.next().value);
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

## Reference

> [淺入淺出 Generator Function](https://denny.qollie.com/2016/05/08/es6-generator-func/)<br /> > [[JS] JavaScript Generator 的使用](https://pjchender.dev/javascript/js-generator/)
