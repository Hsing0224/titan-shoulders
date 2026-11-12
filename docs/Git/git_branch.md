---
sidebar_position: 11
sidebar_label: 分支管理
---

# 分支管理

## 管理與切換

### git branch

以當前狀態複製出一個獨立的開發環境，修改和調整不會影響到主線的狀態。

```shell
# 建立一個新的分支(但還是停留在原本分支)
git branch <分支名稱>

# 安全刪除分支，如果還沒被合併會提醒
git branch -d <分支名稱>
# 強制刪除分支為 git branch -D <分支名稱>

# 更改當前分支名稱，-m 為 --move
git branch -m <新分支名稱>
# 改指定分支名稱 git branch -m <舊分支名稱> <新分支名稱>
# 強制改名： -m 改為 -M

# 列出所有分支
git branch -a
```

:::note
使用 `git branch` 建立分支，Git 只是先建立，工作環境還是在原本的分支。<br />
若想建立好直接切換過去，可以使用

```shell
git checkout -b <分支名稱>

# 較推薦此寫法
git switch -c <分支名稱>
```

:::

### git switch

專門用來切換 Git 分支

```shell
git switch <分支名稱>

# 切回上一個分支
git switch -

# 建立分支並切換過去
git switch -c <分支名稱>
```

## 整合

### git merge

將其他分支變更合併到目前的分支

```shell
# 合併回 main，需要先切到 main 分支下
git merge feat/login
```

如果開發期間沒有額外新進度， Git 會觸發 `Fast-forward`，不會產生合併節點。<br />
如果加上參數 `--no-ff`，則會產生一個合併節點。在看線圖時更能清楚辨識這個功能從哪裡切出去，哪裡合併進來。

#### 取消合併

如果合併時衝突太複雜想直接重來，或者是發現自己合錯分支，可輸入參數 `--abort` 來取消這次合併

```shell
git merge --abort
```

#### 衝突處理

因為 vscode 都有友善的介面。<br />
如果非 vscode 這類介面，解完衝突後

```shell
git add <檔案>
git commit
# 不用打任何訊息
```

### git rebase

在目標分支(通常是 `main`)已有別人的新進度，如果用 git merge 則會產生一個合併節點。<br />
如果為了讓線圖呈一直線，就可以使用 git rebase。<br />
運作原理是：

1. 先將此分支的 commit 暫存
2. 把分支的起始點移至目標分支最新的位置
3. 再把暫存的 commit 依序放上去

:::note
與 git merge 的觀念不一樣。<br />
git rebase 不是直接在 main 分支執行，而是先把分支的起始點移動到 main 的最頂端，再讓 main 直接用 `Fast-forward`，不產生額外的合併節點
:::

```shell
# 先確保 main 分支為最新狀態後，在自己分支，將該分支的 commit 起始點移至 main 最新的位置
git rebase main

# 解完衝突，已經順利將分支的 commit 起始點接到 main 最新的位置
git switch main
git merge feat/login
```

#### 互動模式

使用 `git rebase -i <指定位置>`，來將當前到指定位置的 commit 做美化和整理。<br />
互動模式時，commit 前會有操作指令。

- pick: 保留。不做任何修改，直接套用。
- reword: 修改訊息。保留這個 commit 的檔案變更內容，但要修改 commit message。
- edit: 暫停並編輯內容。可將此 commit 拆解多個更小的 commit，處理完後輸入 `git rebase --continue` 繼續。
- squash: 合併 commit。融合至上一筆 commit 中，可以手動合併和編輯成一段新的訊息。
- drop: 刪除。捨棄這個 commit。該 commit 的檔案變更和歷史紀錄皆會捨棄。
- fixup: 靜默合併 commit。與 `squash` 一樣功能，差別在直接捨棄自己的 commit 訊息，只保留上一筆的訊息。

:::tip
在互動模式下列出的 commit，上至下是舊到新的 commit
:::

#### 衝突處理

解完衝突後

```shell
git add <檔案>
git rebase --continue
```

#### 取消合併

如果過程太過複雜要放棄，可輸入參數 `--abort` 來取消這次合併

```shell
git rebase --abort
```

:::danger 不要把 rebase 過的分支強行推上遠端
rebase 會重寫歷史(Commit ID 會被改變)，觸發改變 Commit ID 計算的元素有：

- 檔案的內容
- Commit 訊息
- 作者與提交時間
- 父節點 (上一筆 Commit)
  因為 git rebase 會移動分支的起始點。故父節點和提交時間就改變了。<br />
  而 Git 是認 Commit ID，如果把 rebase 過的分支推上遠端(正常狀況是推不上去，但如果使用 `git push -f` 來強制推上遠端)，其他人的本地歷史與遠端不同，這時其他人執行 git pull 時，Git 會判斷這是兩條不同的歷史並強行要合併，將會觸發大量的衝突要處理。<br />
  故只能用於**只有一個人在開發的分支**
  :::

## 工作區與暫存

### git stash

將工作目錄中尚未 commit 的修改(包含已加入暫存區)，暫時收納起來，讓工作區回到上一個 commit 後的乾淨狀態。

```shell
# 將目前修改的檔案暫存
git stash

# 連同全新建立、未被追蹤過的檔案都會收納進暫存區
git stash -u

# 可以加上註解方便辨識
git stash push -m "開發到一半的登入表單"

# 檢視所有暫存紀錄
# 代號會呈現 stash@{0}, stash@{1}, stash@{2}，數字愈小愈新
git stash list
```

:::note
要把全新建立、未追蹤檔案收納進暫存區，且要寫入註解：

```shell
git stash push -u -m '開發到一半的登入表單'
```

:::

#### 還原

```shell
# 將最新一次的收納放回至工作區，且該筆紀錄會從暫存清單刪除
git stash pop

# 與 git stash pop 差在會保留該筆紀錄
git stash apply

# 還原指定的暫存紀錄
git stash pop stash@{1}
```

#### 刪除

```shell
# 刪除指定的暫存紀錄
git stash drop stash@{1}

# 清空所有暫存紀錄
git stash clear
```

### git worktree

共用一個 .git 儲存庫。在多個資料夾被打開，且在不同的分支上。

```shell
# 建立 worktree
git worktree add <新資料夾路徑> <現有分支名稱>
git worktree add ../hotfix feat/login # 使用 feat/login 來建立一個 hotfix 資料夾
git worktree add -b feat/new-cart-ui ../new-cart-ui feat/cart-ui # 依照 feat/cart-ui 來建立 new-cart-ui 資料夾，並且建立和切換至新分支 feat/new-cart-ui

# 檢視目前所有的 worktree
git worktree list

# 移除 worktree
git worktree remove <資料夾路徑>
git worktree remove ../hotfix
```

:::tip

- 同一個分支**不能**同時存在於兩個 Worktree 中
- 如果有未 commit 的修改，Git 會阻止刪除動作。如果確定要刪除可以加上 `-f` 來強制刪除
  ```shell
    git worktree remove -f ../hotfix
  ```
- 忘記用 remove 指令直接將資料夾刪除，Git 的紀錄還是保留該 worktree，可以使用 `git worktree prune` 清理已經找不到的資料夾
  :::
