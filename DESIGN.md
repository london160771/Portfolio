# Portfolio design direction

Status: Phase 1 of the redesign. Replaces the earlier quiet editorial system (no-motion rules no longer apply).

## References and what we take
- **Timeless Type** (timeless.co/type, lead): big serif headline with italic accent, floating collage of colourful cards drifting in with parallax, soft grey canvas, dashed rotating circular dial, huge type moments.
- **Seesaw** (seesaw.website): grid cards that play a short muted video on hover, title + one line beneath.
- **Atelier** (atelierrstore.vercel.app): full-bleed hero media, thin wide-tracked wordmark, square uppercase buttons, clean category grid.

Take ideas, not assets: no copied fonts, imagery, text or exact layouts.

## Tokens
- Canvas `#E9E9EB` (soft grey), surface `#F4F4F5`, ink `#111111`, muted `#6B6B70`, rule `#CFCFD3`. Accent: none in chrome; colour comes from the work. Dark overlay for video `#0B0B0C` at 92%.
- Type: **Instrument Serif** (regular + italic) for headlines and accents; **Inter** (variable) for UI and body. Both open-licence, self-hosted via @fontsource.
- Scale: landing headline clamp(48px, 9vw, 128px), line-height 0.95; page titles clamp(64px, 14vw, 220px) for the huge type moments; section titles 28–40px; body 16–18px; meta 12–13px uppercase with 0.08em tracking.
- Layout: max width 1440px, gutters 20–48px, 12-column grid on desktop.
- Buttons: square corners, 1px ink border, uppercase 13px, 48px tall. Primary filled ink/canvas, secondary outline. Arrow nudges on hover.

## Signature moments
1. **Landing avatar:** the X pfp sits as a round avatar beside the eyebrow, directly above the headline, in a single-column intro. (The earlier media collage was removed: it read as cluttered on mobile.)
2. **Dial:** dashed circle (SVG) that rotates with scroll progress and carries a small label; sits beside the two buttons on desktop, hidden on small screens.
3. **Huge type headers:** each of /motion and /builds opens with a giant serif word that slides up letter by letter, over or under full-bleed featured media (Atelier-style).
4. **Page transitions:** shared layout route; outgoing page fades/lifts, incoming slides up 24px and fades in (~450ms, ease-out).
5. **Motion grid:** poster cards, hover plays the muted preview, click expands into the overlay with a shared-element transition.

## Motion rules
- Library: `motion` (Motion for React). One library only.
- Animate transform and opacity only. Durations 200–700ms; ease `[0.22, 1, 0.36, 1]`.
- Reduced motion: disable parallax, dial rotation, letter animation and hover autoplay; keep instant or 150ms fades.
- Never block reading or clicking while something animates.

## Components (minimal set)
SiteLayout (header, footer, transitions), Wordmark, PathButton, Dial, BigTitle, BuildCard, AwardBadge, FilterTabs, MotionCard, VideoOverlay, ContactBlock.

## Review gate per phase
Inspect 320/390/768/1440px, keyboard/focus, reduced motion, overflow, video loading. Run lint, build, git diff --check. Stop for review.
