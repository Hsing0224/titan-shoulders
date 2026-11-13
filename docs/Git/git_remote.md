---
sidebar_position: 12
sidebar_label: 遠端操作
---

# 遠端操作

## 建立與管理連線

### git clone

將遠端的 Git 儲存庫下載至本機

```shell
git clone <遠端網址>

# 預設是與遠端儲存庫一樣名稱，也可以加入命名
git clone <遠端網址> <自訂目錄名稱>
```

:::note 當儲存庫歷史太悠久
如果遠端的 Git 儲存庫存在著龐大的歷史紀錄，可以使用 `--depth 1` 淺層複製，<br />
讓下載下來的儲存庫只存在 1 筆紀錄，大幅減少下載的時間。

```shell
git clone --depth 1 <遠端網址>
```

如果檢視完，發現還是要把歷史紀錄抓下來。

```shell
git fetch --unshallow
```

:::

### git remote

用來管理本地和遠端 Git 儲存庫之間的連線設定。

```shell
# 詳細列出遠端儲存庫的實際網址
git remote -v

# 新增連線
git remote add origin <遠端網址>

# 修改連線
git remote set-url origin <新遠端網址>

# 刪除連線
git remote remove origin
```

:::note 為什麼是 origin
origin 是 Git 約定俗成的**別名**<br />
當使用 `git remote add` 時就需要給一個別名，用來替代一長串的遠端網址。
:::

#### 備份儲存庫的應用情境

假設公司同個專案要備份於兩個地方，分別是 GitHub 和 GitLab

```shell
# 建立連線，並使用別名來辨識
git remote add github git@github.com:user/repo.git
git remote add gitlab git@gitlab.com:user/repo.git

# 可以將變更分別推送至兩個儲存庫
git push github main
git push gitlab main
```

:::note
或者是由 CI/CD，推上其中一個後，再觸發自動部署，將程式碼推至另一個儲存庫
:::

也可以由本機一次 `push` 推至兩個儲存庫

```shell
git remote add origin git@github.com:user/repo.git

# 如果有自訂網址，這樣 Git 不會用原本抓取的網址來推播，必須將原本的也加進來
git remote set-url --add --push origin git@github.com:user/repo.git
git remote set-url --add --push origin git@gitlab.com:user/repo.git

git push origin main
```

## 本機與遠端同步

### git fetch

除了更新遠端儲存庫的分支清單外，也有下載遠端儲存庫的提交紀錄、標籤放到唯讀快取區。<br />
基於安全，git fetch 不會修改檔案。

```shell
git fetch

# 如果有多個遠端儲存庫，依照別名同步該儲存庫的異動
git fetch github

# 同步刪除本機那些已經在遠端被刪除的分支
git fetch --p
# 預設開啟自動清理，-p 為 --prune 的縮寫
```

### git pull

從遠端儲存庫下載最新變更，並自動合併。其實就是 git fetch + git merge 的組合技。

```shell
git pull

# 使用 rebase 來替代 merge，將本機未提交的 commit 移至遠端分支最新進度的上方
git pull --rebase
```

### git push

將本地變更推至遠端儲存庫

```shell
git push

# 指定要推到哪個別名遠端儲存庫的哪一個分支
git push github main

# 在遠端儲存庫無此分支時的第一次操作，建立追蹤關係。-u 為 --set-upstream
git push -u origin feat/login
```

:::danger 強制推送
無視任何版本衝突，將本機的歷史紀錄推至遠端紀錄。<br />
這是一個危險的指令，如果有機敏資料被推上去，使用此指令來讓遠端歷史清除機敏資料。

```shell
# -f 為 --force 的簡寫
git push -f
```

:::

:::note 比較安全的強制推送
覆蓋前會先檢查遠端有沒有剛推上的新進度。如果本機有沒看過的遠端進度，才會中止推送。

```shell
git push --force-with-lease
```

:::
