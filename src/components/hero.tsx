import Image from "next/image";
import Icon from "@/components/icon";
import heroImg from "@/assets/images/university-of-calicut.jpg";

export default function Hero() {
  return (
    <header className="relative flex h-[70vh] min-h-[600px] items-center overflow-hidden bg-[#00375e] md:h-[85vh] md:min-h-[750px]">
      <div className="absolute inset-0 z-0">
        <Image
          alt="University Campus"
          className="h-full w-full object-cover"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          src={heroImg}
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
            <path d="M0,200 Q100,50 200,200 T400,200 T600,200 T800,200 T1000,200" fill="none" stroke="#ffe08d" strokeWidth="2"></path>
            <path d="M0,220 Q150,100 300,220 T600,220 T900,220 T1000,220" fill="none" stroke="#e4c368" strokeWidth="1"></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 text-white md:px-8 md:py-14">
        <p className="font-label mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffe08d] md:mb-4 md:text-sm">
          International Symposium
        </p>
        <h1 className="font-headline mb-4 text-4xl font-bold tracking-tight md:text-8xl">IISA 2026</h1>
        <h2 className="font-headline mb-6 max-w-2xl text-lg leading-snug opacity-90 md:text-3xl">
          India International Symposium on Acoustics
        </h2>

        <div className="mb-6 max-w-3xl rounded-lg border-l-4 border-l-[#745b04] bg-white/10 p-4 backdrop-blur-md md:mb-8 md:p-6">
          <p className="font-label mb-2 text-[10px] uppercase tracking-widest text-[#ffe08d] md:text-sm">Theme</p>
          <p className="text-base font-light italic leading-relaxed md:text-xl">
            &quot;AI for Acoustics: Innovation, Inclusion and Impact for Social Good&quot;
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-8 md:gap-x-12 md:gap-y-4">
          <div className="flex items-center gap-3">
            <Icon className="size-6 text-[#ffe08d]" name="calendar" />
            <div>
              <p className="text-xs uppercase opacity-70">Dates</p>
              <p className="font-medium">November 19-22, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon className="size-6 text-[#ffe08d]" name="location" />
            <div>
              <p className="text-xs uppercase opacity-70">Venue</p>
              <p className="font-medium">University of Calicut, Kerala, India</p>
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

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </header>
  );
}
