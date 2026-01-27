const WhyAIBlockchain = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL */}
        <div
          className="
            relative w-[320px] h-[420px]
            rounded-2xl
            border border-white/10
            bg-black/70
            overflow-hidden
          "
        >
          {/* 🌌 BACK AMBIENT GLOW */}
          <div className="absolute inset-0 z-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-2xl" />

          {/* 🖼️ GIF — LOWEST */}
          <img
            src="/image.gif"
            alt="ChainX"
            className="
              absolute inset-0
              w-full h-full object-contain
              z-[1]
              opacity-90
            "
          />

          {/* 🔲 GRID — ABOVE GIF */}
          <div
            className="
              absolute inset-0 z-[20]
              grid grid-cols-6 grid-rows-8
              opacity-35
              pointer-events-none
            "
          >
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 40}ms` }}
              />
            ))}
          </div>

          {/* 📡 SCANNER LINE */}
          <div className="scanner-line z-[30]" />

          {/* ✨ INNER EDGE GLOW */}
          <div className="absolute inset-0 z-[40] rounded-2xl inner-glow pointer-events-none" />

          {/* 🔥 CORNER HUD GLOWS */}
          <span className="corner-glow top-left" />
          <span className="corner-glow top-right" />
          <span className="corner-glow bottom-left" />
          <span className="corner-glow bottom-right" />

          {/* FOOTER */}
          <div className="absolute bottom-0 left-0 right-0 z-[50] p-4 text-center backdrop-blur-sm bg-black/50">
            <p className="text-sm text-white/80">
              Blockchain ensures trust.
            </p>
            <p className="text-xs text-white/50">
              AI delivers speed and precision.
            </p>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
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
  {/* 🌈 Gradient border glow */}
  <div
    className="
      pointer-events-none absolute inset-0 rounded-2xl
      bg-gradient-to-br from-purple-500/30 via-transparent to-indigo-500/30
      opacity-0 group-hover:opacity-100
      transition duration-500
    "
  />

  {/* ✨ Light sweep */}
  <div
    className="
      pointer-events-none absolute -left-full top-0 h-full w-full
      bg-gradient-to-r from-transparent via-white/15 to-transparent
      group-hover:left-full
      transition-all duration-700
    "
  />

  {/* 💠 Accent dot */}
  <span
    className="
      absolute top-4 right-4 h-2.5 w-2.5 rounded-full
      bg-purple-400
      shadow-[0_0_12px_rgba(168,85,247,0.9)]
    "
  />

  {/* Phase */}
  <p className="text-xs tracking-widest text-purple-300 uppercase mb-2">
    {item.phase}
  </p>

  {/* Title */}
  <h3
    className="
      text-lg font-semibold
      bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300
      bg-clip-text text-transparent
    "
  >
    {item.title}
  </h3>

  {/* Divider */}
  <div className="mt-3 h-px w-10 bg-gradient-to-r from-purple-400 to-indigo-400" />

  {/* Description */}
  <p className="mt-4 text-sm text-white/65 leading-relaxed">
    {item.desc}
  </p>

  {/* Bottom notch */}
  <span
    className="
      absolute -bottom-3 left-10
      w-6 h-6 bg-white/5
      border-b border-r border-white/10
      rotate-45
      shadow-[0_0_20px_rgba(139,92,246,0.25)]
    "
  />
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAIBlockchain;
