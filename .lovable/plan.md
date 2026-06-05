# Attention-to-Detail Polish Pass

Goal: elevate perceived quality and user experience on our own portfolio site without disturbing existing layout, content, sections, colors, or copy. Every change is additive polish — nothing structural.

Guiding principle: a website-development agency's own site must *feel* premium in the first 3 seconds and reward attention on every interaction.

---

## 1. Spacing, Rhythm & Typography (subtle, no layout shift)

- Normalize section vertical padding to one consistent scale across all sections (currently slightly mixed).
- Tighten Clash Display heading line-height on mobile so big headlines feel sharper, not loose.
- Cap paragraph max-width (~65ch) in About story & FAQ answers so long lines stay readable on wide screens.
- Unify `.section-label` size/padding so every section's eyebrow label looks identical.
- Tighten 1–2 oversized mobile gaps between Hero → Stats → About.

## 2. Micro-interactions & Feel (the "attention to details" layer)

- Consistent card hover: same lift + soft gold glow on every interactive card (Solutions, WhyUs, Portfolio, Founders, Pricing) — currently inconsistent.
- Tactile button feedback: subtle `active:scale-[0.98]` on primary CTAs.
- Polished keyboard focus rings (gold-tinted) on all interactive elements — accessibility + premium feel.
- FAQ accordion: smoother chevron rotation, soft tint on the expanded item.
- Nav link underline: consistent gold underline animation across all nav items.
- Contact form submit: explicit loading + disabled visual state so it never feels frozen.
- Smoother scroll-reveal stagger so sections don't all animate at once.

## 3. Mobile Polish (where most visitors actually land)

- Hide-on-scroll navbar: hides on scroll down, returns on scroll up. Modern, more content-first.
- Smoother mobile menu open/close transition (slide + fade) instead of abrupt toggle.
- WhatsApp FAB: safe bottom padding + iOS `safe-area-inset` so it never overlaps footer or ScrollToTop.
- Ensure FAQ triggers, nav items, footer links all meet 44px tap-target minimum.
- Verify FAB + ScrollToTop don't visually collide on narrow viewports.

---

## Safety guarantees

- **No content changes.** Not a single word edited.
- **No section added or removed.**
- **No color palette change.** Uses existing tokens (`--accent-gold`, `--border`, etc.).
- **No layout restructuring.** Grids, columns, hero composition stay identical.
- **No new dependencies.** Pure CSS / Tailwind / existing patterns.
- **Pure CSS animations only** (per project constraint).
- Verified across 1440 / 1024 / 820 / 390 px after implementation.

## Files likely touched (small, surgical edits)

- `src/index.css` — focus rings, accordion polish, spacing utilities
- `src/components/Navbar.tsx` — hide-on-scroll, mobile menu transition
- `src/components/WhatsAppFAB.tsx`, `ScrollToTop.tsx` — safe-area, stacking
- `src/components/FAQ.tsx` — accordion polish, line-length cap
- `src/components/About.tsx` — line-length cap, mobile spacing
- `src/components/Hero.tsx`, `Stats.tsx` — mobile gap tightening
- `src/components/Solutions.tsx`, `WhyUs.tsx`, `Portfolio.tsx` — hover consistency
- `src/components/Contact.tsx` — button states, focus rings

## Out of scope (will NOT touch)

- Copy, headings, founder bios, pricing tiers, portfolio entries
- Section order, presence, or composition
- Brand colors, fonts, logo
- Backend, forms logic, integrations
