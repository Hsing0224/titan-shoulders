---
sidebar_position: 35
description: debounce
---

# debounce

網站中的一些事件，像是 resize、scroll、input、mouse event。這類使用者在操作時，事件會一直發出 request，而實際狀況只需要在某個時間點才呼叫即可，就可使用 debounce 技巧，來避免過多的 request 讓網站效能造成不必要的浪費。

## 當結束後才執行

```javascript
function debounce(fn, delay = 1000) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
```

## 可控制要先執行一次，或者等結束後再執行

```javascript
function debounce(fn, delay = 1000, immediate = false) {
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;
    const later = () => {
      timer = null;
      if (!immediate) {
        fn.apply(this, args);
      }
    };

    clearTimeout(timer);
    timer = setTimeout(later, delay);

    if (callNow) {
      fn.apply(this, args);
    }
  };
}
```

> [測試範例](https://codepen.io/starRandy/pen/OJBNaZQ)

## Reference

> [JavaScript - Debounce (防抖) 常見的面試問題 (Search Bar, API Request) (前端優化) - Wei Wei 前端教學](https://www.youtube.com/watch?v=vCLobXMROZg)
