---
sidebar_position: 3
description: Angular CLI
---

# Angular CLI

Angular 的命令列工具介面

## 安裝

使用`npm`來安裝

```powershell
npm install -g @angular/cli
```

## 命令

|           命令           |                              說明                               |
| :----------------------: | :-------------------------------------------------------------: |
|         ng help          |                     開啟 CLI 的各項指令說明                     |
| ng [command name] --help |                         該項指令的說明                          |
|  ng new [project-name]   |                    建立一個 angular 應用程式                    |
|         ng serve         |                       啟動 angular 並檢視                       |
|         ng build         |                 將 angular 程式打包到輸出目錄裡                 |
|         ng lint          |                用來檢查程式風格是否符合團隊規範                 |
|        ng update         | Angular 核心皆提供 Schematics 定義， 套件初始化或版本更新更方便 |
|       ng generate        |      產生 angular components, services, pipes, directives       |

### ng serve

serve 完成後馬上開啟頁面

```powershell
ng serve --open
```

指定你的 ip

```powershell
ng serve --host [your ip]
```

### ng generate

也可以寫成`ng g`

#### Component

```powershell
ng generate component [component-name]
ng g c [component-name]
```

## Reference

> [圖像 Angular 開發入門：打造高靈活度的網頁應用程式 (iT邦幫忙鐵人賽系列書)](https://www.tenlong.com.tw/products/9789864349821) <br />
> [CLI 概覽與指令參考手冊 - Angular](https://angular.tw/cli)
