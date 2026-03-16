export interface PostListItem {
  id: string;
  slug: string;
  data: {
    title: string;
    date: Date | string;
    description?: string;
    draft?: boolean;
  };
}

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function toDateValue(value: Date | string) {
  return value instanceof Date ? value : new Date(value);
}

export function sortPostsByDateDesc(posts: PostListItem[]) {
  return [...posts].sort((left, right) => {
    return toDateValue(right.data.date).getTime() - toDateValue(left.data.date).getTime();
  });
}

export function getPublishedPosts(posts: PostListItem[]) {
  return sortPostsByDateDesc(posts).filter((post) => !post.data.draft);
}

export function formatPostDate(date: Date | string) {
  return dateFormatter.format(toDateValue(date));
}
