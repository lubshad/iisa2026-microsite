import Image from "next/image";
import Icon from "@/components/icon";

export default function Cultural() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 py-32 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Regional Experience
          </p>
          <h2 className="font-headline mb-8 text-6xl text-[#00375e]">Heart of Malabar</h2>
          <p className="mb-8 text-xl font-light italic leading-relaxed text-on-surface">
            Beyond the symposium, discover the soul of Kerala. From the rhythmic intensity of Theyyam to the pristine
            coastline of Calicut, experience a land where tradition and innovation exist in perfect resonance.
          </p>
          <div className="flex flex-wrap gap-6 text-[#00375e]">
            <div className="editorial-shadow flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <Icon className="size-5" name="mask" />
              <span className="text-sm font-medium">Kathakali &amp; Theyyam</span>
            </div>
            <div className="editorial-shadow flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <Icon className="size-5" name="beach" />
              <span className="text-sm font-medium">Malabar Coastline</span>
            </div>
            <div className="editorial-shadow flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <Icon className="size-5" name="utensils" />
              <span className="text-sm font-medium">Calicut Cuisine</span>
            </div>
          </div>
          <button className="group mt-12 flex items-center gap-3 font-semibold text-[#745b04]">
            EXPLORE KERALA CULTURE
            <Icon className="size-5 transition-transform group-hover:translate-x-2" name="arrow-right" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Image
              alt="Theyyam Ritual"
              className="h-64 w-full rounded-lg object-cover"
              height={256}
              sizes="(max-width: 1024px) 50vw, 320px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQVI70oaYW5cub6f3XJ-vP-n3W7RLtVAKy6V-SgyYocyZBNTJmuM9M36DfHdcessCmbCMLPd89H9mCKixFSMJlymIq1YRerVQNAwfgPuw-dvQ7mqKusCvzefdxNxbpAU8hD303kxo-GlHVd5bFgqU1Pq5nqbS3HNWasA6zraO_kpKn60qWclmThPzj8a_K3FseeEwfFNcbbJ0geB2U6L1Pw7I-kuazSZoIoZtDxizLKk25hFIMIsiOhR01qXDUTHXMNveTlwkAgeNd"
              width={320}
            />
            <Image
              alt="Kerala Backwaters"
              className="h-48 w-full rounded-lg object-cover"
              height={192}
              sizes="(max-width: 1024px) 50vw, 320px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2EwZjbYhA_3WCoxrBMZ_i_iZKcMQRuSvMO06-CwVElUEZKtm3iPmE_wjKi50DxvoYyUhe7nSDj4bFeUbSQRns1Rq51PhN2DymU7dz5inUB08jSp74lPHiQB6NaXU70ZTjIQ8rITHPcIkgNMyZdHro0wvRYCTCY7zLcONgyU1kZSkOfHGtS4u8-JVG4nZq509I3z-ZyilFHI812rl9btSTA5ZUW-IsVS6Qh0VJEiSaXWyvOT97jUZc-rfu7wLYMuGIoHemnbvW2QgO"
              width={320}
            />
          </div>
          <div className="space-y-4 pt-12">
            <Image
              alt="Coastal Calicut"
              className="h-48 w-full rounded-lg object-cover"
              height={192}
              sizes="(max-width: 1024px) 50vw, 320px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWmT47fkN9TaXdqFxlp2B3g7c-HGdUY6I1jic3kiDdbRRkTt0ErCM8kWhvrneLDxlcTT-C2vE1FwSwX1jcvYM-De8jDFu9t7fTOnYEMaoo_TyIoHu4s2VixEDnHbLgiQbe3iqDmDnwYQnhnAmmNf3k5ajWP5_s9HKG24NYcXbpp9yyXDeSwxN74H6DeDvFOdEIycrr1gE45MaarR5ajSLHhvxLu1YNwUETtvIElv4emKI-WTyfbQZQF7QsDZykG7onc43HIoeoi22E"
              width={320}
            />
            <Image
              alt="Traditional Architecture"
              className="h-64 w-full rounded-lg object-cover"
              height={256}
              sizes="(max-width: 1024px) 50vw, 320px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHoMbLDOklthSCUTI2UMc-V7IElHWvYZFsHKeY5jc9UVkRDMH0EOVTGWGmASGgrdD7sMeZuKoz6lD19IjRCdGNDHwl13JOV_yaI7EzLzCsajsfAlON0t1CjQKA5VdDhQ0d5eVgjJMuNJhrn-5JN2UWFdv9XAnDB9b5L8kpqvhF4bkk4wngSr9GiK4UmTpDr3Lyg3iaiwLWQSbZJGpKsDMUSqQLTJAsF-A2bZvaGOu0f7DOrm0aRIcpw46m_Ijlq-d9Oj4j1an2976"
              width={320}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 translate-x-20 skew-x-12 transform bg-[rgba(0,55,94,0.05)]"></div>
    </section>
  );
}
