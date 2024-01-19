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

## Event loop (事件循環)
[Event Loop 的視覺化呈現](http://latentflip.com/loupe/)

Event Loop 的任務是如果 Stack 是空的，就把 Queue 中的 frame 放到 Stack 中，直到 Stack 和 Queue 都是空的為止。

> 當頁面載入，JavaScript Runtime 時，一個程式碼片段視為一個 frame，會先放入 Call Stack ，如果是 XMLHttpRequest、Timer、Event Listener，則這些 frame 會從 Stack 先移到 Web APIs ，並繼續執行 Stack 裡的程式碼片段。<br />
> 然而如果在 Stack 裡的程式碼因為等待時間過久，則會造成阻塞。<br />
> Stack 清空後， Event loop 會將 Web APIs 處理完，放入 Queue 的 frame 移至 Stack 裡去執行。

### 單一執行緒 (single-threaded)
JavaScript 是單一執行緒，顧名思義就是一個時間點只能做一件事。

### 堆疊 (Stack)
1. 後進先出 (Last In, First Out，LIFO)
2. 在程式執行時，堆疊也用來追蹤函式的呼叫和返回。<br />
每次呼叫一個函式，該函式會被堆疊到最頂端；當執行完畢時，該函式會從堆疊中彈出。

### 佇列 (Queue)
1. 先進先出 (First In, First Out，FIFO)
2. 管理非同步任務。例如： setTimeout 、 ajax

### Web APIs
當 Web APIs 有事件完成後，則會將 frame 移至 Queue。<br />
主要任務有：
1. 發送網路請求
2. 定時器
3. 事件處理

### 阻塞 (blocking)
阻塞通常發生在**同步**的操作上。<br />
當 JavaScript Runtime 時，會執行在 Stack 裡的程式碼片段。<br />
而萬一程式碼片段執行時間過久，其他任務無法被執行，進而造成瀏覽器停止渲染，使用者感受到卡頓或凍結。造成瀏覽體驗不佳。

## Reference
[六角學院 - JavaScript 心機文法篇 - JS 面試常見核心知識](https://www.youtube.com/watch?v=8U5kbb1SvJg)
[MDN - 語句和聲明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
[MDN - 運算子優先順序](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
[loupe - event loop](http://latentflip.com/loupe/)
[JavaScript Event Loop](https://www.javascripttutorial.net/javascript-event-loop/)