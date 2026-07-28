import { useState } from "react";
import profilePhoto from "../assets/port-image.jpg";

// ── TO ADD YOUR PHOTO ───────────────────────────────────────────────────────
// 1. Put your image in src/assets/ e.g. me.jpg
// 2. Import at top: import profilePhoto from "./assets/me.jpg"
// 3. Replace <PhotoSlot /> in the About section with:
//    <img src={profilePhoto} alt="Sauban" style={s.photoImg} />
// ───────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "aw",
    name: "AlphaWatch",
    type: "Full-Stack",
    desc: "Real-time crypto tracker with coin search, personal watchlist, portfolio page, live crypto news, and a trade simulator — built end-to-end.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://alpha-watch.vercel.app",
  },
  {
    id: "sw",
    name: "Sonar",
    type: "Full-Stack",
    desc: "Sonar - a whale alert bot that watches a handful of known exchange and whale wallets on Ethereum. When a wallet moves more than the set USD threshold in a single transaction, it counts as a catch — logged here and posted live to Discord.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://sonar-whale.vercel.app",
  },
  {
    id: "ya",
    name: "Yield Aggregator",
    type: "Full-Stack",
    desc: "A platform for aggregating and optimizing yield from various DeFi protocols — built with React and Node.js.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://yield-aggregator-wine.vercel.app",
  },
  {
    id: "gp",
    name: "Gift Pay",
    type: "Frontend",
    desc: "Gift card balance checker with a clean, focused interface — built with React, designed around simplicity and clear UX.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://gift-pay.vercel.app",
  },
  {
    id: "sp",
    name: "Spotify Clone",
    type: "Frontend · No frameworks",
    desc: "Pixel-accurate recreation of Spotify's homepage, signup, and login pages — built with pure HTML and CSS, zero libraries.",
    stack: ["HTML", "CSS"],
    link: "https://ayyospotifyproject.netlify.app/openpg",
  },
];

const SKILLS = [
  { label: "Frontend",           tags: ["React", "HTML", "CSS", "Tailwind", "Bootstrap"] },
  { label: "Backend",            tags: ["Node.js", "Express", "REST APIs"] },
  { label: "Databases",          tags: ["MongoDB", "Firebase"] },
  { label: "Tools & Deployment", tags: ["Git", "Postman", "Vercel", "Netlify", "Render"] },
];

const CONTACTS = [
  { label: "Email",     val: "saubanadesope@gmail.com", href: "mailto:saubanadesope@gmail.com", primary: true  },
  { label: "GitHub",    val: "GitHub",                  href: "https://github.com/london160771",  primary: false },
  { label: "X/Twitter", val: "X / Twitter",             href: "https://x.com/ayyoweb3",           primary: false },
];

function PhotoSlot() {
  return (
    <div style={s.photoSlot}>
      <div style={s.photoInitials}>SDA</div>
      <div style={s.photoHint}>your photo</div>
    </div>
  );
}

export default function Portfolio() {
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #ffffff; color: #0F172A; }
        a { color: inherit; text-decoration: none; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

        /* ── iPhone 12 Pro (390px) and XR (414px) fix ──
           breakpoint set to 428px so iPhone 14 Pro Max (430px) is unaffected */
        @media (max-width: 428px) {
          .nav          { padding: 0 20px !important; }
          .nav-links    { display: none !important; }
          .nav-btn      { padding: 6px 14px !important; font-size: 11px !important; border-radius: 5px !important; }
          .hero         { padding: 60px 20px 56px !important; }
          .hero-h1      { font-size: 34px !important; letter-spacing: -1px !important; }
          .hero-cta     { flex-direction: column !important; align-items: stretch !important; }
          .hero-cta a   { text-align: center !important; }
          .divider      { margin: 0 20px !important; }
          .sec          { padding: 52px 20px !important; }
          .about-grid   { grid-template-columns: 1fr !important; }
          .skills-grid  { grid-template-columns: 1fr !important; }
          .contact-box  { padding: 32px 20px !important; }
          .contact-links{ flex-direction: column !important; align-items: stretch !important; }
          .contact-links a { text-align: center !important; }
          .footer       { padding: 20px 20px !important; flex-direction: column !important; gap: 4px !important; text-align: center !important; }
        }

        /* ── Tablet (429px–768px) ── */
        @media (min-width: 429px) and (max-width: 768px) {
          .nav          { padding: 0 28px !important; }
          .sec          { padding: 60px 28px !important; }
          .divider      { margin: 0 28px !important; }
          .contact-box  { padding: 36px 28px !important; }
          .footer       { padding: 20px 28px !important; }
          .about-grid   { grid-template-columns: 1fr !important; }
          .skills-grid  { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={s.nav} className="nav">
        <div style={s.navLogo}>ayyo<span style={{ color: "#6366F1" }}>web3</span></div>
        <div style={s.navLinks} className="nav-links">
          {[["#about","About"],["#projects","Projects"],["#skills","Stack"]].map(([href, label]) => (
            <a key={href} href={href} style={s.navLink}
              onMouseEnter={e => e.currentTarget.style.color = "#6366F1"}
              onMouseLeave={e => e.currentTarget.style.color = "#334155"}
            >{label}</a>
          ))}
        </div>
        <a href="mailto:saubanadesope@gmail.com" style={s.navBtn} className="nav-btn"
          onMouseEnter={e => e.currentTarget.style.background = "#6366F1"}
          onMouseLeave={e => e.currentTarget.style.background = "#0F172A"}
        >Hire me</a>
      </nav>

      {/* ── HERO ── */}
      <section style={s.hero} className="hero">
        <div style={s.heroTag}>
          <span style={s.heroDot} />
          Open to work
        </div>
        <h1 className="hero-h1" style={s.heroH1}>
          Hi, I'm <span style={{ color: "#6366F1" }}>Ayyoweb3</span>.<br />
          I build for the web.
        </h1>
        <p style={s.heroSub}>
          Full-stack developer from Lagos, Nigeria. I came into web3 as a user — two years in, I decided to start building the products people use.
        </p>
        <div style={s.heroCta} className="hero-cta">
          <a href="#projects" style={s.btnPrimary}
            onMouseEnter={e => e.currentTarget.style.background = "#6366F1"}
            onMouseLeave={e => e.currentTarget.style.background = "#0F172A"}
          >See my projects</a>
          <a href="https://github.com/london160771" target="_blank" rel="noopener noreferrer" style={s.btnSecondary}
            onMouseEnter={e => { e.currentTarget.style.borderColor="#6366F1"; e.currentTarget.style.color="#6366F1"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="#E2E8F0"; e.currentTarget.style.color="#0F172A"; }}
          >GitHub ↗</a>
        </div>
      </section>

      <hr style={s.divider} className="divider" />

      {/* ── ABOUT ── */}
      <section style={s.sec} id="about" className="sec">
        <div style={s.eyebrow}>About</div>
        <div style={s.secTitle}>A bit about me</div>
        <div style={s.aboutGrid} className="about-grid">
          <img src={profilePhoto} alt="Ayyoweb3" style={s.photoImg} />
          <div>
            <p style={s.aboutText}>
              I'm a full-stack developer based in Lagos, Nigeria. I started in web3 as a user and tester — but after two years, I wanted to do more than just use other people's products. So I learned to build.
            </p>
            <p style={{ ...s.aboutText, marginTop: 12 }}>
              I work across the full stack — React on the frontend, Node.js and Express on the backend, MongoDB and Firebase for data. I enjoy building things that are clean, fast, and actually useful.
            </p>
            <blockquote style={s.quote}>
              "Coding gets boring but building never does."
            </blockquote>
          </div>
        </div>
      </section>

      <hr style={s.divider} className="divider" />

      {/* ── PROJECTS ── */}
      <section style={s.sec} id="projects" className="sec">
        <div style={s.eyebrow}>Work</div>
        <div style={s.secTitle}>Selected projects</div>
        <div style={s.projList}>
          {PROJECTS.map(p => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...s.pcard,
                borderColor: hov === p.id ? "#6366F1" : "#E2E8F0",
                boxShadow: hov === p.id ? "0 4px 20px rgba(99,102,241,0.08)" : "none",
              }}
              onMouseEnter={() => setHov(p.id)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={s.pcardTop}>
                <div>
                  <div style={s.pcardType}>{p.type}</div>
                  <div style={s.pcardName}>{p.name}</div>
                </div>
                <span style={{
                  ...s.pcardArrow,
                  color: hov === p.id ? "#6366F1" : "#94A3B8",
                  transform: hov === p.id ? "translate(2px,-2px)" : "none",
                }}>↗</span>
              </div>
              <p style={s.pcardDesc}>{p.desc}</p>
              <div style={s.tagRow}>
                {p.stack.map(t => <span key={t} style={s.tag}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr style={s.divider} className="divider" />

      {/* ── SKILLS ── */}
      <section style={s.sec} id="skills" className="sec">
        <div style={s.eyebrow}>Stack</div>
        <div style={s.secTitle}>What I work with</div>
        <div style={s.skillsGrid} className="skills-grid">
          {SKILLS.map(g => (
            <div key={g.label} style={s.skillGroup}>
              <div style={s.skillGroupLabel}>{g.label}</div>
              <div style={s.skillTags}>
                {g.tags.map(t => <span key={t} style={s.skillTag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={s.sec} id="contact" className="sec">
        <div style={s.contactBox} className="contact-box">
          <h2 style={s.contactH}>Let's work together</h2>
          <p style={s.contactSub}>
            Open to full-stack roles, freelance projects, and anything worth building.<br />
            Based in Nigeria — available remotely.
          </p>
          <div style={s.contactLinks} className="contact-links">
            {CONTACTS.map(({ label, val, href, primary }) => (
              <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                style={primary ? s.cBtnMain : s.cBtnGhost}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{val}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer} className="footer">
        <span style={s.footerText}>© 2025 Sauban Adesope</span>
        <span style={s.footerText}>Ayyoweb3 · Full-Stack Dev</span>
      </footer>
    </>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────
const s = {
  // Nav
  nav:          { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 56px", height:60, borderBottom:"1px solid #E2E8F0", position:"sticky", top:0, background:"rgba(255,255,255,0.92)", backdropFilter:"blur(8px)", zIndex:100 },
  navLogo:      { fontWeight:800, fontSize:16, letterSpacing:"-0.5px" },
  navLinks:     { display:"flex", gap:32 },
  navLink:      { fontSize:13, fontWeight:500, color:"#334155", transition:"color 0.15s" },
  navBtn:       { background:"#0F172A", color:"#fff", padding:"8px 20px", borderRadius:6, fontSize:13, fontWeight:600, transition:"background 0.15s", display:"inline-block", whiteSpace:"nowrap" },

  // Hero — centred, wide max-width so it breathes on laptop
  hero:         { padding:"88px 56px 80px", maxWidth:960, margin:"0 auto", textAlign:"center" },
  heroTag:      { display:"inline-flex", alignItems:"center", gap:6, background:"rgba(99,102,241,0.08)", color:"#6366F1", fontSize:12, fontWeight:600, padding:"5px 12px", borderRadius:20, marginBottom:28, letterSpacing:"0.02em" },
  heroDot:      { width:6, height:6, borderRadius:"50%", background:"#6366F1", display:"inline-block", animation:"blink 2s ease-in-out infinite" },
  heroH1:       { fontSize:"clamp(36px,6vw,64px)", fontWeight:800, lineHeight:1.1, letterSpacing:"-2px", marginBottom:20, color:"#0F172A" },
  heroSub:      { fontSize:17, color:"#334155", lineHeight:1.75, marginBottom:36, maxWidth:560, marginLeft:"auto", marginRight:"auto" },
  heroCta:      { display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" },

  // Buttons
  btnPrimary:   { background:"#0F172A", color:"#fff", padding:"12px 28px", borderRadius:7, fontSize:14, fontWeight:600, transition:"background 0.15s", display:"inline-block" },
  btnSecondary: { background:"#F8FAFC", color:"#0F172A", padding:"12px 28px", borderRadius:7, fontSize:14, fontWeight:600, border:"1px solid #E2E8F0", transition:"all 0.15s", display:"inline-block" },

  // Layout — bumped to 960px so laptop feels full-screen
  divider:      { border:"none", borderTop:"1px solid #E2E8F0", margin:"0 56px" },
  sec:          { padding:"72px 56px", maxWidth:960, margin:"0 auto" },
  eyebrow:      { fontSize:11, fontWeight:700, color:"#6366F1", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:10 },
  secTitle:     { fontSize:28, fontWeight:800, letterSpacing:"-0.8px", marginBottom:40, color:"#0F172A" },

  // About
  aboutGrid:    { display:"grid", gridTemplateColumns:"120px 1fr", gap:32, alignItems:"start" },
  photoSlot:    { width:120, height:120, borderRadius:16, background:"linear-gradient(145deg,#1e293b,#334155)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, flexShrink:0 },
  photoInitials:{ fontSize:28, fontWeight:800, color:"#6366F1", lineHeight:1 },
  photoHint:    { fontSize:8, color:"rgba(255,255,255,0.3)", letterSpacing:"0.06em", textAlign:"center" },
  photoImg:     { width:"100%", height:"100%", objectFit:"cover", borderRadius:16 },
  aboutText:    { fontSize:15, color:"#334155", lineHeight:1.8 },
  quote:        { marginTop:16, fontStyle:"italic", color:"#94A3B8", fontSize:14, borderLeft:"3px solid #6366F1", paddingLeft:14, lineHeight:1.6 },

  // Projects
  projList:     { display:"flex", flexDirection:"column", gap:16 },
  pcard:        { background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:12, padding:"24px 28px", display:"block", color:"inherit", transition:"border-color 0.18s, box-shadow 0.18s" },
  pcardTop:     { display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 },
  pcardType:    { fontSize:11, fontWeight:600, color:"#6366F1", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:4 },
  pcardName:    { fontSize:20, fontWeight:800, letterSpacing:"-0.5px" },
  pcardArrow:   { fontSize:18, transition:"color 0.15s, transform 0.15s" },
  pcardDesc:    { fontSize:13, color:"#334155", lineHeight:1.7, marginBottom:16 },
  tagRow:       { display:"flex", gap:6, flexWrap:"wrap" },
  tag:          { fontSize:11, fontWeight:500, background:"#fff", border:"1px solid #E2E8F0", color:"#334155", padding:"3px 10px", borderRadius:20 },

  // Skills
  skillsGrid:   { display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 },
  skillGroup:   { background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:10, padding:"18px 20px" },
  skillGroupLabel: { fontSize:11, fontWeight:700, color:"#6366F1", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:12 },
  skillTags:    { display:"flex", flexWrap:"wrap", gap:6 },
  skillTag:     { fontSize:12, fontWeight:500, background:"#fff", border:"1px solid #E2E8F0", color:"#0F172A", padding:"4px 11px", borderRadius:6 },

  // Contact
  contactBox:   { background:"#0F172A", borderRadius:16, padding:48, textAlign:"center" },
  contactH:     { fontSize:"clamp(24px,4vw,36px)", fontWeight:800, letterSpacing:"-1px", color:"#fff", marginBottom:10 },
  contactSub:   { fontSize:14, color:"rgba(255,255,255,0.5)", marginBottom:32, lineHeight:1.7 },
  contactLinks: { display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" },
  cBtnMain:     { padding:"11px 22px", borderRadius:7, fontSize:13, fontWeight:600, display:"inline-block", background:"#6366F1", color:"#fff", transition:"opacity 0.15s" },
  cBtnGhost:    { padding:"11px 22px", borderRadius:7, fontSize:13, fontWeight:600, display:"inline-block", background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.8)", border:"1px solid rgba(255,255,255,0.1)", transition:"opacity 0.15s" },

  // Footer
  footer:       { borderTop:"1px solid #E2E8F0", padding:"24px 56px", display:"flex", justifyContent:"space-between", alignItems:"center" },
  footerText:   { fontSize:12, color:"#94A3B8" },
};