import Image from "next/image";
import asiLogo from "@/assets/images/logos/asi.png";
import calicutLogo from "@/assets/images/logos/university_of_calicut_logo.png";
import kannurLogo from "@/assets/images/logos/kannur_university.png";
import icaLogo from "@/assets/images/logos/ica.png";
import asaLogo from "@/assets/images/logos/asa.png";

const organizers = [
  { logo: asiLogo, label: "Acoustical Society of India (ASI)" },
  { logo: calicutLogo, label: "University of Calicut, Kerala" },
  { logo: kannurLogo, label: "Kannur University, Kerala" },
  { logo: icaLogo, label: "International Commission for Acoustics (ICA)" },
  { logo: asaLogo, label: "Acoustical Society of America (ASA)" },
];

export default function Organizers() {
  return (
    <section className="bg-[#f3f3f4] py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <h3 className="font-label mb-8 text-xs font-bold uppercase tracking-[0.3em] text-[#745b04] md:mb-12">
          Organizers &amp; Strategic Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 md:gap-20">
          {organizers.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="relative flex h-16 w-24 items-center justify-center mix-blend-darken md:h-24 md:w-32">
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
