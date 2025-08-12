# AI-Powered Portfolio – Project Plan & Starter Files

---

## 1) Repository Structure

```
ui kit/
  atoms/
  components/
  blocks/
design system/
website/
Doc/
  Sitemap.json
  PLAN.AI.md
content/
  portfolio/
    <slug>/
      <slug>.md
      <images...>
  blog/
    <slug>/
      <slug>.mdui kit/
  atoms/
  components/
  blocks/
design system/
website/
Doc/
  Sitemap.json
  PLAN.AI.md
content/
  portfolio/
    <slug>/
      <slug>.md
      <images...>
  blog/
    <slug>/
      <slug>.md
      <images...>
data/
  portfolio.json
  resume.json
      <images...>
data/
  portfolio.json
  resume.json
```

> Notes
>
> - **ui kit** holds presentational UI building blocks (atoms → components → blocks).
> - **design system** stores tokens, guidelines, and documentation.
> - **website** is the actual app/site implementation consuming the design system and ui kit.
> - **content/** holds authored Markdown content and co-located images:
>
>   - `content/portfolio/<slug>/<slug>.md` (case studies & portfolio) + images in the same folder.
>   - `content/blog/<slug>/<slug>.md` + images in the same folder.
>
> - **data/** holds global JSON for UI copy & structured data:
>
>   - `portfolio.json` (site-wide strings/config for portfolio blocks, nav labels, etc.)
>   - `resume.json` (resume data model for the About/Resume section).
>
> - **Doc** holds planning artifacts and the machine-updated plan.

---

## 2) Tech Choices (proposed)

- **Framework:** Next.js (App Router) + TypeScript

- **Styling:** **Tailwind CSS v4 (with Tailwind config) + CSS variables for all tokens**

- **UI Library:\*\* none, i want custom components.**

- **Icons:** lucide-react

- **Content:** Markdown (`.md`) in `/content/.../<slug>.md` with frontmatter; images co-located in the same folder.

- **Data:** `/data/portfolio.json` and `/data/resume.json` for site-wide copy & resume structure.

- **i18n:** Next.js i18n routing with locales **en**, **sv**, **fa** (RTL).

- **Analytics:** Vercel Analytics (optional)

> &#x20;We’ll add RTL-safe utilities via logical properties.

---

## 3) Implementation Phases

### Phase 0 — Bootstrapping

- Initialize repo, create folders/files, configure Prettier/ESLint, set Node version.
- Make sure we have everything wee need, content, data and resume.
- Make a list of components and block.

### Phase 1 — Design System

- Define brand foundation (logo, color palette, typography, spacing, radius, shadows).
- Encode tokens as **CSS variables** in `design system/tokens.css` (light/dark + RTL-aware logical props).
- Document tokens, usage guidelines, and accessibility requirements.

### Phase 2 — UI Kit

- **Atoms:** buttons, inputs, links, badge, avatar, icon, text styles.
- **Components:** navbar, footer, card, modal/sheet, tabs, tooltip, accordion.
- **Blocks:** hero, project grid, case study intro, contact CTA, testimonial strip.

### Phase 3 — Website Pages

- **Drive pages, sections, and blocks from **\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*`Doc/Sitemap.json`**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*\*\*.\*\* Pages render ordered `sections[]` via a Block Registry.
- **Content sources**

  - `/content/portfolio/<slug>/<slug>.md` (+ images in same folder) → portfolio & case study pages
  - `/content/blog/<slug>/<slug>.md` (+ images) → blog posts
  - `/data/portfolio.json` + `/data/resume.json` → global UI copy and resume data

- **Block Registry** maps `section.type` → block component in `ui kit/blocks`. Listing blocks pull from `/content` and text strings from `/data`.
- **i18n routing**: `/(en|sv|fa)/...` with locale switcher; content resolution looks for `/<locale>.md` variant first, else auto-translate.
- **Auto-translation pipeline** (see below) to generate `sv` and `fa` content when missing.
- CI validation: fail if a `section.type` has no registered block, missing locales, or broken media refs.
- Implement SEO (OpenGraph, localized alternates, sitemap.xml), robots.txt, and analytics.

### Phase 4 — Content & Polish

- Populate `/content` and `/data` with real content, optimize images, add social previews.
- Set up forms (contact) with spam protection.
- Add GitHub Actions for CI (type check, lint, build).
- Lighthouse pass (perf/SEO/a11y/best practices ≥ 95).

### Phase 5 — Ship & Maintain

- Deploy to Vercel, set up custom domain and redirects.
- Automation: scheduled link checks, uptime, dependency updates.

---

## 4) Conventions

- **Naming:** kebab-case for files, PascalCase for components, camelCase for functions.
- **Accessibility:** keyboard focus visible; color contrast ≥ 4.5:1; semantic HTML.
- **Git:** Conventional Commits; one feature per PR.
- **Testing:** Playwright (critical flows), Vitest (unit), Axe for a11y checks.
- **i18n:** Store translations alongside original content; Persian translations use `dir="rtl"`.

---

## 5) Starter Files

### Doc/PLAN.AI.md (live plan for agents)

```md
# PLAN.AI.md

_Last updated:_ 2025-08-09 (Europe/Stockholm)

## How agents should work

- Always append updates here with timestamps.
- Add TODOs as Markdown checkboxes. Mark them when complete.
- Keep entries short and actionable. Reference files/paths when relevant.

## High-level TODOs

- [x] Phase 0: Create repo, folders, and base config.
- [x] Phase 1: Establish **CSS variable tokens** (no Tailwind).
- [x] Phase 2: Build ui kit (atoms → components → blocks).
- [x] Phase 3: **COMPLETE** - Content pipeline, portfolio/blog pages, CaseStudyLayout integration
- [ ] Phase 4: Performance, a11y, SEO pass.
- [ ] Phase 5: Deploy and set up monitoring.

## Next Actions (detailed)

- [x] Initialize Next.js (TypeScript) app in `website/` with i18n locales (en, sv, fa).
- [x] Add PostCSS + CSS Modules; create `design system/tokens.css` with LTR/RTL-aware vars.
- [x] Scaffold `ui kit/atoms`, `ui kit/components`, `ui kit/blocks` with index files.
- [x] **Design System Foundation**: Complete CSS variable system with themes, RTL support, and accessibility features.
- [x] **Implement Block Registry**: `section.type` → component in `ui kit/blocks`. **COMPLETED**
- [x] **Build Sitemap Parser**: read `Doc/Sitemap.json`, create routes, and render sections. **COMPLETED**
- [x] **Data accessors**: typed readers for sample data with existing `portfolio.json` structure. **COMPLETED**
- [x] **Page Component**: renders sections from sitemap using block registry. **COMPLETED**
- [x] **Content pipeline**: parse `/content/**/<slug>.md` with co-located images; generate slugs and indexes.
- [x] **i18n**: locale-aware routing + language switcher; RTL support for `fa`.
- [ ] **Auto-translation**: when a locale variant is missing, invoke AI to create `/content/.../<slug>.<locale>.md` and patch strings in JSON.
- [ ] CI checks: missing block types, invalid frontmatter, broken image refs, i18n coverage.
- [ ] Add GitHub Actions for lint, typecheck, build.
- [ ] Add basic tests (render + a11y) for atoms and blocks.

## Recent Progress (2025-08-12)

- ✅ **Image Build Process Complete**: Implemented comprehensive image optimization system
  - Created `scripts/build-images.mjs` for automated image processing during build
  - Built `src/utils/imageUtils.ts` for optimized image URL generation
  - Generates multiple sizes: thumbnail (300x200), medium (800x600), large (1200x900), hero (1600x900)
  - Creates both JPEG and WebP formats for better performance
  - Integrated into build process with `npm run build:images`
  - Updated portfolio pages to use optimized images in production
- ✅ **i18n System Complete**: Implemented context-based internationalization system
  - Clean URLs without language codes (e.g., `/portfolio/040-fm` not `/en/portfolio/040-fm`)
  - Context-based language switching with LanguageProvider
  - Support for English (en), Swedish (sv), and Persian (fa) with RTL support
  - Localized content resolution strategy: try `<slug>.<locale>.md` first, fallback to `<slug>.md`
  - Language switcher component with flags and locale names
- ✅ **Content Pipeline Complete**: Implemented full markdown content parsing system
  - Created `/src/app/api/content/route.ts` for content API
  - Built `/src/app/portfolio/[slug]/page.tsx` for individual portfolio pages
  - Added `/src/app/portfolio/page.tsx` for portfolio listing
  - Content reads directly from `/src/content/portfolio/` and `/src/content/blog/`
- ✅ **CaseStudyLayout Integration**: Enhanced portfolio pages with rich visual layout
  - Added `CaseStudyLayout` component for portfolio detail pages
  - Implemented image gallery support with placeholder system
  - Added proper metadata handling (background_image, logo, images array)
- ✅ **Image Handling Strategy**: Optimized approach for production
  - Images remain in `/src/content/portfolio/<slug>/` during development
  - Build process copies and optimizes images to `/public/optimized/`
  - Development uses placeholder images, production uses optimized assets
- ✅ **Portfolio System Working**: Full portfolio browsing and detail pages functional
  - Portfolio listing at `/portfolio` shows all projects
  - Individual pages at `/portfolio/<slug>` with rich layouts
  - Real content loading from markdown files with frontmatter

### Previous Progress (2025-08-11)

- ✅ **Block Registry System**: Created `src/components/blocks/BlockRegistry.tsx` with mappings from section types to existing UI components
- ✅ **Sitemap Parser**: Implemented `src/utils/sitemapParser.ts` to read and parse the existing `docs/Sitemap.json`
- ✅ **Data Accessors**: Created `src/utils/dataAccessors.ts` with sample data that works with existing portfolio.json structure
- ✅ **Page Component**: Built `src/components/pages/Page.tsx` that renders sitemap sections using the block registry
- ✅ **Integration**: Added "Portfolio Demo" to navigation to showcase the sitemap-driven page system
- ✅ **Working Demo**: System is now functional and rendering at http://localhost:3001

### Block Types Implemented:

- `hero` - Hero sections with CTA buttons
- `project-grid` - Project showcase using ProjectCard components
- `cards` - Generic card grid for skills, features, etc.
- `sections` - Blog post listings using BlogCard components
- `contact-cta` - Contact call-to-action sections
- `custom` - Flexible content sections
- `prose` - Markdown content sections

### What Works Now:

- **Content System**: Full markdown parsing for portfolio and blog content
- **Portfolio Pages**: Individual portfolio pages with CaseStudyLayout
- **API Integration**: Content API serves markdown files with frontmatter
- **Image Strategy**: Placeholder system with build-time optimization plan
- **Sitemap System**: JSON-defined page structure and sections
- **Block Registry**: Maps section types to existing UI components
- **Data Accessors**: Sample content to populate blocks
- **Page Rendering**: Sections automatically rendered from sitemap data
- **Demo Access**: Available via "Portfolio Demo" in navigation

### Next Priority Tasks:

1. **Performance & SEO** - Lighthouse optimization pass, meta tags, sitemap.xml
2. **Testing & CI** - Add automated tests and GitHub Actions
3. **Auto-translation System** - AI-powered content translation (deferred)

## Changelog

- 2025-08-09: Initial plan scaffold created.
- 2025-08-09: Switched to CSS Modules (no Tailwind). Content now lives in `/content` with co-located images; `/data` holds `portfolio.json` + `resume.json`.
- 2025-08-09: Added i18n (en, sv, fa) + auto-translation pipeline and RTL support.
- 2025-08-09: **Phase 0 completed** - Repository structure created, folders scaffolded, basic configuration files added, sample content created.
- 2025-08-09: **Phase 1 completed** - Design system foundation implemented with comprehensive CSS variables, theme system (light/dark), RTL support, accessibility features, and documentation with live demo.
```

---

## i18n & Auto-translation Plan

- **Locales:** `en` (default), `sv`, `fa` (RTL).
- **Routing:** Next.js locale segment `/(en|sv|fa)/...` with a persistent language switcher.
- **Content resolution:**

  1. Try `/content/.../<slug>.<locale>.md`.
  2. Else load `/content/.../<slug>.md` (default language), run AI translation → write `<slug>.<locale>.md` and cache.

- **JSON strings:** Translate missing keys in `data/*.json` per locale on-demand and write `data/i18n/<locale>.json`.
- **RTL:** Add `dir="rtl"` for `fa`, logical CSS properties (margin-inline, padding-inline), and mirrored icons if needed.
- **SEO:** `hreflang` alternates for each locale; localized meta titles/descriptions.

---

## Block Registry (section.type → block component)

| `section.type` | Block component (in `ui kit/blocks`) | Reads from                     | Expected props (minimum) |
| -------------- | ------------------------------------ | ------------------------------ | ------------------------ |
| `custom`       | `CustomSection`                      | —                              | `{ title, children? }`   |
| `cards`        | `CardsSection`                       | content + `portfolio.json`     | `{ title, items? }`      |
| `sections`     | `SectionsFeed`                       | content/blog                   | `{ title, items? }`      |
| `project-grid` | `ProjectGrid`                        | content/portfolio              | `{ title }`              |
| `contact-cta`  | `ContactCTA`                         | `portfolio.json`               | `{ title, href? }`       |
| `prose`        | `ProseSection`                       | MD + images                    | `{ title, md }`          |
| `icon-list`    | `IconList`                           | `resume.json`/`portfolio.json` | `{ title, items }`       |
| `form`         | `ContactFormSection`                 | `portfolio.json`               | `{ title }`              |
| `case-hero`    | `CaseHero`                           | content/portfolio              | `{ project }`            |
| `media-grid`   | `MediaGrid`                          | MD/frontmatter images          | `{ media }`              |
| `next-prev`    | `NextPrev`                           | content index                  | `{ prev?, next? }`       |

> Blocks auto-wire to `/content` and `/data` where possible. Manual props can override.

- 2025-08-09: Updated structure to `/content` + `/data`; i18n with AI translations (EN, SV, FA).

```

---

## 7) Definition of Done (per phase)
- **Design System:** CSS variables encoded, docs written, UI reflects tokens.
- **UI Kit:** atoms/components/blocks exported, a11y checks pass.
- **Website:** routes implemented from sitemap, sections rendered, i18n working.
- **Polish:** Lighthouse ≥ 95 across categories on production build.

---

## 8) Future Enhancements
- Image CDN and blur placeholders.

```
