# Beatriz Multi Service — Website

Next.js (App Router) + TypeScript + Tailwind CSS rebuild of beatrizmultiservices.com.

## What's in here

- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, custom theme (navy `#0B1235` / gold `#C79A46` / cream `#FAF7F1`),
  Cormorant Garamond (headings) + Jost (body) via `next/font`
- **Pages:** Home, About, Contact, and six service pages (Wedding Officiant, Notary,
  Immigration Document Specialist, Tax Specialist, Interpreter Services, Mutual Divorces)
- **SEO:** per-page metadata, OpenGraph/Twitter cards, canonical URLs, auto-generated
  `sitemap.xml` and `robots.txt`
- **Structured data (schema.org):** `ProfessionalService`/`LocalBusiness` on every page,
  `Service` schema on each service page, `BreadcrumbList`, and `FAQPage` schema matching the
  visible FAQ content
- **Icons:** full favicon set + `site.webmanifest` generated from the actual logo mark, so the
  site gets a proper icon when saved to a phone's home screen (iOS "web clip" + Android/PWA)
- **Contact form:** a real form (`components/ContactForm.tsx`) posting to
  `app/api/contact/route.ts`, which sends the submission via [Resend](https://resend.com)

## Getting started locally

```bash
npm install
cp .env.example .env.local   # then fill in the real values, see below
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | What it's for |
|---|---|
| `RESEND_API_KEY` | API key from resend.com — powers the contact form email. The form will return a friendly error until this is set. |
| `CONTACT_TO_EMAIL` | The inbox that receives contact form submissions. |
| `CONTACT_FROM_EMAIL` | The "from" address Resend sends as (must be on a domain verified in Resend). |
| `NEXT_PUBLIC_SITE_URL` | The production URL — used to build canonical links, the sitemap, and OG tags. |

`.env.local` is gitignored and never committed. In production, set these same variables in
**Vercel → Project → Settings → Environment Variables**.

## Still-open items before this goes live

These were placeholders during the design phase and should be confirmed with Beatriz before
launch:

- [ ] Real business email (currently `info@beatrizmultiservices.com` — confirm or replace)
- [ ] Confirmed business hours (currently a guess: Mon–Fri 9–6, evenings/weekends by appointment)
- [ ] Real social media URLs (Facebook/Instagram/LinkedIn are placeholder `#` links in
      `lib/site-config.ts` → `siteConfig.social`)
- [ ] Real Calendly link — swap into `app/contact/page.tsx` (marked with a `TODO` comment) and
      uncomment the widget script
- [ ] Legal review of the "not legal advice" disclaimers on the Immigration and Mutual Divorces
      pages (`components/DisclaimerBand.tsx` usage in those two page files)
- [ ] A Resend (or other email provider) account + API key for the contact form to actually send
- [ ] Domain DNS: point beatrizmultiservices.com at Vercel once deployed (see below)

## Deploying — GitHub → Vercel

1. **Create a GitHub repo** (on github.com, "New repository"). Don't initialize it with a
   README/gitignore — this project already has them.

2. **Push this project to it**, from inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Beatriz Multi Service site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Connect Vercel:**
   - Go to [vercel.com](https://vercel.com), sign in with GitHub
   - "Add New Project" → select this repo → Vercel auto-detects Next.js, no config needed
   - Before clicking Deploy, add the environment variables listed above
   - Click Deploy

4. **Point the domain:** once deployed, go to Project → Settings → Domains, add
   `beatrizmultiservices.com`, then update the domain's DNS at your registrar (wherever it's
   currently pointed for Webflow) to the records Vercel gives you.

Every future `git push` to `main` auto-deploys.

## Project structure

```
app/
  layout.tsx              Root layout: fonts, global metadata, favicons, site-wide schema
  page.tsx                Home
  sitemap.ts               Auto-generated sitemap.xml
  robots.ts                Auto-generated robots.txt
  about/page.tsx
  contact/page.tsx
  api/contact/route.ts     Contact form email handler
  services/
    wedding-officiant/page.tsx
    notary/page.tsx
    immigration-document-specialist/page.tsx
    tax-specialist/page.tsx
    interpreter-services/page.tsx
    mutual-divorces/page.tsx
components/                Shared UI (Nav, Footer, cards, grids, form, etc.)
lib/
  site-config.ts           Single source of truth: contact info, services list, nav links
  schema.ts                JSON-LD builders (LocalBusiness, Service, Breadcrumb, FAQ)
public/
  images/                  All site photography
  favicon.ico, apple-touch-icon.png, android-chrome-*.png, site.webmanifest
```

To edit contact info (phone, email, address, social links) or the services list, edit
`lib/site-config.ts` — it feeds the nav, footer, contact page, and structured data all at once.
