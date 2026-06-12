---
sidebar_position: 12
sidebar_label: 推薦套件
---

# 推薦套件

## aichat

可以在 shell 直接下 prompt，生成需要的 shell 指令

```bash
$ aichat -r %code% '我要建立一個 test 資料夾並進入'
```

> [repo:aigoden/aichat](https://github.com/sigoden/aichat)

## bat

為 [cat](/docs/Shell/shell_common.md#cat) 的加強版，擁有 highlight 方便閱讀。

## btop

為 [top](/docs/Shell/shell_common.md#top) 的加強版，擁有清楚的排版。

## fd

為 find 的加強版，且會套用 `.gitignore` 設定

## fzf

互動式模糊搜尋(fuzzy finder)工具，可以快速搜尋和選擇清單內容。他本身是個 filter，且可以把結果利用 `pipe` 給 fzf。

```bash
$ ls | fzf # 可以互動選擇下一層
$ code $(fzf) # 把 fzf 選擇的結果當作參數傳給其他指令
$ fzf -m # 多選模式，按 Tab 選擇， Enter 送出
```

### 進階設定

#### 預設值調整

為 `.zshrc` 加上 fzf 的一些設定，讓工具更好用

```bash
# 用 fd 取代預設的 find
export FZF_DEFAULT_COMMAND='fd --type f --hidden --exclude .git'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

# 介面預設選項
export FZF_DEFAULT_OPTS='
  --height 50%
  --layout reverse
  --border rounded
  --bind ctrl-/:toggle-preview
'

# 搜尋檔案時用 bat 預覽
export FZF_CTRL_T_OPTS='
  --preview "bat --color=always --line-range :200 {}"
'

# Ctrl-R 搜尋 history 時顯示完整指令
export FZF_CTRL_R_OPTS='
  --preview "echo {}"
  --preview-window up:3:wrap
'
```

:::tip
如果沒打算裝 fd，則 `FZF_DEFAULT_COMMAND` 就使用 find 即可，只是不會套用 .gitignore

```bash
export FZF_DEFAULT_COMMAND='find --type f --hidden --exclude .git'
```

:::

#### 快捷鍵

可在 shell 新增快捷鍵

```bash
$ $(brew --prefix)/opt/fzf/install
```

- `Control + R` / `Ctrl + R`：互動是搜尋指令的歷史紀錄
- `Control + T` / `Ctrl + T`：在 shell 命令如果要選相關檔案，則可以使用此快捷鍵直接選擇，無需填路徑
- `Option + C` / `Alt + C`：開啟目錄的互動介面選擇

```bash
$ vim **<Tab>          # 模糊搜尋所有檔案
$ cd **<Tab>           # 模糊搜尋所有目錄
$ ssh **<Tab>          # 從 ~/.ssh/config 選主機
$ kill **<Tab>         # 從執行中的 process 選擇
$ export **<Tab>       # 選環境變數
```

## jq

JSON Processor 的縮寫，用於 `json` 資料的篩選

## yq

YAML Processor 的縮寫，用於解析 `yml` 的資料

## rg

ripgrep 的縮寫，為 [grep](/docs/Shell/shell_common.md#grep) 的加強版，且自動遵守 `.gitignore` 規則跳過不必要的檔案。

## zstd

Zstandard 的縮寫，為 Facebook 開發的現代壓縮工具，用來壓縮和解壓縮檔案。

```bash
$ zstd file.text # 壓縮(產生 file.txt.zst)
$ zstd -d file.txt.zst # 解壓縮，也可以寫 $ unzstd file.txt.zst
```

### 壓縮等級

可以使用 `-數字` 來設定壓縮等級(1~19)，預設為 3

```bash
$ zstd -19 file.txt # 等級愈高壓縮愈慢
$ zstd --ultra -22 file.txt # 超高壓縮，可設定(20~22)
```

## reference

> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)
> [在 Windows 打造一個華麗又實用的 WSL 命令列開發環境 - Will 保哥](https://learn.duotify.com/courses/best-wsl-setup)
