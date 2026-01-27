import FeatureCard from "../components/FeatureCard";

const WhyChoosePolnet = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Decorative border corners */}
      <div className="absolute inset-0 border border-white/5 rounded-[32px]" />

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">

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
        <div className="relative flex gap-10 justify-end">

          {/* Smart */}
          <FeatureCard
            color="bg-sky-400"
            title="Smart"
            subtitle="Precision"
            rotate="-rotate-6"
          />

          {/* Secure */}
          <FeatureCard
            color="bg-emerald-400"
            title="Secure"
            subtitle="Ownership"
            rotate="rotate-3"
          />

          {/* Fast */}
          <FeatureCard
            color="bg-orange-400"
            title="Fast"
            subtitle="Vision"
            rotate="rotate-6"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChoosePolnet;
