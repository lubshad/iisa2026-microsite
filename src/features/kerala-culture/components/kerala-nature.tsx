import Image from "next/image";
import Icon from "@/components/icon";

const highlights = [
  {
    icon: "beach" as const,
    title: "Kappad Beach",
    description: "Where Vasco da Gama first set foot in India in 1498 — a historic shore flanked by casuarina groves and fishing villages.",
  },
  {
    icon: "waves" as const,
    title: "Backwaters",
    description: "A labyrinth of lagoons, canals, and lakes stretching along the coast — best explored by traditional kettuvallam houseboat.",
  },
  {
    icon: "explore" as const,
    title: "Silent Valley",
    description: "One of the last undisturbed tracts of tropical rainforest in the Western Ghats — a biodiversity hotspot and UNESCO biosphere reserve.",
  },
  {
    icon: "globe" as const,
    title: "Wayanad Highlands",
    description: "Mist-covered hills with ancient tribal settlements, spice plantations, and the Edakkal Caves with Stone Age petroglyphs.",
  },
];

export default function KeralaNature() {
  return (
    <section className="bg-[#f3f3f4] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:mb-4 md:text-xs">
            Natural Wonders
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            God&apos;s Own Country
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
          <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            Kerala&apos;s geography encompasses beaches, backwaters, and Western Ghats rainforests
            within a narrow coastal strip — extraordinary ecological diversity in a compact landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                alt="Malabar coastline at sunset"
                className="h-64 w-full rounded-xl object-cover"
                height={256}
                sizes="(max-width: 1024px) 50vw, 320px"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWmT47fkN9TaXdqFxlp2B3g7c-HGdUY6I1jic3kiDdbRRkTt0ErCM8kWhvrneLDxlcTT-C2vE1FwSwX1jcvYM-De8jDFu9t7fTOnYEMaoo_TyIoHu4s2VixEDnHbLgiQbe3iqDmDnwYQnhnAmmNf3k5ajWP5_s9HKG24NYcXbpp9yyXDeSwxN74H6DeDvFOdEIycrr1gE45MaarR5ajSLHhvxLu1YNwUETtvIElv4emKI-WTyfbQZQF7QsDZykG7onc43HIoeoi22E"
                width={320}
              />
              <Image
                alt="Kerala backwaters with houseboats"
                className="h-48 w-full rounded-xl object-cover"
                height={192}
                sizes="(max-width: 1024px) 50vw, 320px"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2EwZjbYhA_3WCoxrBMZ_i_iZKcMQRuSvMO06-CwVElUEZKtm3iPmE_wjKi50DxvoYyUhe7nSDj4bFeUbSQRns1Rq51PhN2DymU7dz5inUB08jSp74lPHiQB6NaXU70ZTjIQ8rITHPcIkgNMyZdHro0wvRYCTCY7zLcONgyU1kZSkOfHGtS4u8-JVG4nZq509I3z-ZyilFHI812rl9btSTA5ZUW-IsVS6Qh0VJEiSaXWyvOT97jUZc-rfu7wLYMuGIoHemnbvW2QgO"
                width={320}
              />
            </div>
            <div className="space-y-4 pt-6 md:pt-12">
              <Image
                alt="Traditional Kerala architecture"
                className="h-48 w-full rounded-xl object-cover"
                height={192}
                sizes="(max-width: 1024px) 50vw, 320px"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHoMbLDOklthSCUTI2UMc-V7IElHWvYZFsHKeY5jc9UVkRDMH0EOVTGWGmASGgrdD7sMeZuKoz6lD19IjRCdGNDHwl13JOV_yaI7EzLzCsajsfAlON0t1CjQKA5VdDhQ0d5eVgjJMuNJhrn-5JN2UWFdv9XAnDB9b5L8kpqvhF4bkk4wngSr9GiK4UmTpDr3Lyg3iaiwLWQSbZJGpKsDMUSqQLTJAsF-A2bZvaGOu0f7DOrm0aRIcpw46m_Ijlq-d9Oj4j1an2976"
                width={320}
              />
              <Image
                alt="Theyyam ritual at dusk"
                className="h-64 w-full rounded-xl object-cover"
                height={256}
                sizes="(max-width: 1024px) 50vw, 320px"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQVI70oaYW5cub6f3XJ-vP-n3W7RLtVAKy6V-SgyYocyZBNTJmuM9M36DfHdcessCmbCMLPd89H9mCKixFSMJlymIq1YRerVQNAwfgPuw-dvQ7mqKusCvzefdxNxbpAU8hD303kxo-GlHVd5bFgqU1Pq5nqbS3HNWasA6zraO_kpKn60qWclmThPzj8a_K3FseeEwfFNcbbJ0geB2U6L1Pw7I-kuazSZoIoZtDxizLKk25hFIMIsiOhR01qXDUTHXMNveTlwkAgeNd"
                width={320}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 md:gap-5">
                <div className="flex-shrink-0">
                  <div className="editorial-shadow flex size-10 items-center justify-center rounded-xl bg-white md:size-12">
                    <Icon className="size-5 text-[#00375e] md:size-6" name={item.icon} />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline mb-2 text-xl text-[#00375e]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
