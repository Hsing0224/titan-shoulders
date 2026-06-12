---
sidebar_position: 12
---

# MacOS 開發環境建置

## node

JavaScript 執行環境，透過[官網](https://nodejs.org/zh-tw)安裝。

:::tip
不要透過 `Homebrew` 安裝。方便 node 版本上的切換
:::

## oh my zsh

將 MacOS 內建的 zsh 做更好的配置，透過[官網](https://ohmyz.sh/)進行安裝。

### powerlevel10k

oh my zsh 的眾多主題之一，讓介面更為美觀

> [GitHub Repository](https://github.com/romkatv/powerlevel10k)

## Homebrew

Homebrew 是 MacOS/Linux 系統的套件管理工具，可至[官網](https://brew.sh/)依照步驟安裝

```shell
# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```shell
$ brew install [要安裝的套件]
```

### 安裝清單

- iTerm2: 比 MacOS 內建還好用的 Terminal
- btop: top 加強版
- eza: ls 加強版
- zoxide: cd 加強版
- bat: cat 加強版
- tlrc: man 加強版
- fd: find 加強版
- rg: grep 加強版
- fzf: 互動式模糊搜尋工具
- jq: 用於 json 的檢索工具
- yq: 用於 yaml 的檢索工具
- zstd: 壓縮工具
- Git: 版本控制工具
- gh: GitHub CLI
- uv: Python 套件管理工具
- aichat: 串接 API 後可直接在 shell 輸入 prompt

```shell
# 安裝 GUI 終端機應用程式
$ brew install --cask iterm2

$ # 安裝所有 CLI 開發與系統工具
brew install btop eza zoxide bat tlrc fd ripgrep fzf jq yq zstd git gh uv aichat
```
