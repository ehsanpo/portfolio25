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

- **Drive pages, sections, and blocks from ********\*\***********\*\***********\*\***********`Doc/Sitemap.json`********\*\*\*\*********\*\*\*\*********\*\*\*\*********.\*\* Pages render ordered `sections[]` via a Block Registry.
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
- [ ] Phase 3: Generate website pages/sections from `src/doc/Sitemap.json`; content from `src/content`; data from `src/data`.
- [ ] Phase 4: Performance, a11y, SEO pass.
- [ ] Phase 5: Deploy and set up monitoring.

## Next Actions (detailed)

- [x] Initialize Next.js (TypeScript) app in `website/` with i18n locales (en, sv, fa).
- [x] Add PostCSS + CSS Modules; create `design system/tokens.css` with LTR/RTL-aware vars.
- [x] Scaffold `ui kit/atoms`, `ui kit/components`, `ui kit/blocks` with index files.
- [x] **Design System Foundation**: Complete CSS variable system with themes, RTL support, and accessibility features.
- [ ] **Implement Block Registry**: `section.type` → component in `ui kit/blocks`.
- [ ] **Build Sitemap Parser**: read `Doc/Sitemap.json`, create routes, and render sections.
- [ ] **Content pipeline**: parse `/content/**/<slug>.md` with co-located images; generate slugs and indexes.
- [ ] **Data accessors**: typed readers for `/data/portfolio.json` and `/data/resume.json`.
- [ ] **i18n**: locale-aware routing + language switcher; RTL support for `fa`.
- [ ] **Auto-translation**: when a locale variant is missing, invoke AI to create `/content/.../<slug>.<locale>.md` and patch strings in JSON.
- [ ] CI checks: missing block types, invalid frontmatter, broken image refs, i18n coverage.
- [ ] Add GitHub Actions for lint, typecheck, build.
- [ ] Add basic tests (render + a11y) for atoms and blocks.

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
