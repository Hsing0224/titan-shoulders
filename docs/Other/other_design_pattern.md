---
sidebar_position: 2
---

# Design Pattern & Design Principle

## 設計原則 (Design Principle)

在撰寫程式可參考的大方向，利於未來維護。

### YNGNI (You aren't gonna need it)

- 專注實現目前專案需求的功能
- 不要過早優化程式碼
- 不要先替未來預設立場而撰寫目前用不到的功能

### SOLID

五個原則所組成的縮寫字，原則跟原則之間彼此有關係，在實作和應用上是有關的。

#### 單一職責原則(Single Responsibility Principle)

#### 開放封閉原則(Open Closed Principle)

#### 介面隔離原則(Interface Segregation Principle)

#### 里氏替換原則(Liskov Substitution Principle)

#### 依賴反轉原則(Dependency Inversion Principle)

### KISS (Keep It Simple, Stupid)

核心觀念為**簡單即是美**<br />強調簡單，避免不必要的複雜性。

### DRY (Don't repeat yourself)

又稱 OAOO(Once and only once)，過度的抽象化和可讀性是互相衝突的，所以在遵循 DRY 原則，需要拿捏遵循的比例。<br />
避免重複的原則，可分為四個部分。

#### 強加的重複(Imposed duplication)

開發者認為是開發環境需要的、被強迫需要的；像是不必要的註解或是開發文件。
如果可以在函式名稱就可以知道這個函式的職責，就不需要特別的註解。<br />
或是註解寫完但又修改了程式的邏輯而沒更新註解。

#### 無意的重複(inadvertent duplication)

一般是會發生在開發者沒有意識到內容的重複，通常發生在邏輯設計上的內容，<br />舉例來說就是當函式可從 A 參數就可以推導到 B 參數，那 B 參數的設置就是重複的。

#### 懶惰的重複(impatient duplication)

發生在為了節省時間而複製程式碼，造成程式碼上的重複。

#### 開發者間的重複(inter-developer duplication)

在多人協作開發時，同個專案時常會有共同的需求，而沒協調好或是對於專案架構不清楚，導致寫了重複或類似的功能。

### WET (Write everything twice、We enjoy typing)

讓開發者不要過度的追求 DRY 原則而發展出的理念。<br />
它不是鼓勵可以在撰寫程式碼時無限的重複，而是要在 DRY 和 WET 間取得平衡。

### ROT (Rule of Three)

此設計原則試圖為 DRY 和 WET 之間找到一個平衡點。

1. 第一次直接寫。
2. 第二次遇到差不多的邏輯，可以複製且稍作修改即可。
3. 當遇到第三次差不多的邏輯時，就可以考慮重構。

### LoD (Law of Demeter)

迪米特法則，又被稱為最少知識原則 LKP (Least Knowledge Principle)<br />
主要強調**低耦合**，減少程式間相互依賴，以提高維護性和穩定性。

1. 只與直接相關的程式做耦合
2. 限制鏈結的長度
3. 關注局部的知識

### CRP (Common Reuse Principle)

共同重用原則<br />
強調經常一起被使用的類別需打包在一起。避免把不常使用也一起包一起而衍伸載入引入了不必要的依賴。

### CCP (Common Closure Principle)

共同封閉原則<br />
強調對於同一種類型的變更，應該只影響同一個模組。

### REP (Reuse/Release Equivalence Principle)

重用/釋放等價原則<br />
當使用的元件都是需要先發布過的，有屬於自己的文件和版本號。利於未來的追蹤和維護。

組合優於繼承

### CUPID

旨在提升程式碼品質和開發者體驗的設計原則，強調了程式碼的可組合性、遵循 Unix 哲學、可預測性、符合語言慣例以及與領域模型的緊密結合。

#### Composable

易於理解。<br />
要有好的程式架構及命名之外，還包含清楚的文件、註解，和保持程式碼風格的一致性。

#### Unix philosophy

Unix 哲學<br />
做好一件事、將複雜任務拆解成一個個小部分。

#### Predictable

可預測性<br />
當輸入參數時，可以先預測到相同的結果

#### Idiomatic

符合語言習慣<br />
每種語言都有內建可使用的函式，可讓程式碼維持可讀性。

#### Domain-based

基於領域<br />
程式開發應貼近業務需求，直接解決業務上的問題。避免過多的抽象和複雜性。

### 關注點分離

### 高內聚＆低耦合

## 設計模式 (Design Pattern)

比較偏實作面，當要做某些事情可以參考某些方法。當遇到問題時，可以從這些方法中找到解決方案。

### 建立範例

物件的建立

### 結構範例

物件與物件的合作關係

### 行為範例

物件與物件的傳遞關係

## reference

> [Alex 宅幹嘛 - 淺談 Javascript 設計模式](https://www.youtube.com/watch?v=2wbX-ZoetF0&list=PLEfh-m_KG4dbCJl3uks6DzLzdkOdmiZpT) <br /> [璇之又璇的網路世界 - YAGNI 原則](https://shawnlin0201.github.io/Methodology/Methodology-003-YAGNI-principle/) <br /> [CUPID—for joyful coding](https://dannorth.net/cupid-for-joyful-coding/) <br /> [元件如何正確歸類 ? | 元件內聚性三大原則 : REP、CCP、CRP - Enoxs](https://devs.tw/post/438)
