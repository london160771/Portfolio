# Web3 expansion — internal evidence

New order: StockSplit, AgentHub, PortPay, Rokai, Q2FA, NWC LimitProbe, AlphaWatch. Selected Work remains the original six.

The user directly confirmed the generic Hackathon build label for every Web3 entry except AlphaWatch. No new event name/date, award, result or financial claim is inferred.

| Entry | Content/stack evidence | Role/link evidence and omissions |
| --- | --- | --- |
| Rokai | london160771/rokai README.md (0119a364606d074c3534492a876a312b50327224) describes the Binance Agent OS policy skill, deterministic checks and explicit trade approval; package.json confirms TypeScript/React. The website is a public explainer, not the execution interface. | Existing local Portfolio.jsx supplies Product + full-stack role and https://rokai-agent.vercel.app/; README confirms repository. No year/result/new media. |
| Q2FA | london160771/Q2FA README.md (12df021b992d8cd2b8d359adb37f53079b763fd3) defines EVM owner + client-side post-quantum guardian for account-held USDC. Q2FA_PROJECT_STATE.md records an earlier Phase 5A status without deployment; the user has since confirmed the current hosted URL. The state doc also records a dashboard and per-user Arc Mainnet accounts. React/TypeScript/Solidity are documented. | Repository found through owner-scoped GitHub search. User-confirmed hosted live URL: https://q2fa.vercel.app. Contribution role remains unconfirmed and omitted; year/result/media remain absent. No claim that all funds in the owner wallet are protected. |
| NWC LimitProbe | london160771/NWC-LimitProbe README.md (ea1d2f070fb9fe12a35468e96b3b9d24602a7e52) documents a black-box spending-limit stress tester, simulated browser sandbox and recorded controlled Lightning regtest evidence. package.json (bc16371e9b51ea09a749f1a6f631441e70009e19) confirms Node.js/JavaScript and Nostr integration. | README documents https://nwc-limitprobe.vercel.app/ and repository. Role/year/media/results omitted. Do not describe it as an enforcing guardrail, mainnet testing service or discovered vulnerability. |
| AlphaWatch | london160771/AlphaWatch src/App.jsx (78a31e9961c9737f8ac70a2cacba678064c5c906) has watchlist/portfolio/news/simulator routes; Home.jsx (d6bc931e51daece71b3233b5603356e63c043905) reads CoinGecko crypto data. package.json (580c7217a3922b9790473d17b0d8a27f53d0b040) confirms React/Chart.js/Axios. Template README is not product evidence. | Existing Portfolio.jsx supplies Full-stack developer role and https://alpha-watch.vercel.app/. Repository is confirmed. No hackathon label, new year/result or media. |

Sources are accuracy evidence only and are not imported into public UI. No financial tools, wallet connections, submissions or transactions were invoked. Source-linked destinations are documented URLs, not uptime claims.

## Navigation verification

Production preview checked at 320/390/768/1440px. Header position is fixed with top 0 and closed bottom 64px throughout scrolling. Direct/refreshed work, Web2, Web3 and Contact anchors all place their headings below the navbar; work headings were about 112–117px from the viewport top. Native and router hash navigation is immediate, so no scroll animation temporarily hides the focused heading.

At 320/390/768px, keyboard-open mobile menu measured approximately 273.3px; rounded body offset was 274px. Escape closed it and restored Menu focus. Selecting Web3 closed the menu, focused main content, left the page h1 at 84px below the 64px navbar, and retained the Web3 active link state. No horizontal overflow was measured.

Both homepage and /web3 render all seven entries in locked order; the first six have Hackathon build, AlphaWatch has none. Q2FA exposes Live and GitHub actions; its role remains unconfirmed. No new media was added; the six selected projects remain unchanged apart from the user-confirmed labels. Lint, build and git diff --check passed. No commits or pushes.
