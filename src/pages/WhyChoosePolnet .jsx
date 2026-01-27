import FeatureCard from "../components/FeatureCard";

const WhyChoosePolnet = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Soft framed edges */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" />
      <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#7c3aed_0%,transparent_40%)] opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-purple-300 mb-8">
            Why Choose Polnet AI
          </h2>

          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-medium">
                AI-Powered Ecosystem
              </span>{" "}
              – 100% on-chain verification and data integrity.
            </p>

            <p>
              <span className="text-white font-medium">
                Blockchain Transparency
              </span>{" "}
              – Smarter logic, automated execution, and predictive insights.
            </p>

            <p>
              <span className="text-white font-medium">
                Polygon Scalability
              </span>{" "}
              – Ultra-fast transactions with minimal fees.
            </p>

            <p>
              <span className="text-white font-medium">
                Community Governance
              </span>{" "}
              – Your voice, your control, your ecosystem.
            </p>

            <p>
              <span className="text-white font-medium">
                Sustainable Vision
              </span>{" "}
              – Built for long-term decentralization and real-world utility.
            </p>

            <p className="text-white mt-6">
              Polnet AI transforms how intelligence and decentralization co-exist
              — creating a smarter financial reality.
            </p>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="relative flex gap-12 justify-end">

          {/* Vertical glow guide */}
          <div className="pointer-events-none absolute right-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="hover:-translate-y-2 transition duration-300">
            <FeatureCard
              color="bg-sky-400"
              title="Smart"
              subtitle="Precision"
              rotate="-rotate-6"
            />
          </div>

          <div className="translate-y-10 hover:-translate-y-2 transition duration-300">
            <FeatureCard
              color="bg-emerald-400"
              title="Secure"
              subtitle="Ownership"
              rotate="rotate-3"
            />
          </div>

          <div className="hover:-translate-y-2 transition duration-300">
            <FeatureCard
              color="bg-orange-400"
              title="Fast"
              subtitle="Vision"
              rotate="rotate-6"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoosePolnet;
