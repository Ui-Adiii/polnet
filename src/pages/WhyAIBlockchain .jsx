const WhyAIBlockchain = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#7c3aed_0%,transparent_45%)] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#4f46e5_0%,transparent_45%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL */}
        <div>
          <p className="text-purple-300 mb-6 text-sm tracking-wide uppercase">
            Why AI + Blockchain
          </p>

          <div
            className="
              relative w-[320px] h-[420px]
              border border-white/10 rounded-2xl
              bg-black/50 backdrop-blur-xl
              shadow-[0_0_60px_rgba(139,92,246,0.15)]
              overflow-hidden
            "
          >
            {/* Animated grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 opacity-20">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="border border-white/10 animate-pulse"
                  style={{ animationDelay: `${i * 40}ms` }}
                />
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/image.gif"
                alt="Polnet"
                className="
                  relative w-full h-full object-contain rounded-2xl
                  drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]
                "
              />
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center backdrop-blur-sm bg-black/30">
              <p className="text-sm text-white/80">
                Blockchain ensures trust.
              </p>
              <p className="text-xs text-white/50">
                AI delivers speed and precision.
              </p>
            </div>
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
                group relative
                bg-white/5 border border-white/10
                rounded-2xl p-6 backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(99,102,241,0.35)]
              "
            >
              {/* Glow sweep */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* Phase */}
              <p className="text-sm font-medium text-purple-300 mb-1">
                {item.phase}
              </p>

              {/* Title */}
              <h3
                className="
                  text-lg font-semibold
                  bg-gradient-to-r from-purple-300 to-indigo-300
                  bg-clip-text text-transparent
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/60">
                {item.desc}
              </p>

              {/* Notch */}
              <span
                className="
                  absolute -bottom-3 left-10
                  w-6 h-6 bg-white/5
                  border-b border-r border-white/10
                  rotate-45
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
