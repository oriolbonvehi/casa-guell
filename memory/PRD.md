# Casa Güell — Restaurant Landing Page

## Original Problem Statement
High-end, brutalist-minimalist single-page website for "Casa Güell", a modern Catalan & market-cuisine restaurant in Sant Martí, Barcelona. Inspired by wearelaugh.com. Requirements: real brand logo/isotype integration, fully digitized (transcribed, not screenshotted) food + wine menus with allergen badges, bilingual CA(default)/ES toggle, editorial hero with kinetic reveal, philosophy/chef storytelling, interactive filterable menu with hover photo cards on signature dishes, team grid, location/hours/map, sticky CoverManager booking drawer. Awwwards-level motion via framer-motion + lenis smooth scroll.

## Architecture
- Pure frontend (React + Tailwind + framer-motion + lenis). No backend/DB logic needed — default FastAPI template untouched.
- `src/context/LanguageContext.jsx` — CA/ES global state.
- `src/data/content.js` — all UI copy bilingual + CONTACT (real phone, Instagram, TikTok, CoverManager booking URL, Google Maps link).
- `src/data/menuData.js` — 29 transcribed food dishes (bilingual name/desc/price/allergens), 3 marked `signature` with AI-generated dish photos for hover cards.
- `src/data/wineData.js` — full wine list transcribed from both wine menu photos (blancs/rosats/negres/escumosos/copes).
- `src/components/` — Header, Hero, Marquee, Philosophy, MenuSection, Team, Location, BookingDrawer, Footer, AllergenBadge.
- Brand assets: `/app/frontend/public/brand/isotype.png` (cropped/transparent circle icon). Wordmark rendered as styled text (Fraunces serif, "Casa" cobalt + "Güell" charcoal) since source logo PNG had background artifacts unsuitable for clean transparency extraction.
- Fonts: Fraunces (headings), Inter (body), Space Mono (prices/data/allergen codes).

## Core Requirements (static)
- Brutalist-minimalist aesthetic: #FAF8F5 bg, #111215 text, #1D4ED8 cobalt accent, #14161B dark wine surface, #E5E2DC hairline borders.
- Bilingual CA(default)/ES full content toggle.
- Digitized menu (no raw images), 5 filter tabs, allergen SVG badges w/ tooltips, hover photo cards on signature dishes.
- CoverManager booking iframe + phone fallback in sticky drawer.
- Real contact info: phone 936 43 43 84, Instagram/TikTok @casaguell_bcn, address Carrer de Castella 1, Sant Martí.

## Implemented (2026-08-17)
- Full single-page build: sticky header w/ logo+isotype+nav+lang toggle+reserve CTA (desktop & mobile drawer), kinetic hero with staggered line reveal + parallax dish image, editorial marquee, philosophy section (3 numbered chapters + 3 metric badges + chef image), interactive menu (Per Picar/Guisats i Fons/Peix i Carns/Postres Casolans tabs + Carta de Vins dark-mode tab w/ 5 wine sub-categories), floating hover photo cards on Cap i Pota/Fricandó/Flam, team grid (4 members, grayscale→color hover) + quote, location section (hours grid, real Google Maps embed, phone/social links), sticky floating reserve button + booking drawer (real CoverManager iframe + tel: fallback), footer.
- Custom AI-generated photography for 3 signature dishes + hero dish shot (Catalan stews/flan not well represented in stock libraries).
- Fixed: nav "Vins" now auto-activates the wine tab on click (was requiring a double click) — tested and verified.
- Testing agent: 100% of critical flows passed (language toggle across all sections, all menu/wine tabs, hover cards, booking drawer w/ real iframe, mobile responsive, no critical bugs).

## Backlog / Next Tasks
- P1: Replace placeholder team member names/bios with real staff info if provided by owner.
- P1: Swap stock/AI team & interior photography for real venue photos when available.
- P2: Add newsletter/contact form if requested (currently no backend endpoints exist).
- P2: SEO meta tags / Open Graph image for social sharing.
