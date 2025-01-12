---
title: 在帖子中嵌入视频
published: 2023-08-01
description: 这篇文章演示了如何在博客文章中包含嵌入视频。
tags: [示例、视频]
category: 示例
draft: false
---

只需从 Bilibili、YouTube或其他平台复制嵌入代码，并将其粘贴到 markdown 文件中即可。

```yaml
---
title: 在帖子中包含视频
published: 2023-10-19
// ...
---
Bilibili：<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
YouTube：<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```

>## Bilibili

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?isOutside=true&aid=80433022&bvid=BV1GJ411x7h7&cid=137649199&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

>## YouTube

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

