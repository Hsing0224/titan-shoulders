---
sidebar_position: 13
sidebar_label: 進階技巧
---

# 進階技巧

## 歷史重塑

### git reset

在本機拆除 commit 的指令。<br />
以 HEAD 為指標，強制移動到過去某個特定版本。且退回時會將異動的檔案保留至工作區。

```shell
git reset HEAD^
# git reset HEAD~1

# 回至某個 commit id
git reset 1a2b3c4
```

#### 決定退回程式碼的處理方法

git reset 有三個參數，來決定執行指令後程式碼的處理方法

- `--mixed`: 預設值。清空暫存區，但保留檔案變更。
- `--soft`: 保留暫存區和檔案變更。
- `--hard`: 捨棄暫存區與檔案變更，等於直接回到該 commit id 的狀態。

### git revert

當變更已經推上遠端儲存庫，如果使用 git reset 會篡改歷史，導致團隊會有衝突且不知道該如何處理。<br />
git revert 的概念為負負得正，會建立一個 commit 來覆蓋之前的變更，故紀錄是繼續往下走。

```shell
git revert a1b2c3d

# 撤銷上一個 commit
git revert HEAD
```

:::note 撤銷上一個 commit 為什麼不是 HEAD^
git reset 的退回上一個 commit 是使用 `git reset HEAD^`，為什麼 git revert 則是 `git revert HEAD`<br />
這差別在兩個指令的語意：

- git reset: 時光機，將 HEAD 回到哪一個 commit，故如果要回到前一個之前，是要跳到倒數第二個。
- git revert: 把目標 commit 做反向操作。故回到上一個 commit，則是將最新的 commit 做反向操作。
  :::

#### 連續 revert

```shell
git revert HEAD~3..HEAD
```

這是 Git 的範圍運算子。 `A..B`

- `..`:
- `A`: 起點，不包含。
- `B`: 終點，包含。

因此 `git revert HEAD~3..HEAD` 涵蓋了 3 個 commit 點：

- HEAD~2: 倒數第三個 commit
- HEAD~1: 倒數第二個 commit
- HEAD: 最新 commit

#### 先不用產生 commit

`-n` (`--no-commit`) 會先把反轉的變更保留在暫存區，等確認後再自行 commit

```shell
git revert -n a1b2c3d
git revert -n f9e8d7c

# 連續撤銷 3 個 commit 且暫時不建立 commit
git revert -n HEAD~3..HEAD
```

#### 撤銷合併節點

`-m` (`--mainline`) 是專門用來撤銷合併節點的指令。而且需要帶入 parent-number，來讓 Git 知道是要保留哪一邊

- 1: 當前分支原本的線
- 2: 被合併進來的線

```shell
git revert -m 1 <merge-commit-id>
```

:::note
如果連續 revert 中有合併節點，則 Git 會報錯。只能自行拆開處理。<br />
不過當 revert 了合併節點，後續要把分支再併進來，Git 會拒絕，因為這些變更已經合併過。只是你後來抵銷。
如果真的要再合併，只能 revert 你 revert 的合併節點。但這非常容易引發災難性的檔案衝突。<br />
**除非不得已，不然盡量避免去 revert 一個合併節點**
:::

#### 衝突處理

revert 時也可能會發生衝突，處理完衝突後

```shell
git add <檔案>

# 如果是連續 revert，則是執行 git revert --continue
git commit
```

### git cherry-pick

### git reflog

### git clean

## 歷史追溯

### git blame

### git bisect

## 里程碑

### git tag
