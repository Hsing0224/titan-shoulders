---
sidebar_position: 10
description: 關於 CSS 的那些觀念
---

# CSS 的那些觀念

## element 最外層的定位

當有一個 element 設定了 `position: absolute;`。其父層到 `<html>` 都沒有設定到 position(static 除外)，該 element 最終會定位於**視窗**。

> [測試頁面](https://codepen.io/starRandy/pen/MWxRbOO)

## z-index 戰爭

開發時有些第三方套件的 z-index 設定太高，導致自己本身設定的 z-index 要設定更高才可以蓋過。<br />
通常要先檢查第三方套件的 z-index 是多少，再去設定比它還高的數值即可，有些可能就是一直加上 9 來看看哪個位數可以蓋贏。<br />
實在太殘酷了這場 z-index 戰爭。我們直接使用這顆名為 `infinity` 的核彈來結束這回合吧

```css
.box {
	z-index: calc(infinity);
}
```

## Reference
> [Playing with Infinity in CSS - codersblock](https://codersblock.com/blog/playing-with-infinity-in-css/)