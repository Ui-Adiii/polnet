const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* Top radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4f46e5_0%,transparent_45%)] opacity-40" />

      {/* 🎥 CENTER VIDEO */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            w-[300px] h-[300px] md:w-[500px] md:5-[400px]
            object-cover
            opacity-20
            blur-[1px]
            mask-image-radial
          "
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            POLNET-AI
          </h1>

          <p className="mt-6 text-3xl md:text-4xl font-light">
            Artificial Intelligence Redefined <br />
            <span className="text-white/80">Blockchain Precision</span>
          </p>

          <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Polnet AI fuses AI insight with blockchain trust.
            Smart. Transparent. Limitless.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-3 font-medium hover:scale-105 transition">
              Launch App
            </button>
            <button className="rounded-full border border-white/30 px-8 py-3 hover:bg-white/10 transition">
              View Docs
            </button>
          </div>

          {/* Icons */}
          <div className="mt-12 flex justify-center gap-6 text-white/60 text-xl">
            <span>₿</span>
            <span>Ξ</span>
            <span>⧫</span>
            <span>◎</span>
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-1/4 left-16 h-10 w-10 rounded-full bg-white/10 blur-sm" />
      <div className="absolute top-1/3 left-32 h-16 w-16 rounded-full bg-white/10 blur-sm" />
      <div className="absolute bottom-32 right-32 h-14 w-14 rotate-45 bg-white/10 blur-sm" />
      <div className="absolute top-32 right-20 h-14 w-14 rotate-45 bg-white/10 blur-sm" />
    </section>
  );
};

export default Hero;
