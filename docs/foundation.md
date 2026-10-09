# Foundation handoff

Historical foundation record. Polish Pass 1 removed individual project routes/pages and next-project navigation; current routes and external actions are defined in SPEC.md.

Install: npm ci. Start: npm run dev -- --host 127.0.0.1 --port 5184 --strictPort.
Production check: npm run build, then npm run preview -- --host 127.0.0.1 --port 5185 --strictPort.
Checks: npm run lint; npm run build; git diff --check.

- src/app/AppRoutes.jsx owns routes; SiteLayout shares header/footer and navigation focus.
- src/data/projects.js is the shared dataset. selectedWorkSlugs locks Selected Work order using internal identifiers. Category pages filter Web2/Web3; confirmed hackathon context is metadata within Web3, not a separate collection.
- src/styles/tokens.css and global.css provide basic design tokens, layout, mobile navigation, focus, and reduced-motion support. Final imagery and visual composition are deferred.
- docs/project-content.md keeps evidence gaps out of public pages. Do not expose internal notes or invent null content.
- vercel.json rewrites client routes to index.html. Vite dev/preview provide local fallback. Other static hosts need equivalent SPA fallback. No deployment was performed.
- Original Portfolio.jsx, P2.jsx, App.css, and assets are retained without unrelated cleanup. They are not imported by the new app.
- Unknown paths and unknown project slugs show the Not Found view. This static SPA uses the host's HTML fallback response; a real HTTP 404 would require host-specific handling in a later phase.

## Verification — 9 October 2026
- npm run lint, npm run build, and git diff --check passed.
- Production preview: directly loaded all six main pages, six project URLs, an unknown project, and an unknown top-level route. Titles, category membership, and locked Selected Work order checked.
- Browser back/forward and project refresh passed. Mobile keyboard menu open/select, Escape with focus restoration, menu close after navigation, and skip-link focus passed.
- No horizontal overflow across main pages/project pages/unknown project at 320, 390, and 768px; desktop checked at 1440px. No browser warnings/errors observed during the final checks.
- Reduced-motion CSS retained and inspected; no animation package or heavy motion added. Physical devices and assistive-technology testing remain outside this basic Foundation check.
- npm audit reports six existing transitive tooling vulnerabilities (one moderate, five high); no router advisory was reported. Dependency cleanup was not performed during Foundation.
- No deployment, commits, or pushes. Vercel fallback is configured but not deployed/verified remotely.
