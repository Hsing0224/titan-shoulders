---
sidebar_position: 15
sidebar_label: Gemini CLI
---

# Gemini CLI

## 登入

- 以 Google 帳號登入
- 以 API 方式登入

### 如何在沙盒模式下用 Google 帳號登入

在無沙盒模式下登入好 Google 帳號後，從

- ~/.gemini/oauth_creds.json
- ~/.gemini/setting.json
  將這兩支檔案的內容貼進沙盒環境下對應的位置和檔案，即可在沙盒模式下用 Google 帳號登入

## 檔案選擇

使用 `@` 來進行模糊搜尋

## shell mode

在空對話框按下 `!` 來切換成 shell mode

## Slash Commands

### 核心管理

| 指令                 | 說明                                                                   |
| :------------------- | :--------------------------------------------------------------------- |
| `/about`             | 顯示版本資訊與環境詳情                                                 |
| `/help` 或是 `?`     | 顯示 Gemini CLI 相關用法說明                                           |
| `/quit` 或是 `/exit` | 退出 CLI如果加上 `--delete` 可以徹底刪除該此對話所有本地記錄和暫存檔案 |
| `/stats`             | 顯示會話、模型或工具的使用統計數據                                     |
| `/upgrade`           | 開啟 Gemini Code Assist 升級頁面                                       |
| `/settings`          | 開啟互動式設定編輯器，修改 `.gemini/settings.json`                     |

### 會話與歷史

| 指令                 | 說明                                                                     |
| :------------------- | :----------------------------------------------------------------------- |
| `/chat` 或 `/resume` | 管理與 Gemini CLI 對話記錄 (`list`, `save`, `resume`, `delete`, `share`) |
| `/copy`              | 複製最後一次的對話內容                                                   |
| `/clear`             | 清除對話                                                                 |
| `/compress`          | 將對話上下文做個總結，來壓縮上下文                                       |
| `/rewind`            | 恢復至先前狀態 (快速鍵: **Esc Esc**)                                     |

:::note

```shell
$ /chat save "TAG" # 用 /chat resume "TAG" 可以恢復儲存的對話
```

:::

### 工作區與環境

| 指令              | 說明                                                                                                                                    |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `/directory`      | 可以新增別的 workspace 來當作此 session 的上下文 (`add`, `show`)                                                                        |
| `/model`          | 選擇使用的模組                                                                                                                          |
| `/memory`         | 管理階層式指令上下文 (Instructional Context) (`show`, `refresh`, `list`, `add`)                                                         |
| `/plan`           | 切換至 Plan Mode (快捷鍵: **shift + Tab**)                                                                                              |
| `/permissions`    | 管理資料夾的信任權限                                                                                                                    |
| `/editor`         | 管理連結的編輯器，當有需要時可以用已經指定好的編輯器開啟                                                                                |
| `/footer`         | 設定常駐的 footer 資訊                                                                                                                  |
| `/terminal-setup` | 如果在 Gemini CLI 無法使用 **shift + Enter** 或 **control + Enter** 換行的話，可以使用此 Slash Command 讓 Gemini CLI 設定進而支援此操作 |
| `/theme`          | 主題調整                                                                                                                                |
| `/vim`            | 在與 Gemini CLI 對話框切換 Vim 模式來互動                                                                                               |

### 擴充與功能

| 指令          | 說明                                                                                 |
| :------------ | :----------------------------------------------------------------------------------- |
| `/init`       | 分析專案並產生 Gemini CLI 對於專案量身打造的索引文件(GEMINI.md)                      |
| `/agents`     | 管理本地與遠端子代理 (`list`, `reload`, `enable`, `disable`, `config`)               |
| `/extensions` | 管理擴充功能 (`list`, `install`, `uninstall`, `enable`, `disable`, `update`, `link`) |
| `/skills`     | 管理代理技能 (Skills) (`list`, `enable`, `disable`, `reload`)                        |
| `/mcp`        | 管理 Model Context Protocol 伺服器 (`list`, `reload`, `enable`, `disable`)           |
| `/hooks`      | 管理生命週期鉤子 (Hooks) (`list`, `enable`, `disable`)                               |
| `/commands`   | 管理從 `.toml` 檔案載入的自定義 slash commands                                       |

## 設定檔

Gemini CLI 提供多種設定，設定黨會依照層級順序套用（愈接近使用者的愈優先）

1. 命令列參數：與 Gemini CLI 的對話(prompt)
2. 環境變數：`.env`
3. 專案設定檔： 在專案目錄下的 `.gemini/settings.json`
4. 使用者設定檔： 使用者的 Home 目錄下 `~/.gemini/settings.json`
5. 預設值： Gemini CLI 本身的 System Prompt

### .env

環境變數也有自己的層級，找到第一個 `.env` 檔後就會停止，不會合併（愈接近使用者的愈優先）

1. 當前工作目錄： 啟動 Gemini CLI 的目錄
2. 父目錄：向上搜尋直到專案根目錄
3. 使用者目錄：`~/.env`
4. Gemini CLI 的設定資料夾：`~/.gemini/.env`

:::caution
`.env` 通常存放一些敏感的資訊，一般不會放在專案裡進版控
:::

### contextFileName

透過設定調整抓取上下文的檔案名稱，例如可以先讓 Gemini CLI 讀取 copilot-instructions.md

```json title="settings.json"
{
  "contextFileName": [".github/copilot-instructions.md", "GEMINI.md"]
}
```

## 記憶

預設名稱為 GEMINI.md，但可以透過 [contextFileName](#contextFileName) 來調整要抓的檔名等應用<br />
GEMINI.md 有階層式特性，可依照專案量身打照

- 全域情境：
  - 位置：`~/.gemini/<contextFileName>`
  - 範圍：為所有專案提供的預設指示
- 專案根目錄與上層目錄：
  - 位置：Gemini CLI 會在當前目錄，以及每一個上層目錄搜尋，直到專案根目錄(由 `.git` 資料夾識別)
  - 範圍：提供整個專案或其重要部分的相關情境
- 子目錄：
  - 位置：Gemini CLI 會掃描當前目錄的子目錄中設定的情境
  - 範圍：針對特定元件、模組等提供高度的指示

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

| 位置                       | 備註                                |
| -------------------------- | ----------------------------------- |
| ~/.codex/AGENTS.md         | 個人全域指導(優先權最低)            |
| 根目錄 AGENTS.md           | 共享專案備註                        |
| 目前工作目錄中的 AGENTS.md | 子資料夾 / 功能特定資訊(優先權最高) |

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

## 安全性

透過 `--approval-mode` (`-a`) 可以設定自動核准政策

- 建議模式(預設)：

```shell
$ codex -a suggest "prompt"
```

!!!!!

### sandbox_mode

#### 唯讀 (read-only)

指令可讀取磁碟上的任何檔案，但嘗試寫入檔案和存取網路會被封鎖

#### 工作區可寫入 (workspace-write)

目前工作目錄會允許寫入<br />
Codex CLI 預設使用啟動所在的目錄作為 cwd, 可透過 --cwd/-C 覆寫

#### 危險的完整存取 (danger-full-access)

完全停用沙盒機制

### 核准政策 (approval_policy)

#### 不信任 (untrusted)

執行不在清單內的指令前，會先提示使用者核准

#### 發生錯誤時 (on-failure)

若在沙盒中執行指令失敗，Codex 會請求權限，以便在沙盒外重試

#### 由模型決定 (on-request)

由模型決定何時升級權限

#### 完全不用核准 (never)

永不提示使用者：若指令失敗，Codex 會自動嘗試其他做法

:::tip
若 Codex CLI 執行在非互動模式下，核准模式永遠為 never
:::

### 簡化模式

#### 全自動模式

```shell
$ codex --full-auto "prompt"
```

或是

```shell
$ codex -a on-failure --sandbox workspace-write "prompt"
```

#### yolo mode

```shell
$ codex --yolo "prompt"
```

或是

```shell
$ codex --dangerously-bypass-approvals-and-sandbox "prompt"
```

## Reference

> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)
