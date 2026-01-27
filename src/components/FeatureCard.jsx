const FeatureCard = ({ color, title, subtitle, rotate }) => {
  return (
    <div
      className={`
        relative w-48 h-64
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        ${rotate}
        shadow-[0_25px_80px_rgba(0,0,0,0.7)]
      `}
    >
      {/* Top color bar */}
      <div className={`h-2 w-14 rounded-full ${color} mb-6`} />

      {/* Text */}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-white/60 mt-1">{subtitle}</p>

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
export default FeatureCard;