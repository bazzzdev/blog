import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const aboutPage = readFileSync(new URL("../src/pages/about.astro", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");

describe("about page layout", () => {
  it("keeps the prose block in the same content container width as posts", () => {
    expect(aboutPage).toContain('<div class="prose-panel content-container reveal">');
    expect(aboutPage).not.toContain('<div class="about-grid content-container reveal">');
  });

  it("does not use a split grid that narrows the prose column", () => {
    expect(globalStyles).not.toContain("lg:grid-cols-[minmax(0,1fr)_15rem]");
  });
});
