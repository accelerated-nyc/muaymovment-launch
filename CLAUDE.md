# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MuayMovment is a single-page marketing/landing site for a Muay Thai-inspired mobility training program. It is built with React + TypeScript + Vite and uses shadcn/ui components with Tailwind CSS. Originally scaffolded via Lovable.dev.

## Commands

- `npm run dev` — Start dev server on port 8080
- `npm run build` — Production build
- `npm run build:dev` — Development build
- `npm run lint` — ESLint
- `npm run test` — Run tests once (vitest)
- `npm run test:watch` — Run tests in watch mode
- Tests live in `src/test/` and match `src/**/*.{test,spec}.{ts,tsx}`

## Architecture

**Single-page app** — `src/pages/Index.tsx` composes all landing page sections in order. Routing is via react-router-dom but only `/` and a 404 catch-all exist.

**App providers** (in `src/App.tsx`): QueryClientProvider (TanStack Query), TooltipProvider, Toaster (Radix + Sonner), BrowserRouter.

**Section components** — Each visual section of the landing page is a self-contained component in `src/components/sections/` (HeroSection, ProblemSection, MethodSection, VideoShowcase, SpectrumSection, AboutSection, PricingSection, SchedulingSection, TestimonialsSection, FooterSection).

**Shared components** — `src/components/` contains reusable pieces:
- `ScrollReveal` — Framer Motion wrapper for scroll-triggered fade-in animations (up/left/right), plus `useCountUp` hook and `LineDraw` component
- `Logo`, `NavLink`, `VideoPlaceholder` — small reusable UI pieces

**UI primitives** — `src/components/ui/` is the shadcn/ui component library (do not manually edit these; use `npx shadcn-ui@latest add <component>` to add new ones).

## Design System

The brand palette is defined as CSS custom properties in `src/index.css` and mapped to Tailwind in `tailwind.config.ts`:
- **charcoal/slate-dark/ash** — dark tones for backgrounds and text
- **silver/off-white** — light tones
- **gold/gold-muted** — accent color (primary = gold at `45 72% 46%`)
- Font: Inter (loaded via Google Fonts in index.css)

Custom CSS utilities in `src/index.css`: `thai-pattern` (diagonal gold-tinted grid), `rope-divider` (gold gradient separator), `btn-shimmer` (hover shimmer effect), `pulse-gold`, `ambient-float`, `bounce-arrow`.

## Key Conventions

- Path alias: `@/` maps to `src/` (configured in tsconfig.json, vite.config.ts, and vitest.config.ts)
- `cn()` utility in `src/lib/utils.ts` for merging Tailwind classes (clsx + tailwind-merge)
- Animations use Framer Motion; wrap content in `<ScrollReveal>` for scroll-triggered entrance animations
- TypeScript strict null checks are OFF (`strictNullChecks: false` in tsconfig)
- ESLint has `@typescript-eslint/no-unused-vars` turned OFF
- `lovable-tagger` plugin runs in dev mode only (component tagging for Lovable.dev integration)
