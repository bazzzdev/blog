export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "theme-preference";

export function normalizeTheme(value: string | null | undefined): Theme | null {
  return value === "light" || value === "dark" ? value : null;
}

export function getInitialTheme(
  storedTheme: string | null | undefined,
  systemPrefersDark: boolean,
): Theme {
  return normalizeTheme(storedTheme) ?? (systemPrefersDark ? "dark" : "light");
}

export function getThemeScript(storageKey = THEME_STORAGE_KEY) {
  return `
    (() => {
      const storageKey = ${JSON.stringify(storageKey)};
      const storedTheme = localStorage.getItem(storageKey);
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme =
        storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : systemPrefersDark
            ? "dark"
            : "light";

      document.documentElement.dataset.theme = theme;
      document.documentElement.classList.toggle("dark", theme === "dark");
    })();
  `;
}
