import Image from "next/image";
import Link from "next/link";
import { routes } from "@/navigation/routes";
import HeroBackdrop from "@/components/hero-backdrop";
import asiLogo from "@/assets/images/logos/asi.png";
import asaLogo from "@/assets/images/logos/asa.png";
import icaLogo from "@/assets/images/logos/ica.png";
import kannurUniversityLogo from "@/assets/images/logos/kannur_university.png";
import calicutUniversityLogo from "@/assets/images/logos/university_of_calicut_logo.png";

const heroStats = [
  { label: "Dates", value: "November 19-22, 2026" },
  { label: "Venue", value: "University of Calicut, Kerala, India" },
  { label: "Co-Sponsors", value: "ICA and ASA" },
] as const;

const heroLogos = [
  { src: asiLogo, alt: "Acoustical Society of India", white: true },
  { src: asaLogo, alt: "Acoustical Society of America", white: true },
  { src: icaLogo, alt: "International Commission for Acoustics", white: false },
  { src: calicutUniversityLogo, alt: "University of Calicut", white: true },
  { src: kannurUniversityLogo, alt: "Kannur University", white: true },
] as const;

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#120f2e] text-white">
      <HeroBackdrop />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-7xl items-center px-4 py-14 md:px-8 md:py-20">
        <div className="w-full">
          <div className="max-w-5xl">
            <p className="font-headline max-w-2xl text-xl leading-tight text-white/85 italic md:text-3xl">
              &ldquo;AI for Acoustics: Innovation, Inclusion and Impact for Social Good&rdquo;
            </p>

            <div className="mt-8 flex items-end gap-3 md:gap-5">
              <Image
                src="/iisa2026-white.svg"
                alt="IISA 2026"
                width={640}
                height={220}
                className="h-auto w-[min(100%,29rem)]"
                priority
              />
              <div className="mb-4 hidden h-px flex-1 bg-gradient-to-r from-[#72d8f8] via-white/40 to-transparent md:block" />
            </div>

            <h1 className="font-headline mt-4 max-w-3xl text-3xl leading-tight text-white md:text-5xl">
              India International Symposium on Acoustics
            </h1>

            <div className="mt-10 grid gap-4 md:max-w-4xl sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-[#72d8f8]/20 bg-[linear-gradient(135deg,rgba(114,216,248,0.16),rgba(255,255,255,0.08))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f3cf66] via-[#72d8f8] to-transparent" />
                  <p className="font-label text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8fe1ff]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-relaxed text-white md:text-lg">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={routes.registration}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#161133] transition-transform hover:-translate-y-0.5"
              >
                Register Now
              </Link>
              <Link
                href={routes.callForPapers}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Submit Paper
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-white/70">
              <div className="rounded-full border border-[#f3cf66]/30 bg-[#f3cf66]/10 px-4 py-2 text-sm">
                Organised by University of Calicut
              </div>
              <div className="text-sm">Co-sponsored by International Commission of Acoustics and Acoustical Society of America</div>
            </div>
          </div>

          <div className="mt-10 w-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-5">
              {heroLogos.map((logo) => (
                <div key={logo.alt} className="flex min-h-[96px] w-full items-center justify-center px-3 py-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-auto max-h-14 w-auto object-contain ${logo.white ? "brightness-0 invert opacity-95" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
    </header>
  );
}
