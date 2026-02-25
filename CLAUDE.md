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
1. Builds main site with Hugo → `public/`
2. Clones blog repo (`guardianhubx-blog`) and builds it → `public/blog/`
3. Post-processes all CSS/JS with clean-css-cli and terser
4. Deploys to `gh-pages` branch (GitHub Pages)

Triggers: push to `main` or `repository_dispatch` from blog repo.

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

# My Project Rules
- ALWAYS use Haiku model for simple tasks.
- ASK for permission before running broad audits or reading more than 5 files.
- WARNING: We are on a tight token budget. Be concise.
- **DO NOT auto-commit changes** — User will commit manually. Only stage changes with `git add` and prepare commit messages if requested.