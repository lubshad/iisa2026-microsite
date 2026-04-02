import Image from "next/image";
import Icon from "@/components/icon";

export default function Hero() {
  return (
    <header className="relative flex min-h-[921px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="University Campus"
          className="h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN8ySIBtxNosEc2DbuSzlzmhfFTzMDxOQZE2Ohu12WomiHK0WUmxQZsTDzBr3qQNBo9rhVGBKfYTgHR7v1EdrwDcmKdzGT3Ow1OU0Y-L7SPk9_-StnlNYlQ44J3EIkG3GTLOWRS6rCplVOcgVX1tq7e3guq1jA6QjxVCtznUPIf1RAeTLzvDyssKQy7vxrPIRWpYFPD5xzWBy39kMGh_4KSdPZc-xlrp-L3h1vEs-rJtnXkpy-przHQ0eAVpr3oZy1hgq0yHdlYclU"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
            <path d="M0,200 Q100,50 200,200 T400,200 T600,200 T800,200 T1000,200" fill="none" stroke="#ffe08d" strokeWidth="2"></path>
            <path d="M0,220 Q150,100 300,220 T600,220 T900,220 T1000,220" fill="none" stroke="#e4c368" strokeWidth="1"></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20 text-white">
        <p className="font-label mb-4 font-semibold uppercase tracking-[0.2em] text-[#ffe08d]">
          International Symposium
        </p>
        <h1 className="font-headline mb-6 text-7xl font-bold tracking-tighter md:text-9xl">IISA 2026</h1>
        <h2 className="font-headline mb-8 max-w-2xl text-2xl leading-snug opacity-90 md:text-4xl">
          India International Symposium on Acoustics
        </h2>

        <div className="mb-12 max-w-3xl rounded-lg border-l-4 border-l-[#745b04] bg-white/10 p-8 backdrop-blur-md">
          <p className="font-label mb-2 text-sm uppercase tracking-widest text-[#ffe08d]">Theme</p>
          <p className="text-xl font-light italic leading-relaxed md:text-2xl">
            &quot;AI for Acoustics: Innovation, Inclusion and Impact for Social Good&quot;
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-12">
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
              <p className="font-medium">University of Calicut &amp; Kannur University, Kerala, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="kasavu-gold-gradient rounded-md px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105">
            Register Now
          </button>
          <button className="rounded-md border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
            Submit Paper
          </button>
          <button className="flex items-center gap-2 px-8 py-4 text-white hover:underline">
            Download Brochure
            <Icon className="size-5" name="download" />
          </button>
        </div>
      </div>
    </header>
  );
}
