---
sidebar_position: 12
description: lifecycle
---

# 生命週期

| 執行順序 |        初始化         |       變更檢測        |   銷毀    |
| :------: | :-------------------: | :-------------------: | :-------: |
|    1     |      ngOnChanges      |      ngOnChanges      | ngDestroy |
|    2     |       ngOnInit        |       ngDoCheck       |           |
|    3     |       ngDoCheck       | ngAfterContentChecked |           |
|    4     |  ngAfterContentInit   |  ngAfterViewChecked   |           |
|    5     | ngAfterContentChecked |      afterRender      |           |
|    6     |    ngAfterViewInit    |                       |           |
|    7     |  ngAfterViewChecked   |                       |           |
|    8     |    afterNextRender    |                       |           |

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
- 當 `@Input` 的參數有變更時

### parameter

`changes: SimpleChanges`

```typescript
class ExampleClass {
  @Input age: number;
  ngOnChanges(changes: SimpleChanges) {
    console.log(`現在的數值為 ${changes.age.currentValue}`);
    console.log(`第一次變更嗎： ${changes.age.firstChange}`); // 初始化為 true
    console.log(`前一次的數值為： ${changes.age.previousValue}`);

    if (changes["age"]) {
      // 當變更的 key 為 age 時觸發
    }
  }
}
```

:::caution
當 `@Input()` 傳入為 call by reference 而非 call by value 時，當裡面的值做變更，`ngOnChanges` 則無法去檢測到變更。
故使用 call by value ，直接將值傳入會比較理想。但如果必須使用 call by reference 方式傳入，則可以將傳入的　 array 或 object，拷貝一個新的出來傳入。讓參考位置不同，觸發變更檢測。

```TypeScript
changeSize(value: number): void {
  this.font.size += value;
  this.font = {...this.font}; // 將 font 賦予一個新的參考位置
}
```

:::

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

```markdown
:::caution
這兩個 hook 在 angular 16 以上才可以使用。
:::
```

### afterNextRender

初始化時會執行。<br />
放在 `constructor` 內，但會在 `ngAfterViewChecked` 後才被呼叫。<br />
與 `afterRender` 執行的先後順序為在 `constructor` 內的先後順序。

### afterRender

在 DOM 有被改變時觸發。<br />
順序在 `ngAfterViewChecked` 之後會被呼叫。

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

## Reference

> [Ray - 希望是最好懂的 Angular 生命週期介紹](https://lt1stsolomid.medium.com/%E5%B8%8C%E6%9C%9B%E6%98%AF%E6%9C%80%E8%A9%B3%E7%B4%B0%E7%9A%84-angular-%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F%E6%96%87%E7%AB%A0-27da6e8b33a9) <br /> > [圖像 Angular 開發入門：打造高靈活度的網頁應用程式 (iT 邦幫忙鐵人賽系列書)](https://www.tenlong.com.tw/products/9789864349821)
