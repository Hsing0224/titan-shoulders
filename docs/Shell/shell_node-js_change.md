---
sidebar_position: 11
sidebar_label: node 切換版本
---

# node 版本切換

公司最近升級 angular，所以 node.js 的版本也跟著升級。<br />
但畢竟也有舊專案需要維護，故有 node 版本切換的需求。

## 安裝

至 [nvm](https://github.com/nvm-sh/nvm) 的 GitHub 頁面輸入指令安裝

## 指令

### 查看可安裝的版本

```shell
$ nvm ls-remote
```

### 查看可安裝的版本(只顯示 LTS )

```shell
$ nvm ls-remote --lts
```

:::info
LTS = Long-term support，意指長期支援的版本
:::

### 查看已安裝的 node.js 版本

```shell
$ nvm ls
```

<!-- 補回傳的訊息 -->

### 切換 node.js 版本

```shell
$ nvm use <version>
```

:::tip
版本號要帶 v ，例： v20.13.1
:::

每次都要輸入一長串的版本號是很麻煩，因此有兩個方法比較簡易。

- 利用 CLI 的自動填入(按 Tab)

```shell
$ nvm use v20 # 這邊按 tab
```

:::caution
當 v20 版本只有一個的時候才可以使用 tab 讓 CLI 自動填入
:::

- 利用 nvm 部分匹配功能

```shell
$ nvm use v20
```

:::note
直接輸入讓 nvm 匹配目前安裝的版本
:::

- 建立 **.nvmrc** 檔案讓 nvm 可以使用對應的版本

```shell
$ nvm use
```

- 將版本改為預設

```shell
$ nvm alias default <version> # 當下次開啟 CLI 介面時，預設就會是該版本
```

### 切換成功

切換 node.js 版本後，會有一段訊息，其中也有顯示使用的 npm 版本

```shell
Now using node v20.13.1 (npm v10.8.1)
```

## Reference

> [nvm - GitHub](https://github.com/nvm-sh/nvm)
