const Navbar = () => {
  return (
    <nav className="relative z-20  border  border-white/10 bg-black backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex justify-center w-16 h-16  md:w-20 md:h-20 items-center">
          <img
            src="logo.png"
            alt="ChainX"
            className="w-full h-full object-contain rounded-full shadow-[0_0_25px_rgba(99,102,241,0.45)]"
          />
        </div>

        {/* CTA Button */}
        <button className="group relative rounded-full p-[1.5px]">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 blur opacity-70 group-hover:opacity-100 transition" />
          <span className="relative flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm font-medium text-white">
            Get Started Now
            <span className="group-hover:scale-110 transition">🔥</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
