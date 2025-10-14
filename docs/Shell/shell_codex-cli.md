---
sidebar_position: 12
sidebar_label: Codex CLI
---

# Codex CLI
- [官方介紹](https://openai.com/zh-Hant/index/introducing-codex/)
- [GitHub Repository](https://github.com/openai/codex)
- 基於終端機介面的軟體工程代理 (SWE-Agent)
- Apache-2.0 license 授權的開放原始碼專案

## 登入
- 登入 chatGPT 帳號(Plus 以上)
- 使用 [API Key](https://platform.openai.com/) 登入(需先消費 5 鎂)

### 歡迎畫面的選項
- /init：建立一個 AGENTS.md，內含 Codex 的指令
- /status：顯示當前工作階段的配置和 Token 使用情況
- /approvals：選擇 Codex 可在無需批准的情況下執行的操作
- /model：選擇要使用的模型和推理強度
- /review：檢查、審查和找出潛在問題
- /new：開啟新的對話
- /compact：壓縮對話內容，總結重點，讓上下文能有效地被繼續讀取
- /diff：顯示目前專案與檔案變更
- /mention：提及檔案，讓對話與提供的檔案一併成為上下文

## 使用技巧
### 檔案選擇
使用 `@` 來進行模糊搜尋

### 提供圖片當成上下文
除了文字輸入，也可以輸入圖片來提問
```shell
$ codex -i demo.png "prompt"
```
或是多張圖片
```shell
$ codex --image demo1.png,demo2.jpg "prompt"
```

### 支援非互動模式 (CI 模式)
```shell
$ codex exec "prompt"
```

### 搜尋能力
允許 Ccodex 可以搜尋，預設為關閉。
```shell
$ codex --search "prompt"
```

### 安全性
透過 `--approval-mode` (`-a`) 可以設定自動核准政策
- 建議模式(預設)：
```shell
$ codex -a suggest "prompt"
```
!!!!!

### 接續工作
開啟最近對話的選擇器

```shell
$ codex --resume
```

<br />
直接延續最近一次對話

```shell
$ codex --continue
```

## AGENTS.md
可以使用 `AGENTS.md` 提供額外的 prompt。<br />
Codex 會依照位置尋找 `AGENTS.md`，並由上而下合併。

| 位置 | 備註 |
| -- | -- |
| ~/.codex/AGENTS.md | 個人全域指導(優先權最低)
| 根目錄 AGENTS.md | 共享專案備註
| 目前工作目錄中的 AGENTS.md | 子資料夾 / 功能特定資訊(優先權最高)

## 自訂斜線命令(自訂提示)
可以將常用提示字串儲存為 Markdown，便可從斜線命令選單快速重用。<br />
檔案路徑：`$CODEX_HOME/prompts/`，預設為(`~/.codex/prompts`)<br />
例如：檔案名為 `commit.md`，輸入則為 `/commit`

## MCP
檔案路徑：`~/.codex/config.toml`，以設定 context7 為例：

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp@latest"]
```

可參考保哥的 [Codex 文件](https://github.com/doggy8088/codex/blob/zh-tw-codex/docs/config.md)

## sandbox_mode

## Reference

> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)
