---
sidebar_position: 13
sidebar_label: Codex CLI
---

# Codex CLI

基於終端機介面的軟體工程代理 (SWE-Agent)

- [官方介紹](https://openai.com/zh-Hant/index/introducing-codex/)
- [GitHub Repository](https://github.com/openai/codex)

## 登入

- chatGPT 帳號
- 使用 [API Key](https://platform.openai.com/)

## 檔案選擇

使用 `@` 來進行模糊搜尋

## shell mode

在空對話框按下 `!` 來切換成 shell mode

## Slash Commands

### 核心管理

| 指令             | 說明                                                |
| :--------------- | :-------------------------------------------------- |
| `/permissions`   | 設定 Codex 的操作權限                               |
| `/model`         | 選擇作用中的模型與推理強度                          |
| `/fast`          | 切換或檢視目前模型的快速（Fast）服務層級            |
| `/approve`       | 當被 Codex 拒絕特定操作時，可以使用此命令來重新審核 |
| `/status`        | 檢視目前工作階段狀態                                |
| `/experimental`  | 開啟實驗性功能                                      |
| `/feedback`      | 傳送意見回饋                                        |
| `/logout`        | 登出                                                |
| `/quit`、`/exit` | 離開 CLI，快捷鍵 `Control + D`                      |
| `/logout`        | 登出                                                |

#### /permissions

- Ask for approval: 請求核准，可讀取和編輯當前 Workspace 的檔案。若要存取網路或是編輯非當前 Workspace 的檔案，需要核准。
- Approval for me: 僅針對系統偵測到潛在風險的動作時，才會確認。
- Full Access: Codex 可編輯 Workspace 外的檔案、可存取網路，無需請求核准。

### 工作階段與上下文

| 指令            | 說明                                                               |
| :-------------- | :----------------------------------------------------------------- |
| `/new`          | 開新對話                                                           |
| `/clear`        | 清除畫面並開啟對話                                                 |
| `/archive`      | 封存對話並離開；可用 `codex unarchive` 恢復紀錄                    |
| `/resume`       | 載入已儲存的對話                                                   |
| `/fork`         | 將現有對話開啟新的獨立執行緒，方便探索其他解法不影響原紀錄         |
| `/side`、`/btw` | 可開啟與 Codex 的討論，用於追蹤細節，不干擾主執行緒執行            |
| `/compact`      | 壓縮上下文                                                         |
| `/memories`     | 設定記憶體功能，Codex 能將先前對話實用的上下文帶入未來對話         |
| `/personality`  | 回應風格                                                           |
| `/copy`         | 複製最新的輸出內容，快捷鍵 `Control + 0`                           |
| `/raw`          | 切換格式狀態，快捷鍵 `Alt + R`                                     |
| `/plan`         | 計劃模式，實作前先提出規劃                                         |
| `/goal`         | 直接執行至目標完成才結束，如果任務指令太多，可以指向文件來說明目標 |
| `/agent`        | 切換工作中的執行緒，檢視工作進度                                   |

#### /memories

除了在 Codex CLI 直接使用 `/memories` 來開啟之外，也可以在 `config.toml` 設定。

```toml
[features]
memories = true
```

相關設定有：

- memories.generate_memories: 控制新建立的對話是否可作為 memories 的輸入
- memories.use_memories: 控制是否將現有的記憶注入未來的對話階段
- memories.disable_on_external_context: 設定為 `true` 時，在使用 mcp、網路或工具搜尋的結果，不會被用於記憶的輸入
- memories.min_rate_limit_remaining_percent: 控制記憶生成開始前所需的最低剩餘百分比，數值為 0 ~ 100。
- memories.extract_model: 用於對話層級記憶擷取的模型
- memories.consolidation_model: 用於全域記憶整合的模型

#### /personality

- friendly: 友善
- pragmatic: 務實

#### /goal

- `/goal pause`: 暫停
- `/goal resume`: 恢復
- `/goal clear`: 移除

### 工作區與環境

| 指令          | 說明                                              |
| :------------ | :------------------------------------------------ |
| `/ide`        | 將編輯器中開啟的檔案或選取範圍帶入提示詞          |
| `/mention`    | 提及檔案，讓對話與提供的檔案一併成為上下文        |
| `/diff`       | 檢視 git 差異                                     |
| `/review`     | 檢查目前工作目錄變更，尋找                        |
| `/init`       | 產生 `AGENTS.md`，讓 Codex 更輕易理解整個專案脈絡 |
| `/ps`         | 檢閱背景終端機列表及其狀態                        |
| `/stop`       | 停止目前工作階段的所有背景終端機                  |
| `/theme`      | 選擇語法的顏色配置                                |
| `/keymap`     | 檢視並可編輯快捷鍵設定                            |
| `/statusline` | 設定底部狀態列顯示項目                            |
| `/title`      | 終端機視窗標題                                    |
| `/vim`        | 切換 vim 模式                                     |
| `/plugin`     | 瀏覽、安裝、啟用 plugin                           |
| `/skills`     | 瀏覽、啟用 skill                                  |
| `/hooks`      | 檢視已安裝的 hooks                                |
| `/mcp`        | 瀏覽、啟用 mcp                                    |

#### /init

Codex 會依照位置尋找 `AGENTS.md`，並由上而下合併。

| 位置                       | 備註                                |
| -------------------------- | ----------------------------------- |
| ~/.codex/AGENTS.md         | 個人全域指導(優先權最低)            |
| 根目錄 AGENTS.md           | 共享專案備註                        |
| 目前工作目錄中的 AGENTS.md | 子資料夾 / 功能特定資訊(優先權最高) |

## command line

更多設定可參考 [Command line options](https://developers.openai.com/codex/cli/reference)

- 模型選擇： `--model`, `-m`
- 圖片： `--image`, `-i`
- yolo mode： `--dangerously-bypass-approvals-and-sandbox`, `--yolo`
- 搜尋： `--search`
- 非互動模式 (CI 模式)： `codex exec "prompt"`
- 接續上一次對話： `codex resume`

### 圖片

```shell
$ codex -i demo.png "prompt"
$ codex --image demo1.png,demo2.jpg "prompt" # 多張圖片
```

### yolo mode

```shell
$ codex --dangerously-bypass-approvals-and-sandbox "prompt"
$ codex --yolo "prompt" # 短寫法
```

## 額外使用技巧

### 自訂斜線命令(自訂提示)

可以將常用提示字串儲存為 Markdown，便可從斜線命令選單快速重用。<br />
檔案路徑：`$CODEX_HOME/prompts/`，預設為(`~/.codex/prompts`)<br />
例如：檔案名為 `commit.md`，輸入則為 `/commit`

### MCP

檔案路徑：`~/.codex/config.toml`，以設定 context7 為例：

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp@latest"]
```

可參考保哥的 [Codex 文件](https://github.com/doggy8088/codex/blob/zh-tw-codex/docs/config.md)

## Reference

> [Open AI Developers](https://developers.openai.com/codex)<br />
> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)
