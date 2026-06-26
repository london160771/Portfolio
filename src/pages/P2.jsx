import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "alphawatch",
    name: "AlphaWatch",
    type: "Full-Stack · React + Node + MongoDB",
    desc: "Real-time crypto tracker with coin search, personal watchlist, portfolio tracking, live news feed, and an interactive trade simulator — designed and built end-to-end.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    link: "https://alpha-watch.vercel.app",
    preview: "alphawatch",
  },
  {
    id: "giftpay",
    name: "Gift Pay",
    type: "Frontend · React",
    desc: "Gift card balance checker — clean, fast, and focused on intuitive UX and clear visual hierarchy.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://gift-pay.vercel.app",
    preview: "giftpay",
  },
  {
    id: "spotify",
    name: "Spotify Clone",
    type: "Frontend · Zero frameworks",
    desc: "Pixel-accurate recreation of Spotify's homepage, signup, and login pages — pure HTML and CSS, zero libraries.",
    stack: ["HTML", "CSS"],
    link: "https://ayyospotifyproject.netlify.app/openpg",
    preview: "spotify",
  },
];

const SKILLS = [
  { label: "Frontend",    tags: ["React", "HTML", "CSS", "Tailwind", "Bootstrap"] },
  { label: "Backend",     tags: ["Node.js", "Express", "REST APIs"] },
  { label: "JavaScript",  tags: ["ES6+", "DOM", "Async/Await", "APIs"] },
  { label: "Databases",   tags: ["MongoDB", "Firebase"] },
  { label: "Tools",       tags: ["Git", "GitHub", "Postman", "Socket.io"] },
  { label: "Deployment",  tags: ["Vercel", "Netlify", "Render", "Firebase"] },
];

const GRN       = "#4ADE80";
const GRN_DIM   = "rgba(74,222,128,0.12)";
const GRN_BDR   = "rgba(74,222,128,0.28)";

// ─── PREVIEW COMPONENTS ────────────────────────────────────────────────────
function AlphaWatchPreview() {
  const bars = [38, 58, 42, 72, 55, 88, 68, 100];
  return (
    <div style={{ background: "#090D1A", width: "100%", height: "100%", padding: 10, display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ fontFamily: "monospace", fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        alphawatch · live
      </div>
      {[["BTC","$67,420","▲ 2.4%",true],["ETH","$3,240","▼ 1.1%",false],["SOL","$142.8","▲ 5.2%",true]].map(([sym,pr,chg,up]) => (
        <div key={sym} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(255,255,255,0.04)", borderRadius:4, padding:"4px 7px" }}>
          <span style={{ fontFamily:"monospace", fontSize:9, color:"#fff", fontWeight:500 }}>{sym}</span>
          <span style={{ fontFamily:"monospace", fontSize:8, color:"#aaa" }}>{pr}</span>
          <span style={{ fontFamily:"monospace", fontSize:8, color: up ? GRN : "#F87171" }}>{chg}</span>
        </div>
      ))}
      <div style={{ flex:1, display:"flex", alignItems:"flex-end", gap:2, paddingTop:4 }}>
        {bars.map((h,i) => (
          <div key={i} style={{ flex:1, height:`${h}%`, background: i===7 ? "rgba(74,222,128,0.85)" : "rgba(74,222,128,0.45)", borderRadius:"2px 2px 0 0" }} />
        ))}
      </div>
    </div>
  );
}

function GiftPayPreview() {
  return (
    <div style={{ background:"#F8F9FF", width:"100%", height:"100%", padding:12, display:"flex", flexDirection:"column", gap:7, justifyContent:"center" }}>
      <div style={{ background:"linear-gradient(135deg,#5B4FE9,#8B7CF6)", borderRadius:7, padding:"9px 11px", display:"flex", flexDirection:"column", gap:3 }}>
        <div style={{ fontSize:7, color:"rgba(255,255,255,0.6)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Gift Card Balance</div>
        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:"#fff" }}>$124.50</div>
      </div>
      <div style={{ background:"#fff", border:"1px solid #E5E7EB", borderRadius:4, padding:"4px 8px", fontFamily:"monospace", fontSize:8, color:"#aaa" }}>
        •••• •••• •••• 4821
      </div>
    </div>
  );
}

function SpotifyPreview() {
  return (
    <div style={{ background:"#121212", width:"100%", height:"100%", padding:9, display:"flex", gap:6 }}>
      <div style={{ width:26, display:"flex", flexDirection:"column", gap:5, paddingTop:2 }}>
        {[true,false,false].map((on,i) => (
          <div key={i} style={{ width:15, height:3, borderRadius:2, background: on ? "#1DB954" : "#3a3a3a" }} />
        ))}
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:4 }}>
        <div style={{ height:11, background:"#282828", borderRadius:3 }} />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3, flex:1 }}>
          {Array(6).fill(0).map((_,i) => <div key={i} style={{ background:"#282828", borderRadius:3 }} />)}
        </div>
      </div>
    </div>
  );
}

const PREVIEWS = { alphawatch: AlphaWatchPreview, giftpay: GiftPayPreview, spotify: SpotifyPreview };

// ─── PHOTO PLACEHOLDER ─────────────────────────────────────────────────────
// To use your real photo:
// 1. Add your image to src/assets/, e.g. me.jpg
// 2. At the top of this file, add: import profilePhoto from "./assets/me.jpg"
// 3. Replace <PhotoSlot /> in the strip below with:
//    <img src={profilePhoto} alt="Sauban" style={{width:"100%",height:"100%",objectFit:"cover"}} />
function PhotoSlot() {
  return (
    <div style={{ width:112, height:112, borderRadius:12, flexShrink:0, border:"1px solid rgba(255,255,255,0.1)", background:"linear-gradient(145deg,rgba(74,222,128,0.1),rgba(10,10,10,0.9))", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:5 }}>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:800, color:GRN }}>SDA</div>
      <div style={{ fontSize:8, color:"rgba(255,255,255,0.25)", letterSpacing:"0.05em" }}>your photo</div>
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #F5F4F0; color: #0A0A0A; }
        a { color: inherit; text-decoration: none; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.15} }

        @media (max-width: 700px) {
          .hero-h1 { font-size: 52px !important; letter-spacing: -2px !important; }
          .hero-split { grid-template-columns: 1fr !important; }
          .strip-in { flex-direction: column; align-items: flex-start !important; }
          .proj-card-in { grid-template-columns: 1fr !important; }
          .proj-card-preview { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; height: 120px; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .contact-in { grid-template-columns: 1fr !important; }
          .section-pad { padding: 48px 20px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"sticky", top:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 40px", height:56, background:"rgba(10,10,10,0.92)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:16, color:"#fff", letterSpacing:"-0.5px" }}>
          ayyo<span style={{ color:GRN }}>web3</span>
        </div>
        <div style={{ display:"flex", gap:32 }}>
          {[["#projects","projects"],["#skills","stack"],["#contact","contact"]].map(([href,label]) => (
            <a key={href} href={href} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.45)", letterSpacing:"0.05em" }}>{label}</a>
          ))}
        </div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:GRN, border:`1px solid ${GRN_BDR}`, background:GRN_DIM, padding:"4px 10px", borderRadius:20, display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ width:5, height:5, borderRadius:"50%", background:GRN, display:"inline-block", animation:"blink 2s ease-in-out infinite" }} />
          open to work
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background:"#0A0A0A", padding:"80px 40px 64px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", bottom:-100, right:-60, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(74,222,128,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:900, margin:"0 auto", position:"relative", zIndex:1 }}>
          {/* eyebrow */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:32 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:GRN, letterSpacing:"0.08em" }}>full-stack developer</span>
            <span style={{ width:1, height:12, background:"rgba(255,255,255,0.15)" }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.3)", letterSpacing:"0.04em" }}>Lagos, Nigeria</span>
            <span style={{ width:1, height:12, background:"rgba(255,255,255,0.15)" }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.3)", letterSpacing:"0.04em" }}>web3 native · 2yrs</span>
          </div>
          {/* H1 */}
          <h1 className="hero-h1" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(56px,10vw,116px)", fontWeight:800, lineHeight:0.9, letterSpacing:"-4px", color:"#fff", marginBottom:48 }}>
            SAUBAN<br />
            <span style={{ color:"rgba(255,255,255,0.18)" }}>DAMILOLA</span><br />
            <span style={{ WebkitTextStroke:"1px rgba(255,255,255,0.22)", color:"transparent" }}>ADESOPE</span>
          </h1>
          {/* split */}
          <div className="hero-split" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"end" }}>
            <blockquote style={{ fontSize:18, fontStyle:"italic", color:"rgba(255,255,255,0.45)", lineHeight:1.6, borderLeft:`2px solid ${GRN}`, paddingLeft:20 }}>
              "Coding gets boring<br />but{" "}
              <strong style={{ color:GRN, fontStyle:"normal", fontWeight:600 }}>building never does.</strong>"
            </blockquote>
            <div>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.8, marginBottom:24 }}>
                I came into web3 as a user. Two years in, I wanted to build products — not just use them. Now I ship full-stack apps for people in and outside the web3 space.
              </p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <a href="#projects" style={{ background:GRN, color:"#0A0A0A", padding:"12px 24px", borderRadius:4, fontSize:13, fontWeight:600, fontFamily:"'Inter',sans-serif", display:"inline-block" }}>See my work</a>
                <a href="mailto:saubanadesope@gmail.com" style={{ border:"1px solid rgba(255,255,255,0.15)", color:"rgba(255,255,255,0.65)", padding:"12px 24px", borderRadius:4, fontSize:13, fontWeight:500, fontFamily:"'Inter',sans-serif", display:"inline-block" }}>Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div style={{ background:"#0A0A0A", borderTop:"1px solid rgba(255,255,255,0.06)", padding:"28px 40px 52px" }}>
        <div className="strip-in" style={{ maxWidth:900, margin:"0 auto", display:"flex", alignItems:"center", gap:28 }}>
          <PhotoSlot />
          <div style={{ width:1, height:44, background:"rgba(255,255,255,0.07)", flexShrink:0 }} />
          <div style={{ display:"flex", gap:36 }}>
            {[["3+","projects"],["2+","yrs web3"],["8+","technologies"]].map(([num,lbl]) => (
              <div key={lbl}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontSize:30, fontWeight:800, color:"#fff", lineHeight:1, display:"block" }}>
                  {num.replace("+"," ")}<span style={{ color:GRN }}>+</span>
                </span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.08em", display:"block", marginTop:4 }}>{lbl}</span>
              </div>
            ))}
          </div>
          <div style={{ width:1, height:44, background:"rgba(255,255,255,0.07)", flexShrink:0 }} />
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.25)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:6 }}>currently building</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.65 }}>Full-stack web apps · REST APIs<br />Web3 integrations</div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ background:"#F5F4F0" }}>

        {/* PROJECTS */}
        <section id="projects" className="section-pad" style={{ padding:"68px 40px", maxWidth:900, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:44 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:GRN }}>01 /</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#999", textTransform:"uppercase", letterSpacing:"0.12em" }}>Selected Work</span>
            <div style={{ flex:1, height:1, background:"rgba(0,0,0,0.08)" }} />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {PROJECTS.map((p, idx) => {
              const Preview = PREVIEWS[p.preview];
              const isHovered = hovered === p.id;
              const isFirst = idx === 0;
              const isLast = idx === PROJECTS.length - 1;
              const radius = isFirst ? "12px 12px 0 0" : isLast ? "0 0 12px 12px" : "0";
              return (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ borderRadius:radius, border:`1px solid ${isHovered ? GRN_BDR : "rgba(0,0,0,0.08)"}`, background:"#fff", display:"block", color:"inherit", overflow:"hidden", transition:"border-color 0.2s", position:"relative", zIndex: isHovered ? 1 : 0 }}
                >
                  <div className="proj-card-in" style={{ display:"grid", gridTemplateColumns:"190px 1fr", minHeight:152 }}>
                    <div className="proj-card-preview" style={{ borderRight:`1px solid ${isHovered ? "rgba(74,222,128,0.2)" : "rgba(0,0,0,0.08)"}`, overflow:"hidden", transition:"border-color 0.2s" }}>
                      <Preview />
                    </div>
                    <div style={{ padding:"22px 26px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                        <div>
                          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"#999", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:4 }}>{p.type}</div>
                          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, letterSpacing:"-0.6px" }}>{p.name}</div>
                        </div>
                        <span style={{ fontSize:20, color: isHovered ? GRN : "rgba(0,0,0,0.12)", transition:"color 0.2s, transform 0.2s", transform: isHovered ? "translate(2px,-2px)" : "none" }}>↗</span>
                      </div>
                      <p style={{ fontSize:12, color:"#666", lineHeight:1.65, margin:"10px 0" }}>{p.desc}</p>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                        <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                          {p.stack.map(t => (
                            <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, background:"#EFEFED", color:"#555", padding:"3px 8px", borderRadius:3, border:"1px solid rgba(0,0,0,0.06)" }}>{t}</span>
                          ))}
                        </div>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color: isHovered ? GRN : "#bbb", textTransform:"uppercase", letterSpacing:"0.08em", transition:"color 0.2s" }}>live site →</span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-pad" style={{ padding:"68px 40px", maxWidth:900, margin:"0 auto", borderTop:"1px solid rgba(0,0,0,0.07)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:44 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:GRN }}>02 /</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#999", textTransform:"uppercase", letterSpacing:"0.12em" }}>Tech Stack</span>
            <div style={{ flex:1, height:1, background:"rgba(0,0,0,0.08)" }} />
          </div>
          <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:"1px solid rgba(0,0,0,0.08)", borderRadius:12, overflow:"hidden", background:"#fff" }}>
            {SKILLS.map((g, i) => (
              <div key={g.label} style={{ padding:"22px 26px", borderRight: i%2===0 ? "1px solid rgba(0,0,0,0.08)" : "none", borderBottom: i < SKILLS.length-2 ? "1px solid rgba(0,0,0,0.08)" : "none" }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:GRN, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:11, display:"flex", alignItems:"center", gap:8 }}>
                  {g.label}
                  <span style={{ flex:1, height:1, background:GRN_BDR, display:"inline-block" }} />
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {g.tags.map(t => (
                    <span key={t} style={{ fontSize:12, fontWeight:500, background:"#F5F4F0", color:"#0A0A0A", padding:"5px 11px", borderRadius:4, border:"1px solid rgba(0,0,0,0.07)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CONTACT */}
      <div id="contact" style={{ background:"#0A0A0A", padding:"80px 40px" }}>
        <div className="contact-in" style={{ maxWidth:900, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(40px,7vw,80px)", fontWeight:800, letterSpacing:"-4px", color:"#fff", lineHeight:0.9, marginBottom:14 }}>
              LET'S<br /><span style={{ color:GRN }}>BUILD.</span>
            </h2>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)", lineHeight:1.7 }}>
              Open to full-stack roles, freelance, and projects worth building. Based in Nigeria, available remotely.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {[
              { label:"email",      val:"saubanadesope@gmail.com", href:"mailto:saubanadesope@gmail.com" },
              { label:"github",     val:"london160771",            href:"https://github.com/london160771" },
              { label:"x / twitter",val:"@ayyoweb3",              href:"https://x.com/ayyoweb3" },
            ].map(({ label, val, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px 18px", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=GRN_BDR; e.currentTarget.style.background=GRN_DIM; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.background="transparent"; }}
              >
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.25)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:3 }}>{label}</div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.65)" }}>{val}</div>
                </div>
                <span style={{ color:"rgba(255,255,255,0.25)", fontSize:16 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background:"#0A0A0A", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"18px 40px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.18)" }}>© 2025 Sauban Adesope</span>
        <span style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:800, color:"rgba(255,255,255,0.12)" }}>AYYOWEB3</span>
      </footer>
    </>
  );
}