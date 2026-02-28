# Supercoder AI — RTL Landing Page

Production-ready Arabic RTL landing page for Supercoder AI.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)
- **Lucide React** (icons)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — layout, page, API route (`/api/lead`)
- `components/` — Navbar, Hero, Stats, ProductVision, Features, HowItWorks, ReportShowcase, Compliance, VideoSection, FAQ, DemoForm, Footer
- `components/ui/` — Card, SectionHeader, PillButton, IconBadge
- `content.ts` — all copy and data (stats, vision, features, steps, FAQs, form labels, footer)

## RTL

The app uses `<html dir="rtl" lang="ar">` and Cairo (Arabic) font. Layout and spacing are tuned for RTL.
