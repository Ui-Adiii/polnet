const Hero = () => {
  return (
    <section className="hero relative min-h-screen  bg-black overflow-hidden text-white">

      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#6366f1_0%,transparent_55%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#7c3aed_0%,transparent_60%)] opacity-20" />

      {/* ───────── EXTRA ANIMATED ELEMENTS ───────── */}
      <div className="pointer-events-none absolute inset-0">

        {/* OUTER ORBIT RING */}
        <div
          className="absolute top-1/2 left-1/2 h-[580px] w-[580px] rounded-full border border-violet-500/20"
          style={{ transform: "translate(-50%, -50%)", animation: "orbit 90s linear infinite" }}
        />

        {/* INNER ORBIT RING */}
        <div
          className="absolute top-1/2 left-1/2 h-[380px] w-[380px] rounded-full border border-indigo-400/20"
          style={{ transform: "translate(-50%, -50%)", animation: "orbitReverse 120s linear infinite" }}
        />

        {/* ORBITING DOTS */}
        <div className="absolute top-1/2 left-1/2">
          <span className="orbit-dot orbit-dot-1" />
          <span className="orbit-dot orbit-dot-2" />
          <span className="orbit-dot orbit-dot-3" />
        </div>

        {/* FLOATING SYMBOLS */}
        <div className="absolute top-28 left-24 text-blue-400 text-4xl" style={{ animation: "floatWave 7s ease-in-out infinite" }}>+</div>
        <div className="absolute bottom-32 right-28 text-pink-400 text-2xl" style={{ animation: "floatWaveAlt 6s ease-in-out infinite" }}>✦</div>

        {/* ROTATING TRIANGLE */}
        <div
          className="absolute bottom-24 right-40 w-0 h-0"
          style={{
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "28px solid rgba(139,92,246,0.4)",
            animation: "slowSpin 40s linear infinite",
          }}
        />

        {/* GLASS BLOCK */}
        <div className="absolute top-40 right-32" style={{ animation: "slowSpinScale 45s linear infinite" }}>
          <div className="h-16 w-16 rotate-12 bg-white/10 backdrop-blur-xl rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.15)]" />
        </div>

        {/* LIGHT STREAKS */}
        <div className="absolute top-0 left-1/4 h-full w-[2px] bg-gradient-to-b from-transparent via-violet-400/30 to-transparent animate-streak" />
        <div className="absolute top-0 right-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-pink-400/25 to-transparent animate-streak delay-500" />

        {/* SPARKLES */}
        <span className="sparkle sparkle-1" />
        <span className="sparkle sparkle-2" />
        <span className="sparkle sparkle-3" />

        {/* BREATHING GLOW ORBS */}
        <div className="absolute bottom-24 left-20 h-36 w-36 rounded-full bg-violet-500/25 blur-3xl animate-breath" />
        <div className="absolute top-24 right-20 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl animate-breathSlow" />
      </div>

      {/* ───────── HERO CONTENT (CENTERED) ───────── */}
      <div className="relative z-10 grid min-h-screen place-items-center px-6 text-center">
        <div className="max-w-4xl -translate-y-6" style={{ animation: "heroReveal 1.2s ease-out forwards" }}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.45)]">
           ChainX
          </h1>

          <p className="mt-6 text-3xl md:text-4xl leading-tight">
            Artificial Intelligence Redefined <br />
            <span className="text-white/80">Blockchain Precision</span>
          </p>

          <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            ChainX fuses AI insight with blockchain trust.
            Smart. Transparent. Limitless.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-3 font-medium shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300">
              Launch App
            </button>
            <button className="rounded-full border border-white/30 px-8 py-3 hover:bg-white/10 transition-all duration-300">
              View Docs
            </button>
          </div>
        </div>
      </div>

      {/* ───────── ANIMATIONS ───────── */}
      <style jsx>{`
        @keyframes orbit { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes orbitReverse { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
        @keyframes floatWave { 50% { transform: translate(-12px, -24px); } }
        @keyframes floatWaveAlt { 50% { transform: translate(10px, -18px); } }
        @keyframes slowSpin { to { transform: rotate(360deg); } }
        @keyframes slowSpinScale { 50% { transform: rotate(180deg) scale(1.1); } }
        @keyframes heroReveal { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes streak { to { transform: translateY(-100%); } }
        @keyframes breath { 50% { transform: scale(1.3); opacity: 1; } }
        @keyframes breathSlow { 50% { transform: scale(1.2); opacity: 1; } }

        .orbit-dot {
          position: absolute;
          top: -290px;
          left: -2px;
          width: 6px;
          height: 6px;
          background: #60a5fa;
          border-radius: 50%;
        }
        .orbit-dot-1 { animation: orbit 18s linear infinite; }
        .orbit-dot-2 { animation: orbit 26s linear infinite; background:#ec4899; }
        .orbit-dot-3 { animation: orbit 34s linear infinite; background:#a78bfa; }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          opacity: 0;
          animation: sparkle 4s infinite;
        }
        .sparkle-1 { top: 20%; left: 30%; animation-delay: 0s; }
        .sparkle-2 { top: 60%; left: 70%; animation-delay: 1.5s; }
        .sparkle-3 { top: 40%; left: 80%; animation-delay: 3s; }

        @keyframes sparkle {
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
