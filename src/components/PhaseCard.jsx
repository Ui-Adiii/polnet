const PhaseCard = ({ phase, title, points }) => {
  return (
    <div className="
      relative bg-white/5 border border-white/10 
      backdrop-blur-xl rounded-2xl p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      hover:rotate-0 transition duration-300
    ">
      <h4 className="text-purple-300 font-semibold mb-1">
        {phase}
      </h4>

      <h3 className="text-lg font-medium mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-sm text-white/60 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* Card notch (speech-bubble feel) */}
      <span className="absolute -bottom-3 left-10 w-6 h-6 bg-white/5 
        border-b border-r border-white/10 rotate-45" />
    </div>
  );
};
export default PhaseCard;