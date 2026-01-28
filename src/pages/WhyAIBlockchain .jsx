const WhyAIBlockchain = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
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

      {/* 🌫️ Moving background haze */}
      <div className="absolute inset-0 bg-motion z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT VISUAL ================= */}
        <div
          className="
            relative w-[320px] h-[420px]
            rounded-2xl
            border border-white/10
            bg-black/80
            overflow-hidden
          "
        >
          {/* ✅ Ambient radial glow (FIXED) */}
          <div
            className="absolute inset-0 z-0 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(168,85,247,0.35), transparent 60%)",
            }}
          />

          {/* Main image / gif */}
          <img
            src="/image.gif"
            alt="ChainX"
            className="absolute inset-0 w-full h-full object-contain z-[1] opacity-90"
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 z-[20] grid grid-cols-6 grid-rows-8 opacity-30 pointer-events-none">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>

          {/* Scanner line */}
          <div className="scanner-line z-[30]" />

          {/* Floating particles */}
          <div className="particles">
            {[...Array(6)].map((_, i) => (
              <span key={i} className={`particle particle-${i}`} />
            ))}
          </div>

          {/* Orbit ring */}
          <div className="orbit-ring">
            <span className="orbit-dot" />
          </div>

          {/* Inner glow */}
          <div className="absolute inset-0 z-[40] rounded-2xl inner-glow pointer-events-none" />

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 z-[50] p-4 text-center backdrop-blur-sm bg-black/60">
            <p className="text-sm text-white/80 font-bold">
              Blockchain ensures trust.
            </p>
            <p className="text-xs text-white/50">
              AI delivers speed and precision.
            </p>
          </div>
        </div>

        {/* ================= RIGHT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              phase: "Feature 01",
              title: "Predictive Intelligence",
              desc: "Data-driven insights for optimized decisions.",
            },
            {
              phase: "Feature 02",
              title: "Immutable Trust",
              desc: "Every transaction recorded transparently on the blockchain.",
            },
            {
              phase: "Feature 03",
              title: "Autonomous Efficiency",
              desc: "Smart contracts execute without intermediaries.",
            },
            {
              phase: "Feature 04",
              title: "Global Access",
              desc: "Open, borderless, and accessible to everyone.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_90px_rgba(139,92,246,0.35)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-purple-500/30 via-transparent to-indigo-500/30
                  opacity-0 group-hover:opacity-100 transition duration-500
                "
              />

              <p className="text-xs tracking-widest text-purple-300 uppercase mb-2 font-bold">
                {item.phase}
              </p>

              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <div className="mt-3 h-px w-10 bg-gradient-to-r from-purple-400 to-indigo-400" />

              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAIBlockchain;
