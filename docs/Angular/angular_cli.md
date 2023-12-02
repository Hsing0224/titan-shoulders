---
sidebar_position: 4
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

|         命令          |                         說明                         |
| :-------------------: | :--------------------------------------------------: |
|       ng --help       |                   開啟 CLI 的說明                    |
| ng new _project-name_ |              建立一個 angular 應用程式               |
|       ng serve        |                 啟動 angular 並檢視                  |
|       ng build        |           將 angular 程式打包到輸出目錄裡            |
|      ng generate      | 產生 angular components, services, pipes, directives |

### ng generate

也可以寫成`ng g`

#### Component

```powershell
ng generate component [component-name]
ng g c [component-name]
```

## Reference

> https://angular.tw/cli
