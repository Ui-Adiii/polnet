const FAQCard = ({ title, desc, rotate }) => {
  return (
    <div
      className={`
        relative bg-white/5 border border-white/10
        backdrop-blur-xl rounded-2xl p-6
        ${rotate}
        shadow-[0_25px_80px_rgba(0,0,0,0.7)]
        hover:rotate-0 transition duration-300
      `}
    >
      <h3 className="text-lg font-semibold text-purple-300 mb-3">
        {title}
      </h3>

      <p className="text-sm text-white/60 leading-relaxed">
        {desc}
      </p>

      {/* Speech notch */}
      <span
        className="
          absolute -bottom-3 left-10
          w-6 h-6 bg-white/5
          border-b border-r border-white/10
          rotate-45
        "
      />
    </div>
  );
};


const JoinMovement = () => {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-purple-300 mb-6">
            Join the Movement
          </h2>

          <p className="text-white/70 mb-4">
            Be part of the next digital revolution.
          </p>

          <p className="text-white/60 leading-relaxed max-w-md mb-10">
            Whether you’re a visionary, developer, or believer in intelligent
            decentralization — ChainX gives you the power to shape the future.
          </p>

          {/* CTA */}
          <button className="
            group inline-flex items-center gap-3
            rounded-full border border-purple-400/40
            px-7 py-3 text-sm font-medium
            hover:bg-purple-500/10 transition
          ">
            Join Community
            <span className="group-hover:translate-x-1 transition">↗</span>
          </button>
        </div>

        {/* RIGHT FAQ CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <FAQCard
            title="What is ChainX?"
            desc="ChainX is a decentralized ecosystem that combines Artificial Intelligence with blockchain automation to create an intelligent financial infrastructure."
            rotate="-rotate-6"
          />

          <FAQCard
            title="What is the POL token?"
            desc="POL is the native utility token of ChainX, enabling governance, ecosystem transactions, and community participation."
            rotate="rotate-3"
          />

          <FAQCard
            title="Why is AI integration important?"
            desc="AI enhances blockchain by automating logic, predicting network behavior, and optimizing processes — making decentralized systems more efficient and adaptive."
            rotate="rotate-2"
          />

          <FAQCard
            title="Which blockchain does ChainX run on?"
            desc="ChainX is built on the Polygon blockchain, ensuring scalability, security, and cost efficiency."
            rotate="-rotate-4"
          />

        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
