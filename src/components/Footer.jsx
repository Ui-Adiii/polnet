import {
  FaTelegram,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-sm text-white/80">
          © 2026 ChainX. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <FaTelegram className="text-xl text-white/80 group-hover:text-cyan-400" />
          </a>

          <a className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <FaXTwitter className="text-xl text-white/80 group-hover:text-sky-400" />
          </a>

          <a className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <FaYoutube className="text-xl text-white/80 group-hover:text-red-500" />
          </a>

          <a className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
            <FaInstagram className="text-xl text-white/80 group-hover:text-pink-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
