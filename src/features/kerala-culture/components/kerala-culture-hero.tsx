import Image from "next/image";
import Icon from "@/components/icon";

export default function KeralaCultureHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
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
        <div className="mx-auto w-full max-w-7xl px-8 pb-20">
          <p className="font-label mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe08d]">
            Regional Experience
          </p>
          <h1 className="font-headline mb-6 text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl">
            Heart of
            <br />
            Malabar
          </h1>
          <div className="mb-10 border-l-4 border-l-[#745b04] pl-6">
            <p className="max-w-2xl text-xl font-light leading-relaxed text-white/90">
              Beyond the symposium, discover the soul of Kerala. From the rhythmic intensity of
              Theyyam to the pristine coastline of Calicut, experience a land where tradition and
              innovation exist in perfect resonance.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-[#ffe08d]" name="mask" />
              <div>
                <p className="text-xs uppercase opacity-70">Performing Arts</p>
                <p className="font-medium">Theyyam &amp; Kathakali</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-[#ffe08d]" name="beach" />
              <div>
                <p className="text-xs uppercase opacity-70">Natural Beauty</p>
                <p className="font-medium">Malabar Coastline</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-6 text-[#ffe08d]" name="utensils" />
              <div>
                <p className="text-xs uppercase opacity-70">Gastronomy</p>
                <p className="font-medium">Calicut Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
