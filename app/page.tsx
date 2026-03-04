"use client";
import { useEffect, useRef, useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;600;700;800&display=swap');

:root{
  --bg:#070b1a;
  --surface:rgba(255,255,255,0.04);
  --border:rgba(255,255,255,0.08);
  --text:#e8eaf0;
  --muted:#7b83a6;
  --accent:#6ee7b7;
  --accent2:#38bdf8;
  --glow:rgba(110,231,183,0.15);
  --glow2:rgba(56,189,248,0.12);
}
.uc-wrap{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;position:relative}
.stars-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}
.nebula{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0;opacity:.35}
.nebula--1{width:600px;height:600px;background:radial-gradient(circle,rgba(110,231,183,.18),transparent 70%);top:-10%;left:-8%}
.nebula--2{width:500px;height:500px;background:radial-gradient(circle,rgba(56,189,248,.14),transparent 70%);bottom:-5%;right:-5%}
.nebula--3{width:300px;height:300px;background:radial-gradient(circle,rgba(167,139,250,.12),transparent 70%);top:40%;right:15%}
.uc-page{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:2rem 1.5rem}
.uc-logo{display:flex;align-items:center;gap:.55rem;margin-bottom:2.5rem;animation:ucFadeDown .8s ease both}
.uc-logo svg{width:36px;height:36px}
.uc-logo span{font-family:'Space Mono',monospace;font-weight:700;font-size:1.35rem;letter-spacing:2px;background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.uc-hero{text-align:center;max-width:680px;margin-bottom:1.8rem}
.uc-badge{display:inline-flex;align-items:center;gap:.4rem;font-size:.72rem;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:var(--accent);background:rgba(110,231,183,.08);border:1px solid rgba(110,231,183,.15);border-radius:100px;padding:.45rem 1.1rem;margin-bottom:1.6rem;animation:ucFadeDown .8s .15s ease both}
.uc-badge .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:ucPulse 2s infinite}
.uc-title{font-size:clamp(2.4rem,6vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-.02em;margin-bottom:1.2rem;animation:ucFadeDown .8s .3s ease both}
.uc-title .highlight{background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.uc-desc{font-size:clamp(1rem,2.2vw,1.15rem);color:var(--muted);line-height:1.7;max-width:520px;margin:0 auto;font-weight:300;animation:ucFadeDown .8s .45s ease both}
.uc-illustration{position:relative;width:clamp(280px,55vw,480px);height:clamp(220px,40vw,380px);margin:1rem auto 2rem;animation:ucFadeUp 1s .5s ease both}
.uc-illustration svg{width:100%;height:100%}
.moon-glow{animation:moonPulse 4s ease-in-out infinite}
@keyframes moonPulse{0%,100%{opacity:.25}50%{opacity:.45}}
.orbit-ring{animation:ucSpin 25s linear infinite;transform-origin:center}
@keyframes ucSpin{to{transform:rotate(360deg)}}
.satellite{animation:ucSpin 25s linear infinite;transform-origin:210px 190px}
.uc-countdown{display:flex;gap:clamp(.6rem,2vw,1.2rem);margin-bottom:2.2rem;animation:ucFadeUp .8s .6s ease both}
.uc-block{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:clamp(.7rem,2vw,1.1rem) clamp(.9rem,2.5vw,1.5rem);text-align:center;min-width:clamp(62px,14vw,88px);backdrop-filter:blur(10px);transition:border-color .3s,box-shadow .3s}
.uc-block:hover{border-color:rgba(110,231,183,.25);box-shadow:0 0 30px var(--glow)}
.uc-num{font-family:'Space Mono',monospace;font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;background:linear-gradient(180deg,#fff 30%,var(--muted));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1.2}
.uc-label{font-size:.65rem;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-top:.25rem;font-weight:600}
.uc-signup{width:100%;max-width:460px;animation:ucFadeUp .8s .75s ease both}
.uc-form{display:flex;gap:.5rem;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:.35rem;transition:border-color .3s,box-shadow .3s}
.uc-form:focus-within{border-color:rgba(110,231,183,.3);box-shadow:0 0 40px var(--glow),0 0 80px var(--glow2)}
.uc-input{flex:1;background:transparent;border:none;outline:none;color:var(--text);font-family:'Outfit',sans-serif;font-size:.95rem;padding:.75rem 1rem}
.uc-input::placeholder{color:var(--muted);opacity:.6}
.uc-btn{font-family:'Space Mono',monospace;font-size:.78rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:linear-gradient(135deg,var(--accent),var(--accent2));color:var(--bg);border:none;border-radius:10px;padding:.75rem 1.4rem;cursor:pointer;white-space:nowrap;transition:transform .2s,box-shadow .2s}
.uc-btn:hover{transform:translateY(-1px);box-shadow:0 6px 24px var(--glow)}
.uc-btn:active{transform:translateY(0)}
.uc-btn:disabled{opacity:.7;cursor:not-allowed;transform:none}
.uc-msg{text-align:center;font-size:.82rem;color:var(--muted);margin-top:.7rem;min-height:1.2em;transition:color .3s}
.uc-msg.success{color:var(--accent)}
.uc-footer{margin-top:2.5rem;display:flex;gap:1.5rem;align-items:center;animation:ucFadeUp .8s .9s ease both}
.uc-footer a{color:var(--muted);text-decoration:none;font-size:.8rem;letter-spacing:.5px;transition:color .3s}
.uc-footer a:hover{color:var(--accent)}
.uc-sep{width:4px;height:4px;border-radius:50%;background:var(--border)}
@keyframes ucFadeDown{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
@keyframes ucFadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes ucPulse{0%,100%{opacity:1}50%{opacity:.3}}
@media(max-width:540px){
  .uc-form{flex-direction:column}
  .uc-btn{width:100%;padding:.85rem}
  .uc-countdown{gap:.45rem}
  .uc-footer{flex-direction:column;gap:.7rem}
  .uc-sep{display:none}
}
`;

export default function UnderConstruction() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", mins: "00", secs: "00" });
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Be the first to know when we launch.");
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [btnText, setBtnText] = useState("Notify Me");
  const [btnDisabled, setBtnDisabled] = useState(false);

  // Stars canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = { x: number; y: number; r: number; a: number; s: number; d: number };
    let stars: Star[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    const init = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3500);
      for (let i = 0; i < count; i++) {
        stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.3 + 0.3, a: Math.random(), s: Math.random() * 0.0015 + 0.0005, d: Math.random() > 0.5 ? 1 : -1 });
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.s * s.d;
        if (s.a >= 1 || s.a <= 0.15) s.d *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a * 0.55})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Countdown — March 13, 2026 7 PM PST
  useEffect(() => {
    const launch = new Date("2026-03-14T03:00:00Z");
    const update = () => {
      const diff = Math.max(0, launch.getTime() - Date.now());
      setTimeLeft({
        days: String(Math.floor(diff / 864e5)).padStart(2, "0"),
        hours: String(Math.floor((diff % 864e5) / 36e5)).padStart(2, "0"),
        mins: String(Math.floor((diff % 36e5) / 6e4)).padStart(2, "0"),
        secs: String(Math.floor((diff % 6e4) / 1e3)).padStart(2, "0"),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSignup = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg("Please enter a valid email address.");
      setMsgSuccess(false);
      return;
    }
    setBtnText("Sending...");
    setBtnDisabled(true);
    setTimeout(() => {
      setMsg("You're on the list! We'll notify you at launch. 🚀");
      setMsgSuccess(true);
      setBtnText("Subscribed ✓");
      setEmail("");
      setTimeout(() => {
        setBtnText("Notify Me");
        setBtnDisabled(false);
        setMsg("Be the first to know when we launch.");
        setMsgSuccess(false);
      }, 4000);
    }, 800);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="uc-wrap">
        <div className="nebula nebula--1" />
        <div className="nebula nebula--2" />
        <div className="nebula nebula--3" />
        <canvas className="stars-canvas" ref={canvasRef} />

        <div className="uc-page">
          {/* Logo */}
          <div className="uc-logo">
            <svg viewBox="0 0 36 36" fill="none">
              <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#ucLg)" />
              <path d="M12 18l4 4 8-8" stroke="#070b1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="ucLg" x1="2" y1="2" x2="34" y2="34">
                  <stop stopColor="#6ee7b7" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
            <span>MOONSONG.ai</span>
          </div>

          {/* Hero */}
          <div className="uc-hero">
            <div className="uc-badge"><span className="dot" /> Under Construction</div>
            <h1 className="uc-title">Something <span className="highlight">Big</span><br />is Coming</h1>
            <p className="uc-desc">We&apos;re building the next-gen coding education platform — interactive courses, real-world projects, and a community that actually vibes with your learning style.</p>
          </div>

          {/* Illustration */}
          <div className="uc-illustration">
            <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="40" r="1.2" fill="#fff" opacity=".5" />
              <circle cx="390" cy="30" r="1" fill="#fff" opacity=".4" />
              <circle cx="80" cy="340" r="1.5" fill="#fff" opacity=".3" />
              <circle cx="350" cy="320" r="1" fill="#fff" opacity=".45" />
              <circle cx="200" cy="20" r="1.3" fill="#fff" opacity=".35" />
              <circle cx="15" cy="200" r="1" fill="#fff" opacity=".4" />
              <circle cx="400" cy="180" r="1.2" fill="#fff" opacity=".5" />
              <circle cx="120" cy="60" r=".8" fill="#fff" opacity=".3" />
              <circle cx="300" cy="55" r="1.1" fill="#fff" opacity=".35" />
              <circle cx="60" cy="270" r=".9" fill="#fff" opacity=".25" />
              <circle className="moon-glow" cx="210" cy="200" r="130" fill="url(#ucMoonGlow)" />
              <circle cx="210" cy="200" r="85" fill="url(#ucMoonSurface)" />
              <circle cx="185" cy="175" r="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth=".8" />
              <circle cx="230" cy="210" r="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth=".8" />
              <circle cx="200" cy="240" r="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth=".6" />
              <circle cx="245" cy="175" r="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth=".5" />
              <circle cx="175" cy="215" r="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth=".5" />
              <ellipse className="orbit-ring" cx="210" cy="190" rx="150" ry="55" stroke="url(#ucOrbitGrad)" strokeWidth="1" fill="none" opacity=".35" strokeDasharray="6 4" />
              <g className="satellite">
                <rect x="355" y="185" width="10" height="6" rx="2" fill="#38bdf8" opacity=".7" />
                <rect x="352" y="186" width="3" height="4" rx="1" fill="#6ee7b7" opacity=".5" />
                <rect x="365" y="186" width="3" height="4" rx="1" fill="#6ee7b7" opacity=".5" />
              </g>
              <g opacity=".6">
                <path d="M320 80l2 6 2-6 6-2-6-2-2-6-2 6-6 2z" fill="#6ee7b7" opacity=".6" />
                <path d="M90 300l1.5 4.5 1.5-4.5 4.5-1.5-4.5-1.5-1.5-4.5-1.5 4.5-4.5 1.5z" fill="#38bdf8" opacity=".5" />
                <path d="M370 260l1 3 1-3 3-1-3-1-1-3-1 3-3 1z" fill="#fff" opacity=".4" />
                <path d="M65 120l1.5 4.5 1.5-4.5 4.5-1.5-4.5-1.5-1.5-4.5-1.5 4.5-4.5 1.5z" fill="#6ee7b7" opacity=".45" />
                <path d="M100 160l2 6 2-6 6-2-6-2-2-6-2 6-6 2z" fill="#38bdf8" opacity=".35" />
                <path d="M340 150l1 3 1-3 3-1-3-1-1-3-1 3-3 1z" fill="#fff" opacity=".5" />
                <path d="M50 220l1 3 1-3 3-1-3-1-1-3-1 3-3 1z" fill="#6ee7b7" opacity=".3" />
              </g>
              <g opacity=".55">
                <circle cx="75" cy="85" r="16" fill="url(#ucMiniPlanet)" />
                <ellipse cx="75" cy="85" rx="24" ry="5" stroke="#6ee7b7" strokeWidth=".6" fill="none" opacity=".3" transform="rotate(-15 75 85)" />
              </g>
              <g opacity=".4">
                <circle cx="365" cy="300" r="10" fill="#1e293b" stroke="rgba(56,189,248,0.2)" strokeWidth=".8" />
                <circle cx="362" cy="297" r="2" fill="rgba(255,255,255,0.06)" />
              </g>
              <defs>
                <radialGradient id="ucMoonGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity=".08" />
                  <stop offset="60%" stopColor="#6ee7b7" stopOpacity=".04" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="ucMoonSurface" cx="40%" cy="35%" r="55%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </radialGradient>
                <linearGradient id="ucOrbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="ucMiniPlanet" cx="40%" cy="35%" r="55%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Countdown */}
          <div className="uc-countdown">
            {(["days", "hours", "mins", "secs"] as const).map((unit) => (
              <div key={unit} className="uc-block">
                <div className="uc-num">{timeLeft[unit]}</div>
                <div className="uc-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>

          {/* Email Signup */}
          <div className="uc-signup">
            <div className="uc-form">
              <input
                className="uc-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignup()}
                autoComplete="email"
                aria-label="Email address"
              />
              <button className="uc-btn" onClick={handleSignup} disabled={btnDisabled}>
                {btnText}
              </button>
            </div>
            <p className={`uc-msg${msgSuccess ? " success" : ""}`}>{msg}</p>
          </div>

          {/* Footer */}
          <div className="uc-footer">
            <a href="#">Twitter</a>
            <span className="uc-sep" />
            <a href="#">Discord</a>
            <span className="uc-sep" />
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}
