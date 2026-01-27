const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Copyright */}
        <p className="text-sm text-white/80">
          © 2026 Polnet. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">

          {/* Telegram */}
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center
            rounded-xl bg-white/10 border border-white/10
            hover:bg-white/20 transition"
          >
            <img src="https://polnet.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelegram.5d47a123.webp&w=384&q=75" alt="Telegram" className="w-full h-full object-cover" />
          </a>

          {/* X / Twitter */}
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center
            rounded-xl bg-white/10 border border-white/10
            hover:bg-white/20 transition"
          >
            <img src="https://polnet.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.748e5d89.webp&w=384&q=75" alt="X" className="w-full h-full object-cover" />
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center
            rounded-xl bg-white/10 border border-white/10
            hover:bg-white/20 transition"
          >
            <img src="https://polnet.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyoutube.59377f9a.webp&w=384&q=75" alt="YouTube" className="w-full h-full object-cover" />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center
            rounded-xl bg-white/10 border border-white/10
            hover:bg-white/20 transition"
          >
            <img  src="https://polnet.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstagram.62e5ec94.webp&w=384&q=75" alt="Instagram" className="w-full h-full object-cover" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
