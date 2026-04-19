# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server with Turbopack at localhost:3000
pnpm build      # production build
pnpm lint       # ESLint via next lint
```

No test suite configured.

## Architecture

Next.js 15 App Router project with Tailwind CSS v4 and React 19.

**Route groups:**
- `app/(default)/` — marketing pages. Layout is a Client Component that initializes AOS scroll animations, wraps content with `Header` + `Footer`.
- `app/(auth)/` — sign in / sign up / reset password. Split-screen layout: form on left, animated code illustration on right (hidden on mobile).
- `app/layout.tsx` — root layout, loads Inter font via `next/font/google`, sets `font-inter` CSS variable.

**Styling:**
- Tailwind v4 config lives entirely in `app/css/style.css` via `@theme {}` — no `tailwind.config.*` file.
- Custom animations (`code-1` through `code-6`, `breath`, `float`, `line`, `infinite-scroll`) are defined as `@keyframes` inside `@theme` and used via arbitrary `animate-[name_duration_...]` classes.
- `app/css/additional-styles/theme.css` and `utility-patterns.css` are imported as layers.

**Components:**
- `components/ui/` — shared shell components (`Header`, `Footer`, `Logo`).
- `components/` — page-section components (`Hero`, `BusinessCategories`, `FeaturesPlanet`, `LargeTestimonial`, `Cta`, `Accordion`, `Banner`, `PageIllustration`).
- All components are Server Components by default; the `(default)` layout is the only Client Component boundary (needed for AOS `useEffect`).

**Key dependencies:**
- `aos` — scroll animation library initialized once in `(default)/layout.tsx`
- `@headlessui/react` — used for accessible UI primitives (Accordion)
- `@tailwindcss/forms` — loaded via `@plugin` directive in `style.css`
