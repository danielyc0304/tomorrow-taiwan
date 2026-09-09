# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is pinned to `pnpm@11.24.0` via `packageManager` — use pnpm only.

```bash
pnpm dev            # next dev (http://localhost:3000)
pnpm build          # next build
pnpm start          # serve the production build
pnpm lint           # eslint (flat config, no args needed)
pnpm test           # vitest, watch mode
pnpm commit         # commitizen prompt — the intended way to commit
```

Type checking: `pnpm exec tsc --noEmit --incremental false` (the project sets `"incremental": true`, so the flag keeps `tsconfig.tsbuildinfo` out of the tree).

`pnpm lint` currently reports 2 warnings and 0 errors, both `no-unused-vars` on the `setIsLogin` placeholders in `components/shared/header/navbar.tsx` and `components/shared/header/auth.tsx` — the login flag is hard-coded until auth is wired up. That is the baseline; don't add to it. (The 39 warnings that used to sit here came from the `create-next-app` markup in `app/page.tsx`, which was deleted along with the scaffolded `public/*.svg` assets.)

## Testing

Vitest, configured in `vitest.config.mts`: `jsdom` environment, `@vitejs/plugin-react` for JSX, and `resolve.tsconfigPaths` (Vitest's own option — no plugin involved) so the `@/*` alias resolves in tests. `@testing-library/react` is available; there is no global setup file, so each test imports what it needs.

```bash
pnpm test                                # watch mode
pnpm exec vitest run                     # single pass
pnpm exec vitest run app/page.test.tsx   # one file
pnpm exec vitest run -t "renders heading" # one test by name
```

No tests exist yet, but `passWithNoTests: true` is set, so `vitest run` prints "No test files found" and still exits 0 — CI stays green until the first test lands. Discovery pattern is `**/*.{test,spec}.?(c|m)[jt]s?(x)`.

## Commit workflow

Commits are gated by two husky hooks:

- `pre-commit` → `lint-staged`, which runs `eslint --fix` then `prettier --write --ignore-unknown` over **every** staged file (`**/*`). Formatting is handled here — don't run prettier manually.
- `commit-msg` → `commitlint` with `@commitlint/config-conventional` **plus** `references-empty: [2, "never"]`. A commit message with no issue reference is rejected.

The reference is a `TT-` Jira key (`issuePrefixes: ["TT-"]`) placed in the post-body as `Refs: TT-<n>`. `pnpm commit` (commitizen with `@digitalroute/cz-conventional-changelog-for-jira`) generates this shape automatically; hand-written messages must include the trailer or the hook fails. Branches are named `type/TT-<n>-short-description`, which is where the key comes from.

## Stack notes

- **Next.js 16 App Router** (`app/`), React 19. Route/layout prop types come from Next's generated globals — e.g. `RootLayout` is typed `LayoutProps<"/">`, not a hand-written props interface. Read `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md).
- **Tailwind v4**, CSS-first: there is no `tailwind.config.*`. `app/globals.css` imports Tailwind, then `./styles.css` as `layer(components)` so utilities keep winning over the design system, then an `@theme inline` block that re-exports the `styles.css` tokens a component actually needs — it is an opt-in list that grows as you use colors, so expect to add a line there before `text-neutral-800` or `leading-1.02` exists — plus the breakpoints (`sm` 560px, `md` 720px, `lg` 900px, `xl` 1080px). PostCSS wiring is `@tailwindcss/postcss`; `.prettierrc` and `settings.tailwindcss.cssConfigPath` both point at `app/globals.css`, which resolves `styles.css` through the import.
- **Design system** lives in `app/styles.css` — the source of truth for the look. Color/spacing/radius/elevation/typography tokens are plain `:root` custom properties, followed by component classes (`.btn`, `.card`, `.input`, `.nav`, `.table`, `.dialog`, …). A token generates a utility (`bg-accent`, `font-heading`) only once it is re-exported through the `@theme inline` block in `globals.css`; for anything not listed there, reach for a component class or `var(--color-…)` in an arbitrary value. The component classes themselves are plain CSS in `layer(components)`, not `@utility`, so Tailwind's class list never contains them — that layer choice is deliberate (it guarantees any utility overrides them) and the cost is that ESLint has to be told about each one, see below.
- **Components** are filed by scope: `components/shared/<feature>/` for what the root layout mounts on every route (`shared/header`, `shared/footer`), `components/<route>/<section>/` for a single page's sections (`home/hero`). Inside a directory there is one file per part, each with a default export, plus a file named after the directory that composes them (`hero.tsx` → `title` + `stats`, `stats.tsx` → `stat`). Server components by default; `"use client"` only where state or `usePathname` is needed. Static data a section renders (nav items, footer link groups, stat figures) sits in a module-level `const` in the composing file until it comes from a real source.
- **Fonts** come from `next/font/google` in `app/layout.tsx` (Archivo, Noto Sans TC). The font classes go on `<html>`, the same element `:root` selects, which is why `--font-heading` / `--font-body` in `styles.css` can resolve `var(--font-archivo)` and `var(--font-noto-sans-tc)`. Don't add `@import url()` for webfonts — that reintroduces the runtime request to Google that `next/font` exists to remove.
- **Prettier plugins**: `organize-imports` (import order is enforced, don't hand-sort) and `tailwindcss` (class order). `organizeImportsSkipDestructiveCodeActions: true` keeps it from deleting imports it thinks are unused, so a formatting pass never silently removes code.
- **ESLint flat config** composes `eslint-config-next` core-web-vitals + typescript, then `eslint-plugin-tailwindcss` (pointed at `app/globals.css` via `settings.tailwindcss.cssConfigPath`, since there is no `tailwind.config.*` for it to find), with `eslint-config-prettier` last. `eslint.config.mjs` re-declares the default ignores because adding `globalIgnores` overrides them.
  - The plugin is v4, which dropped the eslintrc-era config: `configs["flat/recommended"]` is `undefined` and the `||` fallback to `configs.recommended` is what actually applies (that two-line form comes straight from the plugin's README).
  - The local config object repeats `plugins: { tailwindcss }` because flat config scopes `plugins` per object — a `tailwindcss/*` rule set in an object that does not declare the plugin fails with "could not find plugin".
  - `tailwindcss/no-custom-classname` validates a class by asking Tailwind's design system for its order, so it only recognizes real utilities. Design-system classes must be listed in the rule's `whitelist`, whose entries are matched as anchored regexes (`^…$`) — `btn(-(ghost|secondary))?` today. Add to it when you start using another `styles.css` component class.
- Path alias `@/*` maps to the repo root.
