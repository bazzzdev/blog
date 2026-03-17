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

export function getAdjacentPosts(posts: PostListItem[], slug: string) {
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {
      previousPost: null,
      nextPost: null,
    };
  }

  return {
    previousPost: posts[currentIndex + 1] ?? null,
    nextPost: posts[currentIndex - 1] ?? null,
  };
}

export function formatPostDate(date: Date | string) {
  return dateFormatter.format(toDateValue(date));
}
