const PhaseCard = ({ phase, title, points }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_35px_100px_rgba(139,92,246,0.35)]
      "
    >
      {/* 🌈 Gradient glow border */}
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
          shadow-[0_0_14px_rgba(168,85,247,0.9)]
        "
      />

      {/* Phase */}
      <p className="text-lg tracking-widest md:text-xl font-bold uppercase text-purple-300 mb-2">
        {phase}
      </p>

      {/* Title */}
      <h3
        className="
        text-md
          md:text-lg font-semibold
          bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300
          bg-clip-text text-transparent
        "
      >
        {title}
      </h3>

      {/* Divider */}
      <div className="mt-3 h-px w-12 bg-gradient-to-r from-purple-400 to-indigo-400" />

      {/* Points */}
      <ul className="mt-4 space-y-2 text-sm text-white/65">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-purple-400">▸</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {/* 🔻 Notch */}
      <span
        className="
          absolute -bottom-3 left-10
          w-6 h-6 bg-white/5
          border-b border-r border-white/10
          rotate-45
          shadow-[0_0_25px_rgba(139,92,246,0.25)]
        "
      />
    </div>
  );
};

export default PhaseCard;
