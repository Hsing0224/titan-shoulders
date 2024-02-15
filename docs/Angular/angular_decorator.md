---
sidebar_position: 3
description: Decorator
---

# Decorator(裝飾器)
`Angular` 用來定義 `Class` 的各種設定

## @ngModule

當建好一個 angular app，其最主要的 `app.module` 檔案預設配置是這樣

```typescript app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### declarations

屬於該模組的一組元件(components)、命令(directives)或管道(pipes)。<br />
在 Angular 裡，都需要宣告在特定且唯一的模組內。這個屬性是用來定義該模組內擁有的元件清單

### imports

把其他模組匯入至該模組使用

### exports

定義模組內哪些元件可以對外公開給其他模組使用。<br />
另外也可以指定其他模組，當匯入該模組時，也可以使用此屬性指定的元件

### providers

定義模組內的各種令牌(token)，也方便模組依照不同狀況而可以做不同的替換

### bootstrap

啟動時的根元件，指定的元件會在程式啟動後，替換掉 index.html 的`<app-root>`

### BrowserModule & CommonModule

BrowserModule 提供了啟動和執行瀏覽器應用時必須的服務(也包含 CommonModule)，只適用於根元素。<br />
CommonModule 包含通用指令(ngIf、ngFor)
