---
sidebar_position: 7
description: Form
---

# 表單

`Angular`所提供的表單，可分為兩種

|              |       響應式       |     範本驅動     |
| :----------- | :----------------: | :--------------: |
| 建立表單模型 | 在元件的.ts 中建立 |    由指令建立    |
| 資料模型     |  結構化和不可變的  | 非結構化和可變的 |
| 資料流       |        同步        |      非同步      |
| 表單驗證     |        函式        |       指令       |

## 範本驅動

利用`ngModel`來建立和操作底層的物件模型，對於較簡單的表單需求，可用範本驅動來達成。

```html title="html"
<input type="text" name="name" [(ngModel)]="name" />
```

```typescript title="typescript"
name = "";
```

除了雙向繫結到`ngModel`外，也可用表單標籤中設定範本參考變數

```html
<input type="text" name="name" #name="ngModel" ngModel />
```

:::tip
傳入的型別為`NgModel`
:::

:::note
可以用`@ViewChild`，型別指定為`NgModel`來使用
:::

### ngForm

可使用 form 標籤，利用 submit 事件來獲取 form 的資料

```html title="html"
<form #form="ngForm" (submit)="onSubmit(form)">
  姓名：<input type="text" name="name" ngModel /><br />
  密碼：<input type="password" name="password" ngModel />
  <button type="reset">reset</button>
  <button type="submit">submit</button>
</form>
```

```typescript title="typescript"
onSubmit(event: NgForm) {
  console.log(event.value);
}
/*
{
  name: 'test',
  password: 'password123'
}
*/
```

:::note
object 裡的 key 為 input 的 name 這個 attribute
:::

### ngModelGroup

可以利用`ngModelGroup`來將資料做區分

```html title="html"
<form #form="ngForm" (submit)="onSubmit(form)">
  <ng-container ngModelGroup="user">
    姓名：<input type="text" name="name" ngModel /><br />
    密碼：<input type="password" name="password" ngModel /><br />
  </ng-container>
  <ng-container ngModelGroup="company">
    公司寶號：<input type="text" name="id" ngModel /><br />
    公司名稱：<input type="text" name="name" ngModel /><br />
  </ng-container>
  <button type="reset">reset</button>
  <button type="submit">submit</button>
</form>
```

```typescript
/*
{
  user: {
    name: 'test',
    password: 'password123'
  },
  company: {
    id: 000,
    name: '公司名'
  }
}
*/
```

### 狀態

Angular 提供了幾個方法來表示目前表單的狀態

| class name    | property         | 說明             |
| :------------ | :--------------- | :--------------- |
| .ng-touched   | touched          | 曾點選過         |
| .ng-untouched | untouched        | 未曾點選過       |
| .ng-dirty     | dirty            | 曾修改過         |
| .ng-pristine  | pristine         | 未曾修改過       |
| .ng-valid     | status="VALID"   | 通過驗證         |
| .ng-invalid   | status="INVALID" | 未通過驗證       |
| .ng-submitted | submitted        | 表單是否被提交過 |

:::note
也可利用 angular 的標籤來檢視狀態
:::

```html
<form #form="ngForm">
  <input type="text" name="name" #name="ngModel" ngModel /><br />
  <input type="password" name="password" #password="ngModel" ngModel />
</form>
表單狀態：<br />
曾被點選 {{ form.touched }}<br />
未曾被點選 {{ form.untouched }}
<hr />
#name狀態：<br />
曾被點選 {{ name.touched }}<br />
未曾被點選 {{ name.untouched }}
```

### 必填欄位

可使用`required`這個 attribute 來讓表單知道是必填欄位。<br />
並且可用 `.hasError('required')`，來顯示未填的錯誤訊息

```html
<form #form="ngForm">
  <input type="text" name="name" #name="ngModel" ngModel required /><br />
  <ng-container *ngIf="name.touched">
    <div *ngIf="name.hasError('required')">此欄位必填</div>
  </ng-container>
  <input type="password" name="password" #password="ngModel" ngModel />
</form>
```

### 長度限制

可使用 `minlength` 或 `maxlength` 驗證所輸入的長度。<br />
並且可用 `.hasError('minlength || maxlength')` 取得相關資訊

```javascript title=".errors"
{
  "minlength": {
    "requiredLength": 8, // 所需的長度
    "actualLength": 3 // 當前輸入的長度
  }
}
```

### 數值範圍限制

可使用 `min` 或 `max` 驗證所輸入的長度。<br />
並且可用 `.hasError('min || max')` 取得相關資訊

```javascript title=".errors"
{
  "min": {
    "min": 8, // 所需的數值範圍
    "actual": 1 // 當前輸入的值
  }
}
```

### email

可使用 `email` 驗證所輸入的 email 是否合乎格式。<br />
並且可用 `.hasError('email')` 取得相關資訊

```html
<form #form="ngForm">
  <input type="text" name="name" #name="ngModel" ngModel email /><br />
  <ng-container *ngIf="name.touched">
    <div *ngIf="name.hasError('email')">email需符合格式</div>
  </ng-container>
  <input type="password" name="password" #password="ngModel" ngModel />
</form>
```

### 利用正規化表示式驗證

利用 `pattern` 這個 attribute 來輸入相關的正規表示式做驗證

```html
<form #form="ngForm">
  <input type="text" name="name" #name="ngModel" ngModel /><br />
  <input
    type="password"
    name="password"
    #password="ngModel"
    ngModel
    pattern="^[a-zA-Z]*"
  />
  <ng-container *ngIf="password.touched">
    <div *ngIf="password.hasError('pattern')">密碼只接受英文字</div>
  </ng-container>
</form>
```

```javascript title=".errors"
{
  "pattern": {
    "requiredPattern": "^[a-zA-Z]*$", // pattern
    "actualValue": "123" // 輸入的值
  }
}
```

## 響應式

提供對底層表單物件直接存取。相較範本驅動，他的可擴充性、複用性、測試性都較高。<br />
響應式表單會直接建立 `FromControl` 、 `FromGroup` 、 `FromArray` 等表單基礎類別。再搭配 `RxJs` 來監控和操作使用者輸入的資料。<br />
而在**模組裡需要匯入 `ReactiveFormsModule` 才能使用響應式表單**

### FormControl

```typescript
name = new FormControl();
```

:::danger TODO
TODO 未來有碰到自訂表單驗證再補上ＸＤ
:::

## Reference

> [官方文件](https://angular.tw/guide/forms-overview)
