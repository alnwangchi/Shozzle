import dayjs from 'dayjs';

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function commonDayFormatter(day) {
  return dayjs(day).format('YYYY-MM-DD');
}

// 各個文章顯示設定
export function organizeAllPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
    category = null,
    author = null
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = posts;
    const categoryList = multiCategoryHandler(post.frontmatter.category).map((c) => slugify(c));
    // 過濾草稿
    if (filterOutDrafts && draft) return acc;
    // 過濾奇怪的未來文章 FIXME: 怎麼沒有用 操
    if (filterOutFuturePosts && dayjs(date).isAfter(dayjs(new Date()))) return acc;
    // 過濾不同類型
    if (category && !categoryList.includes(category)) return acc;
    // 過漏不同作者
    if (author && author !== post.frontmatter.author) return acc;

    acc.push(post);

    return acc;
  }, []);

  // 依照時間排序
  if (sortByDate) {
    filteredPosts.sort((a, b) => dayjs(b.frontmatter.date) - dayjs(a.frontmatter.date));
  }

  // 顯示上限
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

// for category 篇數計算及最新時間
// 透過左邊文章的類別(categoryList)來與所有文章交叉比對，來計算與左邊文章類別一樣的文章數以及最後更新日期 by Jamie
export const categoryAccumulator = (postsArr, categoryList) => {
  const result = categoryList.reduce((acc, cur) => {
    const posts = postsArr.filter((c) =>
      multiCategoryHandler(c.frontmatter.category).includes(cur)
    );
    return {
      ...acc,
      [cur]: {
        count: posts.length,
        latest: dayjs(posts[0].frontmatter.date).format('MMM-DD')
      }
    };
  }, {});

  return result;
};

// for multiple categories
export const multiCategoryHandler = (categoryStr) => categoryStr.split(',').map((c) => c.trim());
