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
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = posts;
    // 過濾草稿
    if (draft && filterOutDrafts) return acc;
    // 過濾奇怪的未來文章 FIXME: 怎麼好像沒有用 操
    if (dayjs(date).isAfter(dayjs(new Date())) && filterOutFuturePosts) return acc;
    // 過濾不同類型
    if (category && slugify(post.frontmatter.category) !== category) return acc;

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
