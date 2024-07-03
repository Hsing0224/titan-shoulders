---
sidebar_position: 1
sidebar_label: node.js 切換版本
---

# node 版本切換

公司最近升級 angular ，所以 node.js 的版本也跟著升級。<br />
但畢竟也有舊專案需要維護，故有 node 版本切換的需求。

## 安裝
至 [nvm](https://github.com/nvm-sh/nvm) 的 Github 頁面輸入指令安裝

## 指令

查看可安裝的版本
```powershell
nvm ls-remote
```

查看可安裝的版本(只顯示 LTS )
```powershell
nvm ls-remote --lts
```

:::info
LTS = Long-term support，意指長期支援的版本
:::

查看已安裝的 node.js 版本
```powershell
nvm ls
```

切換 node.js 版本
```powershell
nvm use <version>
```

:::tip
版本號要帶 v ，例： v20.13.1
:::

切換 node.js 版本後，會有一段訊息，其中也有顯示使用的 npm 版本
```powershell
Now using node v20.13.1 (npm v10.8.1)
```

## Reference

> [nvm - GitHub](https://github.com/nvm-sh/nvm)