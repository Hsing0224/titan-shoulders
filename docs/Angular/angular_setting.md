---
sidebar_position: 2
description: Angular JSON
---

# angular.json

在 angular 專案裡都有一個 angular.json 檔案。可依照需求去設定

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

## Reference

[凱哥 - angular 入門教學](https://www.youtube.com/playlist?list=PLneJIGUTIItu6QrNxEBAUgTXZaHIpO8D9)
[官方文件](https://angular.io/guide/workspace-config)
