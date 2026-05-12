# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, outputs to .next/dev)
npm run build    # Production build (Turbopack by default)
npm run start    # Start production server
npm run lint     # Run ESLint (eslint directly — not next lint, which was removed in v16)
```

No test runner is configured yet.

## Architecture

Next.js **16.2.6** App Router project with React 19.2, TypeScript (strict), and Tailwind CSS v4.

- `app/` — App Router: `layout.tsx` is the root layout, `page.tsx` is the home route. New routes are added as `app/<segment>/page.tsx`.
- `public/` — Static assets, referenced from `/`.
- `@/*` path alias maps to the repo root (configured in `tsconfig.json`).

## Next.js 16 Breaking Changes

Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Key v16 changes that differ from training data:

**Async Request APIs** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are now async-only. Always `await` them:
```tsx
export default async function Page({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const query = await searchParams
}
```
Run `npx next typegen` to generate `PageProps`, `LayoutProps`, and `RouteContext` type helpers.

**`middleware` → `proxy`** — The `middleware.ts` file and `middleware` export are deprecated. Rename to `proxy.ts` and export `proxy`. The proxy runtime is Node.js only (no edge runtime). Use `middleware` only if you need the edge runtime.

**Linting** — `next lint` is removed. Use `eslint` directly (already in `package.json` scripts). `next build` no longer runs the linter.

**Turbopack is default** — Both `next dev` and `next build` use Turbopack. To opt out: `next build --webpack`. Turbopack config is now a top-level `turbopack` key in `next.config.ts`, not under `experimental`.

**Caching APIs**
- `revalidateTag(tag, cacheLife)` now requires a second `cacheLife` argument (e.g. `'max'`).
- `updateTag(tag)` — new Server Actions-only API for immediate cache refresh (read-your-writes semantics).
- `refresh()` — refreshes the client router from a Server Action.
- `cacheLife` and `cacheTag` are stable (no `unstable_` prefix needed).

**PPR** — The `experimental.ppr` flag is removed. Use `cacheComponents: true` in `next.config.ts` instead.

**Parallel Routes** — All `@slot` parallel route slots require an explicit `default.js` file or the build fails.

**Removed entirely**: AMP support, `serverRuntimeConfig`/`publicRuntimeConfig` (use env vars), `devIndicators.appIsrStatus/buildActivity`, `experimental.dynamicIO` (renamed to `cacheComponents`).

**Images** — `next/legacy/image` is deprecated (use `next/image`). `images.domains` is deprecated (use `images.remotePatterns`). New defaults: `minimumCacheTTL` is 4 hours, `qualities` defaults to `[75]`, 16px removed from `imageSizes`.


## Development rules

@docs/rules/code-style.md
@docs/rules/components.md
@docs/rules/state-management.md
@docs/rules/data-fetching.md
@docs/rules/error-handling.md
@docs/rules/performance.md
@docs/rules/git.md
