# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

No test framework configured.

## Stack

- Next.js 16.2 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/postcss)
- GSAP + ScrollTrigger for scroll-driven animations
- Lenis for smooth scrolling
- Path alias: `@/*` -> `./src/*`

## Architecture

Single-page scroll-driven animated site. All rendering is client-side via `PageClient` ("use client").

**Scroll animation pipeline:**
1. `SmoothScroller` — wraps page, inits Lenis + syncs GSAP ticker with Lenis RAF
2. `CanvasBackground` — fixed fullscreen canvas. Preloads 121 PNG frames from `public/frames/frame_NNNN.png`, draws them on scroll via GSAP ScrollTrigger scrub. Fires `onLoaded` callback when all frames loaded (PageClient uses this to dismiss the loader overlay).
3. `ScrollSection` — reusable wrapper applying GSAP scroll-triggered animations (fade-up, slide-left, etc). Uses `data-animate` attribute for staggered child animations.

**Key constants** in `src/lib/constants.ts`: `FRAME_COUNT` (121), `IMAGE_SCALE` (0.85), site copy, nav links, services, projects, stats.

**Fonts:** Instrument Serif (display), Instrument Sans (body), JetBrains Mono (mono) — loaded via `next/font/google` in layout.tsx. CSS vars: `--font-instrument-serif`, `--font-instrument-sans`, `--font-jetbrains-mono`.

**Page structure:** Hero -> Services -> About -> Marquee -> Work -> Stats -> Contact -> Footer. Each section is a standalone component in `src/components/`.
