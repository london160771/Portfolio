# Real Media Phase 1 handoff

Historical media-phase record. Polish Pass 1 keeps these assets but uses smaller contain frames and direct external actions; internal project pages/navigation have been removed.

- Added one genuine live-site lead capture per Opna, VELORA COVE, and THE BV BRAND. Desktop/mobile art direction is responsive variation, not extra gallery media. No supporting images were necessary.
- Original captures, source URLs, crop bounds, derivative dimensions/bytes, and reproduction script are recorded under docs/media-sources. No generated or fabricated UI, retouching, or compositing.
- Opna preserves the desktop source's Preview label. VELORA COVE remains clearly a fictional concept. BV retains its own monogram, typography, footage, and product photography inside the image. Portfolio chrome stays neutral.
- Prepared WebP variants use srcset/sizes, picture sources for mobile, intrinsic dimensions, lazy loading, async decoding, and factual alt text. Frames show the prepared crops fully instead of clipping screenshots to placeholder ratios.
- Project copy, roles, stack, URLs, remaining homepage sections, and StockSplit/AgentHub/PortPay media were not changed. The last three retain their existing placeholders.

## Verification — 9 October 2026
- Lint, build, and git diff --check passed.
- Production preview checked at 320, 390, 768, 1440px. All 12 project/width combinations loaded successfully with nonzero natural image sizes, accurate alt attributes, and no unintended clipping. No horizontal overflow.
- Desktop/mobile source selection confirmed; crops inspected after encoding and in the portfolio. No broken images or browser warnings/errors observed.
- Interactive project links retain keyboard focus/access. Static images add no motion; existing reduced-motion behavior remains. Physical-device/assistive-technology verification is not claimed.
- Fourteen responsive derivative files total approximately 535KB; individual served assets range from about 10KB to 96KB. Each viewport requests one variant per lead.
- No commits, pushes, or deployment. Review at http://127.0.0.1:5185/ while the local preview runs.
