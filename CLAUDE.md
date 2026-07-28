# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server (Create React App / react-scripts)
- `npm run build` — production build
- `npm test` — run tests in watch mode; `npm test -- --watchAll=false` for a single run
- `npx stylelint "**/*.{css,scss}"` — lint styles (this is what CI runs on PRs; see `.github/workflows/linters.yml`)

There is no ESLint config in this repo; Stylelint is the only enforced linter.

## Architecture

Personal portfolio SPA built with Create React App, React Router v6, and SCSS. Deployed on Vercel.

- **Routing**: `src/App.js` defines all routes (`/`, `/about`, `/work`, `/contact`, `*` → Error). Pages live in `src/pages/` and are re-exported through `src/pages/index.js`. The header swaps between `Sidebar` and full-screen `Menu` based on `isMenuOpen` state held in `App`.

- **`src/utils/`** is not generic helpers — it holds two distinct things:
  - Custom hooks wrapping imperative canvas/DOM animation code (`skills-animation.js` — 3D SVG tag cloud, `mouse-hover-animation.js` — canvas particle trail, `heading.js` — per-letter heading markup, `open-menu.js`/`close-menu.js`). These run inside `useEffect` and manipulate refs/DOM directly; pages pass refs into them.
  - `projects.js` — the data source for the Work page. Each project entry includes images (imported from `src/assets/images/projects/`), tech list, and live/source links. Adding a portfolio project means editing this file only; `ProjectCard`/`ProjectPopup` in `src/components/Work/` render it.

- **Styling**: all SCSS lives in `src/assets/styles/` using a 7-1-style layout (`abstracts/`, `base/`, `components/`, `pages/`) with a single entry point `main.scss` imported once in `src/index.js`. Components/pages do not import their own styles — a new partial must be `@import`-ed in `main.scss`. Variables are in `abstracts/_variables.scss`.

- **Contact form** uses Formspree (`@formspree/react`); successful submit routes to the `SuccessSubmit` page.
