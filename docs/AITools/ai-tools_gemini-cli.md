---
sidebar_position: 16
sidebar_label: Gemini CLI
---

# Gemini CLI

:::danger
2026.5.20 宣布 Gemini CLI 即將在 2026.6.18 棄用。替代產品為 Antigravity CLI
:::

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

| 指令                 | 說明                                                                    |
| :------------------- | :---------------------------------------------------------------------- |
| `/about`             | 顯示版本資訊與環境詳情                                                  |
| `/help` 或是 `?`     | 顯示 Gemini CLI 相關用法說明                                            |
| `/quit` 或是 `/exit` | 退出 CLI 如果加上 `--delete` 可以徹底刪除該此對話所有本地記錄和暫存檔案 |
| `/stats`             | 顯示會話、模型或工具的使用統計數據                                      |
| `/upgrade`           | 開啟 Gemini Code Assist 升級頁面                                        |
| `/settings`          | 開啟互動式設定編輯器，修改 `.gemini/settings.json`                      |

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

預設名稱為 GEMINI.md，但可以透過 [contextFileName](#contextfilename) 來調整要抓的檔名等應用<br />
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

## Reference

> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)
