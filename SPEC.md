# Portfolio specification

Status: Phases 1–5 built (docs, foundation + landing, Builds cards, Motion grid + overlay, polish with About section, SEO and contact bands). Supersedes the earlier dev-only spec; history lives in docs/.

## Positioning
ayyoweb3 (Sauban Adesope, Lagos) is a **Full Stack Web Developer & AI Motion Designer**: two independent skills: building web products end to end, and creating AI-driven motion graphics and video.

## Purpose and journey
Visitors land, understand both roles in seconds, then pick a path: **Motion** (watch videos) or **Builds** (open real products/source). Every page ends with a route to Contact.

## Routes (nested, one shared layout)
| Route | Content |
| --- | --- |
| `/` | Landing: intro, photo, proof, two path buttons, media collage |
| `/motion` | Motion header (featured reel or piece) + video grid |
| `/motion/:slug` | Single piece as an overlay above the grid; shareable, Back/Escape closes |
| `/builds` | Builds header + all projects |
| `/builds/web2`, `/builds/web3` | Nested filter tabs over the same list |
| `/contact` | Email and confirmed socials; no backend form |

Old routes `/web2` and `/web3` redirect to `/builds/web2` and `/builds/web3`. Unknown routes use an accessible Not Found view. A layout route owns the header, footer and animated page transitions. Vercel SPA fallback stays in vercel.json.

Navigation: Motion, Builds, Contact, with the wordmark linking home.

## Landing copy (locked draft)
- Eyebrow: `ayyoweb3 — Lagos, Nigeria`
- Headline: **Full stack web developer.** *AI motion designer.* (italic serif accent on the second role)
- Intro: “I build web apps end to end, from first commit to launch. I also create AI-driven motion graphics and videos made to stop the scroll.”
- Proof line: `1× hackathon winner — Q2FA, Arc Microgrant`
- Buttons: **Watch my motion work** → `/motion` and **See my builds** → `/builds`
- The two roles are presented as independent skills, not as one linked workflow.
- Photo: X profile picture of @ayyoweb3 (temporary; replaceable by an uploaded portrait).

## Builds
- Source: existing shared dataset `src/data/projects.js` and its real WebP screenshots.
- Card: title, one factual sentence, role (when confirmed), short stack, media (when available), Live ↗ / GitHub ↗.
- No generic “Hackathon build” labels. One award badge only: **Hackathon winner · Arc Microgrant** on Q2FA. Data field: `award` (replaces `hackathon`).
- Order: featured six first (Opna, VELORA COVE, THE BV BRAND, StockSplit, AgentHub, PortPay), then Q2FA, Rokai, NWC LimitProbe, AlphaWatch.
- No project detail pages or case studies.

## Motion
- New dataset `src/data/motion.js`: slug, title, oneLiner, type (`client` | `personal` | `concept`), year, tools[], aspect (`16:9` | `9:16` | `1:1`), poster, previewSrc (short muted loop), fullSrc or embedUrl, duration.
- Grid card: poster first, muted preview plays on hover (desktop) or when in view (mobile), title + one line + type below.
- Overlay: full video with sound and controls, title, tools, year.
- Web copies (720p30 H.264 CRF 26, faststart, ~1–7 MB each) and posters live in `public/assets/motion/<slug>/`; originals stay on the user's laptop. If the set grows past ~100 MB, move videos to Vercel Blob.
- Label client vs personal/concept honestly; never imply a client or result that isn't confirmed.

## Content rules
- Never invent URLs, clients, metrics, roles, dates or awards. Missing facts stay null and are omitted.
- Confirmed facts: Q2FA is the single hackathon win and received the Arc Microgrant; THE BV BRAND live URL https://the-bv-brand.vercel.app/; Q2FA live URL https://q2fa.vercel.app.
- Keep evidence and provenance in docs/, not in rendered copy.

## Accessibility and performance
- One h1 per page, semantic landmarks, skip link, visible focus, 44px targets, keyboard access to every control including the video overlay (focus trap, Escape, focus restore).
- `prefers-reduced-motion`: no parallax, collage drift or autoplay previews; page transitions become short fades.
- Animation never gates content. Videos lazy-load with posters; `preload="none"` for full videos. No layout shift from media.
- Reflow at 320/390/768/1440px with no horizontal overflow.
