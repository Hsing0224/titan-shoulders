---
sidebar_position: 10
sidebar_label: 基礎指令與設定
---

# 基礎指令與設定

## 基礎指令

### git init

初始化

```shell
git init [<directory>]

# 一般都是進入目錄來做 git 的初始化
cd ~/my_project
git init

# 指定目錄位置
git init my_project
```

### git status

檢視工作目錄與暫存區的狀態

```shell
# 一般會用這樣直接檢視
git status

# 簡短模式。M 代表已修改、?? 代表未追蹤
git status -s
```

### git add

將變更檔案加入暫存區 (stage)

```shell
# 單一檔案加入暫存區
git add <檔案名稱>

# 將全部檔案加入暫存區
git add . # 或是 git add -A
```

### git restore

捨棄檔案變更，或是將檔案移出暫存區

```shell
# 捨棄本積修改
git restore <檔案名稱> # 或 git checkout -- <檔案名稱>

# 移出暫存區
git restore --staged <檔案名稱> # 或 git reset HEAD <檔案名稱>
```

:::note
雙連字號 `--`，代表為 **參數解析到此為止，後面的字串請全部視為檔案路徑**
:::

### git commit

將暫存區的變更正式紀錄並形成一個歷史節點

```shell
# 一般都會加上 -m，輸入單行的描述
git commit -m "不打 -m 就會開啟編輯介面來輸入訊息"
```

:::note 我還沒上車
送出 `git commit` 後才發現有檔案漏加入，可以將檔案放置暫存區後輸入 `--amend` 參數，將檔案加入上一個 commit

```shell
git commit --amend
```

:::

### git diff

比較現有檔案修改前後的差異

```shell
git diff

# 當檔案已經加入暫存區，就要帶 --staged 參數才可以檢視差異
git diff --staged # 或是 git diff --cached
```

:::note
git diff 是比較現有檔案，變更前後的差異。故如果是全新檔案，因為還沒被 Git 追蹤，則不會在 git diff 顯示
:::

### git log

檢視提交歷史紀錄

```shell
# 每一個 commit 以單行呈現
git log --oneline

# 檢視最近的 N 筆紀錄
git log -3

# 視覺化查看分支線圖
git log --graph --oneline --all
# --all 顯示 repo 內所有分支的歷史紀錄，沒加就只看得到當前分支的紀錄

# 檢視每次 commit 修改了哪些程式碼
git log -p

# 搜尋包含關鍵字的 commit 訊息
git log --grep="fix bug"
```

#### 客製化

利用 alias 來將一些 git log 參數設定好，方便檢視

```shell
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"
```

- `--color`: 強制輸出顏色
- `--abbrev-commit`: 將 commit hash 縮短為前 7 碼
- `--pretty=format:'...'`: 自訂輸出的欄位、排版、顏色
  - 顏色
  - Git 變數
    - `%h`: commit hash 短代碼
    - `%d`: 分支
    - `%s`: commit 標題
    - `%cr`: commit 的相對時間
    - `%an`: 作者

### git show

檢視指定的 commit 詳細內容

```shell
# 檢視最近一次 commit 內容
git show

# 指令 commit hash
git show a1b2c3

# 只看異動哪些檔案
git show --name-only

# 只看異動幾行
git show --stat

# 檢視 HEAD 的前一個 commit
git show HEAD~1
```

:::note
`--stat` 此參數是用來產生差異統計。<br />
常用的指令有：

- git log --stat
- git diff --stat
- git show --stat
- git merge --stat
- git apply --stat
  :::

### git mv / git rm

與 Linux 的指令一樣功能，只是如果已被 Git 所追蹤，則需要(以 mv 為例)

1. 刪除了該檔案
2. 新增未追蹤檔案
3. 加入暫存區
   此時 Git 才可以推斷為改名的動作。<br />
   而 `git mv` / `git rm`，則是將這一些操作直接處理至暫存區。

:::note

```shell
# 搭配 --cached，則是告訴 Git，只從追蹤清單中移除，但保留我電腦上的實體檔案
git rm --cached
```

:::

## 設定

### git config

```shell
# 在初始化預設分支名稱為 main
git config --global init.defaultBranch main

# push 時自動建立遠端分支
git config --global push.autoSetupRemote true

# 指定編輯器為 vscode
git config --global core.editor "code --wait"

# 確認全域設定是否生效
git config --global --list

# git log, git diff, git show，使用 bat 檢視
git config --global core.pager "bat"

# git pull 使用 rebase
git config --global pull.rebase true

# 預設開啟遠端分支刪除，自動清理本地分支
git config --global fetch.prune true
```

#### alias

利用 alias 來客製指令

```shell
# git amend，將暫存區的檔案加入上一個 commit 裡，且不修改原本的 commit 訊息
git config --global alias.amend "commit --amend --no-edit"

# git last，查看最近一次 commit 詳細內容
git config --global alias.last "log -1 HEAD"
```

:::note
要刪除的話，則輸入

```shell
git config --global --unset alias.名稱
```

或是直接到 `~/.gitconfig`，將其刪除
:::

### .gitignore

讓 Git 忽略檔案的設定檔，文件使用 glob 語法來撰寫
:::tip
.gitignore 只能忽略尚未被 Git 追蹤的檔案
:::

可以建立全域的 .gitignore

```shell title="~/.gitignore_global"
# --- 系統檔案 ---
DS_Store
Thumbs.db

# --- 備份檔案 ---
*~

# --- 前端開發相關 ---
node_modules/
dist/
.npm/
npm-debug.log*
pnpm-debug.log*

# --- 壓縮檔與日誌 ---
*.log
*.gz
*.7z
*.rar
*.zip
**/.claude/settings.local.json
```

:::note
建立全域的 .gitignore_global，記得告訴 Git 套用設定

```shell
git config --global core.excludesfile ~/.gitignore_global
```

:::

#### 追蹤到不該追蹤的檔案

先清除 Git 暫存快取，重新讓 .gitignore 生效

```shell
# 移除 Git 追蹤快取，並補規則至 .gitignore
git rm -r --cached .
```
