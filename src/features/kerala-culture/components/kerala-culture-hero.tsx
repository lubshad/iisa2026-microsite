import Image from "next/image";
import Icon from "@/components/icon";

export default function KeralaCultureHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden md:h-[85vh] md:min-h-[750px]">
      <Image
        alt="Theyyam ritual performer in vibrant costume"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQVI70oaYW5cub6f3XJ-vP-n3W7RLtVAKy6V-SgyYocyZBNTJmuM9M36DfHdcessCmbCMLPd89H9mCKixFSMJlymIq1YRerVQNAwfgPuw-dvQ7mqKusCvzefdxNxbpAU8hD303kxo-GlHVd5bFgqU1Pq5nqbS3HNWasA6zraO_kpKn60qWclmThPzj8a_K3FseeEwfFNcbbJ0geB2U6L1Pw7I-kuazSZoIoZtDxizLKk25hFIMIsiOhR01qXDUTHXMNveTlwkAgeNd"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8 md:pb-20">
          <p className="font-label mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe08d] md:mb-6 md:text-xs">
            Regional Experience
          </p>
          <h1 className="font-headline mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-8xl">
            Heart of
            <br className="md:hidden" />
            {" "}Malabar
          </h1>
          <div className="mb-6 border-l-4 border-l-[#745b04] pl-5 md:mb-10 md:pl-6">
            <p className="max-w-2xl text-base font-light leading-relaxed text-white/90 md:text-xl">
              Beyond the symposium, discover the soul of Kerala. From the rhythmic intensity of
              Theyyam to the pristine coastline of Calicut, experience a land where tradition and
              innovation exist in perfect resonance.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-white md:gap-10">
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-5 text-[#ffe08d] md:size-6" name="mask" />
              <div>
                <p className="text-[10px] uppercase opacity-70">Performing Arts</p>
                <p className="text-sm font-medium md:text-base">Theyyam &amp; Kathakali</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-5 text-[#ffe08d] md:size-6" name="beach" />
              <div>
                <p className="text-[10px] uppercase opacity-70">Natural Beauty</p>
                <p className="text-sm font-medium md:text-base">Malabar Coastline</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="size-5 text-[#ffe08d] md:size-6" name="utensils" />
              <div>
                <p className="text-[10px] uppercase opacity-70">Gastronomy</p>
                <p className="text-sm font-medium md:text-base">Calicut Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
