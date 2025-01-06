---
title: Fuwari 的简单指南
published: 2024-04-01
description: "如何使用此博客模板"
image: "./cover.jpeg"
tags: ["Fuwari", "博客", "定制"]
category: 指南
draft: false
---

> 封面图片来源: [来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板使用 [Astro](https://astro.build/)构建。您可以在 [Astro Docs](https://docs.astro.build/)中找到答案。

## 文章前言

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章
image: ./cover.jpg
tags: [博客, 演示]
category: 前端
draft: false
---
```

| 属性     | 描述                                                                                                                       |
|---------------|--------------------------------------------------------------------------------------------------------------------------|
| `title`       | 帖子的标题                                                                                                                    |
| `published`   | 帖子发布的日期                                                                                                                  |
| `description` | 帖子的简短描述（显示在索引页上）                                                                                                         |
| `image`       | 文章封面图片路径设置: <br/>1.使用网页图片: 以 `http://` 或 `https://`开头<br/>2.使用本地 `public` 目录中的图片: 以 `/`开头 <br/>3. 不带任何前缀: 相对于 markdown 文件 |
| `tags`        | 帖子的标签                                                                                                                    |
| `category`    | 帖子的类别                                                                                                                    |
| `draft`        | 如果该帖子仍为草稿，则不会显示                                                                                                          |

## 在哪里放置帖子文件



您的帖子文件应放在 `src/content/posts/` 目录中。 您还可以创建子目录以更好地组织您的帖子和资产。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
