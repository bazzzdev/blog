# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains Astro routes: `/` in `index.astro`, `/about`, and post routes in `posts/[slug].astro`.
- `src/layouts/` holds shared page shells, and `src/components/` contains reusable UI such as `ThemeToggle.astro`.
- `src/lib/` stores small testable helpers (`posts.ts`, `theme.ts`); keep view logic out of page files when possible.
- `src/styles/global.css` defines the site tokens, layout, and typography.
- `src/content.config.ts` configures Markdown content from `posts/`.
- `posts/` is the authoring source for blog posts. Each file should be Markdown with frontmatter like `title`, `date`, and optional `description`, `draft`.
- `tests/` contains Vitest unit tests for reusable logic.

## Build, Test, and Development Commands
- `npm install` installs dependencies. Use Node `>=22.12.0`.
- `npm run dev` starts the local Astro dev server.
- `npm run build` creates the static production build in `dist/`.
- `npm run preview` serves the built output locally.
- `npm test` runs the Vitest suite once.
- `npm run test:watch` runs tests in watch mode during development.

## Coding Style & Naming Conventions
- Follow the existing style: TypeScript/ Astro modules use 2-space indentation, double quotes, and small focused files.
- Use `PascalCase` for Astro components (`ThemeToggle.astro`), `camelCase` for functions, and lowercase kebab-style names for content files (`theme-without-noise.md`).
- Prefer plain utility extraction in `src/lib/` over embedding business logic inside `.astro` templates.
- No formatter or linter is configured yet; keep changes consistent with surrounding code and avoid unrelated reformatting.

## Testing Guidelines
- Tests use Vitest and live in `tests/*.test.ts`.
- Add or update tests for any logic added to `src/lib/` or other non-trivial behavior.
- Name tests by behavior, for example: `it("filters drafts and keeps published posts sorted", ...)`.
- Run `npm test` before submitting changes; run `npm run build` for any routing, styling, or content-pipeline change.

## Commit & Pull Request Guidelines
- History is minimal (`Initial commit from Astro`), so use short imperative commit messages such as `Add post sorting helpers` or `Refine flat editorial layout`.
- Keep commits scoped to one concern.
- PRs should include: a brief summary, testing notes (`npm test`, `npm run build`), and screenshots for visual changes.
- Link related issues when applicable and call out content/config changes explicitly.

## Content & Configuration Notes
- Post slugs come from Markdown filenames in `posts/`.
- Avoid committing secrets; this project is a static site and should keep configuration in code or documented env vars only if added later.
