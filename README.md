# xavierjodoin.com

Bilingual (EN/FR) site for Xavier Jodoin, an AI consultant in Montréal: AI agents, AI workflow consulting and custom model development for SMBs in Montréal and Québec. Static Astro build deployed to GitHub Pages.

## Structure

```
src/
  i18n/config.ts      # site URL, locales, contact email, helpers
  i18n/content.ts     # ALL copy (EN + FR): services, products, open source, home sections, FAQ
  i18n/schema.ts      # JSON-LD helpers (WebPage, BreadcrumbList, FAQPage)
  layouts/BaseLayout  # <head>: SEO, hreflang, Open Graph, JSON-LD graph, theme, analytics
  components/         # Header, Footer, HomePage, ServicePage, AgentFlow, Faq, Icon
  pages/              # / and /fr/, /services/* and /fr/services/*, /blog, 404,
                      # sitemap.xml, robots.txt, rss.xml (generated at build)
  content/blog/       # Markdown posts (English)
scripts/build-images.mjs  # Montréal art, logo and OG cards → public/
docs/design/              # UX concepts and source art (not deployed)
```

## Editing copy

Every visible string lives in `src/i18n/content.ts`, with an `en` and an `fr` value side by side. Add a service by appending to `services`; its EN and FR pages, nav links, footer links, sitemap entries and JSON-LD are generated from that entry.

French text uses a non-breaking space before `:` and inside `« »`, per Québec typography.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
npm run images    # regenerate derived images and OG cards (needs sharp)
```

## SEO checklist (built in)

- `en-CA` / `fr-CA` pages with reciprocal `hreflang` + `x-default`, in both `<head>` and `sitemap.xml`
- One locally targeted landing page per service and language (Montréal, Laval, Longueuil, Québec City)
- JSON-LD graph: `ProfessionalService` (areaServed, languages, offer catalog), `Person`, `WebSite`, plus `Service`, `FAQPage`, `BreadcrumbList` and `BlogPosting` per page
- Absolute 1200×630 Open Graph images per language, geo meta tags, RSS, robots.txt, custom 404

## Analytics

The deploy workflow passes the repository variable `PUBLIC_GOOGLE_ANALYTICS_ID` (GA4 measurement ID, `G-…`) to the build. Set it under **Settings → Secrets and variables → Actions → Variables**; without it no analytics script is emitted.
