## Scope

Touches only `src/routes/index.tsx` (Execution Dashboard + Operating Manual). Hero, Operator's Instinct, Architecture Vault, and Footer stay as-is. Note: the current codebase does not contain an "80/40 Execution Rule" principle, a Motivation & Fit section, or a Writing/Articles section — the new "Model & Token Fluency" principle will be appended as Principle 4 after "Long-Range Strategic Instinct". I will flag this and proceed unless you say otherwise.

## 1. Card 1 — strip the pipeline viz

In the "AI Production Pipeline" `DashboardCard`, remove the `<PipelineViz />` child and delete the `PipelineViz` component definition. The card keeps its tag, title, metric, and body; the bottom slot becomes empty padding (the existing `mt-auto` wrapper renders nothing, preserving card height alignment via the grid).

## 2 + 3. Replace Card 3

Delete the current Card 3 ("Token Economics & ROI") plus the `CostCurve` component. Insert a new Card 3:

- Tag: `GROWTH & ADOPTION`
- Title: `Platform Scale & Adoption`
- Metric: `150+ Institutional Partners | 87% CSAT`
- Body: the provided copy about EU-funded deep tech platform, 0→150 partners, 55% growth in 6 months.
- Same `md:col-span-3` width slot as the previous card 3, same hover-scale and stagger (`index={2}`, 200ms delay — already wired).

New child component `AdoptionViz`:
- Large odometer number ticking 0 → 150 over ~1.6s ease-out, triggered once via `useInView(ref, { once: true, amount: 0.4 })` and a `motion.span` with `animate` driven by a `useMotionValue` + `animate()` from `motion/react`, rendered with `Math.round`.
- Underneath: a thin horizontal track with a fill bar animating `width: 0% → 55%` (ease-out, ~1.4s) on the same in-view trigger, plus a caption `55% adoption growth · 6mo`.
- Honors `prefers-reduced-motion`: skip tween, render final values.

## 4. New Operating Manual principle — "Model & Token Fluency"

Append a 4th item to the `principles` array with the provided long-form text. Add an `extra` slot rendering `TokenTierVisual`:

- Three stacked rows (Tier 1, Tier 2, Tier 3), each a label + a horizontal bar inside the existing `bg-background/50` card frame.
- Visual weight encoded by bar height + opacity + inner border, not color shifts:
  - Tier 2 (High-Risk/Confidential): tallest (`h-3`), full opacity, double-stroked border → "reinforced".
  - Tier 1 (Internal Productivity): medium (`h-2`), standard.
  - Tier 3 (Lightweight Operations): thinnest (`h-1`), softer opacity → "fast/light".
- Bars animate `scaleX` from 0 → 1 with `transform-origin: left` on accordion open, staggered 80ms, ease-out. Uses existing `AnimatePresence` height spring — no new animation libraries.
- Reduced-motion: bars render at full width with no tween.

## Technical notes

- All new animations use `motion/react` only (no new deps); transforms (`scaleX`, opacity, MotionValue counter) stay GPU-friendly.
- Counter and bar are gated by a single `useInView(ref, { once: true })` so re-scrolling the dashboard does not re-trigger.
- Existing stagger (`index * 0.1`) and `whileHover={{ scale: 1.02 }}` on `DashboardCard` are unchanged — new card inherits them by reusing the component.
- `prefers-reduced-motion`: read via `useReducedMotion()` from `motion/react` inside `AdoptionViz` and `TokenTierVisual`; skip tweens, render terminal state.

## Files touched

- `src/routes/index.tsx` — edits to `ExecutionDashboard`, removal of `PipelineViz` + `CostCurve`, new `AdoptionViz` + `TokenTierVisual` components, new entry in `OperatingManual.principles`.

No other files change. No new packages.