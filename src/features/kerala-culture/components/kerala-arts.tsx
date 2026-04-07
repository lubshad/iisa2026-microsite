import Image from "next/image";
import Icon from "@/components/icon";

const arts = [
  {
    icon: "mask" as const,
    title: "Theyyam",
    description:
      "A ritualistic art form from North Kerala, Theyyam embodies the divine through elaborate costumes, face paint, and trance-like performances. Dating back over 800 years, it is a living tradition that connects communities to their ancestral deities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQVI70oaYW5cub6f3XJ-vP-n3W7RLtVAKy6V-SgyYocyZBNTJmuM9M36DfHdcessCmbCMLPd89H9mCKixFSMJlymIq1YRerVQNAwfgPuw-dvQ7mqKusCvzefdxNxbpAU8hD303kxo-GlHVd5bFgqU1Pq5nqbS3HNWasA6zraO_kpKn60qWclmThPzj8a_K3FseeEwfFNcbbJ0geB2U6L1Pw7I-kuazSZoIoZtDxizLKk25hFIMIsiOhR01qXDUTHXMNveTlwkAgeNd",
    imageAlt: "Theyyam performer in ceremonial costume",
  },
  {
    icon: "mask" as const,
    title: "Kathakali",
    description:
      "One of India's major classical dance-dramas, Kathakali combines elaborate makeup, vibrant costumes, and expressive gestures to enact stories from the epics. The intricate facial expressions (Navarasas) convey the full spectrum of human emotion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2EwZjbYhA_3WCoxrBMZ_i_iZKcMQRuSvMO06-CwVElUEZKtm3iPmE_wjKi50DxvoYyUhe7nSDj4bFeUbSQRns1Rq51PhN2DymU7dz5inUB08jSp74lPHiQB6NaXU70ZTjIQ8rITHPcIkgNMyZdHro0wvRYCTCY7zLcONgyU1kZSkOfHGtS4u8-JVG4nZq509I3z-ZyilFHI812rl9btSTA5ZUW-IsVS6Qh0VJEiSaXWyvOT97jUZc-rfu7wLYMuGIoHemnbvW2QgO",
    imageAlt: "Kathakali dancer with ornate makeup",
  },
  {
    icon: "public" as const,
    title: "Mohiniyattam",
    description:
      "The dance of the enchantress — a graceful, lyrical classical form performed exclusively by women. Its flowing movements and soft expressions draw from both Bharatanatyam and Kathakali, creating a uniquely feminine vocabulary of gesture and rhythm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWmT47fkN9TaXdqFxlp2B3g7c-HGdUY6I1jic3kiDdbRRkTt0ErCM8kWhvrneLDxlcTT-C2vE1FwSwX1jcvYM-De8jDFu9t7fTOnYEMaoo_TyIoHu4s2VixEDnHbLgiQbe3iqDmDnwYQnhnAmmNf3k5ajWP5_s9HKG24NYcXbpp9yyXDeSwxN74H6DeDvFOdEIycrr1gE45MaarR5ajSLHhvxLu1YNwUETtvIElv4emKI-WTyfbQZQF7QsDZykG7onc43HIoeoi22E",
    imageAlt: "Mohiniyattam classical dance performance",
  },
];

export default function KeralaArts() {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Living Traditions
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Performing Arts
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Kerala&apos;s performing arts are among the world&apos;s most ancient and sophisticated — rooted in
            ritual, refined over millennia, and still vibrantly alive today.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {arts.map((art, index) => (
            <div
              key={art.title}
              className={`grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="editorial-shadow mb-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5">
                  <Icon className="size-5 text-[#00375e]" name={art.icon} />
                  <span className="font-label text-xs font-bold uppercase tracking-[0.15em] text-[#00375e]">
                    {art.title}
                  </span>
                </div>
                <h3 className="font-headline mb-4 text-2xl text-[#00375e] md:mb-6 md:text-4xl">{art.title}</h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">{art.description}</p>
              </div>
              <div className="relative">
                <Image
                  alt={art.imageAlt}
                  className="rounded-xl object-cover"
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={art.image}
                  width={640}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
