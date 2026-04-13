import Image from "next/image";
import Icon from "@/components/icon";
import HeroGraphics from "@/components/hero-graphics";

export default function Hero() {
  return (
    <header className="relative flex min-h-[560px] items-center overflow-hidden bg-[#00375e] md:min-h-[700px]">
      <HeroGraphics />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 text-white md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="font-label mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffe08d] md:mb-4 md:text-sm">
            India International Symposium on Acoustics
          </p>
          <h1 className="font-headline mb-4">
            <span className="sr-only">IISA 2026</span>
            <Image
              src="/iisa2026-white.svg"
              alt="IISA 2026"
              width={400}
              height={120}
              className="h-20 w-auto md:h-36"
              priority
            />
          </h1>
          <h2 className="font-headline mb-8 max-w-3xl text-lg leading-snug text-white/80 md:mb-10 md:text-3xl">
            India International Symposium on Acoustics 2026
          </h2>

          <div className="mb-6 max-w-3xl rounded-lg border-l-4 border-l-[#745b04] bg-white/10 p-4 backdrop-blur-md md:mb-8 md:p-6">
            <p className="font-label mb-2 text-[10px] uppercase tracking-widest text-[#ffe08d] md:text-sm">Theme</p>
            <p className="text-base font-light italic leading-relaxed text-white/90 md:text-xl">
              &ldquo;AI for Acoustics: Innovation, Inclusion and Impact for Social Good&rdquo;
            </p>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-8 md:gap-x-12 md:gap-y-4">
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-[#ffe08d]" name="calendar" />
              <div>
                <p className="text-xs uppercase opacity-70">Dates</p>
                <p className="font-medium">November 19&ndash;22, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-[#ffe08d]" name="location" />
              <div>
                <p className="text-xs uppercase opacity-70">Venue</p>
                <p className="font-medium">University of Calicut Campus, Malappuram (Dt.), Kerala &ndash; 673635, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="kasavu-gold-gradient rounded-md px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105">
              Register Now
            </button>
            <button className="rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              Submit Paper
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </header>
  );
}
