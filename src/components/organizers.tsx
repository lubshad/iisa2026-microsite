import Image from "next/image";

const organizers = [
  { logo: "/logos/asi.png", label: "Acoustical Society of India (ASI)" },
  { logo: "/logos/university_of_calicut_logo.png", label: "University of Calicut, Kerala" },
  { logo: "/logos/kannur_university.png", label: "Kannur University, Kerala" },
  { logo: "/logos/ica.png", label: "International Commission for Acoustics (ICA)" },
  { logo: "/logos/asa.png", label: "Acoustical Society of America (ASA)" },
];

export default function Organizers() {
  return (
    <section className="bg-[#f3f3f4] py-16">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <h3 className="font-label mb-12 text-xs uppercase tracking-[0.3em] text-[#72777f]">
          Organizers &amp; Strategic Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-80 grayscale transition-all duration-500 hover:grayscale-0 md:gap-20">
          {organizers.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4">
              <div className="relative flex h-24 w-32 items-center justify-center mix-blend-darken">
                <Image
                  src={item.logo}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="max-w-[140px] text-center text-[11px] font-bold uppercase leading-tight tracking-tighter text-[#00375e]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
