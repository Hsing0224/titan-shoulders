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
當有事件發生時，這些事件都會被放到佇列裡。而事件循環會不斷的檢查佇列中是否有待處理的事件。

### 單一執行緒 (single-threaded)
JavaScript 是單一執行緒，顧名思義就是一個時間點只能做一件事。

### 堆疊 (stack)
1. 後進先出 (Last In, First Out，LIFO)
2. 在程式執行時，堆疊也用來追蹤函式的呼叫和返回。<br>
每次呼叫一個函式，該函式會被堆疊到最頂端；當執行完畢時，該函式會從堆疊中彈出。

### 佇列 (Queue)
1. 先進先出 (First In, First Out，FIFO)
2. 管理非同步任務。例如： setTimeout 、 ajax

### Web APIs
主要任務有：
1. 發送網路請求
2. 定時器
3. 事件處理

### 阻塞  (blocking)
當JavaScript在執行程式碼時，瀏覽器會停止渲染網頁，直到事件結束才會繼續。<br />
但萬一程式碼等待時間過長造成阻塞，造成網頁體驗不佳。

## Reference
[六角學院 - JavaScript 心機文法篇 - JS 面試常見核心知識](https://www.youtube.com/watch?v=8U5kbb1SvJg)
[MDN - 語句和聲明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
[MDN - 運算子優先順序](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
[loupe - event loop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
[JavaScript Event Loop](https://www.javascripttutorial.net/javascript-event-loop/)