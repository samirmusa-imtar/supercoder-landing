# Supercoder AI Landing Page — Project Overview for AI & Developers

This document explains the project so an AI or developer can understand, maintain, and improve it quickly.

---

## 1. What It Is

A **single-page Arabic RTL marketing site** for **Supercoder AI** — an AI-powered hiring/interview platform. The page aims to **collect B2B demo signups** and explain the product (instant reports, faster decisions, compliance).

- **Product tagline:** تقارير فورية. قرار أسرع. (Instant reports. Faster decision.)
- **Primary CTA:** اطلب عرضًا تجريبيًا (Request a demo)
- **Partnership:** IMTAR × Supercoder

---

## 2. Goal & Audience

| Goal | Details |
|------|---------|
| **Primary** | Capture leads via demo form (name, company, email, sector, company size, monthly interviews, message, privacy consent) |
| **Secondary** | Communicate value: AI interviews, instant reports, integrity/audit, RBAC, PDPL |
| **Audience** | HR, Talent Acquisition, Engineering Managers, founders in **Saudi Arabia & MENA** (B2B) |

---

## 3. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (light use) |
| Icons | lucide-react |
| Font | Cairo (Arabic + Latin) via `next/font/google` |
| Hosting | AWS Lightsail (Ubuntu, Node, PM2, Nginx) — also prepared for AWS Amplify |

No database or auth; form submits to `POST /api/lead` (currently returns success without persisting).

---

## 4. File Structure (High Level)

```
app/
  layout.tsx          # Root: lang="ar", dir="rtl", Cairo font, metadata
  page.tsx            # Single page: composes all sections in order
  globals.css         # Tailwind + custom tokens (e.g. purple-deep, purple-mid)
  api/lead/route.ts   # POST handler for demo form (validate → JSON response)
  (legal)/            # Privacy & Terms placeholder pages

components/
  Navbar, Hero, Stats, ProductVision, Features, HowItWorks,
  ReportShowcase, Compliance, VideoSection, FAQ, DemoForm, Footer
  ui/                 # Card, Button, SectionHeader, PillButton, IconBadge, RadarChart

content.ts            # Single source of truth for all Arabic copy & UI data (see below)
```

**Rule:** All user-facing Arabic text and repeated data (stats, features, steps, FAQs, form labels, select options) live in `content.ts`. Components import from `@/content` and render; they do not hardcode copy.

---

## 5. Data & Copy: `content.ts`

One file drives all content. Exports are typed with `as const`. Main groups:

| Export | Purpose |
|--------|---------|
| `brand` | Hero title, CTAs, product name |
| `heroReportSnippet` | Mini report UI in hero (score 87, violation labels, chips) |
| `statsSection` | “أرقام تُحدث الفرق” — 4 stat cards (e.g. 60%, 5 min, 100%, 1) |
| `productVisionSection` | “التوظيف للعالم الحديث” — 4 vision cards |
| `featuresSection` | “مزايا مدعومة بالذكاء الاصطناعي” — 4 feature cards |
| `howItWorksSection` | “كيف تعمل المنصة؟” — 5 steps + step 1 panel copy |
| `reportSection` | Report tabs labels, mini labels, radar, recommendation text |
| `reportExampleSection` | “مثال من التقرير الفعلي” — match %, strengths/gaps, skill rows |
| `reportInsightsData` | Full report mock (scores, skills, strengths, gaps, recommendation) |
| `complianceBadges` | B2B فقط, سجلات تدقيق, RBAC, PDPL |
| `videoSection` | Heading, sub, play hint, YouTube embed URL (autoplay muted) |
| `faqSection` | Accordion Q&A list |
| `demoFormSection` | Form heading, field labels, placeholders |
| `formSelectOptions` | industry, companySize, monthlyInterviews options |
| `footerContent` | Partner line, links (Privacy, Terms, Contact) |

**Improvement:** An AI can suggest copy changes, A/B variants, or structure (e.g. splitting by section) without touching component code.

---

## 6. Page Sections (Order & Role)

Rendered in `app/page.tsx` in this order:

1. **Navbar** — Brand + primary CTA (demo).
2. **Hero** — Value prop, primary/secondary CTA, mini “report snippet” (87, violations).
3. **Stats** — 4 cards (Bento-style grid).
4. **Product Vision** — 4 cards.
5. **Features** — 4 cards.
6. **How ItWorks** — Stepper 1–5; click step → content panel (step 1 shows job overview + questions).
7. **Report Showcase** — Tabs (التقييم، الرادار، نقاط القوة والفجوات، التوصية) + report mock + “مثال من التقرير الفعلي” (match %, strengths/gaps, interview score, skill bars).
8. **Compliance** — Badges: B2B فقط، سجلات تدقيق، RBAC، PDPL.
9. **Video Section** — YouTube embed, autoplay muted; hint: “انقر على الفيديو لتفعيل الصوت”.
10. **FAQ** — Accordion.
11. **Demo Form** — Full name, company, email, phone (optional), industry, company size, monthly interviews, message, privacy checkbox → `POST /api/lead`.
12. **Footer** — IMTAR partnership + links.

---

## 7. API: Lead Form

- **Endpoint:** `POST /api/lead`
- **Expects:** JSON body with at least `fullName`, `company`, `email`.
- **Validation:** Missing required fields → 400 + Arabic error message.
- **Success:** 200 + `{ success: true }`.
- **Current behavior:** Does **not** persist (no DB, no email, no CRM). Ideal improvements: store in DB, send email, or forward to CRM/webhook; keep validation and response shape.

---

## 8. Conventions for AI / Developers

- **RTL:** `<html lang="ar" dir="rtl">`. Use logical CSS: `ms-*`, `me-*`, `text-start`, `text-end`; flip directional icons where needed.
- **Styling:** Tailwind only; no inline styles. Tokens: `rounded-2xl`, `p-4`/`p-5`, `shadow-sm`/`shadow-md`, `border-black/5` or `border-white/10`. Cards: `grid` + `auto-rows-fr` + `h-full` for even heights; `line-clamp-2`/`3` for long text.
- **Components:** Functional, TypeScript props, small and focused. Prefer `map()` over duplicated JSX. Use `cn()` (e.g. from `lib/cn.ts`) for class names.
- **Accessibility:** Semantic HTML, `label` + `id` on inputs, buttons with `type` and clear labels, contrast (AA).
- **Copy:** Do not rewrite Arabic copy unless the user asks; change only in `content.ts` when requested.

---

## 9. Deployment

- **Lightsail:** Ubuntu, Node 20, PM2, Nginx. App in `~/supercoder-landing`; `ecosystem.config.js` for PM2. Nginx proxies port 80 → 3000. 1 GB swap added to avoid OOM on 512 MB instance.
- **Amplify:** `amplify.yml` and `DEPLOY-AWS-AMPLIFY.md` in repo; use if switching to Amplify.
- **Updates:** `git pull` → `npm ci` → `npm run build` → `pm2 restart supercoder-landing`.

---

## 10. Suggested Areas for Improvement

Use this list to prompt an AI or plan work:

| Area | Suggestion |
|------|------------|
| **Lead handling** | Persist leads (DB or serverless table), send email, or POST to CRM/webhook; add rate limiting and optional honeypot. |
| **Form UX** | Clear success/error messages (toast or inline), optional “sending…” state, preserve privacy checkbox state. |
| **SEO** | Richer metadata in `layout.tsx`, OpenGraph image, optional JSON-LD for Organization/Product. |
| **Analytics** | Optional event tracking for CTAs, form start/submit, video play (privacy-compliant). |
| **Performance** | Lazy-load below-fold sections or heavy components; ensure hero and fonts are optimized (already using next/font). |
| **A11y** | Review focus order, keyboard nav for stepper and tabs, ARIA for accordion and custom components. |
| **i18n** | If adding English later, move from single `content.ts` to locale-keyed content or i18n lib. |
| **Security** | Next.js and deps updates; consider CSP headers; validate/sanitize form input and any webhook payloads. |
| **Testing** | E2E for form submit and critical paths; unit tests for `/api/lead` validation. |
| **Content** | A/B test headlines and CTAs; keep all variants in `content.ts` or a small content layer. |

---

## 11. Quick Reference for Prompts

- **“Change hero headline”** → Edit `content.ts` → `brand.heroTitle` (and related).
- **“Add a new stat”** → `content.ts` → `statsSection.cards` → ensure Stats component maps over it.
- **“Save form to database”** → Implement persistence in `app/api/lead/route.ts` (and add env/config).
- **“Make the video not autoplay”** → `content.ts` → `videoSection.embedUrl` remove `autoplay=1&mute=1`; or adjust VideoSection.
- **“Add English”** → Add locale to routing or content keys; duplicate or translate content; toggle `dir`/`lang` and RTL/LTR styles.

This overview should be enough for an AI or developer to reason about the project and suggest or implement improvements consistently.
