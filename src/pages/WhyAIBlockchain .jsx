const WhyAIBlockchain = () => {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL */}
        <div>
          <p className="text-purple-300 mb-6 text-sm tracking-wide">
            Why AI + Blockchain
          </p>

          <div className="relative w-[320px] h-[420px] border border-white/10 rounded-2xl 
            bg-black/40 backdrop-blur-md">

            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-8 opacity-20">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border border-white/10" />
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="w-40 h-40 rounded-full bg-purple-600/30 blur-2xl" /> */}
              <img
                src="/image.gif"
                alt="Polnet"
                className="relative w-full h-full object-contain rounded-2xl"
              />
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
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
      relative bg-white/5 border border-white/10
      rounded-2xl p-6 backdrop-blur-xl
      rotate-[-3deg] hover:rotate-0
      transition duration-300
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    "
  >
    {/* Phase / Label */}
    <p className="text-sm font-medium text-purple-300 mb-1">
      {item.phase}
    </p>

    {/* Title */}
    <h3 className="text-lg font-semibold bg-gradient-to-r
      from-purple-300 to-indigo-300 bg-clip-text text-transparent">
      {item.title}
    </h3>

    {/* Description */}
    <p className="mt-3 text-sm text-white/60">
      {item.desc}
    </p>

    {/* Speech-bubble notch */}
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
