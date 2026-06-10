---
sidebar_position: 15
sidebar_label: Antigravity CLI
---

# Antigravity CLI

:::note
繼承了 Gemini CLI 的一些特性，故許多設定會有重複的狀況
:::

## 啟動

使用 `agy` 來開啟 Antigravity CLI

## 登入

- 以 Google 帳號登入
- 以 API 方式登入

## 檔案選擇

使用 `@` 來進行模糊搜尋

## shell mode

在空對話框按下 `!` 來切換成 shell mode

## Slash Commands

### 核心管理

| 指令                     | 說明                                                                    |
| :----------------------- | :---------------------------------------------------------------------- |
| `/help` 或 `?`           | 顯示相關用法說明，可用左右方向鍵切換分頁                                |
| `/exit` 或 `/exit`       | 退出 CLI 如果加上 `--delete` 可以徹底刪除該此對話所有本地記錄和暫存檔案 |
| `/usage` 或 `/quota`     | 檢視目前各個模組使用狀況                                                |
| `/upgrade`               | 開啟 Gemini Code Assist 升級頁面                                        |
| `/config` 或 `/settings` | 調整 Antigravity CLI 設定                                               |
| `/keybindings`           | 調整 Antigravity CLI 快捷鍵設定                                         |
| `/changelog`             | Antigravity CLI 的變更紀錄                                              |
| `/logout`                | 登出                                                                    |

#### /config

- Animation Speed
- Artiface Review: 對 Agent 審核工作項目
  - always proceeds: 始終同意
  - agent decides: agent 依照複雜度決定
  - asks for review: 需要 review
- Color Scheme: 設定介面的樣式
- Editor: 當需要編輯時，預設要由哪個開啟
- Enable Telemetry: 開啟/關閉傳送資料給 Antigravity CLI 訓練
- Non-Workspace Access: 允許讀取工作目錄外的目錄
- Notifications: 開啟/關閉提醒
- Rendering Mode: 渲染模式切換。原生 terminal 渲染還是無閃爍模式
- Sandbox Mode: 沙盒模式
- Show Feedback Survey: 顯示調查過程
- Show Tips: 在 Antigravity CLI 執行過程時，對話框下方出現 tip
- Tool Permission: 工具權限設定
  - request-review: 詢問
  - always-proceed: 始終同意
  - strict: 嚴謹
- Verbosity: 展示 CLI 工作的詳細程度

### 會話與歷史

| 指令                                      | 說明                                                          |
| :---------------------------------------- | :------------------------------------------------------------ |
| `/btw`                                    | 不打斷當前任務情況下提出疑問                                  |
| `/context`                                | 檢視上下文使用狀況以及 token 佔比                             |
| `/diff`                                   | 列出每個檔案的異動                                            |
| `/copy`                                   | 複製最後一次的對話內容                                        |
| `/rename`                                 | 為這個對話命名                                                |
| `/resume` 或 `/conversation` 或 `/switch` | 選擇回到某個的對話紀錄 (可用 **Tab** 切換 CLI 或 Antigravity) |
| `/clear` 或 `/new`                        | 清除對話                                                      |
| `/rewind` 或 `/undo`                      | 恢復至先前狀態 (快速鍵: **Esc Esc**)                          |

### 工作區與環境

| 指令           | 說明                                                       |
| :------------- | :--------------------------------------------------------- |
| `/artifact`    | 當 CLI 執行文件需要確認，會將檔案放至暫存區等待檢視和審核  |
| `/add-dir`     | 提供完整路徑，新增別的 workspace 來當作此 session 的上下文 |
| `/model`       | 選擇使用的模組                                             |
| `/open`        | 打開檔案並進入編輯                                         |
| `/permissions` | 管理資料夾的信任權限                                       |
| `/statusline`  | 顯示/隱藏會話、模型或工具的使用統計數據                    |
| `/title`       | 設定 terminal 上方標題的顯示格式                           |

#### /statusline

可以在互動對話框下自定義狀態列，顯示自己想要看的資訊<br />
在 `~/.gemini/antigravity-cli/settings.json` 中設定

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.gemini/antigravity-cli/statusline.sh"
  }
}
```

且將該檔案加入執行的權限。

```shell
$ chmod +x ~/.gemini/antigravity-cli/statusline.sh
```

#### /title

自訂每個 terminal 上方的標題<br />
同 `statusline`，在 `~/.gemini/antigravity-cli/settings.json` 中設定

```json
{
  "title": {
    "type": "command",
    "command": "~/.gemini/antigravity-cli/title.sh"
  }
}
```

且將該檔案加入執行的權限。

```shell
$ chmod +x ~/.gemini/antigravity-cli/title.sh
```

可設定幾種狀態

- initializing: 初始化
- idle: 閒置
- thinking: 思考中
- working: 工作中
- tool_use: 使用工具
- \*: 任意狀態

### 擴充與功能

| 指令                 | 說明                                                                         |
| :------------------- | :--------------------------------------------------------------------------- |
| `/fork` 或 `/branch` | 從當前對話切出分支，可用於要做一個實驗性測試又不想破壞原本的上下文來進行測試 |
| `/fast`              | 用於一些簡單的任務，可以跳過思考和步驟規劃                                   |
| `/planning`          | 先，蒐集好上下文和做出完整的規劃後再執行                                     |
| `/agents`            | 選擇/刪除指定的 Agents                                                       |
| `/schedule`          | 設定排程任務                                                                 |
| `/tasks`             | 觀察背景執行的任務列                                                         |
| `/skills`            | 管理代理技能                                                                 |
| `/mcp`               | 管理 Model Context Protocol 伺服器                                           |
| `/hooks`             | 在生命週期時間點來觸發設定的任務                                             |
| `/goal`              | 自主達成任務                                                                 |
| `/grill-me`          | 在生命週期時間點來觸發設定的任務                                             |

#### /agents

會有分兩個地方的 Agents。可隨時查看代理人的狀態

- Workspace: `.agents/agents/{agent_name}/agent.json`
- Global: `~/.gemini/antigravity-cli/agents/{agent_name}/agent.json`

#### /schedule

設定一次性或週期性的任務觸發。支援 [Cron 表達式](./../Other/other_cron.md)

```shell
$ /schedule 每小時執行一次單元測試
```

#### /skills

- Workspace: `.agents/skills/{skill_name}/SKILL.md`
- Global: `~/.gemini/antigravity-cli/skills/{skill_name}/SKILL.md`
- Shared: `~/.gemini/skills/{skill_name}/SKILL.md`

#### /hooks

1. 可設定檢查點來執行指令的任務
   - PreToolUse: 工具執行前
   - PostToolUse: 工具執行後
   - PreInvocation: LLM 調用前
   - PostInvocation: LLM 調用後
   - Stop: 當 Agent 結束或退出時
2. 設定好 hooks 的設定檔
   - Matcher: 觸發條件
     - Write(single tool): 寫入新檔案時
     - Write|Edit(multiple tools): 寫入新檔案或是編輯舊檔案
     - Web.\*(regex pattern): 使用正規表達式
   - Name: 該 hook 的名稱
   - command: 執行的命令
   - Timeout(seconds): 超過多久則停止

:::tip
hooks 會使用最高權限來執行 shell commands
:::

#### /goal

讓 AI 自行依照規劃、執行、驗證的循環來達成給予的任務目標

#### /grill-me

啟動互動式對話，將需求和規格釐清

## Flags

- `--add-dir`
- `-c`: `--continue` 的簡短別名
- `--dangerously-skip-permissions`: yolo mode
- `-p`: `--print` 與 `--prompt` 的簡短別名

## Reference

> [Antigravity Docs](https://antigravity.google/docs/cli-features)
