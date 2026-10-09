# Portfolio specification

Status: navigation + Web3 expansion only. Portrait and About page are removed; homepage Capabilities remain. No commits, pushes, or deployment.

## Purpose and journey
Help collaborators, employers, and clients scan the work, open the actual product/source, and make contact. Primary journey: Selected Work → Live/GitHub or Contact. Projects have no internal detail pages or replacement modals.

## Routes and navigation
| Route | Content |
| --- | --- |
| / | Hero, Selected Work, Web2, Web3, Capabilities, Contact — in that order |
| /web2 | Web2 projects with direct external actions |
| /web3 | Web3 projects, including confirmed hackathon builds, with direct external actions |
| /contact | Email and confirmed social links; no backend form |

Navigation: Selected Work, Web2, Web3, Contact. No standalone About page or personal photo. /about uses the standard Not Found view. Remove /projects/:slug, ProjectPage, case-study/next-project navigation, and internal View project links. Removed project and Hackathons URLs use the standard accessible Not Found view. Do not redirect into a modal or invent replacement pages.

Support direct entry, refresh, browser history, route titles, active navigation, and main-content focus on route changes. Vercel fallback is in vercel.json; other hosts need equivalent SPA fallback.

## Homepage
1. Hero: identity and exact positioning — “Full-stack developer building web products, interfaces and onchain tools.” Compact text-led composition with identity/location metadata and direct work/contact links. No portrait or replacement decorative image.
2. Selected Work: Opna → VELORA COVE → THE BV BRAND → StockSplit → AgentHub → PortPay. Preserve the editorial order separately from featured flags.
3. Web2: concise list from the shared dataset and link to /web2.
4. Web3: regular and confirmed hackathon projects from the same dataset and link to /web3. No separate Hackathons category/page/section.
5. Capabilities: the three existing concise capability groups only. No biography paragraph, portrait, or About destination.
6. Contact: direct email and confirmed social destinations; link to /contact.

## Project presentation and actions
Show only title, one factual sentence, category/year, confirmed hackathon label where relevant, role, short stack, compact real media preview where available, and external actions.
- Live ↗ opens the documented liveUrl.
- GitHub ↗ opens repositoryUrl.
- With no live URL, show GitHub only. Do not display disabled/fabricated destinations.
- Use native anchors with clear names and new-tab disclosure when target=_blank; include noopener/noreferrer.
- Titles and media are informational. No internal project links, next-project navigation, detail pages, or modals.
- No exhaustive feature lists, test counts, implementation phases, migration/QA notes, unverified outcomes, or long event histories.

## Shared project data
One dataset feeds Selected Work and Web2/Web3. Keep stable internal slug, title, shortDescription, category (web2/web3), featured, year, role, stack, liveUrl, repositoryUrl, media, and optional confirmed hackathon metadata. Missing facts remain null/empty and are omitted. Slugs are internal identity keys, not public routes. Repository/case-study evidence may remain in internal authoring notes but is not rendered.

| Project | Locked role |
| --- | --- |
| Opna | Full-stack developer |
| VELORA COVE | Design + frontend development |
| THE BV BRAND | Design + frontend development |
| StockSplit | Full-stack / Web3 developer |
| AgentHub | Product + full-stack development |
| PortPay | Full-stack / Web3 development |

THE BV BRAND live URL is https://the-bv-brand.vercel.app/. The user confirms “Hackathon build” for StockSplit, AgentHub, PortPay, Rokai, Q2FA and NWC LimitProbe. AlphaWatch has no hackathon label. Only AgentHub currently has a named event in the dataset; no event details, awards or results are inferred for the other entries.

## Media boundaries
Use one genuine lead view for each of the six Selected Work projects. Retain the existing Web2 captures; add StockSplit, AgentHub and PortPay from verified real project UI. StockSplit deployment must match the documented Devnet project. Preserve network/status context; captures do not prove transactions or results. Optimize WebP with responsive widths; use mobile art direction only where useful. Preserve source branding, alt text, dimensions, srcset/sizes, lazy loading and decoding. Compact frames use object-fit: contain so no important screenshot UI is cropped. Target roughly 30–40% less height than Real Media Phase 1, with a contained, balanced two-column presentation. All six selected projects now have real media; unsupported future media must remain absent or explicitly temporary.

## Responsive and accessibility requirements
- Reflow at 320/390/768/1440px without horizontal overflow; test actual 200% zoom when available, otherwise state the verification limit.
- One h1, coherent heading order, semantic landmarks, skip link, readable line lengths, visible focus and keyboard-accessible native controls.
- Mobile menu exposes expanded state, closes on selection/Escape, and restores focus appropriately. Avoid focus theft on initial load; manage focus on route changes.
- Aim for WCAG 2.2 AA contrast, generous 44px action targets, and non-overlapping controls. Wrap content rather than truncating or shrinking it into unreadability.
- Preserve reduced motion. Only subtle 150–250ms image/link interactions are allowed; reduced motion disables transforms. No scroll gimmicks, autoplay or new motion packages.
- Empty categories and unknown routes have honest, actionable states. No new loading UI is needed for local static content.

## Remaining content
Only the six lead views are authorized; no extra gallery media or longer project narratives. Outcomes remain unverified/empty. Keep source/crop provenance in docs/media-sources; keep technical evidence outside public copy.

## Fixed navigation and expanded Web3
- Navbar remains visible at the viewport top with a solid warm canvas background, subtle rule and no shadow/glass effect. Four existing route destinations stay unchanged; route-based active state remains underlined.
- Measure the actual header height, including mobile menu expansion/wrapping. Use that measurement for body offset and document scroll padding; keep additional anchor clearance and a visible skip link above the header. Native and router hash navigation is immediate. Menu closes on navigation/Escape with existing focus behavior. Keep it scrollable on short viewports.
- Homepage Web3 and /web3 both list exactly: StockSplit, AgentHub, PortPay, Rokai, Q2FA, NWC LimitProbe, AlphaWatch. The original six Selected Work entries and order stay unchanged.
- Web3 rows expose only name, one factual sentence, confirmed role, short stack, generic hackathon label where applicable, and available Live/GitHub actions. Omit category/year metadata in these rows. Missing fields stay null/empty and are omitted.
- No new project imagery or pages in this pass. Rokai/Q2FA/NWC LimitProbe/AlphaWatch remain compact list entries.
- Q2FA has a confirmed hosted live URL, https://q2fa.vercel.app, but no confirmed role; show Live and GitHub actions and omit its role. NWC LimitProbe has no confirmed role. Leave new project dates/results null/empty. Source evidence stays in docs/web3-expansion.md.
