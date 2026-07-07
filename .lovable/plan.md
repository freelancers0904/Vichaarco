## Goal

Deliver top-tier, "butter-smooth" scrolling and a near-instant first paint across desktop, laptop, tablet, and mobile — without touching any content, sections, or copy.

## Scope guardrails

- No content, layout, or section changes.
- No new dependencies unless strictly necessary (plan uses zero new deps).
- Only performance, scroll behavior, and load-path optimizations.

---

## 1. Buttery-smooth scroll (all devices)

**`src/index.css`**
- Remove `scroll-behavior: smooth` from global `html` (it fights native inertial scroll on iOS/trackpads and makes anchor jumps feel laggy). Keep `scroll-margin-top` on sections so anchor jumps still land correctly.
- Add `overscroll-behavior-y: none` on `html, body` to kill rubber-band jank at page edges on mobile/trackpads.
- Add `-webkit-overflow-scrolling: touch` on `body` for momentum scrolling on older iOS webviews.
- Drop `contain: layout style paint` from `section` (it's currently applied to every section and can cause repaint hitches on long pages); replace with `content-visibility: auto; contain-intrinsic-size: 800px` on non-hero sections only — this skips offscreen paint work and is the single biggest scroll-smoothness win on long pages.
- Remove `overflow-y: scroll` forced on `html` (prevents layout shift is already handled by `overflow-x: hidden` on body; the forced scrollbar adds a permanent gutter). Replace with `scrollbar-gutter: stable` to keep layout stable without forcing a scrollbar.
- Reduce `will-change` usage on always-animating elements (marquee, floats) to only activate on visibility — `will-change` on permanently-animating nodes keeps them on their own compositor layer and steals GPU memory on mobile. Keep `transform: translateZ(0)` for layer promotion but drop redundant `will-change: transform` where the animation already implies it.
- Add `touch-action: manipulation` on interactive buttons/links to remove the 300ms tap delay and double-tap zoom hesitation on mobile.

**`src/components/ScrollProgress.tsx`**
- Already rAF-throttled — leave as is.

**`src/components/Navbar.tsx`**
- Scroll listener currently runs on every scroll event and touches DOM (`getBoundingClientRect` inside a section loop). Wrap the active-section detection in `requestAnimationFrame` and add a `passive: true` listener guard so it never blocks scroll (verify passive flag is set; add rAF throttle if missing). Zero behavior change.

**`src/hooks/useScrollAnimation.ts`**
- Verify it uses IntersectionObserver (per repo notes it does). If any component uses a scroll listener for reveal, note it — but do not touch component behavior; just ensure the observer uses `rootMargin` so reveals fire slightly before entry, eliminating the "pop-in" feel that reads as scroll lag.

---

## 2. Bugatti-fast open (initial load)

**`src/App.tsx`**
- Code-split the route: `const Index = lazy(() => import('./pages/Index'))` and `NotFound` similarly, wrapped in `<Suspense fallback={null}>`. Shrinks initial JS so first paint arrives sooner.

**`src/pages/Index.tsx`**
- Keep `Hero`, `Navbar`, `SplashScreen`, `CustomCursor` eagerly imported (above-the-fold).
- Lazy-load below-the-fold sections via `React.lazy` + `Suspense fallback={null}`: `Stats`, `About`, `Solutions`, `WhyUs`, `Portfolio`, `Process`, `FAQ`, `Contact`, `Footer`. This is invisible to the user (they scroll to reach them) but massively cuts initial JS parse/compile time — the single biggest "feels fast" win on mobile.
- `WhatsAppFAB`, `ScrollToTop`, `ScrollProgress` — lazy-load these too; they're not needed in the first frame.

**`index.html`**
- The Inter + Clash Display fonts are preloaded as `as="style"`. Add `crossorigin` on the Clash Display preconnect/preload (Fontshare serves cross-origin). Confirm `font-display: swap` is respected so text paints immediately with a fallback.
- Add `<link rel="preload" as="image" href="<hero LCP image>" fetchpriority="high">` for the hero LCP asset (identify actual hero image from `Hero.tsx` first — if hero uses CSS only, skip).

**`src/components/SplashScreen.tsx`**
- The splash blocks interaction for 3s + 0.8s fade = 3.8s. This directly contradicts "opens like a Bugatti." Two options in the plan (user picks one implicitly by approving):
  - **Default in this plan:** shorten hold from 3000ms → 900ms and fade from 800ms → 400ms (total ~1.3s). The logo still gets its moment; the site feels instant.
  - Alternative if the user prefers: remove splash entirely on repeat visits (already gated by sessionStorage) and shorten first visit to 1.3s.
- Preload the logo import so the splash paints on the first frame (already using `loading="eager" decoding="sync"` — leave).

**`vite.config.ts`**
- Already solid. Add one small win: move `sonner` out of `optimizeDeps.include` if it's only used post-interaction (leave if uncertain — low ROI, skip to avoid risk).
- Leave chunking as is.

---

## 3. Micro-polish that reads as "premium smoothness"

**`src/index.css`**
- Add `image-rendering: -webkit-optimize-contrast` to images (already antialiased) — skip if any current image looks off; low-risk otherwise.
- Ensure `@media (prefers-reduced-motion: reduce)` block already disables the new behaviors correctly (it does — global rule already in file).
- Reduce the grain overlay's `z-index: 9998` repaint cost: add `will-change: auto` and ensure it's on its own layer via `transform: translateZ(0)` (currently missing) — this prevents the fixed grain from forcing full-page repaints on scroll on low-end Android.

---

## Files touched

- `src/index.css` — scroll behavior, content-visibility, overscroll, grain layer, will-change cleanup, touch-action.
- `src/App.tsx` — lazy routes + Suspense.
- `src/pages/Index.tsx` — lazy below-the-fold sections + FAB/ScrollToTop/ScrollProgress.
- `src/components/Navbar.tsx` — rAF-throttle scroll listener (behavior identical).
- `src/components/SplashScreen.tsx` — shorten to ~1.3s total.
- `index.html` — crossorigin preload correctness; optional hero LCP preload if applicable.

## Verification

- Build must stay clean.
- Manual scroll test on mobile viewport (375px) + desktop; confirm no visual/content change.
- Confirm splash still shows, just shorter.
- Confirm all sections still render on scroll (lazy fallback is `null`, so no flash).

## Not doing

- No Lenis / smooth-scroll libraries — they hurt more than they help on mobile and add JS weight. Native scroll tuned properly beats them.
- No content, layout, section, or copy changes.
- No design token changes.
