const Navbar = () => {
  return (
    <nav className="relative z-20  border  border-white/10 bg-black backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://polnet.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogotxt.0511a99e.webp&w=640&q=75"
            alt="Polnet"
            className="h-9 md:h-10"
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
