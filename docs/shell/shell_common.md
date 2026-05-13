---
sidebar_position: 11
sidebar_label: 常用指令
---

# 常用的 shell 指令

## 導覽

### pwd

Print Working Directory 的縮寫，顯示目前所在的完整目錄路徑

### ls

列出目錄下的檔案

- `ls -l`: 以長格式顯示，依序為檔案權限、連結數、擁有者、群組、檔案大小、最後修改時間、檔案名稱
- `ls -a`: 顯示所有檔案，包含 `.` 開頭的隱藏檔
- `ls -h`: 將檔案大小轉為好閱讀的單位
  - 小於 1024 bytes: 直接顯示 B
  - 1024 ~ 1MB: 自動轉為 K
  - 1MB ~ 1GB: 自動轉為 M
  - 1GB 以上: 自動轉為 G
- `ls -r`: 反向排序
- `ls -R`: 遞迴顯示，子目錄裡的檔案也會一起列出來
- `ls -t`: 依照檔案修改時間排序，最新會在上面
- `ls -S`: 按檔案大小排序
- `ls -F`: 在檔名後加上類型符號
  - `/`: 代表資料夾
  - `*`: 代表可執行檔
  - `@`: 代表連結
- `ls -m`: 以逗號分隔並橫向列出檔案

:::note
指令可以組合一起

```shell
$ ls -t -r # 可以寫成 ls -tr
```

如果指令有排序上的衝突

```shell
$ ls -tS # 會參考最後一個，所以這邊會以檔案大小排序 ls -S 來執行
```

:::

#### ls -l 深入解析

當輸入指令會依序顯示檔案權限、連結數、擁有者、群組、檔案大小、最後修改時間、檔案名稱

1. 檔案權限，以 `drwxr-xr-x` 來舉例：
   - 第一個字元代表類型
     - `d`: 代表資料夾
     - `-`: 代表普通檔案
     - `l`: 代表符號連結(Link)
   - 後續 9 碼，每 3 個為一組，依序分別是擁有者、群組、其他人
     - `r`: 讀取
     - `w`: 寫入
     - `x`: 執行
     - `-`: 無權限

2. 連結數：下面還有多少個子目錄
3. 擁有者：檔案的主人
4. 群組：所屬群組
5. 檔案大小：數字代表大小(Bytes)，想要好讀需要加上 `-h`
6. 最後修改時間

- 今年修改，會顯示「月、日、時間」
- 距今超過半年，會顯示「月、日、年份」
- 使用 `ls -lT`，`T` 會顯示完整的時間資訊，包含秒和年份

### cd

Change Directory 的縮寫，切換目錄

- `cd /`: 根目錄
- `cd ~`: 回個人主目錄，也可以直接打 `cd`，不加上任何資訊
- `cd ..`: 回上一層
- `cd -`: 回上一個路徑

## 檔案操作

### mkdir

建立目錄

#### 建立多層目錄

```shell
$ mkdir -p project/src/assets
```

#### 一次建立多個資料夾

```shell
$ mkdir docs images videos
```

```shell
$ mkdir -p project/{docs,images,videos}
```

#### 顯示執行進度

```shell
$ mkdir -pv project/{docs,images,videos}
# project
# project/docs
# project/images
# project/videos
```

### touch

建立一個檔案，也可以修改檔案的時間戳記

### cp

Copy，複製檔案

#### 複製整個目錄

```shell
$ cp -r project_folder project_backup
```

#### 避免覆蓋現有檔案

使用 `-i`，如果有相同檔名，會詢問是否覆蓋

```shell
$ cp -i photo.jpg ~/pictures/
# 終端機詢問：overwrite ~/Pictures/photo.jpg? (y/n)
```

:::tip
輸入 `type cp`

- `cp is /bin/cp`: 則為系統未保護，建議可建立保護機制
- `cp is an alias for cp -i`: 則表示有將 `cp` 指令建立覆蓋的詢問機制
  :::

```shell
$ cp -n photo.jpg ~/pictures/ # 不覆蓋模式，有相同檔名則直接跳過
```

### mv

移動檔案，與 `cp` 一樣有不覆蓋檔案的保護機制

```shell
$ mv -i source.txt target.txt # 覆蓋前會先詢問
$ mv -n photo.jpg pictures/ # 若目標資料夾有相同檔案，則直接跳過
```

:::tip
與 `cp` 一樣，可以將 `-i` 做為保護機制
:::

### rm

#### 安全機制

- `-i` (interactive): 每刪除一個檔案都會詢問一次 `(y/n)`
- `-I` (大寫 I): 這是折衷方式。只有刪除 3 個以上檔案或遞迴刪除(`-r`)時詢問一次

#### 刪除空目錄

只刪除空的資料夾

```shell
$ rm -d folder/
```

#### 刪除目錄

- `-r` (recursive): 刪除資料夾及其子目錄的檔案
- `-f` (force): 強制刪除。檔案唯讀也不會詢問與不存在也不會報錯

:::danger
傳說中的大魔王，真的需要執行前請先再三檢查路徑，可以養成先使用 `ls`，確認檔案後再換成 `rm` 的習慣

```shell
$ ls
$ rm -rf
```

:::

## 文字內容處理

### cat

### less

### grep

## 系統權限

### sudo

Superuser DO，以系統管理員(root)的權限指令

### chmod

Change Mode，更改檔案的讀取、寫入、執行權限

#### 數字法

利用三個數字分別代表「擁有者、群組、其他人」

- `r` (讀取)：4
- `w` (寫入)：2
- `x` (執行)：1
- 無權限：0

常見數字組合：
| 數字 | 權限內容 | 意義 |
| :-- | :-- | :-- |
| 7 | 4+2+1 | rwx (讀寫執行全開) |
| 6 | 4+2+0 | rw- (可讀寫，不能執行) |
| 5 | 4+0+1 | r-x (可讀與執行，不能修改) |
| 4 | 4+0+0 | r-- (唯讀) |

#### 符號法

直接使用符號來指定對象、動作、權限

- 對象：`u` (擁有者)、`g` (群組)、`o` (其他人)、`a` (全部，如果沒寫等於全部)
- 動作： `+` (加入)、 `-` (移除)、 `=` (覆寫)
- 權限： `r`, `w`, `x`

```shell
$ chmod u=rwx,go=r . #將當前目錄設定為全開，群組、其他人一律強制改為唯讀
```

### top

顯示目前系統正在執行的程式、CPU、記憶體用量，可以按 `q` 離開

## 其他

### man

Manual，可以使用 `man 指令名稱`，來看到該指令的詳細說明

## Reference

> [Gemini](https://gemini.google.com/)
