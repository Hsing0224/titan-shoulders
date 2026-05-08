---
sidebar_position: 11
sidebar_label: spec-kit
---

# GitHub Spec Kit

實現 SDD 方法論的完整工具組

## 流程

### constitution

訂定憲法、準則。<br />
為**專案不可違背的原則**。

- 參與角色：團隊成員
- 指令： `/speckit.constitution`
- 產出：constitution.md

可以用 AI 下指令來一直新增/更新憲法。

### specify

撰寫清晰可測的規格，定義使用者故事(情境)<br />**寫不寫的對，是開發者的問題**

- 參與角色：PM/SA
- 指令： `/speckit.specify`
- 輸出：spec.md + requirements 檢查清單

### clarify (可選)

釐清模糊處(最多 5 題)，補足缺漏，透過 AI 對開發者靈魂拷問，幫助思考且釐清模糊的地方

- 指令：`/speckit.clarify`
- 輸出：更新 spec.md 含澄清紀錄

### plan

給予技術規格與架構生成。可迭代使用。

- 參與角色：PG
- 指令： `/speckit.plan`
- 輸出：plan.md + data-model.md + research.md + quickstart.md + contracts/

### checklist (可選)

多領域並行檢查

- 指令： `/speckit.checklist`

### tasks

解析為可具體執行的任務，將任務轉換成任務清單

- 參與角色：PG
- 指令： `/speckit.tasks`
- 產出：tasks.md

### analyze (可選)

- 指令：`/speckit.analyze`
- 輸出：讀取 spec.md, plan.md, task.md 來產出分析報告

:::note
可以使用 `/speckit.analyze` 將分析報告存成 `analyze-01.md`。
將分析報告存起來
:::

### implement

當確認無誤時，依照任務實作，驗證成果

- 參與角色：團隊成員
- 指令： `/speckit.implement`
- 產出：code

:::note
如果產出不是你要的，把程式碼砍掉，修規格，修技術架構
:::

:::tip
`speckit.clarify` 和 `/speckit.analyze` 是用來幫助規格一致性
:::

## 適用於 Spec Kit 的開發階段

### 全新專案 (Greenfield)

非常適合 SDD 來實作

### 現有專案 (Brownfield)

執行上較為困難，需要先寫出完整的 SDD，很難讓 AI 去理解整個程式碼的意圖

### 創意探索

將 SDD 用於平行開發，產出不同的架構和框架

:::note
同規格每次跑不一定一樣
只要符合規格就是好規格
:::

## 解決過度設計

可以在 `/speckit.plan` 之前，先執行

```shell
Now I want you to go and audit the implementation plan and the implementation detail files. Read through it with an eye on determining whether or not there is a sequence of tasks that you need to be doing that are obvious from reading this. Because I don't know if there's enough here. For example, when I look at the core implementation, it would be useful to reference the appropriate places in the implementation details where it can find the information as it walks through each step in the core implementation or in the refinement.
```

:::note
現在，我希望你去審核執行計畫（implementation plan）和執行細節檔案（implementation detail files）。通讀這些內容，重點在於判斷是否能從中看出你必須執行的任務序列。因為我不確定目前的內容是否充足。例如，當我查看核心執行部分時，若能在逐步檢查核心執行或優化（refinement）的每個步驟時，對應到執行細節中可找到相關資訊的適當位置，將會非常有幫助。
:::

讓 AI 檢查一次有沒有過度設計的問題

## 如何更新

1. GitHub Spec-kit 的官方 repository
2. 從 Release 點擊最新版本
3. 輸入安裝指令
