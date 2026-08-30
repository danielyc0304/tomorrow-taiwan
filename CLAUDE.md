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
pnpm commit         # commitizen prompt — the intended way to commit
```

Type checking: `pnpm exec tsc --noEmit --incremental false` (the project sets `"incremental": true`, so the flag keeps `tsconfig.tsbuildinfo` out of the tree).

There is no test framework wired up yet.

## Commit workflow

Commits are gated by two husky hooks:

- `pre-commit` → `lint-staged`, which runs `eslint --fix` then `prettier --write --ignore-unknown` over **every** staged file (`**/*`). Formatting is handled here — don't run prettier manually.
- `commit-msg` → `commitlint` with `@commitlint/config-conventional` **plus** `references-empty: [2, "never"]`. A commit message with no issue reference is rejected.

The reference is a `TT-` Jira key (`issuePrefixes: ["TT-"]`) placed in the post-body as `Refs: TT-<n>`. `pnpm commit` (commitizen with `@digitalroute/cz-conventional-changelog-for-jira`) generates this shape automatically; hand-written messages must include the trailer or the hook fails. Branches are named `type/TT-<n>-short-description`, which is where the key comes from.

## Stack notes

- **Next.js 16 App Router** (`app/`), React 19. Route/layout prop types come from Next's generated globals — e.g. `RootLayout` is typed `LayoutProps<"/">`, not a hand-written props interface. Read `node_modules/next/dist/docs/` before writing framework code (see AGENTS.md).
- **Tailwind v4**, CSS-first: there is no `tailwind.config.*`. Theme tokens live in `@theme inline` inside `app/globals.css`, wired through PostCSS via `@tailwindcss/postcss`. `.prettierrc` points `tailwindStylesheet` at that file so class sorting resolves the custom theme.
- **Prettier plugins**: `organize-imports` (import order is enforced, don't hand-sort) and `tailwindcss` (class order).
- **ESLint flat config** composes `eslint-config-next` core-web-vitals + typescript, with `eslint-config-prettier` last. `eslint.config.mjs` re-declares the default ignores because adding `globalIgnores` overrides them.
- Path alias `@/*` maps to the repo root.
