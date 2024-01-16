---
sidebar_position: 13
description: I watch you
---

# IntersectionObserver

這個API主要是幫我們觀察，當我們觀察的對象是否與(預設為視窗的viewport)交疊，可以做後續的動作。 <br />
這對一個曾經在一個頁面，使用`offsetTop`來判斷目前使用者滑到哪個區塊，來幫側邊導覽列加上對應的狀態的人來說，實在太幸福了

:::note
因為他是建構式，需要使用`new`來產生IntersectionObserver實體
:::
```javascript
const observer = new IntersectionObserver((entries, observer)=>{
  console.log(entries); // [IntersectionObserverEntry]
  console.log(observer); // [object IntersectionObserver] 
}, {
  // options
  root: null,
  rootMargin: '0px',
  thresholds: 1.0
});
```

## options

### root
如果值為`null`，則為viewport，<br />
要監聽viewport之外的DOM
```javascript
{
  root: document.querySelector('.box')
}
```
:::note
.box自己本身需要有scroll，這樣才有效果
:::
:::caution
如果`root`為`null`，`rootMargin`無作用
:::

### rootMargin
與`margin`一樣可以寫成 1 到 4 個值來控制個邊界
:::note
可接受正值或負值，正值為擴大，負值為縮小
:::
:::danger
如果值為`0`，需要寫成`0px`
:::

### threshold
可設定一個值`0~1`，或是陣列`[0, 0.1, 0.5, 0.7, 1]`
:::note
這些數字代表的是容器的閾值，他會落在容器的多少百分比。<br />
以上述陣列為例，假設容器為 1000px ，那麼閾值分別落在 0px 、 100px 、 500px 、 700px 、 1000px。<br />
不過實際上並不是每個閾值都會觸發，而是在與 `root` 有**交疊**的情況下才會觸發。
:::


## methods

### observe
註冊對象給觀察者
```javascript
const items = document.querySelectorAll('.item');
items.forEach(item => observer.observe(item));
```

### unobserve
註銷觀察的某個對象，可再用`observe`來註冊觀察的對象
```javascript
observer.unobserve(item);
```
:::tip
註冊或註銷觀察，是傳入element
:::

### disconnect
將註冊的對象全部移除，但實體還存在，故可再用`observe`來註冊觀察的對象
```javascript
observer.disconnect();
```

## IntersectionObserverEntry

### target
觀察對象

:::tip
觀察對象的樣式如有 margin 或 padding ，會影響觸發的閾值。
:::

### isIntersecting
觀察對象是否已被觀察到 `true || false`

### boundingClientRect
觀察對象的資訊
```javascript
// {
//   width: ,
//   height: ,
//   top: ,
//   left: ,
//   right: ,
//   bottom: ,
//   x: ,
//   y: 
// }
```

### intersectionRect
觀察對象與`root`的交集資訊
```javascript
// {
//   width: ,
//   height: ,
//   top: ,
//   left: ,
//   right: ,
//   bottom: ,
//   x: ,
//   y: 
// }
```
:::tip
top + height = window.innerHeight
:::

### intersectionRatio
觀察對象在 `root` 的交疊比例

:::note
$$ intersectionRatio = \frac{intersectionRect's area}{target element's area} $$
觀察對象與 `root` 交疊的 `height` / 觀察對象整體的 `height`
:::

:::tip
如果要粗算 `intersectionRatio`，我們可以看所設定的 `threshold`，當觸發是在觀察對象的下半部時， `intersectionRatio` 為 1 - `intersectionRatio` 值
:::

### rootBounds
如果 `root` 為視窗(null)，這邊的值為 `null` <br />
當有指定 `root` 時，則是 `root` 的相關資訊。
```javascript
// {
//   width: ,
//   height: ,
//   top: ,
//   left: ,
//   right: ,
//   bottom: ,
//   x: ,
//   y: 
// }
```

## 額外思考
因`IntersectionObserver`是畫面進入視窗(我們這邊假定root:null)就觸發。<br />
就以往經驗是會在視窗的可能25%、30%等來做區塊的fadeIn。如果只單純使用`threshold`，這是依照觀察者自己進入視窗的百分比來觸發，也不太符合需求。<br />
經過思考後，我認為可以搭配`threshold`來讓觀察者在一個比例時觸發，我是以觀察對象的每10%做一個觸發，利用`IntersectionObserver`提供的method來判斷他是否已在視窗設定的觸發值，進而達成需求。
```javascript
const toggle = false; // 是否讓.show可以來回觸發
const triggerPoint = 0.25; // 畫面多少百分比來觸發
const thresholdPoint = length => {
  const thresholdArray = [];
  for (let i = 0; i <= length; i++) {
    thresholdArray.push(i / length);
  }
  return thresholdArray;
}

const callback = (entries) => {
  entries.forEach(entry => {
		// 觸發值 = 視窗高 * 比例
		const triggerValue = window.innerHeight * triggerPoint;
		// 如果交疊的高 大於等於 觸發值，或是觀察對象已完全進入畫面(高度不夠觸發值)
    if (!entry.target.classList.contains('show') && entry.intersectionRect.height >= triggerValue || entry.intersectionRatio === 1) {
			entry.target.classList.add('show');
			if (toggle === false) {
				observer.unobserve(entry.target);
			}
    } else if (toggle) {
      entry.target.classList.remove('show');
    }
  })
};
const options = {
  threshold: thresholdPoint(10)
};

const observer = new IntersectionObserver(callback, options);
```

## Reference
> [MaxLeeBK - 那些被忽略但很好用的 Web API / IntersectionObserver](https://ithelp.ithome.com.tw/articles/10279046)<br />
> [MDN - Intersection Observer API](hhttps://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)