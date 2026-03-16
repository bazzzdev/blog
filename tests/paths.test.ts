import { describe, expect, it } from "vitest";

import { withBase } from "../src/lib/paths";

describe("withBase", () => {
  it("keeps root-relative paths unchanged for root deployments", () => {
    expect(withBase("/", "/")).toBe("/");
    expect(withBase("/about", "/")).toBe("/about");
    expect(withBase("posts/slow-web", "/")).toBe("/posts/slow-web");
  });

  it("prefixes paths for project GitHub Pages deployments", () => {
    expect(withBase("/", "/blog/")).toBe("/blog/");
    expect(withBase("/about", "/blog/")).toBe("/blog/about");
    expect(withBase("/posts/slow-web", "/blog/")).toBe("/blog/posts/slow-web");
  });
});
