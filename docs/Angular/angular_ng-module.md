---
sidebar_position: 2
description: Decorator
---

# Decorator(裝飾器)

## @ngModule

當建好一個 angular app，其最主要的`app.module`檔案預設配置是這樣

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

### imports

### exports

### providers

### bootstrap
