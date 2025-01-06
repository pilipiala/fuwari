---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '阅读有关 Fuwari 中 Markdown 功能的更多信息'
image: ''
tags: [Demo, Example, Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub Repository Cards
您可以添加链接到 GitHub 存储库的动态卡，在页面加载时，从 GitHub API 提取存储库信息。 

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码创建 GitHub 存储库卡 `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## 警告

支持以下类型的警告: `note` `tip` `important` `warning` `caution`

:::note
Highlights information that users should take into account, even when skimming.
:::

::: 提示
Optional information to help a user be more successful.
:::

::: 重要的
Crucial information necessary for users to succeed.
:::

::: 警告
Critical content demanding immediate user attention due to potential risks.
:::

::: 小心
Negative potential consequences of an action.
:::

### 基本语法

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### 自定义标题

警告的标题可以自定义

:::note[我的自定义标题]
这是一条带有自定义标题的注释
:::

```markdown
:::note[我的自定义标题]
这是一条带有自定义标题的注释
:::
```

### GitHub 语法

> [!tip]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也受支持

```
> [!提示]
> GitHub 语法也受支持

> [!提示]
> GitHub 语法也受支持
```