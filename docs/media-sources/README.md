# Real project media — source and crop provenance

All six selected projects now have genuine lead media. The Phase 1 record below is historical; the remaining-project capture record follows it.

Captured 9 October 2026 from the public live sites below using the actual rendered pages. No authentication, form submission, DOM/CSS edits, generated UI, or compositing. Native home navigation returned the pages to the top; editorial films were paused through their visible controls. Full-page originals remain here for audit. Only cropped/resized WebP derivatives under public/assets/projects are served.

| Project | Live source | Repository context | Lead selection |
| --- | --- | --- | --- |
| Opna | https://opna-xi.vercel.app/ | https://github.com/london160771/Opna | Live landing-page introduction; desktop preserves the site's explicit Preview badge on its example booking panel. This is not a customer booking/session screenshot. Mobile retains logo, introduction, and both CTA buttons. |
| VELORA COVE | https://velora-cove.vercel.app/ | https://github.com/london160771/velora-cove | Genuine homepage hero with wordmark, headline and coastal pool film frame. Fictional hospitality concept illustrated with the project's supplied stock media, not an operating resort. Mobile focuses on the same hero. |
| THE BV BRAND | https://the-bv-brand.vercel.app/ | https://github.com/london160771/BV-BRAND-landing-page | Genuine campaign hero with gold monogram, editorial typography, paused lifestyle footage, and supplied red-handbag photography. Mobile uses its actual responsive arrangement. |

- Desktop source viewports: 1440 × 900; mobile: 390 × 844. Scrollbar exclusion makes the screenshot widths 1424 and 374 pixels. Captures show the live source's own responsive layout.
- Exactly one lead view per project; desktop/mobile images are art-directed variants of that view, not additional gallery items. No supporting image was necessary.
- scripts/prepare_project_media.py defines pixel crop bounds and uses Pillow for deterministic Lanczos resizing and WebP encoding (quality 88). No upscaling, overlays, or retouching. derivatives.json records paths, bounds, dimensions, and byte sizes.
- Keep visible identity, subjects, headings, and controls inside crops. Screenshots were visually inspected after encoding; recapture if sticky headers/focus overlays contaminate a source.
- Alt text describes the visible product/site introduction and branding without inventing product results. Public project sentences, roles, stack, and URLs were not changed.
- StockSplit, AgentHub, and PortPay media remain empty; their placeholders and all unrelated page styling are unchanged.

## Cleanup + remaining media — 9 October 2026

One additional genuine lead view each for StockSplit, AgentHub and PortPay, captured from their public live UI without authentication, wallet connection, form submission, transactions, DOM/style modification, compositing or generated content. Desktop/mobile files are variants of the same lead, not extra gallery items. The first three projects' captures remain unchanged.

| Project | Live source / repository | Lead and evidence boundary |
| --- | --- | --- |
| StockSplit | https://stock-split.vercel.app/ / https://github.com/london160771/StockSplit | Live introduction with green identity, ownership diagram, Devnet selector and explicit valueless-demo-assets wording. README describes the same invite-only Devnet ownership/withdrawal mechanics (README SHA 7bc5e4001c449877cce9558847271964119072c2). Its Public links section is still TBD, so deployment suitability was checked against visible UI and documented project behavior; an exact deployed commit was not independently established. No wallet or transaction flow was tested. |
| AgentHub | https://agenthub-bnb.vercel.app/ / https://github.com/london160771/agenthub-bnb | Genuine black/yellow introduction, agent finder and desktop journey panel. Captured after API status showed online; this is not proof of agent execution or uptime. README SHA a11e26b8db8adcbf3001447a6874365b7e08480a distinguishes indexed external BSC Mainnet agents from built-in BSC Testnet executors. No results, balances or benchmark panels were staged/captured. |
| PortPay | https://port-pay.vercel.app/ / https://github.com/london160771/PortPay | Real merchant introduction on X Layer Mainnet, chain 196. Desktop retains the flow panel and source's final-review/authorization note. Mobile retains branding, Mainnet label, headline and existing actions. README SHA 0add43c750640e356c60bc7b3f98c958d48eea29 documents Mainnet-first UI, buyer-signed handoff awaiting final review, and historical/internal testnet evidence. Screenshot is not evidence of a completed mainnet payment; no wallet was connected. |

New desktop source viewports were 1440×900; native browser captures exclude scrollbars/unused view area and have the actual dimensions recorded by the encoding manifest. AgentHub/PortPay mobile source viewports were 390×844. StockSplit mobile used 430×900 to preserve the complete italic headline; the narrower source layout clipped that headline. Lead crops exclude partial following sections, browser scrollbars and fixed mobile navigation where appropriate; they preserve branding, controls and network labels. Desktop PortPay preserves its full review note. Public project descriptions, roles, stack, URLs and network distinctions are unchanged.

scripts/prepare_project_media.py now handles all six projects. derivatives.json is the complete reproducible crop/dimension/byte ledger. WebP uses quality 88 and Lanczos resizing with no upscaling or retouching. Only optimized derivatives are served; originals remain internal evidence.
