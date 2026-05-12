---
sidebar_position: 11
sidebar_label: spec-kit
---

# GitHub Spec Kit

實現 SDD 方法論的完整工具組

## 安裝

### 必要套件(git, uv, node, ripgrep)

> 可以參考 [MacOS 開發環境建置](/docs/Other/other_macos_setup.md#homebrew) 來安裝必要的套件

### 安裝 specify-cli

```shell
$ uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

## specify CLI

### 環境檢查 check

確認目前環境上安裝的工具，僅參考用，最主要第一個 `Git version control` 有綠燈即可

```shell
$ specify check
```

### 初始化 init

為當前目錄建立一個 specify 專案，載入基礎的 sepc-kit 的檔案<br />
初始化時會依序執行：

1. 檢查必要工具
2. 選擇 AI 代理人工具 (非互動介面預設為 `copilot`)
3. 選擇腳本類型 (`ps` 或 `sh`)
4. 從 github 下載模板
5. 初始化新的 git 儲存庫(除非指定 `--no-git` 或目錄下已有儲存庫)

```shell
$ specify init --ai copilot --script sh .
```

- `--integration <Agent>` 或 `--ai`：指定使用建立初始模板用的 AI 代理工具，可輸入 copilot, gemini, cursor, codex
- `--script <sh | ps>`：強制指定腳本格式，Windows 預設為 `ps`，其餘為 `sh`
- `--ignore-agent-tools`：跳過對環境 AI 工具是否正確安裝的檢查，直接產出範本
- `--here` 或 `.`：在目前所在的資料夾直接初始化，而不是建立新的資料夾
- `--no-git`：跳過建立 Git 儲存庫，預設會執行 `git init`
- `--debug`：開啟除錯模式，顯示更詳細的執行日誌

### 版本資訊 version

確認版本與環境

```shell
$ specify version
```

### 當前目錄檢查 self

- check 檢查更新：確認本地安裝的 CLI 是否為最新版，僅唯讀
- upgrade 升級：目前預留（尚未實作）

### 插件管理 extension

可至 [SpecKit 擴充功能網站](https://speckit-community.github.io/extensions/all-extensions)來瀏覽

- list：已安裝的擴充功能
- add：新增擴充功能
- remove：移除擴充功能
- search：搜尋可用的擴充功能，但直接從網站瀏覽會更好
- info：顯示擴充功能詳細資訊
- update：更新擴充功能
- enable：開啟擴充功能
- disable：關閉擴充功能
- set-priority：當擴充功能有衝突時，此指令可以手動指定權重
- catalog：私有的擴充功能，可透過此指令來新增/切換不同的來源伺服器

### 預設集 preset

目前專案上比較難以用到

### 程式碼代理人 integration

管理現有的程式碼代理人(coding agent)，本身系統預設已夠用

### 工作流 workflow

目前專案上比較難以用到

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
$ Now I want you to go and audit the implementation plan and the implementation detail files. Read through it with an eye on determining whether or not there is a sequence of tasks that you need to be doing that are obvious from reading this. Because I don't know if there's enough here. For example, when I look at the core implementation, it would be useful to reference the appropriate places in the implementation details where it can find the information as it walks through each step in the core implementation or in the refinement.
```

:::note
現在，我希望你去審核執行計畫（implementation plan）和執行細節檔案（implementation detail files）。通讀這些內容，重點在於判斷是否能從中看出你必須執行的任務序列。因為我不確定目前的內容是否充足。例如，當我查看核心執行部分時，若能在逐步檢查核心執行或優化（refinement）的每個步驟時，對應到執行細節中可找到相關資訊的適當位置，將會非常有幫助。
:::

讓 AI 檢查一次有沒有過度設計的問題

## 如何更新

1. GitHub Spec-kit 的官方 repository
2. 從 Release 點擊最新版本
3. 輸入安裝指令

## Reference

> [規格驅動開發實戰：AI 時代的軟體開發新典範 - Will 保哥](https://learn.duotify.com/courses/sdd)
