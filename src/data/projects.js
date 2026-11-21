// Concise source-backed content. Authoring evidence stays in docs/project-content.md.
export const selectedWorkSlugs = [
  'opna', 'velora-cove', 'the-bv-brand', 'stocksplit', 'agenthub', 'portpay',
];

export const projects = [
  {
    slug: 'opna', title: 'Opna', category: ['web2'], featured: true, year: 2026,
    role: 'Full-stack developer',
    shortDescription: 'A booking MVP where business owners manage availability and customers book without an account.',
    stack: ['React', 'TypeScript', 'Express', 'Supabase'],
    liveUrl: 'https://opna-xi.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/Opna',
    media: [{
      type: 'image', src: '/assets/projects/opna/lead-desktop-1136.webp',
      srcSet: '/assets/projects/opna/lead-desktop-480.webp 480w, /assets/projects/opna/lead-desktop-800.webp 800w, /assets/projects/opna/lead-desktop-1136.webp 1136w',
      width: 1136, height: 585,
      mobile: { src: '/assets/projects/opna/lead-mobile-374.webp', width: 374, height: 585 },
      alt: 'Opna’s blue wordmark and live booking product introduction.',
    }], award: null, outcomes: [],
  },
  {
    slug: 'velora-cove', title: 'VELORA COVE', category: ['web2'], featured: true, year: 2026,
    role: 'Design + frontend development',
    shortDescription: 'A fictional coastal hospitality concept built around editorial layouts and film.',
    stack: ['React', 'TypeScript', 'Vite', 'GSAP'],
    liveUrl: 'https://velora-cove.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/velora-cove',
    media: [{
      type: 'image', src: '/assets/projects/velora-cove/lead-desktop-1424.webp',
      srcSet: '/assets/projects/velora-cove/lead-desktop-480.webp 480w, /assets/projects/velora-cove/lead-desktop-800.webp 800w, /assets/projects/velora-cove/lead-desktop-1200.webp 1200w, /assets/projects/velora-cove/lead-desktop-1424.webp 1424w',
      width: 1424, height: 690,
      mobile: { src: '/assets/projects/velora-cove/lead-mobile-374.webp', width: 374, height: 510 },
      alt: 'VELORA COVE concept homepage showing its wordmark, coastal pool and editorial headline.',
    }], award: null, outcomes: [],
  },
  {
    slug: 'the-bv-brand', title: 'THE BV BRAND', category: ['web2'], featured: true, year: 2026,
    role: 'Design + frontend development',
    shortDescription: 'A photography-led fashion campaign page linking visitors to the brand’s external store.',
    stack: ['React', 'TypeScript', 'Vite', 'GSAP'],
    liveUrl: 'https://the-bv-brand.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/BV-BRAND-landing-page',
    media: [{
      type: 'image', src: '/assets/projects/the-bv-brand/lead-desktop-1424.webp',
      srcSet: '/assets/projects/the-bv-brand/lead-desktop-480.webp 480w, /assets/projects/the-bv-brand/lead-desktop-800.webp 800w, /assets/projects/the-bv-brand/lead-desktop-1200.webp 1200w, /assets/projects/the-bv-brand/lead-desktop-1424.webp 1424w',
      width: 1424, height: 940,
      mobile: { src: '/assets/projects/the-bv-brand/lead-mobile-374.webp', width: 374, height: 748 },
      alt: 'THE BV BRAND campaign homepage showing its gold monogram, editorial headline and red handbag photography.',
    }], award: null, outcomes: [],
  },
  {
    slug: 'stocksplit', title: 'StockSplit', category: ['web3'], featured: true, year: 2026,
    role: 'Full-stack / Web3 developer',
    shortDescription: 'A Solana Devnet demo of shared portfolios with independent proportional withdrawals.',
    stack: ['Solana', 'Rust', 'Anchor', 'JavaScript'],
    liveUrl: 'https://stock-split.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/StockSplit',
    media: [{
      type: 'image', src: '/assets/projects/stocksplit/lead-desktop-1440.webp',
      srcSet: '/assets/projects/stocksplit/lead-desktop-480.webp 480w, /assets/projects/stocksplit/lead-desktop-800.webp 800w, /assets/projects/stocksplit/lead-desktop-1200.webp 1200w, /assets/projects/stocksplit/lead-desktop-1440.webp 1440w',
      width: 1440, height: 610,
      mobile: { src: '/assets/projects/stocksplit/lead-mobile-400.webp', width: 400, height: 725 },
      alt: 'StockSplit’s live introduction with its green branding, Devnet label and independent ownership message.',
    }], award: null, outcomes: [],
  },
  {
    slug: 'agenthub', title: 'AgentHub', category: ['web3'], featured: true, year: 2026,
    role: 'Product + full-stack development',
    shortDescription: 'A BNB Chain marketplace for discovering, comparing, and running supported AI agents with provenance.',
    stack: ['React', 'Express', 'MongoDB', 'BNB Chain'],
    liveUrl: 'https://agenthub-bnb.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/agenthub-bnb',
    media: [{
      type: 'image', src: '/assets/projects/agenthub/lead-desktop-1420.webp',
      srcSet: '/assets/projects/agenthub/lead-desktop-480.webp 480w, /assets/projects/agenthub/lead-desktop-800.webp 800w, /assets/projects/agenthub/lead-desktop-1200.webp 1200w, /assets/projects/agenthub/lead-desktop-1420.webp 1420w',
      width: 1420, height: 724,
      mobile: { src: '/assets/projects/agenthub/lead-mobile-370.webp', width: 370, height: 702 },
      alt: 'AgentHub’s black and yellow marketplace introduction with its agent finder and BNB Smart Chain label.',
    }], outcomes: [],
    award: null,
  },
  {
    slug: 'portpay', title: 'PortPay', category: ['web3'], featured: true, year: 2026,
    role: 'Full-stack / Web3 development',
    shortDescription: 'An X Layer checkout project connecting tokenized portfolio assets to stablecoin invoices.',
    stack: ['React', 'TypeScript', 'Solidity', 'Supabase'],
    liveUrl: 'https://port-pay.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/PortPay',
    media: [{
      type: 'image', src: '/assets/projects/portpay/lead-desktop-1074.webp',
      srcSet: '/assets/projects/portpay/lead-desktop-480.webp 480w, /assets/projects/portpay/lead-desktop-800.webp 800w, /assets/projects/portpay/lead-desktop-1074.webp 1074w',
      width: 1074, height: 614,
      mobile: { src: '/assets/projects/portpay/lead-mobile-360.webp', width: 360, height: 510 },
      alt: 'PortPay’s live merchant introduction, labelled X Layer Mainnet, with its Spend xStocks and Receive stablecoins headline.',
    }], award: null, outcomes: [],
  },
  {
    slug: 'rokai', title: 'Rokai', category: ['web3'], featured: false, year: null,
    role: 'Product + full-stack',
    shortDescription: 'A portfolio-policy skill for Binance Agent OS that checks user-defined rules and proposes trades for explicit approval.',
    stack: ['TypeScript', 'React', 'Binance Agent OS'],
    liveUrl: 'https://rokai-agent.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/rokai',
    media: [], outcomes: [],
    award: null,
  },
  {
    slug: 'q2fa', title: 'Q2FA', category: ['web3'], featured: false, year: null,
    role: null,
    shortDescription: 'An Arc smart-account project combining an EVM owner wallet and a client-side post-quantum guardian for USDC authorization.',
    stack: ['React', 'TypeScript', 'Solidity'],
    liveUrl: 'https://q2fa.vercel.app',
    repositoryUrl: 'https://github.com/london160771/Q2FA',
    media: [], outcomes: [],
    award: 'Hackathon winner · Arc Microgrant',
  },
  {
    slug: 'nwc-limitprobe', title: 'NWC LimitProbe', category: ['web3'], featured: false, year: null,
    role: null,
    shortDescription: 'A Nostr Wallet Connect spending-limit stress tester with a browser sandbox and recorded Lightning regtest evidence.',
    stack: ['JavaScript', 'Node.js', 'Nostr Wallet Connect'],
    liveUrl: 'https://nwc-limitprobe.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/NWC-LimitProbe',
    media: [], outcomes: [],
    award: null,
  },
  {
    slug: 'alphawatch', title: 'AlphaWatch', category: ['web3'], featured: false, year: null,
    role: 'Full-stack developer',
    shortDescription: 'A crypto-tracking app with watchlists, portfolio views, news and a trade simulator.',
    stack: ['React', 'Chart.js', 'Axios'],
    liveUrl: 'https://alpha-watch.vercel.app/',
    repositoryUrl: 'https://github.com/london160771/AlphaWatch',
    media: [], outcomes: [], award: null,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

// Builds order: the six featured projects first, then Q2FA, Rokai, NWC LimitProbe, AlphaWatch.
const buildsOrder = [...selectedWorkSlugs, 'q2fa', 'rokai', 'nwc-limitprobe', 'alphawatch'];
export const builds = buildsOrder.map(getProject);

export function getBuilds(category) {
  return category ? builds.filter((project) => project.category.includes(category)) : builds;
}
