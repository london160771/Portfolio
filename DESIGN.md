# Portfolio design direction

Status: navigation + Web3 expansion. Preserve the current visual system; fix the navbar and extend compact Web3 rows only.

## Character and system
Quiet, distinctive editorial composition: warm off-white #F5F3EE, near-black #171717, muted #62615C, restrained blue #3445CF. One dark closing surface (#222B2B) uses off-white text and muted #C5CBC8 secondary links. Projects retain their own branding; portfolio chrome remains neutral. No gradients, glass, blobs, decorative 3D, heavy cards, shadows or scroll gimmicks.

Keep the existing sans stack; system Georgia italic provides occasional editorial accents, with no font dependency. Conceptual cues remain editorial structure (Alexander Horner), restraint (Tarik Karahodzic), confident type (Hugo Crozet) and project presentation (Baseframe).

- Hero 28–52px, page headings 28–38px, section headings 20–24px, project titles 18–22px, copy 14–15px, metadata/actions 13px, small labels 12px. Do not increase overall scale.
- Hero line height 1.25; short copy 1.55–1.6. Balance headings, wrap naturally, never truncate.
- Content width 1216px, fluid 20–40px gutters. Compact 8–32px spacing, section gaps 20–28px, approximately 64px header. Preserve 44px interaction targets.
- Thin near-black rules distinguish major sections; lighter rules divide compact entries. No repeated card shells.

## Homepage composition
- Header: compact identity, four navigation destinations, hairline baseline, blue underlined active state, accessible mobile menu. Fixed at the viewport top, with an opaque canvas surface and no glass/shadow. Measure its actual height for body and anchor clearance; retain 44px targets, mobile expansion/Escape behavior and underlined active routes.
- Hero: exact headline from SPEC.md and italic accent on “onchain tools.” Text-led asymmetry uses ten of twelve columns on desktop, eleven on tablet and the full width on mobile. Identity/location remain above; simple work/contact actions below. Keep 28–52px type and compact spacing. No photo or replacement decorative image.
- Selected Work: locked order with visible 01–06 numbering. Three reusable compositions: media-left split (01/05), media-right split (02/06), paired compact entries (03/04). Number and facts sit together; title and media remain informational. Layout choices live separately from shared project facts. Mobile collapses to media followed by summary.
- Web2/Web3: compact editorial entries, stronger title weight, actions below title/meta and concise description/facts alongside. Single column on narrow screens. The seven Web3 entries use only name, short sentence, role/stack and external actions, with the user-confirmed Hackathon build label on all except AlphaWatch. Hide redundant category/year text in Web3 rows. Keep the existing compact spacing and responsive row layout.
- Capabilities: only the existing three numbered capability groups with fine rules. Full-width three-column grouping on desktop; vertical grouping on mobile. No portrait, biography paragraph or About page link.
- Contact: the one contrasting dark surface closes the page. Existing “Get in touch” becomes a serif accent; email is the primary action (18–30px), GitHub/X secondary. No form or new closing claims.

## Media
Use one genuine project lead view for each of the six Selected Work projects. Preserve source branding, accurate alt text, dimensions, lazy loading and decoding. Add only real StockSplit, AgentHub and PortPay UI; no fabricated dashboards, seeded financial results, recolouring or overlay text. Network/status context must remain accurate. Remove personal portrait imports/styles from the active UI; unused historical source remains outside the application bundle.

Desktop split media is capped at 330px, reverse at 300px, paired at 250px; placeholders are 120px. Useful mobile lead variants remain about 260–320px (tall BV about 320–410px). Screenshots using only a landscape lead can use shorter mobile frames (about 170–230px) to avoid excessive letterboxing. Use contain for screenshots, with neutral letterboxing; never crop important UI. No personal portrait is displayed. Responsive sizes reflect split and paired widths for all six projects; use mobile art direction only when it materially improves readability. Images remain previews, without detail pages, modals or expansion affordances.

## Interaction and accessibility
Native Live/GitHub anchors, safe new-tab behavior, clear accessible names, visible 2px focus. No internal project navigation. Preserve semantic landmarks, heading order, skip link and route-change focus. Mobile menu supports keyboard selection, Escape and focus restoration.

Image hover may translate by 2px; arrows may shift 2px. Transform transitions are 200ms and enabled only with no motion preference; image hover requires a hover-capable device. Reduced motion disables these transforms and transitions/smooth scrolling. No scroll animation, autoplay or motion package. Maintain contrast on the dark surface and system focus in forced colors.

## Review gate
Inspect 320, 390, 768 and 1440px: hierarchy, crop/containment, image loading, wrapping, alignment, mobile navigation, keyboard/focus, direct actions and no horizontal overflow. Run lint, build and git diff --check. Stop for visual review; no commits or pushes.

No imagery is added for the four new list entries. Existing six project media and subtle interactions stay unchanged. Check fixed-header visibility and heading/focus clearance at 320/390/768/1440px, plus seven-entry order and the six-label/AlphaWatch exception.
