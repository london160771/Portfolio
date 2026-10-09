# Polish Pass 1 handoff

- Removed ProjectPage, /projects/:slug, internal project links, and case-study navigation. Titles/media are informational. Shared ProjectActions renders direct Live/GitHub anchors with safe new-tab attributes and clear accessible names; no live URL means GitHub only. No modals/replacement pages.
- Reduced hero/section/project type, header padding, metadata/copy gaps, section spacing and footer density. Semantic tokens define a small type/spacing system; warm palette and restrained blue retained.
- Selected Work keeps its order, uses compact wide media/summary rows for the first two projects and paired remaining entries on desktop, and stacks on narrower screens. Screenshot frames use contain and preserve all source UI. Desktop heights: 360px wide, about 253px paired, versus about 573–610px and 381px previously.
- Web2/Web3 use aligned concise rows and shared external actions. About/capabilities and Contact use the same spacing, hierarchy, and link treatment. No new media or copy claims added; three existing leads and three placeholders remain.
- Improved in-page keyboard navigation: work/section anchors focus their headings; Tab then reaches the following actions. Initial page load no longer steals focus. Existing menu, route titles, reduced motion, forced-colors focus, and 44px targets preserved.

## Verification — 9 October 2026
- Homepage checked at 320/390/768/1440px and 720 × 450 equivalent 200% layout width: no horizontal overflow, no About/Contact overflow, all images loaded with contain, three placeholders unchanged, no internal project links.
- Native 200% browser zoom was not available: the in-app browser exposed no zoom control and Control+Equal did not change DPR/layout width. Control+0 restored baseline; actual zoom remains unverified. Equivalent 720px reflow is not claimed as a native zoom test.
- Direct routes /web2, /web3, /about, /contact load with correct titles. Removed /projects/opna and /projects/agenthub show Not Found. External hrefs/targets and 44px action heights checked.
- Missing-live-URL behavior verified through one-off server rendering of ProjectActions: exactly one GitHub anchor and no Live anchor. No application data was changed for this check.
- Work anchor → heading focus → first Live action, visible focus outlines, keyboard menu open/select, Escape/restore, and no browser warnings/errors checked. Screen-reader roles/names inspected through the accessibility tree; physical assistive-technology/RTL testing not claimed.
- Text contrast measured on the rendered canvas: body 16.17:1, muted text 5.6:1, external actions 6.53:1. Desktop full-page composition inspected through the footer; no screenshot UI was clipped by contain framing.
- Lint, build, and git diff --check passed. No commits, pushes, deployment, or Web3 media expansion.
