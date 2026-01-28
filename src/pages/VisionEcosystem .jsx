const VisionEcosystem = () => {
  return (
    <section className="relative font-Wolff1 bg-black text-white py-32 overflow-hidden">
      {/* 🌌 Floating background orbs */}
      <div className="page-orbs">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      {/* 📡 Vertical scan lines */}
      <div className="scan-lines" />

      {/* ✨ Moving dots */}
      <div className="page-dots">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`dot dot-${i}`} />
        ))}
      </div>

      {/* Ambient vision glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed_0%,transparent_55%)] opacity-20" />

      {/* Floating particles */}
      <span className="absolute top-24 left-20 h-1.5 w-1.5 bg-purple-300 rounded-full opacity-70 animate-pulse" />
      <span className="absolute bottom-32 right-32 h-1 w-1 bg-indigo-300 rounded-full opacity-60 animate-pulse delay-300" />
      <span className="absolute top-1/2 right-20 h-2 w-2 bg-purple-400 rounded-full opacity-50 animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-20 items-center">
        {/* LEFT : ROBOT / VISUAL */}
        <div className="relative flex justify-center">
          {/* Rotating halo */}
          <div className="absolute h-80 w-80 rounded-full border border-purple-400/20 animate-spinSlow" />

          <img
            src="/robochacha.png"
            alt="ChainX"
            className="
              relative z-10 w-72 object-contain
              drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]
              hover:scale-105 transition duration-500
            "
          />
        </div>

        {/* CENTER : OUR VISION CARD */}
        <div
          className="
            group relative bg-white/5 border border-white/10 rounded-2xl
            backdrop-blur-xl p-8
            shadow-[0_30px_90px_rgba(0,0,0,0.7)]
            overflow-hidden
          "
        >
          {/* Gradient sweep */}
          <div
            className="
              pointer-events-none absolute -left-full top-0 h-full w-full
              bg-gradient-to-r from-transparent via-white/10 to-transparent
              group-hover:left-full
              transition-all duration-700
            "
          />

          {/* HUD corners */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />

          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>

          <p className="text-white/70 leading-relaxed mb-4">
            To build a trustless, intelligent, and community-driven economy
            where AI supports blockchain’s core promise — fairness,
            transparency, and opportunity for all.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            ChainX envisions a decentralized world where financial intelligence
            is autonomous, accessible, and free from intermediaries.
          </p>

          {/* Bottom Highlight Card */}
          <div
            className="
              mt-6 inline-block bg-white/10 border border-white/10
              rounded-xl p-4
              shadow-[0_0_30px_rgba(139,92,246,0.25)]
            "
          >
            <p className="text-sm text-white/70 mb-2">
              <span className="font-medium text-white">Freedom:</span>{" "}
              Intelligence. Trust.
            </p>
            <span
              className="
                inline-block bg-purple-500 text-white
                px-4 py-1 rounded-lg font-medium
                shadow-[0_0_20px_rgba(139,92,246,0.6)]
              "
            >
              ChainX.
            </span>
          </div>
        </div>

        {/* RIGHT : ECOSYSTEM */}
        <div className="relative">
          {/* Vertical guiding glow */}
          <div className="pointer-events-none absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />

          {/* Connector dots */}
          <span className="absolute -left-12 top-16 h-2 w-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.9)]" />
          <span className="absolute -left-12 top-1/2 h-2 w-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.9)]" />
          <span className="absolute -left-12 bottom-20 h-2 w-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.9)]" />

          <h2 className="text-4xl font-semibold text-purple-300 mb-8">
            The ChainX Ecosystem ✦
          </h2>

          <h4 className="text-lg font-semibold mb-2">POL Token</h4>
          <p className="text-white/70 mb-4">
            The foundation of <span className="text-white">ChainX</span>. POL
            powers every action, transaction, and decision within the ecosystem.
          </p>

          <ul className="text-white/60 space-y-2 mb-6 list-disc list-inside">
            <li>
              <span className="text-white">Blockchain:</span> Polygon (MATIC)
            </li>
            <li>
              <span className="text-white">Type:</span> Utility & Governance
              Token
            </li>
            <li>
              <span className="text-white">Utility:</span> Ecosystem access,
              governance, payments, staking
            </li>
            <li>
              <span className="text-white">Goal:</span> Self-sustaining
              intelligent economy
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Ecosystem Components</h4>

          <ul className="text-white/60 space-y-2 list-disc list-inside">
            <li>
              <span className="text-white">AI Vaults:</span> Intelligent
              liquidity modules
            </li>
            <li>
              <span className="text-white">Governance DAO:</span> Community-led
              decisions
            </li>
            <li>
              <span className="text-white">Developer APIs:</span> Open
              intelligent tools
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionEcosystem;
