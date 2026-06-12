---
sidebar_position: 10
sidebar_label: 基礎知識
---

# 基礎知識

時不時會在工作上用到指令來達成一些事情。<br />
以一個沒什麼使用過這些命令的小菜雞來說，實屬有點難以上手。<br />
好在有 AI 的幫忙一步一步學習之外，趁著 2025 年各家 AI 大廠紛紛推出 CLI 工具，隨著這波浪潮，學一下怎麼帥氣的衝浪吧。

## 一些默契

會在一些技術文看到

```shell
$ ls
```

看到就納悶，為什麼需要 `$` 呢？我都直接打 `ls`。<br />原來是區分 "輸入" 與 "輸出"。<br />
而如果有 `#`，則代表最高權限

```shell
# systemctl restart
```

## 使用技巧

### &&、||、;

- `&&`: 前面指令成功接續執行
- `||`: 前面指令失敗才執行
- `;`: 不管成功與否皆執行

```shell
$ mkdir dist && cp app.js dist/
$ ping host || echo "unreachable"
$ cd /tmp ; ls ; pwd
```

### |

把前一個指令輸出結果往後傳

```shell
$ ls -la | grep ".js"
```

### >、>>

- `>`: 覆蓋
- `>>`: 新增至檔案最後一行

```shell
echo "hello" > out.text # 檔案內容會只有輸入的內容
echo "world" >> out.text
```

### alias

別名，為指令來自定義輸入的指令

```shell
alias ll="ls -la"
alias gs="git status"
alias # 顯示全部別名
unalias ll # unalias 為取消
```

### 自定義函式

使用 `mkdir` 建立目錄後進入該目錄，本身沒有對應的指令，但可以透過自定義函式來新增
原本指令為：

```shell
$ mkdir test_dir && cd test_dir
```

可將其封裝：

```shell
mkcd() {
  mkdir -p "$1" && cd "$1"
}
```

#### 參數對照表

| 變數    | 代表意義                 | 範例說明                     |
| :------ | :----------------------- | :--------------------------- |
| `$0`    | 執行的指令或腳本名稱本身 | `mkdir` 或 `./script.sh`     |
| `$1`    | 第一個參數               | `mkdir folder1` 的 `folder1` |
| `${10}` | 第十個以上的參數         | 超過 9 之後要加大括號        |

## Reference

> [Gemini](https://gemini.google.com/)
