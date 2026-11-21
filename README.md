# ayyoweb3 portfolio

Portfolio of ayyoweb3 (Sauban Adesope): full stack web developer and AI motion designer.

Live: https://ayyoweb3-portfolio.vercel.app

## Stack
React 19 + Vite, react-router (nested routes), `motion` for animation, plain CSS with tokens, Instrument Serif + Inter via @fontsource. Static site on Vercel; no backend.

## Develop
```bash
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build in dist/
```

## Where things live
- `src/data/projects.js`: builds (titles, links, stack, screenshots, award)
- `src/data/motion.js`: motion pieces; web copies and posters in `public/assets/motion/<slug>/`
- `src/pages/`: Landing, Motion, Builds, Contact, Not Found
- `SPEC.md`, `DESIGN.md`, `AGENTS.md`: content, design and build rules
