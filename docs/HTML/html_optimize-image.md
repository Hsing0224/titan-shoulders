---
sidebar_position: 91
description: 圖片最佳化
---

# 圖片最佳化
在網頁裡，圖片往往是佔最多資源；如何在網頁上給予合適的圖片，就成為需要好好研究的課題。

## 圖片的類型
了解每個圖片的特性，再依照需求選擇較合適的圖片類型。

### GIF
支援動畫和透明度，但色彩深度低，只有 256 色

### JPG
不支援透明度，色彩廣泛之外也有較小的檔案大小。<br />
適合較複雜但無透明度的圖片。

### PNG
支援透明度，但檔案相較於 `JPG` 來說大

### WebP
支援透明度，檔案大小與壓縮過的 `JPG` ，差不多。但也不一定優於 `JPG`

### SVG
向量圖片。不會有失真的問題，適用於簡單的圖形。<br />
圖片的 `SVG` 是無法用 `CSS` 改變顏色，但如果是用 `symbol` 方式是可以達成需求。

### Base64
一種編碼的方式。可以利用打包工具或線上轉換服務將檔案較小的圖片以 `Base64` 方式儲存，可以得到更小的檔案大小。<br />
雖然可以減少 `HTTP Request` ，但無法被瀏覽器快取。

### AVIF
支援透明度，且有更好的壓縮率和色彩表現，但需注意到瀏覽器的支援度。

## 讓瀏覽器自己選擇合適的圖片

### 使用 picture 和 source
`<picture>` 搭配 `<source>` ，瀏覽器會從第一個開始檢查，當有符合就會顯示，如果都沒有就會讀取預設的 `<img>`。

#### media
類似 `CSS` 設定 `media query` 做法，讓瀏覽器依設定抓取對應的圖片。

#### srcset
可使用 `,` 設定多組。<br />
資料組成為
1. 圖片位置
2. 可選填
   - 依寬度 (width descriptor)。 ex: `300w`
   - 依像素密度 (pixel density descriptor)。 ex: `2x`

#### 範例
```html
<picture>
	<source
	  media="(min-width: 1024px)"
		srcset="
			large.avif,
			large_2x.avif 2x,
			large_3x.avif 3x
		"
	/>
	<source
	  media="(min-width: 1024px)"
		srcset="
			large.webp,
			large_2x.webp 2x,
			large_3x.webp 3x
		"
	/>
	<source
	  media="(min-width: 680px)" 
		srcset="
			medium.webp,
			medium_2x.webp 2x,
			medium_3x.webp 3x
		"
	/>
	<source
	  media="(max-width: 679px)"
		srcset="
			small.webp,
			small_2x.webp 2x,
			small_3x.webp 3x
		"
	/>
	<img src="default.jpg" alt="" />
</picture>
```

當裝置的 viewport 落在對應的 `media` 後，會再依 `srcset` 去讀取對應的圖片(如果有設定的話)。

[測試範例](https://codepen.io/starRandy/full/abMeLeE)

### 使用 img

#### srcset
設定與 `source` 的設定一樣。

#### sizes
類似在 `HTML` 上寫 `CSS` ，利用 `sizes` 指定哪個尺寸下的圖片尺寸為多少。

:::note
經測試 `srcset` 搭配 `sizes` ，在行動裝置下才會有作用。<br />
而當最大尺寸的圖片有載入後，就會使用最大尺寸圖片來呈現。
:::

[測試範例](https://codepen.io/starRandy/full/PogYwGW)