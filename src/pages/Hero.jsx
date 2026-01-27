const Hero = () => {
  return (
    <section className="hero relative min-h-screen bg-black overflow-hidden text-white">

      {/* Ambient background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#6366f1_0%,transparent_55%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#7c3aed_0%,transparent_60%)] opacity-20" />

      {/* 🎥 CENTER VIDEO */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            w-[280px] h-[280px]
            md:w-[480px] md:h-[400px]
            object-cover
            opacity-25
            blur-[2px]
            scale-110
            mix-blend-screen
            mask-image-radial
          "
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 text-center">
        <div className="max-w-4xl">

          {/* Title */}
          <h1
            className="
              text-5xl md:text-6xl font-extrabold tracking-tight
              bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400
              bg-clip-text text-transparent
              drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]
            "
          >
            POLNET-AI
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-3xl md:text-4xl font-light leading-tight">
            Artificial Intelligence Redefined <br />
            <span className="text-white/80">
              Blockchain Precision
            </span>
          </p>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Polnet AI fuses AI insight with blockchain trust.
            Smart. Transparent. Limitless.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <button
              className="
                rounded-full
                bg-gradient-to-r from-violet-500 to-indigo-500
                px-8 py-3 font-medium
                shadow-[0_0_25px_rgba(99,102,241,0.45)]
                hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]
                transition-all duration-300
              "
            >
              Launch App
            </button>

            <button
              className="
                rounded-full
                border border-white/30
                px-8 py-3
                hover:bg-white/10
                hover:border-white/50
                transition-all duration-300
              "
            >
              View Docs
            </button>
          </div>

          {/* Symbols */}
          <div className="mt-12 flex justify-center gap-8 text-white/60 text-xl tracking-widest">
            <span className="hover:text-white transition">₿</span>
            <span className="hover:text-white transition">Ξ</span>
            <span className="hover:text-white transition">⧫</span>
            <span className="hover:text-white transition">◎</span>
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-1/4 left-16 h-10 w-10 rounded-full bg-violet-400/20 blur-xl animate-pulse" />
      <div className="absolute top-1/3 left-32 h-16 w-16 rounded-full bg-indigo-400/20 blur-xl animate-pulse delay-200" />
      <div className="absolute bottom-32 right-32 h-14 w-14 rotate-45 bg-purple-400/20 blur-xl animate-pulse delay-300" />
      <div className="absolute top-32 right-20 h-14 w-14 rotate-45 bg-indigo-400/20 blur-xl animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
