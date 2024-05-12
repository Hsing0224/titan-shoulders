---
sidebar_position: 6
description: lifecycle
---

# 生命週期

| 執行順序 |        初始化         |       變更檢測        |   銷毀    |
| :------: | :-------------------: | :-------------------: | :-------: |
|    1     |      ngOnChanges      |      ngOnChanges      | ngDestroy |
|    2     |       ngOnInit        |       ngDoCheck       |           |
|    3     |       ngDoCheck       | ngAfterContentChecked |           |
|    4     |  ngAfterContentInit   |  ngAfterViewChecked   |           |
|    5     | ngAfterContentChecked |                       |           |
|    6     |    ngAfterViewInit    |                       |           |
|    7     |  ngAfterViewChecked   |                       |           |

可以在 class 使用 `implements` 來讓該 class 需實作這個 hook ，否則會拋出錯誤。

```typescript
class ExampleClass implements OnInit, DoCheck {
  ngOnInit() {}
  ngDoCheck() {}
}
```

## constructor

初始化時會被呼叫。<br />在 `ngOnChanges` 被呼叫，不過如果經由外部傳入的參數，在這階段是抓取不到的。

## ngOnChanges

### 呼叫時機

- 在 ngOnInit 前會被呼叫，當沒有參數帶入時會略過
- 當外部所帶入的參數有變更時

### parameter

`changes: SimpleChanges`

```typescript
class ExampleClass {
  @Input value: number;
  ngOnChanges(changes: SimpleChanges) {
    console.log(`現在的數值為 ${changes.value.currentValue}`);
    console.log(`第一次變更嗎： ${changes.value.firstChange}`); // 初始化為 true
    console.log(`前一次的數值為： ${changes.value.previousValue}`);
  }
}
```

## ngOnInit

生命週期中只會被呼叫一次。<br />
雖然與 `constructor` 一樣都是初始化作業，如果在元件本身的變數，兩者都可以順利的抓到值，但如果是由外部所加入， `ngOnInit` 才有辦法順利抓到值。

## ngDoCheck

當如果外部是傳物件，則傳的是參考位置 (reference) ，此時如果只修改到物件裡面的值的話，lifecycle 是不會呼叫 `ngOnChanges`。<br />
此時可以使用 `ngDoCheck` ，在每次變更時可以取得變更的值。
:::caution
因 `ngDoCheck` 在初始化及每次變更都會被呼叫，使用上要避免程式執行過多而耗損掉資源。
:::

## ngAfterContentInit

`ng-content` ，內容完成嵌套後呼叫。

## ngAfterContentChecked

在 `ng-content` ，內容變更時會在 `doCheck()` 後觸發。

## ngAfterViewInit

視圖完成後呼叫。

## ngAfterViewChecked

視圖更新的時候會被呼叫。值的變更、setTimeout、call API、call Service。

## ngOnDestroy

當該組件被銷毀時呼叫。

## 只在瀏覽器端執行的 hook

### afterRender

### afterNextRender

## 思考

### 一個父元件包一個子元件，生命週期為何？

測試為兩個 component ，在塞入各個 hook 。<br />
其狀態為：

```powershell
parent ngOnInit
parent ngDoCheck
parent ngAfterContentInit
parent ngAfterContentChecked
child ngOnChanges
child ngOnInit
child ngDoCheck
child ngAfterContentInit
child ngAfterContentChecked
child ngAfterViewInit
child ngAfterViewChecked
parent ngAfterViewInit
parent ngAfterViewChecked
```

## reference

> [Ray - 希望是最好懂的 Angular 生命週期介紹](https://lt1stsolomid.medium.com/%E5%B8%8C%E6%9C%9B%E6%98%AF%E6%9C%80%E8%A9%B3%E7%B4%B0%E7%9A%84-angular-%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F%E6%96%87%E7%AB%A0-27da6e8b33a9)
