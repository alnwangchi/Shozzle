---
layout: '@layouts/BlogPostLayout.astro'
title: Shozzle blog post introduction
date: 2023-03-12
author: Allen Wang
image: { src: '/images/MyHead.png', alt: '範例' }
description: Shozzle 首篇文章登場，大致上介紹一下如何在 Shozzle 新增一篇文章的流程以及一些內容的說明
draft: false
category: Astro
---

## Po 文流程

## 關於文章的資訊

在 .md 檔案上面的資訊會是一包 frontmatter 物件

```markup
---
layout: '@layouts/BlogPostLayout.astro'
title: Shozzle blog post introduction
date: 2023-03-12
author: Allen Wang
image: { src: '/images/MyHead.png', alt: '範例' }
description: 這是一篇範例說明文章
draft: false
category: Astro
---
```

| info        | description                                       |
| ----------- | ------------------------------------------------- |
| layout      | 文章共用版型 (基本不動)                           |
| title       | 文章標題                                          |
| date        | 日期 (影響排序)                                   |
| author      | 作者 (影響分類)                                   |
| image       | 首圖 ( TBC: 預設 or 如何呈現 )                    |
| description | 文章說明 (影響列表說明以及 SEO meta tag 跟 title) |
| draft       | 草稿 (寫一半還沒要發的時候用)                     |
| category    | 文章類型 (影響分類)                               |

下方就正常以 markdown 語法撰寫即可

## import markdown file

專案中取得得文章的方式

```javascript
// Import a single file
import * as myPost from '../pages/post/my-post.md';

// Import multiple files with Astro.glob
const posts = await Astro.glob('../pages/post/*.md');
```

藉此方式取得後再用上述的 [關於文章的資訊](#關於文章的資訊) 然後再配合我寫了個 util function `organizeAllPosts` 來決定我最終會拿到什麼文章
