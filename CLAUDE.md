# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
# Local development server
hugo server

# Production build
hugo --gc --minify --destination public
```

Hugo **0.146.0 extended** is required. No Node.js dependencies at project level — minification (clean-css-cli, terser) runs only in CI.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment:
1. Builds entire site (main + blog) with Hugo → `public/`
2. Post-processes all CSS/JS with clean-css-cli and terser
3. Deploys to `gh-pages` branch (GitHub Pages)

Triggers: push to `main`. **Note:** Blog repo is now integrated into main repo at `/content/blog/`

## Architecture

**Multilingual Hugo site** (Spanish default, Catalan, English) for a cybersecurity company. The blog lives in a separate repository and is merged at build time.

### Content Structure
- `content/{es,ca,en}/` — Each language has identical page sets with translated slugs
- `i18n/{es,ca,en}.yaml` — UI string translations (~770 keys each)
- `data/partners.yaml` — Partner data with multilingual descriptions
- `defaultContentLanguageInSubdir = true` — URLs are `/es/`, `/ca/`, `/en/`

### Layout System
Pages use different layouts via front matter `layout:` field:
- `radar` — GuardianRadar product page (custom standalone HTML, not baseof)
- `products` — Own solution pages (IronWall, SmartLayer, etc.)
- `product` — Partner product pages (Faronics, NordSecurity, etc.)
- `landing-ciberseguridad` — Landing pages (phishing training, cyber test)
- `objectives` — Cybersecurity goals page
- `spaceinvaders-form` — Standalone game form (not using baseof)

`baseof.html` includes: `head.html` → `faq-schema.html` → `breadcrumb-schema.html`, then header (home vs inner), content block, FAQ, footer.

### CSS
Single unified stylesheet: `static/css/style.css` (~30KB, minified in CI). Organized in sections:
1. Base & Layout (top bar, banner, header padding, fullscreen overlay)
2. Landing & Sections (hero, stats, benefit cards, CTAs, animations)
3. Radar page (features grid, process steps, testimonials, image grid)
4. Components (footer menu, popup modal)
5. Responsive (consolidated media queries)

`static/css/arcade.css` is separate — only used by the Space Invaders standalone page.

### SEO Implementation
- `head.html` — meta tags, canonical, hreflang (with `x-default`), OG/Twitter cards, preconnect hints
- `faq-schema.html` — JSON-LD FAQPage from `faq_items` front matter
- `breadcrumb-schema.html` — JSON-LD BreadcrumbList, auto-categorizes by layout field
- `footer.html` — JSON-LD Organization/WebSite schema with sameAs social links
- `solutions-cards.html` — JSON-LD ItemList + microdata for services
- `static/robots.txt` — static file (Hugo's `enableRobotsTXT` is disabled)
- `static/404.html` — standalone multilingual 404 with client-side language detection (GitHub Pages constraint)

### Front Matter Conventions
Pages support these SEO-related params:
- `description`, `ogTitle`, `ogDescription`, `ogImage` — meta/OG overrides
- `twitterTitle`, `twitterDescription`, `twitterImage` — Twitter card overrides
- `faq_items` — array of `{question, answer}` for FAQ schema
- `translations` — array of `{lang, path}` for language switcher JS
- `layout` — determines which template and breadcrumb category

### Hugo Shortcodes
Landing pages use centralized Hugo shortcodes for contact components (DRY principle):

```html
{{< contact-cta >}}

<div id="contact"></div>
<section class="contact-section mb-5">
  {{< contact-form >}}
</section>
```

**Pattern:** Replace inline contact form HTML with these shortcodes. The form automatically handles:
- Multilingual labels (pulls from i18n files)
- Google Forms submission
- Privacy policy links per language
- Form validation and recaptcha

**Applied to:** All landing pages with `layout: landing-ciberseguridad` (phishing training, cybersecurity guide, cyber test, etc.)

### Third-Party Integrations
- Google Tag Manager: `GTM-584VRJ97` (in head.html + noscript in baseof)
- Cookiebot: consent management (GDPR)
- Supabase: used in Space Invaders leaderboard (spaceinvaders-form.html)
- Brevo (Sendinblue): newsletter forms
- **Google Apps Script:** Cybersecurity Assessment Form (Gemini AI + PDF generation)
  - Form: `layouts/shortcodes/formulari-ciberseguretat.html`
  - API: Google Sheets + Gemini 2.0 Flash
  - Features: 3-attempt retry logic for all API calls, multilingual reports (ES/CA/EN)
  - Deploys: PDF reports + email with disclaimer
  - Note: Update `SCRIPT_URL` in form JavaScript when redeploying Apps Script

### Blog Integration

Blog content is integrated into main site at `/content/blog/{es,ca}/`. Blog posts use `type: "blog"` in front matter and are rendered with `layouts/_default/blog.html`.

**Blog URLs (SEO-preserved):**
- Spanish: `/blog/article-slug/` (no language prefix)
- Catalan: `/blog/ca/article-slug-ca/` (with `/ca/` prefix)
- English: **NO BLOG**

Blog posts automatically output to these paths regardless of language directory structure, preserving all existing Google indexing.

### Blog Links: Language-Specific Slugs
**CRITICAL:** Blog article slugs are DIFFERENT for each language. Do NOT copy Spanish slugs and just add `/ca/` prefix.

**Blog URL Structure:**
- Spanish: `/blog/article-slug/` (no language prefix)
- Catalan: `/blog/ca/article-slug-ca/` (DIFFERENT slug, must include `/ca/`)
- English: **NO BLOG** — remove all `/blog/` links from `/en/` files

**Example translations of same article:**
- Spanish: `/blog/ciberestafas-ceo-autonomos-pymes/`
- Catalan: `/blog/ca/ciberestafes-ceo-autonoms-pimes/` (slug is different!)

**Before editing:** Always verify the actual blog article slug exists in the correct language. Slugs are NOT automatically translated.

### Blog Posting Standards (2026+)

**Standards Files:**
- `tag_standardization.yaml` — Master tag reference (ES + CA) with 6 content categories
- `SEO_STRATEGY_COMPREHENSIVE_92_BLOG_POSTS.md` — 20 planned posts (Mar-Sep 2026) + SEO gaps

**Front Matter Required:**
```yaml
---
title: "Title (max 60 chars)"
description: "Meta description (120-160 chars)"
slug: "slug-url-lowercase-hyphens"
publishDate: 2026-03-15
type: "blog"
category: "threat-analysis"  # threat-analysis | how-to-guide | news | compliance | product | educational
tags:
  - tag-from-standardized-list
  - max-8-tags-minimum-3
relatedProduct: "guardianaradar"  # optional
featured: false
keywords:
  - "primary keyword"
---
```

**Content Categories Allowed:**
- `threat-analysis` — Specific threat deep-dives
- `how-to-guide` — Practical step-by-step guides
- `news` — Trends & breaking news
- `compliance` — Regulatory & standards content
- `product` — Product-focused articles
- `educational` — Definitions & basics

**Tags:** Use ONLY canonical tags from `tag_standardization.yaml`. New 2026 tags include: vishing, smishing, quishing, estafas-hacienda, sector-sanitario, ecommerce, ransomware-servicio, osint, fuerza-bruta, seguro-ciberriesgos, etc.

**Publishing Workflow:**
1. Human writer creates first draft (Markdown)
2. Review checklist: title, description, slug, tags, category, internal links (2-3 min), product CTA, formatting (H2/H3), 800+ words
3. Create CA version with different slug if needed (e.g., es: `ciberestafas-hacienda`, ca: `ciberestafes-hisenda`)
4. Deploy via git push to main (builds automatically)

**Publishing Schedule:** 2-3 posts/month (Mar-Sep 2026: 20 planned posts)

# My Project Rules
- ALWAYS use Haiku model for simple tasks.
- ASK for permission before running broad audits or reading more than 5 files.
- WARNING: We are on a tight token budget. Be concise.
- **DO NOT auto-commit changes** — User will commit manually. Only stage changes with `git add` and prepare commit messages if requested.