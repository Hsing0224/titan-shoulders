---
sidebar_position: 14
sidebar_label: Claude Code
---

# Claude Code

## 使用技巧

### 查看輸入提示

使用 `?` 來顯示快捷鍵以及各種符號對應的指令

### 檔案選擇

使用 `@` 來進行模糊搜尋

### shell mode

使用 `!` 來切換 shell mode

### 切換模式

使用 shift + tab 可切換輸入的模式

- default: 預設為編輯文件和執行 shell 命令前詢問
- accept edits: 常見文件和系統命令不會詢問
- plan mode: 不編輯任何文件，先提出計劃和探討
- auto mode: 會在後台執行安全檢查評估所有操作
- bypass permissions: YOLO mode

### undo

當任務執行完，按下兩次 `Esc` 可捨棄此次變更。恢復上一次的狀態。

### ultrathink

在提示詞輸入 `ultrathink` 關鍵字，可以進行更深度的推理

### 檔案配置

| 功能                                | 檔案                         | 範圍       |
| :---------------------------------- | :--------------------------- | :--------- |
| 提供專案的配置和檢索                | `CLAUDE.md`                  | 專案、全域 |
| 允許或阻止特定工具呼叫              | `settings.json`              | 專案、全域 |
| 環境變數                            | `settings.json`              | 專案、全域 |
| Hooks                               | `settings.json`              | 專案、全域 |
| skills                              | `skills/<name>/SKILL.md`     | 專案、全域 |
| 定義具有自己工具的專門 subagent     | `agents/*.md`                | 專案、全域 |
| 自定義 slash command                | `commands/*.md`              | 專案、全域 |
| 自動記憶，專案裡 Claude Code 的筆記 | `projects/<project>/memory/` | 全域       |

> [探索 .claude 目錄](https://code.claude.com/docs/zh-TW/claude-directory)

## Slash Commands

### 核心管理

| 指令                          | 說明                            |
| :---------------------------- | :------------------------------ |
| `/config`、`/setting`         | 設定 claude code                |
| `/cost`、`/usage`、`/stats`   | 顯示目前成本與使用量            |
| `/doctor`                     | 檢查目前 Claude Code 安裝和設定 |
| `/exit`、`/quit`              | 離開                            |
| `/feedback`、`/bug`、`/share` | 回報問題                        |
| `/help`                       | 顯示說明和各命令                |
| `/keybindings`                | 快捷鍵配置                      |
| `/powerup`                    | 課程探索功能                    |
| `/release-notes`              | 檢視版本變更                    |
| `/scroll-speed`               | 調整滑鼠捲動速度                |
| `/status`                     | 顯示版本、帳戶資訊              |
| `/statusline`                 | 配置狀態列                      |
| `/terminal-setup`             | 配置終端機快捷鍵                |
| `/theme`                      | 變更色彩主題                    |

#### /config

核心功能：

- Auto-compact: 自動壓縮
- Thinking mode: 思考模式
- Fast mode (Opus 4.8): 使用快速模式
- Dynamic workflows: 動態工作流程

訊息和提示：

- Switch models when a message is flagged: 當訊息被標記時切換模型
- Show tips: 顯示使用技巧
- Prompt suggestions: 提示詞建議
- Session recap: 每個任務完成後總結

介面和視覺：

- Reduce motion: 減少介面動畫
- Terminal progress bar: 終端機顯示進度條
- Show turn duration: 顯示每項任務花費時間
- Auto-scroll: 自動捲至最新
- Theme: 主題設定
- Local notifications: 提示設定
- Output style: 輸出風格設定
  - default: 預設；快速完成工作，簡潔回答
  - proactive: 主動型；最少詢問，適合經驗豐富且信任 Claude 判斷的使用者
  - explanatory: 解釋型；詳細解釋為什麼這樣實現
  - learning: 學習型；不會完整寫完程式碼，引導使用者

程式碼編輯和版本控制：

- Rewind code (checkpoints): 程式碼回朔功能
- Ultracode keyword trigger: 關鍵詞觸發
- Verbose output: 詳細輸出模式(主要為檔案的內容)
- Respect .gitignore in file picker: 遵循 `.gitignore` 規則
- Skip the /copy picker: 輸入 `/copy` 略過選擇器
- Copy on select: 選擇即複製

開發工具和 IDE 整合：

- Worktree base ref: 工作樹基礎參考設定，預設為 `fresh` (全新/乾淨的工作區)，另一個為 `head` (基於當前分支的最新 commit 來建立工作區)
- Use auto mode during plan: 計劃階段使用自動模式
- Open agents view by default: 開啟檢視代理程式
- ← opens agents: 左箭頭開啟代理
- Show last response in external editor: 在外部編輯器顯示最後回應
- Auto-connect to IDE (external terminal): 自動連接到 IDE
- Show PR status footer: 在底部顯示 PR 狀態
- Claude in Chrome enabled by default: 預設啟用 Chrome 的 Claude

其他設定：

- Auto-update channel: 預設為最新版 `latest`
- Language: 語言設定
- Editor mode: 編輯器模式
- Model: 選擇模型，左右可調整 Effort
- Default permission mode: 預設權限模式

### 工作階段與上下文

| 指令                              | 說明                                      |
| :-------------------------------- | :---------------------------------------- |
| `/branch`                         | 以目前對話開分支建立另一個工作區來做嘗試  |
| `/btw`                            | 提出問題詢問，不影響主工作區              |
| `/clear`、`/reset`、`/new`        | 清空上下文開始新對話                      |
| `/color`                          | 設定對話框顏色                            |
| `/compact`                        | 壓縮上下文                                |
| `/context`                        | 視覺化上下文情況與最佳化建議              |
| `/copy`                           | 複製回應，可帶入數字來指定回應順序        |
| `/diff`                           | 開啟互動式差異檢視器                      |
| `/effort`                         | 設定模型努力程度                          |
| `/fast`                           | 切換快速模式                              |
| `/fork`                           | 建立一個分支的 subagent，完成時會返回對話 |
| `/goal`                           | 設定目標後持續工作至目標達成              |
| `/insights`                       | 產生報告，分析互動模式                    |
| `/model`                          | 選擇模型，左右可調整 Effort               |
| `/recap`                          | 為目前工作階段進行摘要                    |
| `/rename`                         | 為此 session 命名                         |
| `/resume`、`/continue`            | 繼續先前對話                              |
| `/rewind`、`/checkpoint`、`/undo` | 捨棄此次任務調整並恢復上一次對話          |

### 工作區與環境

| 指令                             | 說明                                               |
| :------------------------------- | :------------------------------------------------- |
| `/add-dir`                       | 加入新的工作目錄                                   |
| `/background`、`/bg`             | 將目前工作作為背景執行                             |
| `/cd`                            | 切換當前目錄                                       |
| `/fewer-permission-prompts`      | 掃描並將常用的命令新增至允許清單以減少權限上的詢問 |
| `/init`                          | 建立初始化檔案 `CLAUDE.md`                         |
| `/memory`                        | 停用/啟用/編輯各階層的 `CLAUDE.md`                 |
| `/permissions`、`/allowed-tools` | 管理工具權限                                       |
| `/sandbox`                       | 切換使用 sandbox 模式                              |
| `/stop`                          | 停用目前的背景工作                                 |
| `/tasks`、`/bashes`              | 檢視背景中的程式                                   |

#### /init

可以設定 `CLAUDE_CODE_NEW_INIT=1`，會以互動的方式建立，也可以建立 `Skills`、`Hooks`、`memory` 進階的設定。<br />

單次執行：

```shell
$ CLAUDE_CODE_NEW_INIT=1 claude
```

設定在環境變數：

```shell
$ export CLAUDE_CODE_NEW_INIT=1 # 需要重新讀取設定檔
$ claude
```

#### /permissions

可針對特定工具授權

- Bash
  - Bash(npm run test:\*): 比對以 npm run test 開頭的 Bash 指令
- Read & Edit
  - Edit(docs/\*\*): 專案中 docs 目錄內的檔案可編輯
  - Read(~/.zshrc): HOME 目錄下的 .zshrc 檔案的讀取
  - Edit(//tmp/scratch.txt): 對 /tmp/scratch.txt 的編輯
  - Edit(\*_/_.spec.ts): 對所有測試文件編輯
- WebFetch
  - WebFetch(domain:example.com): 對 example.com 域名的請求
- MCP
  - mcp**github**\*: GitHub 的 MCP 工具

:::note
`//`: 絕對路徑
:::

### 擴充與功能

| 指令                     | 說明                                                          |
| :----------------------- | :------------------------------------------------------------ |
| `/advisor`               | 設定顧問，需要指導時會詢問顧問                                |
| `/agents`                | 管理 Agents 配置                                              |
| `/hooks`                 | 管理 hook 配置                                                |
| `/mcp`                   | 管理 MCP 配置                                                 |
| `/plugin`                | 管理 plugins 配置                                             |
| `/reload-plugin`         | 重新載入所有 plugins                                          |
| `/skills`                | 管理 skill 配置                                               |
| `/reload-skills`         | 重新載入所有 skills                                           |
| `/ide`                   | 讓 Claude Code 連接 IDE                                       |
| `/batch`                 | 進行大規模的變更                                              |
| `/claude-api`            | 為專案所使用的程式語言，載入參考資料                          |
| `/code-review`           | 為目前變更的程式碼尋找錯誤並重構                              |
| `/simplify`              | 為目前變更的程式碼進行優化並重構，等同於 `/code-review --fix` |
| `/debug`                 | 為目前工作啟用偵錯來排除問題                                  |
| `/deep-research`         | 展開網路搜尋並交叉檢查來源後出一份報告                        |
| `/install-github-app`    | 將 Claude Code 安裝至 GitHub                                  |
| `/schedule`、`/routines` | 建立雲端排程                                                  |
| `/loop`、`/proactive`    | 執行重複的任務                                                |
| `/plan`                  | 將 prompt 直接帶入 `plan mode` 並開始工作                     |
| `/review`                | review GitHub 上的 PR                                         |
| `/run-skill-generator`   | 為專案編寫所屬的 skill 以及建立專屬的 `/run`、`/verify`       |
| `/run`                   | 啟動並查看在程式的狀態和驗證結果                              |
| `/verify`                | 驗證程式                                                      |
| `/security-review`       | 為程式提供安全性的掃描和分析                                  |
| `/team-onboarding`       | 依照歷史紀錄生成一份該專案的指南供團隊使用                    |
| `/workflows`             | 檢視工作進度                                                  |

#### /loop

當關掉 session 時 `/loop` 也會跟著停止。

```shell title="Claude Code"
$ /loop 每 1 分鐘檢查部署是否有完成，如果失敗則通知我 # 使用自然語言設定
$ /loop 10m /sayhi # 可以將任務寫成 skill
```

:::tip
雖然生命週期依附在 session，但最好是為 `/loop` 設定一個停止條件，避免荷包失血

```shell title="Claude Code"
$ /loop 每 1 分鐘檢查部署是否有完成，失敗則通知我，如果完成則結束此任務 # 使用自然語言設定
$ /loop 10m /sayhi，最多 10 次 # 可以將任務寫成 skill
```

:::

## flag

- `--print`、`-p`: 輸出回應不進入互動模式
- `--add-dir`: 新增工作目錄
- `--advisor <model>`: 指定顧問，`opus`、`sonnet`、`fable`
- `--model <model>`: 指定模型，`haiku`、`sonnet`、`opus`、`fable`
  - 1M context: `sonnet[1m]`、`opus[1m]`
  - 完整模型名稱: `claude-opus-4-8[1m]`
- `--effort <effortLevel>`: 為目前工作設定努力層級，`low`、`medium`、`high`、`xhigh`、`max`
- `--agent`: 指定代理
- `--permission-mode <mode>`: 指定開始的模式，`default`、`acceptEdits`、`plan`、`auto`、`dontAsk`、`bypassPermissions`
- `--allow-dangerously-skip-permissions`: 新增 bypassPermissions 到 Shift+Tab 模式切換的選項中
- `--allowedTools`、`--allowed-tools`: 無需提示權限即可執行的工具，與 `--tools` 擇一
- `--tools`: 限制可用工具，與 `--allowed-tools` 擇一
- `--continue`、`-c`: 載入最近一次的對話
- `--verbose`: 啟用詳細記錄
- `--system-prompt-file`: 載入指定的系統提示檔，取代預設的提示
- `--append-system-prompt-file`: 額外載入系統提示檔

## yolo mode

```shell
$ claude --dangerously-skip-permission
```

## hook

| Event              | 觸發時機                           |
| :----------------- | :--------------------------------- |
| SessionStart       | 工作階段開始或繼續時               |
| UserPromptSubmit   | 提交 prompt 後，在 Claude 處理之前 |
| PreToolUse         | 工具呼叫執行前                     |
| PostToolUse        | 工具呼叫成功後                     |
| PostToolUseFailure | 工具呼叫失敗後                     |
| Notification       | 發送通知時                         |
| SubagentStart      | 生成 subagent 時                   |
| SubagentStop       | 生成 subagent 完成時               |
| Stop               | 完成回應時                         |
| PreCompact         | 上下文壓縮前                       |
| PostCompact        | 上下文壓縮後                       |

```json title="setting.json"
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash", // 如果不填，只要該觸發時機都會執行，如果有填值則會匹配才往內觸發
        "hooks": [
          {
            "type": "command",
            "command": "jq -r .tool_input.command >> ~/.claude/bash.log"
          },
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-rm-rf.sh"
          }
        ]
      }
    ]
  }
}
```

| type     | 觸發時機                      |
| :------- | :---------------------------- |
| command  | 執行 shell 命令               |
| http     | POST 事件資料到 URL           |
| mcp_tool | 在已連線的 MCP 伺服器呼叫工具 |
| prompt   | 判斷留給 LLM                  |
| agent    | 使用子代理進行驗證            |

> 更多設定可參考 [hooks-guide](https://code.claude.com/docs/zh-TW/features-overview#hooks)

## Reference

> [Claude Code Docs](https://code.claude.com/docs/zh-TW/overview)<br />
> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)<br />
> [Claude Code /loop 完整教學：把 Claude 變成定時自動執行 agent 的方法、應用場景與限制 - 自由揚John](https://foreverwebs.com/blog/claude-code-loop-recurring-tasks-tutorial)
