## Convert TanStack Start SSR → Vite + React SPA

### Goal
Strip SSR/server runtime. Keep all existing UI (portfolio page, OperatorsInstinct, shadcn components, styles, animations). Produce a static `dist/index.html` from `npm run build` (Vite default).

### Routing decision
The app is effectively single-page (one `/` route with hash anchors `#dashboard`, `#manual`, `#writing`). Simplest viable conversion: drop file-based routing entirely and mount the index page directly in a new `src/main.tsx` → `src/App.tsx`. No `react-router-dom` needed since there are no real sub-routes.

If you'd prefer to keep `@tanstack/react-router` (client-only, no Start) for future routes, I can do that instead — say the word.

### Changes

**Delete (SSR/Start-specific):**
- `src/server.ts`
- `src/start.ts`
- `src/router.tsx`
- `src/routeTree.gen.ts`
- `src/routes/__root.tsx`
- `src/routes/index.tsx` → content moved into `src/App.tsx`
- `src/routes/README.md`
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts` (SSR error plumbing)
- `src/lib/config.server.ts`, `src/lib/api/example.functions.ts` (server fn examples)

**Create:**
- `index.html` at project root (Vite SPA entry, includes `<div id="root">`, viewport meta, title/description, Inter font `<link>`, favicon)
- `src/main.tsx` — `createRoot(...).render(<App />)`, imports `./styles.css`
- `src/App.tsx` — current `Index` component body from `src/routes/index.tsx`, wrapped in a `<QueryClientProvider>` (kept for parity, optional)

**Modify:**
- `vite.config.ts` — replace `@lovable.dev/vite-tanstack-config` with a plain Vite config: `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, `@` alias to `src`. No nitro, no tanstackStart.
- `package.json` — scripts become `vite` / `vite build` / `vite preview`. Remove `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-devtools`, `@lovable.dev/vite-tanstack-config`, `nitro`-related deps. Add `@vitejs/plugin-react` if not present.
- `tsconfig.json` — drop TanStack-specific includes; keep strict + `@/*` path alias.
- `public/llms.txt` — keep as-is (served from `/public`).

### Verification
- `npm run build` produces `dist/index.html` plus hashed JS/CSS in `dist/assets/`.
- `npm run preview` serves the SPA; hash navigation (`#dashboard`, `#manual`, `#writing`) still scrolls correctly.
- All animations (Framer Motion, GSAP scroll-scrub in `OperatorsInstinct`) work unchanged.

### Risks / notes
- Lovable's preview environment is configured for the TanStack Start template; the in-app preview may behave differently after this conversion (it expects the Start dev server). The build will still produce a deployable static SPA.
- No SSR means no per-route `head()` metadata — all SEO meta lives in the single `index.html`.

### Confirm before I build
1. OK to remove `@tanstack/react-router` entirely (no client router), or keep it for future routes?
2. Keep `@tanstack/react-query` provider in `App.tsx` (harmless, useful later) — yes/no?
