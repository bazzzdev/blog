import { describe, expect, it } from "vitest";

import {
  formatPostDate,
  getPublishedPosts,
  sortPostsByDateDesc,
  type PostListItem,
} from "../src/lib/posts";

const posts: PostListItem[] = [
  {
    id: "older-post",
    slug: "older-post",
    data: {
      title: "Older Post",
      date: new Date("2024-02-14"),
    },
  },
  {
    id: "draft-post",
    slug: "draft-post",
    data: {
      title: "Draft Post",
      date: new Date("2024-05-09"),
      draft: true,
    },
  },
  {
    id: "newer-post",
    slug: "newer-post",
    data: {
      title: "Newer Post",
      date: new Date("2024-10-03"),
    },
  },
];

describe("sortPostsByDateDesc", () => {
  it("sorts posts from newest to oldest", () => {
    expect(sortPostsByDateDesc(posts).map((post) => post.slug)).toEqual([
      "newer-post",
      "draft-post",
      "older-post",
    ]);
  });
});

describe("getPublishedPosts", () => {
  it("filters drafts and keeps published posts sorted", () => {
    expect(getPublishedPosts(posts).map((post) => post.slug)).toEqual([
      "newer-post",
      "older-post",
    ]);
  });
});

describe("formatPostDate", () => {
  it("formats dates in dd.mm.yyyy", () => {
    expect(formatPostDate(new Date("2024-03-05"))).toBe("05.03.2024");
  });
});
