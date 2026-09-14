import { useState } from "react";
import profilePhoto from "../assets/port-image.jpg";

const PROJECTS = [
  {
    number: "01",
    name: "AgentHub",
    kind: "Full-stack · AI agents",
    year: "2026",
    summary: "Find the right AI agent for the job, with enough context to trust what happens next.",
    stack: "React · Node.js · MongoDB",
    role: "Product + full-stack",
    link: "https://agenthub-bnb.vercel.app/",
    repo: "https://github.com/london160771/agenthub-bnb",
    preview: "agenthub",
  },
  {
    number: "02",
    name: "Rokai",
    kind: "Automation · finance",
    year: "2026",
    summary: "A deterministic portfolio-policy layer that turns a trading goal into a safe, auditable action.",
    stack: "TypeScript · Binance API · Risk controls",
    role: "Product + full-stack",
    link: "https://rokai-agent.vercel.app/",
    repo: "https://github.com/london160771/rokai",
    preview: "rokai",
  },
  {
    number: "03",
    name: "Astreon",
    kind: "Web3 · safety",
    year: "2026",
    summary: "An independent safety and proof layer for DreamDEX agents before and after execution.",
    stack: "React · TypeScript · Somnia",
    role: "Full-stack developer",
    link: "https://astreon-infra.vercel.app/",
    repo: "https://github.com/london160771/astreon",
    preview: "astreon",
  },
  {
    number: "04",
    name: "AlphaWatch",
    kind: "Full-stack · web3 data",
    year: "2026",
    summary: "Real-time crypto tracker with search, watchlists, portfolio view, news, and a trade simulator — built end-to-end.",
    stack: "React · Node.js · MongoDB",
    role: "Full-stack developer",
    link: "https://alpha-watch.vercel.app/",
    repo: "https://github.com/london160771/AlphaWatch",
    preview: "alphawatch",
  },
];

const ARCHIVE = [
  { number: "01", name: "Sonar", description: "Whale alert bot that watches known exchange wallets and posts meaningful moves to Discord.", stack: "React · Express · Discord", link: "https://sonar-whale.vercel.app/" },
  { number: "02", name: "Yield Aggregator", description: "A DeFi interface for comparing and optimizing yield across protocols.", stack: "React · Node · MongoDB", link: "https://yield-aggregator-wine.vercel.app/" },
  { number: "03", name: "Gift Pay", description: "A focused gift card balance checker designed around a single clear task.", stack: "React · HTML · CSS", link: "https://gift-pay.vercel.app/" },
  { number: "04", name: "Spotify Clone", description: "A pixel-focused recreation of Spotify’s homepage, signup, and login experience.", stack: "HTML · CSS · JavaScript", link: "https://ayyospotifyproject.netlify.app/openpg" },
];

const SKILLS = [
  { number: "01", title: "Frontend", text: "React · JavaScript · TypeScript · HTML · CSS · Tailwind" },
  { number: "02", title: "Backend & data", text: "Node.js · Express · REST APIs · MongoDB · Firebase" },
  { number: "03", title: "Web3 & finance", text: "Solana · EVM · Binance APIs · wallets · on-chain reads" },
  { number: "04", title: "Tools & shipping", text: "Git · Postman · Vercel · Netlify · Render · Figma" },
];

function ProjectPreview({ type }) {
  if (type === "agenthub") {
    return (
      <div className="art-window">
        <div className="art-chrome"><span /><span /><span /><b>agenthub / directory</b><i>↗</i></div>
        <div className="art-toolbar"><span className="search-pill">⌘K&nbsp;&nbsp; Find an agent</span><span className="art-avatar">AW</span></div>
        <div className="agent-layout">
          <div className="art-sidebar"><span className="is-active">Directory</span><span>My agents</span><span>Requests</span><span>Activity</span></div>
          <div className="agent-list">
            <div className="art-list-heading"><span>Available agents</span><small>12 found</small></div>
            <div className="agent-row"><span className="agent-icon icon-coral">↯</span><div><strong>Yield scout</strong><small>Finds efficient routes across DeFi</small></div><em>Ready</em></div>
            <div className="agent-row"><span className="agent-icon icon-lime">◈</span><div><strong>Market watcher</strong><small>Tracks liquidity and price movement</small></div><em>Ready</em></div>
            <div className="agent-row"><span className="agent-icon icon-blue">⌁</span><div><strong>Risk analyst</strong><small>Explains exposure before you act</small></div><em>New</em></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "rokai") {
    return (
      <div className="art-window dark-window">
        <div className="art-chrome dark-chrome"><span /><span /><span /><b>rokai / policy</b><i>↗</i></div>
        <div className="policy-head"><span className="policy-status"><b /> Policy active</span><span>SPOT · BNB</span></div>
        <div className="policy-main"><div><small>Current allocation</small><strong>82.4<span>%</span></strong><p>USDT reserve <b>↗ 1.8%</b></p></div><div className="ring-chart"><span>USDT</span><b>82</b></div></div>
        <div className="policy-bars"><div><span>USDT</span><i><b style={{ width: "82%" }} /></i><small>82.4%</small></div><div><span>BNB</span><i><b style={{ width: "11%" }} /></i><small>11.2%</small></div><div><span>Other</span><i><b style={{ width: "6%" }} /></i><small>6.4%</small></div></div>
        <div className="policy-log"><span>Latest check</span><b>All rules passed</b><small>2 min ago</small></div>
      </div>
    );
  }

  if (type === "astreon") {
    return (
      <div className="art-window light-window">
        <div className="mini-top"><span>ASTREON / PREFLIGHT</span><b>somnia</b></div>
        <div className="preflight-callout"><small>Execution status</small><strong>Verified</strong><span>Exact intent matched</span></div>
        <div className="step-line"><div className="done"><b>01</b><span>Propose</span></div><div className="done"><b>02</b><span>Check</span></div><div className="done"><b>03</b><span>Execute</span></div><div className="done"><b>04</b><span>Prove</span></div></div>
        <div className="receipt-chip"><span>TX</span><div><small>Receipt bound</small><b>0x5f...a91c</b></div><i>✓</i></div>
      </div>
    );
  }

  return (
    <div className="art-window alpha-window">
      <div className="alpha-top"><span>ALPHAWATCH / LIVE DATA</span><b>market open</b></div>
      <div className="alpha-main">
        <div><small>Portfolio change</small><strong>+12.8%</strong><p>7D performance <b>↗ outperforming</b></p></div>
        <svg className="alpha-chart" viewBox="0 0 190 54" aria-hidden="true">
          <path d="M0 45 C16 42 24 44 36 36 S58 40 70 28 S90 32 105 22 S122 26 138 15 S158 20 172 9 S184 9 190 2" fill="none" stroke="#3445cf" strokeWidth="2" />
          <path d="M0 45 C16 42 24 44 36 36 S58 40 70 28 S90 32 105 22 S122 26 138 15 S158 20 172 9 S184 9 190 2 L190 54 L0 54Z" fill="#dfe3ff" />
        </svg>
      </div>
      <div className="alpha-alert"><span className="alpha-badge">↯</span><div><small>Whale movement detected</small><b>0x2d... → exchange</b></div><strong>$184k</strong></div>
      <div className="alpha-tokens"><span><i className="alpha-token token-blue">B</i> BTC <b>$68,214</b></span><span><i className="alpha-token token-coral">E</i> ETH <b>$3,842</b></span><span><i className="alpha-token token-lime">S</i> SOL <b>$182</b></span></div>
    </div>
  );
}

function ProjectCard({ project }) {
  const wide = project.name === "Astreon" || project.name === "AlphaWatch";
  return (
    <article className={`project-card project-card-small ${wide ? "project-card-wide" : "project-card-large"}`}>
      <div className={`project-art art-${project.preview}`} role="img" aria-label={`${project.name} product interface preview`}><ProjectPreview type={project.preview} /></div>
      <div className="project-body">
        <div className="project-meta"><span>{project.number} / {project.kind}</span><span>{project.year}</span></div>
        <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow" aria-hidden="true">↗</span></div>
        <p>{project.summary}</p>
        <div className="project-bottom"><div className="project-details"><span>{project.stack}</span><span>Role: {project.role}</span></div><div className="project-actions"><a href={project.link} target="_blank" rel="noreferrer">Live <span>↗</span></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ayyoweb3 home"><span className="brand-mark" aria-hidden="true">+</span><span>ayyo<span className="brand-accent">web3</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#archive">Archive</a></nav>
        <a className="header-cta" href="mailto:saubanadesope@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>Menu</button>
      </header>
      <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} id="mobile-nav" aria-label="Mobile navigation"><a href="#work" onClick={closeMenu}>Work <span aria-hidden="true">01</span></a><a href="#about" onClick={closeMenu}>About <span aria-hidden="true">02</span></a><a href="#archive" onClick={closeMenu}>Archive <span aria-hidden="true">03</span></a><a href="mailto:saubanadesope@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a></nav>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Open to thoughtful work · Lagos, Nigeria</p><h1 id="hero-title">Useful software,<br /><em>built with intent.</em></h1><p className="hero-lede">I&apos;m Ayyoweb3 — a full-stack developer building products that make complex systems feel clear, reliable, and worth using, whether they live on the web or on-chain.</p><div className="hero-actions"><a className="button button-dark" href="#work">See selected work <span aria-hidden="true">↓</span></a><a className="text-link" href="https://github.com/london160771" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="text-link" href="https://x.com/ayyoweb3" target="_blank" rel="noreferrer">X / Twitter <span aria-hidden="true">↗</span></a></div></div><aside className="hero-aside" aria-label="Portfolio summary"><figure className="hero-portrait"><img src={profilePhoto} alt="Ayyoweb3 in Lagos" /><figcaption className="portrait-caption"><span>Sauban Adesope</span><span>Full-stack developer</span></figcaption></figure><div className="aside-index"><span>Selected work</span><strong>04</strong></div><div className="aside-rule" /><p className="aside-label">What I care about</p><ul className="principles"><li><span>01</span> Clear interfaces over clever ones</li><li><span>02</span> Real systems, not empty demos</li><li><span>03</span> Proof, polish, and useful details</li></ul><div className="aside-foot"><span className="mini-signal" /> Available for remote roles &amp; collaborations</div></aside></section>

        <section className="section projects-section" id="work" aria-labelledby="work-title"><div className="section-intro"><div><p className="section-number">01 / Selected work</p><h2 id="work-title">What I&apos;ve been<br /><em>building lately.</em></h2></div><p className="section-description">Four recent builds across agent discovery, policy automation, execution safety, and real-time data — with earlier web2 work in the archive.</p></div><div className="project-grid">{PROJECTS.map((project) => <ProjectCard key={project.name} project={project} />)}</div></section>

        <section className="section about-section" id="about" aria-labelledby="about-title"><div className="section-label"><span>02</span><span>About / skills</span></div><div className="about-layout"><div className="about-copy"><p className="section-number">A builder&apos;s note</p><h2 id="about-title">I like the part where<br /><em>the idea becomes real.</em></h2><p>I&apos;m a full-stack developer based in Lagos. I came into web3 as a user and tester, then started building because the products I wanted did not exist yet. I also care about the everyday web apps people use to get work done.</p><p>These days I work across React, Node.js, TypeScript, APIs, and data. I&apos;m drawn to products with a clear job to do — the kind where good engineering makes the experience feel quietly obvious for both web2 and web3 users.</p><blockquote>“Coding gets boring but building never does.”</blockquote></div><div className="skills-panel">{SKILLS.map((skill) => <div className="skill-group" key={skill.number}><span className="skill-index">{skill.number}</span><div><h3>{skill.title}</h3><p>{skill.text}</p></div></div>)}<div className="skill-footer"><span className="mini-signal" /> Always learning, always shipping</div></div></div></section>

        <section className="section archive-section" id="archive" aria-labelledby="archive-title"><div className="archive-header"><div><p className="section-number">03 / Archive</p><h2 id="archive-title">Earlier work,<br /><em>still worth a look.</em></h2></div><p>Projects that helped me learn the fundamentals — retained because they show range, not because the shelf needs filling.</p></div><div className="archive-list">{ARCHIVE.map((project) => <a className="archive-row" href={project.link} target="_blank" rel="noreferrer" key={project.name}><span className="archive-count">{project.number}</span><span className="archive-name">{project.name}</span><span className="archive-description">{project.description}</span><span className="archive-stack">{project.stack}</span><span className="archive-arrow">↗</span></a>)}</div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-top"><span>Have a good problem?</span><span>Let&apos;s talk</span></div><div className="contact-body"><h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:saubanadesope@gmail.com">saubanadesope@gmail.com <span aria-hidden="true">↗</span></a></div><div className="contact-bottom"><span>Open to full-stack roles, freelance projects, and ambitious side quests.</span><span>Based in Nigeria · available remotely</span></div></section>
      </main>
      <footer className="site-footer"><span>© <span>{new Date().getFullYear()}</span> Sauban Adesope</span><span>Built with care · <a href="https://github.com/london160771" target="_blank" rel="noreferrer">GitHub ↗</a> · <a href="https://x.com/ayyoweb3" target="_blank" rel="noreferrer">X ↗</a></span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
