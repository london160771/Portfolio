# Portfolio build rules

## Scope and authority
- Current authorized phase: navigation + Web3 expansion only. Fix the existing neutral navbar at the viewport top, measure its height for page/anchor offsets, preserve mobile/keyboard and active link behavior. Web3 order: StockSplit, AgentHub, PortPay, Rokai, Q2FA, NWC LimitProbe, AlphaWatch. Apply the user-confirmed Hackathon build label to the first six only. Add source-backed concise data, omit unconfirmed fields, keep Selected Work unchanged. No new detail pages, imagery, unrelated redesign, commits or pushes. Stop for review.
- Do not commit or push unless explicitly requested.
- Follow the user's latest instructions. SPEC.md locks product/content requirements; DESIGN.md locks visual direction. Propose material deviations for review before implementing them.
- Complete only the authorized phase, report its result and remaining gaps, then stop for review. Do not treat documentation approval as permission to build or publish.

## Baseline from Phase 0
- React 19 + Vite 8, JavaScript/JSX, plain CSS, ESLint; no backend or router.
- App renders src/pages/Portfolio.jsx. Project and skill arrays, ProjectCard, and synthetic ProjectPreview artwork live in that page.
- Existing featured work: AgentHub, Rokai, Astreon, AlphaWatch. Archive: Sonar, Yield Aggregator, Gift Pay, Spotify Clone.
- Historical audit reuse candidates included biography and portrait; the current cleanup decision removes both from public UI. Preserve concise capabilities, contact information, existing source URLs, semantic markup, mobile navigation foundations, and reduced-motion support. Existing claims and links are source material, not independently verified evidence.
- Cleanup candidates for a later authorized phase: unused P2.jsx, unused starter assets, Vite favicon, dead PortPay/StockSplit preview CSS, dense JSX, and template README. Do not delete them during documentation.
- Phase 0 inspected source and assets; build, browser behavior, and external URLs were not verified.

## Build rules for future authorized phases
- Keep React + Vite. Introduce lightweight client-side routing; no backend, CMS, or speculative infrastructure. Keep dependencies minimal and explain additions.
- Use one shared project dataset for homepage selections and category listings. Slugs are internal identifiers, not public detail routes. Keep data separate from layout.
- Preserve the routes, homepage sequence, and Selected Work order in SPEC.md.
- Hackathon participation is optional evidence-backed metadata on Web3 projects. Show a small label only when confirmed; never create a separate hackathon category/page or infer awards.
- Keep compact editorial scale: restrained hero/section/project typography, short section gaps, and preview-sized media about 30–40% shorter than Real Media Phase 1. Use contain for screenshots so important UI remains intact. Preserve comfortable reading and 44px interaction targets.
- Never invent URLs, results, metrics, roles, dates, hackathon participation, or project claims. Record missing facts as TODO in working content; do not publish TODO text or imply verification.
- Replace synthetic project mockups with real screenshots/video supplied or sourced with authorization. Do not present fabricated UI as the actual product.
- Use reusable layout, navigation, project-list, media, and external-action components; avoid a large component library or duplicated pages per category. Do not reintroduce project pages, case-study navigation, or detail modals.
- Maintain semantic HTML, keyboard access, visible focus, responsive content, and reduced-motion support. Motion must never gate access to content.
- Avoid unrelated refactors and preserve existing functionality unless the approved redesign changes it.

## Public content discipline
- Repository evidence is for accuracy and internal reference only. Do not publish the readiness reports or turn every supported fact into portfolio copy.
- Project presentation contains only title, one-sentence description, category/year, confirmed hackathon label where relevant, role, short stack, compact media preview, and direct Live/GitHub actions.
- There are no public case studies or individual project pages. Repository evidence remains internal reference; do not move it into replacement detail views.
- Exclude exhaustive feature lists, migration details, implementation phases, low-level infrastructure detail, internal QA notes, long hackathon history, and every limitation. Test counts appear only when genuinely useful to understanding the work.
- Preserve distinctions needed for honest short claims (for example, fictional concept or Devnet demo) in concise description/status wording; avoid excessive chain/network detail.
- Review public copy for brevity as well as accuracy. Keep evidence, verification notes, and missing facts outside rendered public content.

## Phase workflow and checkpoints
1. **Phase 0 — audit (complete):** identify stack, content, assets, reuse, and debt.
2. **Documentation (complete):** create AGENTS.md, SPEC.md, DESIGN.md; check consistency and list content gaps.
3. **Content and asset readiness (reviewed, gaps remain):** repository evidence gathered; roles and THE BV BRAND URL now confirmed by the user. Unsupported outcomes and media stay absent. Internal authoring notes live in docs/project-content.md.
4. **Foundation (complete):** shared data, routing, layout primitives, style tokens, and basic route/navigation checks.
5. **Homepage Visual Phase 1 and correction (complete):** restrained scale and merged Web3/hackathon context.
6. **Real Media Phase 1 (complete):** initial genuine lead views for the first three projects; provenance in docs/media-sources. The current cleanup phase completes remaining media.
7. **Polish Pass 1 (complete):** direct external project actions, compact preview frames and typography, consistent homepage/list/about/contact presentation. Verify four widths, 200% zoom if available, keyboard/focus, overflow, lint/build/diff checks; stop for review.
8. **Visual Identity / Polish Pass 2 (complete; portrait/About superseded below):** stronger editorial hierarchy, existing portrait, numbered alternating project compositions, compact collection entries and contrasting contact close. Verify 320/390/768/1440px, image loading, keyboard/focus, overflow and lint/build/diff checks. Stop for review.
9. **Cleanup + remaining media (complete):** remove active portraits and About route; retain homepage Capabilities; finish six real lead views with concise unchanged claims, optimized WebP and useful responsive variants. Verify four widths, loading, navigation/removed route, lint/build/diff. Stop for review.
10. **Navigation + Web3 expansion (current):** fixed header with measured offsets and compact seven-entry Web3 collection; verify four widths, anchor/focus/menu behavior, labels, lint/build/diff. Stop for review.
11. **Final QA (proposed):** content accuracy, metadata, performance, accessibility, links, and responsive inspection. Deployment remains a separate authorization.

For code phases, run build/lint and checks appropriate to the change. Inspect rendered pages at mobile and desktop sizes, including menu, focus, overflow, media, and reduced motion. Report actual checks and limitations; do not claim unperformed verification. Documentation-only phases require consistency checks, not application tests.

The user has explicitly confirmed hackathon participation labels for StockSplit, AgentHub, PortPay, Rokai, Q2FA and NWC LimitProbe. AlphaWatch must have no hackathon label. This confirmation is sufficient evidence for the generic label; it does not establish an event name, date, submission result or award.
