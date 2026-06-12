---
sidebar_position: 12
sidebar_label: 推薦套件
---

# 推薦套件

## 終端機與系統監控

### btop

為 [top](/docs/Shell/shell_common.md#top) 的加強版，擁有清楚的排版。

## 現代化核心指令替換

### eza

為 [ls](/docs/Shell/shell_common.md#ls) 的加強版，提供更好的色彩和圖示，並整合 Git 狀態顯示。

```shell
alias ls="eza --icons"                  # 基礎列表並顯示圖示
alias ll="eza -lh --icons --git"        # 列表模式、人類可讀容量、顯示 Git 狀態
alias la="eza -lah --icons --git"       # 包含隱藏檔案

# 強化版 tree 函式
tree() {
  # 如果第一個參數是 "all"，則不限制階層（全顯示）
  if [ "$1" = "all" ]; then
    shift # 移除 'all' 參數，保留後續可能輸入的目錄
    eza --tree --icons "$@"
  # 如果第一個參數是純數字，則將其設為顯示階層
  elif [[ "$1" =~ ^[0-9]+$ ]]; then
    local level=$1
    shift # 移除數字參數
    eza --tree --icons --level="$level" "$@"
  # 預設情況：顯示 2 層
  else
    eza --tree --icons --level=2 "$@"
  fi
}
```

### bat

為 [cat](/docs/Shell/shell_common.md#cat) 的加強版，擁有 highlight 方便閱讀。

### zoxide

為 [cd](/docs/Shell/shell_common.md#cd) 的功能擴充版，可進行模糊搜尋來前往以前訪問過的目錄

```shell
$ z pro cms # 會跳到路徑中同時包含 pro (projects) 和 cms 的目錄
```

#### 互動介面

使用 `zi` 啟動互動的介面(需有 fzf)

### tlrc

為 [man](/docs/Shell/shell_common.md#man) 的加強版。提供範例和更好的閱讀介面

## 檔案與內容搜尋

### fd

為 find 的加強版，且會套用 `.gitignore` 設定

### rg

ripgrep 的縮寫，為 [grep](/docs/Shell/shell_common.md#grep) 的加強版，且自動遵守 `.gitignore` 規則跳過不必要的檔案。

### fzf

互動式模糊搜尋(fuzzy finder)工具，可以快速搜尋和選擇清單內容。他本身是個 filter，且可以把結果利用 `pipe` 給 fzf。

```shell
$ ls | fzf # 可以互動選擇下一層
$ code $(fzf) # 把 fzf 選擇的結果當作參數傳給其他指令
$ fzf -m # 多選模式，按 Tab 選擇， Enter 送出
```

#### 預設值調整

為 `.zshrc` 加上 fzf 的一些設定，讓工具更好用

```shell
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

```shell
export FZF_DEFAULT_COMMAND='find --type f --hidden --exclude .git'
```

:::

#### 快捷鍵

可在 shell 新增快捷鍵

```shell
$ $(brew --prefix)/opt/fzf/install
```

- `Control + R` / `Ctrl + R`：互動是搜尋指令的歷史紀錄
- `Control + T` / `Ctrl + T`：在 shell 命令如果要選相關檔案，則可以使用此快捷鍵直接選擇，無需填路徑
- `Option + C` / `Alt + C`：開啟目錄的互動介面選擇

```shell
$ vim **<Tab>          # 模糊搜尋所有檔案
$ cd **<Tab>           # 模糊搜尋所有目錄
$ ssh **<Tab>          # 從 ~/.ssh/config 選主機
$ kill **<Tab>         # 從執行中的 process 選擇
$ export **<Tab>       # 選環境變數
```

## 資料與格式處理

### jq

JSON Processor 的縮寫，用於 `json` 資料的篩選

### yq

YAML Processor 的縮寫，用於解析 `yml` 的資料

### zstd

Zstandard 的縮寫，為 Facebook 開發的現代壓縮工具，用來壓縮和解壓縮檔案。

```shell
$ zstd file.text # 壓縮(產生 file.txt.zst)
$ zstd -d file.txt.zst # 解壓縮，也可以寫 $ unzstd file.txt.zst
```

#### 壓縮等級

可以使用 `-數字` 來設定壓縮等級(1~19)，預設為 3

```shell
$ zstd -19 file.txt # 等級愈高壓縮愈慢
$ zstd --ultra -22 file.txt # 超高壓縮，可設定(20~22)
```

## 開發工作流與版本控制

### aichat

可以在 shell 直接下 prompt，生成需要的 shell 指令

```shell
$ aichat -r %code% '我要建立一個 test 資料夾並進入'
```

> [repo:aigoden/aichat](https://github.com/sigoden/aichat)

## reference

> [AI 程式設計代理人開發全攻略：從入門到實戰 - Will 保哥](https://learn.duotify.com/courses/openai-codex-cli)<br />
> [在 Windows 打造一個華麗又實用的 WSL 命令列開發環境 - Will 保哥](https://learn.duotify.com/courses/best-wsl-setup)
