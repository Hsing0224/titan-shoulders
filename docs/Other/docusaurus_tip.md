---
sidebar_position: 10
sidebar_label: Docusaurus小幫手
---

# Docusaurus 的一些用法

## .md 檔的設定

```markdown
---
id: #ID
title: #標題
description: #描述
sidebar_label: #側邊欄的名稱
sidebar_position: #側邊欄的順序
slug: #自定義的slug，用於生成檔案的URL
hide_title: #是否隱藏標題
hide_table_of_contents: #是否隱藏表格目錄
keywords: #關鍵詞
  - keyword1
  - keyword2
---
```

## category

```json title="_category_.json"
{
  "label": "名稱", // 類別名稱
  "position": 0, // 該類別的定位
  "link": null, // null不會產生索引頁
  "collapsible": false // 直接顯示子層
}
```

## markdown

### 備註

```markdown
:::note
內容
:::
```

:::note
內容
:::

### 提示

```markdown
:::tip 標題可以換
內容
:::
```

:::tip 標題可以換
內容
:::

### 訊息(預設叫信息...)

```markdown
:::info
內容
:::
```

:::info
內容
:::

### 警告

```markdown
:::caution
內容
:::
```

:::caution
內容
:::

### 危險

```markdown
:::danger
內容
:::
```

:::danger
內容
:::

[更多用法](https://docusaurus.io/docs/markdown-features/admonitions)
