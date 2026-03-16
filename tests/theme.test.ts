import { describe, expect, it } from "vitest";

import { getInitialTheme, normalizeTheme, type Theme } from "../src/lib/theme";

describe("normalizeTheme", () => {
  it("accepts only light and dark values", () => {
    expect(normalizeTheme("light")).toBe<Theme>("light");
    expect(normalizeTheme("dark")).toBe<Theme>("dark");
    expect(normalizeTheme("system")).toBeNull();
  });
});

describe("getInitialTheme", () => {
  it("prefers stored theme over system preference", () => {
    expect(getInitialTheme("dark", false)).toBe<Theme>("dark");
    expect(getInitialTheme("light", true)).toBe<Theme>("light");
  });

  it("falls back to system preference when there is no valid stored theme", () => {
    expect(getInitialTheme(null, true)).toBe<Theme>("dark");
    expect(getInitialTheme(undefined, false)).toBe<Theme>("light");
    expect(getInitialTheme("unexpected", true)).toBe<Theme>("dark");
  });
});
