import Link from "next/link";

const navItems = ["Home", "Call for Papers", "Registration", "Committee", "Venue", "Kerala Culture"];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 shadow-[0_20px_40px_rgba(30,78,121,0.06)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="font-serif text-2xl font-bold text-[#1E4E79]"
        >
          IISA 2026
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`pb-1 text-sm transition-colors ${
                index === 0
                  ? "border-b-2 border-[#745B04] font-semibold text-[#745B04]"
                  : "text-[#1E4E79] hover:text-[#745B04]"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        <button className="kasavu-gold-gradient rounded-md px-6 py-2 font-medium tracking-tight text-white transition-transform active:opacity-80">
          Register Now
        </button>
      </div>
    </nav>
  );
}
