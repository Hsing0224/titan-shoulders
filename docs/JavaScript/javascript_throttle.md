---
sidebar_position: 36
description: throttle
---

# throttle

當觸發事件時，希望能夠在持續觸發事件的狀態中，不希望他一直頻繁的觸發，而是能夠一段時間再觸發一次。<br />
與 debounce 不同的是，debounce 是在整個過程中，只觸發一次。而 throttle 則是整個過程中，在某個時間區間就觸發一次。

## 當結束後才執行

```javascript
const throttle = (fn, delay = 1000) => {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};
```

## 可控制開始先觸發一次

整個作動開始時，會先執行一次。<br />
再利用 debounce 技巧，將觸發的程式一直持續到整個作動結束後再設定回參數值。讓下一次操作開始第一次又可以被觸發。

```javascript
const throttle = (fn, delay = 1000, leading = true) => {
  let timer = null;
  let isLeading = leading;
  let leadingFn = null;

  return (...args) => {
    clearTimeout(leadingFn);
    leadingFn = setTimeout(() => {
      isLeading = leading;
    }, delay);
    if (timer) return;

    if (isLeading) {
      fn(...args);
      isLeading = false;
    }

    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, delay);
  };
};
```

> [測試範例](https://codepen.io/starRandy/pen/OJBNaZQ)

## Reference

> [JavaScript - Debounce (防抖) 常見的面試問題 (Search Bar, API Request) (前端優化) - Wei Wei 前端教學](https://www.youtube.com/watch?v=vCLobXMROZg)
