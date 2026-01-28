import PhaseCard from "../components/PhaseCard";

const AboutChainX = () => {
  return (
    <section className="relative font-Wolff1 bg-black text-white py-24 sm:py-32 overflow-hidden">
      {/* 🧠 Data flow beams */}
      <div className="data-beams">
        <span className="beam beam-1" />
        <span className="beam beam-2" />
        <span className="beam beam-3" />
      </div>

      {/* 🧩 HUD corners */}
      <div className="hud-frame">
        <span className="hud tl" />
        <span className="hud tr" />
        <span className="hud bl" />
        <span className="hud br" />
      </div>

      {/* 🌊 Signal wave */}
      <div className="signal-wave" />

      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* RIGHT : ABOUT CONTENT (FIRST ON MOBILE) */}
        <div className="order-1 lg:order-2 animate-fadeUp text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              ChainX
            </span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            ChainX is a next-generation decentralized ecosystem that merges
            artificial intelligence with the power of blockchain technology to
            create a new model of financial intelligence.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            Built on the Polygon network, ChainX enables an ecosystem where
            data-driven automation, transparency, and decentralized governance
            work together seamlessly — empowering users to make smarter, faster,
            and more secure digital decisions.
          </p>

          <p className="text-white/70 leading-relaxed">
            At <span className="text-purple-300 font-medium">ChainX</span>,
            intelligence isn’t just artificial — it’s decentralized, adaptive,
            and designed for your growth.
          </p>

          {/* Divider */}
          <div className="mt-10 mx-auto lg:mx-0 h-px w-24 sm:w-32 bg-gradient-to-r from-purple-400 to-indigo-400" />
        </div>

        {/* LEFT : ROADMAP PHASES (SECOND ON MOBILE) */}
        <div className="relative order-2 lg:order-1">
          {/* Glass background panel (desktop only) */}
          <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hidden sm:block" />

          {/* Phase grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 p-4 sm:p-8">
            <div className="sm:rotate-[-6deg] sm:animate-floatSlow">
              <PhaseCard
                phase="Phase 1"
                title="Token Launch"
                points={["Token Genesis & Smart Contract Deployment"]}
              />
            </div>

            <div className="sm:translate-y-12 sm:rotate-[4deg] sm:animate-float">
              <PhaseCard
                phase="Phase 2"
                title="Web3 Launch"
                points={["Ecosystem Launch & Web DApp Activation"]}
              />
            </div>

            <div className="sm:-translate-y-4 sm:rotate-[5deg] sm:animate-float">
              <PhaseCard
                phase="Phase 3"
                title="Smart DAO"
                points={["Governance DAO & AI Infrastructure Upgrade"]}
              />
            </div>

            <div className="sm:translate-y-16 sm:rotate-[-4deg] sm:animate-floatSlow">
              <PhaseCard
                phase="Phase 4"
                title="Smart Chain"
                points={["Cross-Chain Expansion & AI Predictive Finance Tools"]}
              />
            </div>
          </div>

          {/* Accent dots (desktop only) */}
          <span className="hidden sm:block absolute -top-3 -left-3 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
          <span className="hidden sm:block absolute -bottom-3 -right-3 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.9)]" />
        </div>
      </div>
    </section>
  );
};

export default AboutChainX;
