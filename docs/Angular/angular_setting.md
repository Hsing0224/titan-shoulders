---
sidebar_position: 10
description: Angular 專案定義檔
---

# angular.json

在 angular 專案裡都有一個 angular.json 檔案。可依照需求去設定

## $schema / version

這兩個屬性用來描述整個 angular.json 檔案所使用的配置定義及版本

## newProjectRoot / projects

Angular 裡，一個工作空間 ( Workspace ) 可以新增一至多個專案。<br />
`newProjectRoot` 預設為 `projects`。<br />
當要在一個 angular 裡多個專案

```json
"projects": {
  "project1": {
    // settings
  },
  "project2": {
    // settings
  },
  "project3": {
    // settings
  },
}
```

### defaultProject

用來描述整個工作空間預設的專案名稱，當執行 `Angular CLI`，沒有指定專案，就會依照這裡設定的專案為執行對象。

## prefix

預設為 `app` ，其設定是將 component、service 等前綴改為自己想要的

## stylePreprocessorOptions

在 scss 時，可以利用 stylePreprocessorOptions 來載入全域樣式

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "src/style-paths"
  ]
}
```

## assets

將靜態資源載入到 angular 專案中，也可以使用 glob 來將外部資源載入

```json
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/some-package/images",
    "output": "/some-package/"
  }
]
```

## 環境設定檔

因應不同的開發階段，執行應用程式的環境常會分開。此時就會將這種設定加入到 `environment` 目錄內，讓一個環境有一個對應的設定檔。<br />
假設 `environment.prod.ts`為正式環境的設定檔，當執行 `ng build --configuration production` 時，就會將檔案的變數值取代 `environment.ts` 內的變數值。
(TODO 實例待補充)

## Reference

> [angular 入門教學 - 凱哥寫程式](https://www.youtube.com/playlist?list=PLneJIGUTIItu6QrNxEBAUgTXZaHIpO8D9) <br />
> [Angular workspace configuration - Angular](https://angular.io/guide/workspace-config) <br />
> [圖像 Angular 開發入門：打造高靈活度的網頁應用程式 (iT邦幫忙鐵人賽系列書)](https://www.tenlong.com.tw/products/9789864349821)
