---
title: Markdown 示例
published: 2023-10-01
description: Markdown 博客文章的简单示例
tags: [Markdown, 博客, 演示]
category: 示例
draft: false
---

# 这是一个 h1 标题

段落之间以空行分隔

第二段， _斜体_,  **粗体**, 和 `等宽`。
分项列表如下:

- 这个
- 那个
- 另一个

请注意 --- 不考虑星号 --- 实际文本内容从第 4 列开始。

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

使用 3 个破折号表示长破折号。使用 2 个破折号表示范围（例如，“全部在第 12-14 章中”）。三个点...将转换为省略号。支持 Unicode。☺

## 这是一个 h2 标题

以下是一个编号列表:

1. 第一项
2. 第二项
3. 第三项

请再次注意实际文本如何从第 4 列开始（左侧 4 个字符）。以下是代码示例:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

你可能已经猜到了，缩进 4 个空格。顺便说一句，如果你愿意，你可以使用分隔块，而不是缩进块:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

（这使得复制和粘贴更容易）。您可以选择标记分隔块，以便 Pandoc 语法高亮显示它:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### 这是一个 h3 标题

现在有一个嵌套列表:

1. 首先，准备好以下原料:

    - 胡萝卜
    - 芹菜
    - 扁豆

2. 烧开一些水

3. 把所有筹码都倒入底池，然后遵循以下算法:

        找到木勺
        揭开锅盖
        搅拌
        盖锅
        将木勺不稳定地平衡在锅柄上
        等10分钟
        转到第一步（或完成后关闭燃烧器）

   不要撞击木勺，否则它会掉落

再次注意文本总是以 4 个空格的缩进排列（包括延续上面第 3 项的最后一行）

这是指向 [网站](http://foo.bar),  [本地文档](local-doc.html),
[当前文档中章节标题](#an-h2-header) 的链接。 这是脚注 [^1]。

`原文`：

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: 脚注文本放在此处

表格看起来如下:

尺寸 材质 颜色

---

9棕色皮革 10 天然麻帆布 11 透明玻璃

表格：鞋子、鞋子尺码以及材质

（以上是表格的标题。）Pandoc 还支持多行表格：

---

关键词文本

---

红色日落、苹果和其他红色或淡红色的东西。

绿色的树叶，小草，青蛙等东西都不容易存在。

---

接下来是水平线。

---

以下是定义列表：

apples
: Good for making applesauce.
oranges
: Citrus!
tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
| Line too
| Line tree

and images can be specified like so:

[//]: # (![example image]&#40;./demo-banner.png "An exemplary image"&#41;)

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
