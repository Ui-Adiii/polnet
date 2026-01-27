import PhaseCard from "../components/PhaseCard";

const AboutPolnet = () => {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">

      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed_0%,transparent_45%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#4f46e5_0%,transparent_45%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT : ROADMAP PHASES */}
        <div className="relative grid grid-cols-2 gap-12">

          {/* Phase 1 */}
          <div className="rotate-[-6deg] hover:rotate-[-4deg] transition">
            <PhaseCard
              phase="Phase 1"
              title="Token Launch"
              points={[
                "Token Genesis & Smart Contract Deployment",
              ]}
            />
          </div>

          {/* Phase 2 */}
          <div className="translate-y-14 rotate-[4deg] hover:rotate-[2deg] transition">
            <PhaseCard
              phase="Phase 2"
              title="Web3 Launch"
              points={[
                "Ecosystem Launch & Web DApp Activation",
              ]}
            />
          </div>

          {/* Phase 3 */}
          <div className="-translate-y-6 rotate-[5deg] hover:rotate-[3deg] transition">
            <PhaseCard
              phase="Phase 3"
              title="Smart DAO"
              points={[
                "Governance DAO & AI Infrastructure Upgrade",
              ]}
            />
          </div>

          {/* Phase 4 */}
          <div className="translate-y-20 rotate-[-4deg] hover:rotate-[-2deg] transition">
            <PhaseCard
              phase="Phase 4"
              title="Smart Chain"
              points={[
                "Cross-Chain Expansion & AI Predictive Finance Tools",
              ]}
            />
          </div>

          {/* Subtle connector glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-10 h-[80%] w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />
          </div>
        </div>

        {/* RIGHT : ABOUT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            About <span className="text-purple-300">Polnet AI</span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Polnet AI is a next-generation decentralized ecosystem that merges
            artificial intelligence with the power of blockchain technology to
            create a new model of financial intelligence.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            Built on the Polygon network, Polnet AI enables an ecosystem where
            data-driven automation, transparency, and decentralized governance
            work together seamlessly — empowering users to make smarter, faster,
            and more secure digital decisions.
          </p>

          <p className="text-white/70 leading-relaxed">
            At Polnet AI, intelligence isn’t just artificial — it’s decentralized,
            adaptive, and designed for your growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPolnet;
