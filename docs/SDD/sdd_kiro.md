---
sidebar_position: 12
sidebar_label: Kiro
---

# AWS Kiro

AWS 開發的一套 IDE，用來實現 SDD 的開發工具

## 流程

### Steering (指導) 文件

會讀取各階層路徑下的指導文件

- 工作區：`.kiro/steering`
- 全域：`~/.kiro/steering`

### 讀取

在文件上方宣告此文件哪時候被抓取

```yaml
---
inclusion: always
---
```

```yaml
---
inclusion: fileMatch
fileMatchPattern: "components/**/*.ts"
---
```

```yaml
---
inclusion: manual
---
```

### 產生指導文件

產出會像例如 Claude Code, Gemini CLI, Codex CLI 的 `/init` 斜線命令的基礎文件，會拆分三個文件：

- product: 專案描述
- structure: 目錄結構
- tech: 技術、框架

## Spec 模式

### 需求

使用 EARS 標記法撰寫的使用者故事及驗收標準

- 使用自然語言描述功能、需求、傳入 PRD 文件
- 輸出：requirements.md

> EARS 描述範例：<br />
> `當`任務截止時間前 30 分鐘，`且`系統檢測到用戶尚未執行該任務時，系統`應`向用戶發送帶有鼓勵性語言的彈窗提醒。

### 設計

技術架構與實作方式

- 無需輸入，自動帶入指導文件來建立設計規格
- 輸出：design.md

### 任務

離散且可追蹤的實作步驟

- 無需輸入，自動帶入指導文件來拆解任務清單
- 輸出：tasks.md

## Agent Hooks

可以設定好觸發的檔案類型和預設 prompt。<br />
並設定以下情境，當符合時將帶入預先設定好的 prompt 來執行 Agent

- 手動觸發已啟動
- 特定檔案修改
- 檔案建立、儲存、刪除

## Reference

> [規格驅動開發實戰：AI 時代的軟體開發新典範 - Will 保哥](https://learn.duotify.com/courses/sdd)
