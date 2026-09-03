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

`pnpm lint` currently reports 39 warnings and 0 errors, all from the untouched `create-next-app` markup in `app/page.tsx` (Tailwind class ordering, arbitrary-value canonicalization, and `bg-foreground` / `text-background`, which stopped being real Tailwind classes when the scaffolded `@theme inline` block came out of `app/globals.css`). That is the pre-existing baseline, not something you introduced — but don't add to it.

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
- **Tailwind v4**, CSS-first: there is no `tailwind.config.*`, and no `@theme` block either. `app/globals.css` is now just two imports — Tailwind, then `./styles.css` as `layer(components)` so utilities keep winning over the design system. PostCSS wiring is `@tailwindcss/postcss`; `.prettierrc` and `settings.tailwindcss.cssConfigPath` both still point at `app/globals.css`, which resolves `styles.css` through the import.
- **Design system** lives in `app/styles.css` — the source of truth for the look. Color/spacing/radius/elevation/typography tokens are plain `:root` custom properties, followed by component classes (`.btn`, `.card`, `.input`, `.nav`, `.table`, `.dialog`, …). Because the tokens are **not** registered via `@theme`, they generate no Tailwind utilities: there is no `bg-accent`. Reach for a component class, or `var(--color-accent)` in an arbitrary value.
- **Fonts** come from `next/font/google` in `app/layout.tsx` (Archivo, Noto Sans TC). The font classes go on `<html>`, the same element `:root` selects, which is why `--font-heading` / `--font-body` in `styles.css` can resolve `var(--font-archivo)` and `var(--font-noto-sans-tc)`. Don't add `@import url()` for webfonts — that reintroduces the runtime request to Google that `next/font` exists to remove.
- **Prettier plugins**: `organize-imports` (import order is enforced, don't hand-sort) and `tailwindcss` (class order). `organizeImportsSkipDestructiveCodeActions: true` keeps it from deleting imports it thinks are unused, so a formatting pass never silently removes code.
- **ESLint flat config** composes `eslint-config-next` core-web-vitals + typescript, then `eslint-plugin-tailwindcss` (pointed at `app/globals.css` via `settings.tailwindcss.cssConfigPath`, since there is no `tailwind.config.*` for it to find), with `eslint-config-prettier` last. `eslint.config.mjs` re-declares the default ignores because adding `globalIgnores` overrides them.
- Path alias `@/*` maps to the repo root.
