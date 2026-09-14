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

---
## Actualización — 14 Sep 2026 (Hero de vídeo + logo oficial)
- **Hero rediseñado**: fondo de vídeos 9:16 rotativos (3 columnas en escritorio, 1 en móvil). Al acabar un vídeo se turna al siguiente, ciclando por todos. Solo muestra el logo "Casa Güell", la frase "Tradició catalana, sense maquillatge" y dos botones ("Reservar taula" / "La carta"). Overlay oscuro para legibilidad.
- **Vídeos**: recibidos 3 (faltan 4). Eran HEVC/H.265 (no reproducibles en Chrome/Firefox) → transcodificados a **H.264 + faststart + yuv420p, sin audio** con ffmpeg. Guardados en `/app/frontend/public/videos/v1..v3.mp4`. Originales HEVC en `/app/scripts/hevc_originals/`. Para añadir los 4 restantes: transcodificar igual y ampliar el array `VIDEOS` en `Hero.jsx` (el paso de rotación = nº de columnas, ya soporta 7).
- **Logo oficial**: procesado desde el PNG transparente del usuario a 3 variantes en `/app/frontend/public/brand/`: `logo_transparent.png` (Casa azul + Güell negro, header), `logo_hero.png` (Casa azul + Güell crema, sobre vídeo), `logo_white.png` (blanco, footer). Script: `/app/scripts/process_logo.py`.
- **Sección Equipo eliminada** (no hay fotos del equipo): quitada de `App.js` y del nav ("equip"). `Team.jsx` queda sin usar.
- **Foto real del chef Jordi** integrada en Filosofía (`/app/frontend/public/brand/chef_jordi.webp`).
- Pendiente del usuario: 4 vídeos adicionales + fotos de los platos (para la carta).
- NOTA: la reproducción de vídeo no es verificable en Chromium headless (sin códec H.264 propietario), pero el formato es estándar web y reproduce en navegadores reales.

### Actualización 2 — 14 Sep 2026 (8 vídeos + reproducción fluida)
- Añadidos los 5 vídeos restantes (total **8**: v1–v8). Todos transcodificados a H.264 + faststart + yuv420p, **sin audio** (el usuario NO quiere sonido). Array `VIDEOS` en `Hero.jsx` con las 8 rutas.
- Sin póster: los slots iniciales usan `autoPlay muted playsInline preload="auto"` y faststart para arrancar de inmediato al entrar. Fundido suave (framer-motion opacity) al turnar cada vídeo para evitar parpadeo negro.
- Originales HEVC en `/app/scripts/hevc_originals/`.

### Actualización 3 — 14 Sep 2026 (Carta: correcciones + Bogeries + El Mercat + foto al pasar)
- Correcciones carta ('Per Picar'): 'Cansalada Cruixent de Sòria' → 'Torrezno de Sòria' (CA); 'Truita de Gamba' → 'Truita de Camarón' (CA); 'Terrina Cruixent d'Orella' precio 12,50€ → 14,50€.
- Nueva categoría 'Les Bogeries del Jordi' (ES 'Las Locuras de Jordi') en la carta con 5 platos: Amanida de Tomàquet Eco 18,90€, Orella Cruixent a Baixa Temperatura 14,90€, Selecció de Croquetes de la Setmana 5,50€/ud, Ous Fregits amb Patata Foie i Tòfona 29,80€, Puceta el Nostre Mini Irlandès 4,50€ (postre).
- Foto al pasar el cursor (desktop): tarjeta flotante para cualquier plato con imagen. En móvil se muestra la foto en línea (thumbnail). Fotos reales del usuario en /app/frontend/public/dishes/: canelons, calamar, flam, xuixo (mapeadas a canelones/calamar-rovellons/flam/xuixo).
- Nueva sección 'El Mercat' (id=mercat, componente MarketProduct.jsx) con foto real del día del usuario (/dishes/mercat.webp) + galería de 3 fotos reales de stock (Unsplash) + nota 'Pregunta pel producte del dia'. Enlace de nav 'El Mercat' añadido.
- Verificado por testing_agent (iteration_2.json): 100% frontend, sin bugs, desktop + móvil.

### Actualización 4 — 14 Sep 2026 (más fotos de platos + sin alérgenos en Bogeries)
- Añadidas fotos reales (foto al pasar / inline móvil) a: Ostra Guillardeau, Amanida Russa, Tàrtar de Tonyina, Terrina Cruixent d'Orella, Gambeta de Vidre. En /app/frontend/public/dishes/ (ostra, ensaladilla, tartar, tarrina, gambitas .webp).
- Quitados los alérgenos de todos los platos de 'Les Bogeries del Jordi' (croquetes, ous-foie, puceta → allergens: []).
- Verificado: hover-card aparece con nuevas fotos; 0 badges de alérgenos en Bogeries.
