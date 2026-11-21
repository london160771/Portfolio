# Portfolio build rules

## Scope and authority
- The site is being redesigned as **Full Stack Web Developer & AI Motion Designer**. SPEC.md locks content, routes and data; DESIGN.md locks the visual and motion direction. Follow the user's latest instructions; propose material deviations before building them.
- Complete only the current phase, report results and gaps, then stop for review.
- Work on a feature branch and open a PR for review. Never push to main or deploy without explicit approval.

## Stack
- React 19 + Vite, JavaScript/JSX, plain CSS with tokens, react-router (nested routes), ESLint. No backend or CMS.
- Approved additions: `motion` (animation), `@fontsource/instrument-serif`, `@fontsource-variable/inter`. Explain any other dependency before adding it.

## Content discipline
- Never invent URLs, clients, metrics, roles, dates or awards. Missing facts stay null and are omitted. Only award: Q2FA, Hackathon winner · Arc Microgrant.
- Use real screenshots and real videos only. No fabricated UI or mock results.
- Keep evidence and provenance in docs/, never in rendered copy.

## Engineering rules
- One shared dataset per content type (`projects.js`, `motion.js`), kept separate from layout.
- Reusable components; no duplicated pages per category.
- Semantic HTML, keyboard access, visible focus, reduced-motion support. Motion never gates content.
- Video: posters first, lazy previews, `preload="none"` for full files, compressed MP4/WebM. Large files go off-repo.
- Avoid unrelated refactors.

## Phases
1. **Direction + docs (current):** landing copy, SPEC/DESIGN/AGENTS rewrite. Stop for review.
2. **Foundation + landing:** nested routes and redirects, shared layout with page transitions, tokens and fonts, landing page (intro, pfp, proof, path buttons, collage, dial). Remove unused legacy files (P2.jsx, Portfolio.jsx, starter assets).
3. **Builds:** BuildCard grid, web2/web3 nested tabs, Q2FA award badge, big-type header.
4. **Motion:** import and compress videos from the user's laptop folder, posters, motion.js, grid + overlay route.
5. **Polish + launch:** contact page, performance and accessibility pass, README rewrite, deploy on approval.

For code phases: run lint and build, inspect 320/390/768/1440px, keyboard/focus, reduced motion and overflow. Report what was actually checked.
