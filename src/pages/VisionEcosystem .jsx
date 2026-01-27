const VisionEcosystem = () => {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-3 gap-20 items-center">

        {/* LEFT : ROBOT / VISUAL */}
        <div className="flex justify-center">
          <img
            src="/robochacha.png"   // use your 3D robot image
            alt="Polnet AI"
            className="w-72 object-contain"
          />
        </div>

        {/* CENTER : OUR VISION CARD */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl
          backdrop-blur-xl p-8 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">

          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>

          <p className="text-white/70 leading-relaxed mb-4">
            To build a trustless, intelligent, and community-driven economy
            where AI supports blockchain’s core promise — fairness,
            transparency, and opportunity for all.
          </p>

          <p className="text-white/70 leading-relaxed mb-6">
            Polnet AI envisions a decentralized world where financial
            intelligence is autonomous, accessible, and free from
            intermediaries.
          </p>

          {/* Bottom Highlight Card */}
          <div className="mt-6 inline-block bg-white/10 border border-white/10
            rounded-xl p-4">
            <p className="text-sm text-white/70 mb-2">
              <span className="font-medium text-white">Freedom:</span>{" "}
              Intelligence. Trust.
            </p>
            <span className="inline-block bg-purple-500 text-white
              px-4 py-1 rounded-lg font-medium">
              Polnet AI.
            </span>
          </div>
        </div>

        {/* RIGHT : ECOSYSTEM */}
        <div>
          <h2 className="text-4xl font-semibold text-purple-300 mb-8">
            The Polnet Ecosystem ✦
          </h2>

          {/* POL TOKEN */}
          <h4 className="text-lg font-semibold mb-2">POL Token</h4>
          <p className="text-white/70 mb-4">
            The foundation of <span className="text-white">Polnet AI</span>.
            POL powers every action, transaction, and decision within
            the ecosystem.
          </p>

          <ul className="text-white/60 space-y-2 mb-6 list-disc list-inside">
            <li><span className="text-white">Blockchain:</span> Polygon (MATIC)</li>
            <li><span className="text-white">Type:</span> Utility & Governance Token</li>
            <li>
              <span className="text-white">Utility:</span> Ecosystem access,
              governance, payments, staking integrations
            </li>
            <li>
              <span className="text-white">Goal:</span> Self-sustaining,
              intelligent economy powered by community and automation
            </li>
          </ul>

          {/* COMPONENTS */}
          <h4 className="text-lg font-semibold mb-3">
            Ecosystem Components
          </h4>

          <ul className="text-white/60 space-y-2 list-disc list-inside">
            <li>
              <span className="text-white">AI Vaults:</span> Intelligent modules
              managing liquidity and sustainability.
            </li>
            <li>
              <span className="text-white">Governance DAO:</span> Transparent,
              community-led decision-making using POL token.
            </li>
            <li>
              <span className="text-white">Developer APIs:</span> Open tools for
              builders to integrate intelligent blockchain utilities.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionEcosystem;
