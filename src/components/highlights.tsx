import Icon from "@/components/icon";
import Image from "next/image";
import universityImg from "@/assets/images/university-of-calicut.jpg";

const highlights = [
  { icon: "user" as const, text: "Plenary and invited talks by global experts" },
  { icon: "document" as const, text: "Technical paper presentations" },
  { icon: "school" as const, text: "M. S. Narayanan and Prof. Rais Ahmed Memorial Lectures" },
  { icon: "chip" as const, text: "Exhibition of acoustical products and technologies" },
  { icon: "hub" as const, text: "Networking opportunities with academia and industry" },
];

const participantTypes = [
  "Researchers",
  "Academic institutions",
  "Industries",
  "Medical professionals",
  "Enforcement authorities",
];

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="pointer-events-none absolute left-0 top-24 hidden h-64 w-64 rounded-full bg-[#9fcafc]/20 blur-3xl md:block" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:gap-16 md:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
              Program Overview
            </p>
            <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">Conference<br />Highlights</h2>
            <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
            <ul className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-[#00375e]">
                    <Icon name={item.icon} className="size-4" />
                  </div>
                  <span className="text-lg text-on-surface-variant">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#f3f3f4] p-8 md:p-12">
              <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
                Who Should Attend
              </p>
              <h3 className="font-headline mb-6 text-3xl text-[#00375e]">Participants Context</h3>
              <div className="mb-8 flex flex-col gap-6 md:flex-row">
                <div className="flex-1 rounded-xl bg-white p-6 shadow-sm">
                  <div className="font-headline mb-2 text-4xl font-bold text-[#745b04]">200+</div>
                  <div className="font-label text-sm uppercase tracking-wider text-on-surface-variant">Indian Participants</div>
                </div>
                <div className="flex-1 rounded-xl bg-white p-6 shadow-sm">
                  <div className="font-headline mb-2 text-4xl font-bold text-[#745b04]">100+</div>
                  <div className="font-label text-sm uppercase tracking-wider text-on-surface-variant">International Participants</div>
                </div>
              </div>
              <p className="mb-4 font-medium text-[#00375e]">Includes:</p>
              <div className="flex flex-wrap gap-3">
                {participantTypes.map((type, i) => (
                  <span key={i} className="rounded-full border border-[#00375e]/20 bg-white px-4 py-2 text-sm font-medium text-[#00375e]">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#00375e] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-16">
              <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
                Venue Highlight
              </p>
              <h3 className="font-headline mb-6 text-3xl">University of Calicut</h3>
              <p className="mb-8 text-lg font-light leading-relaxed opacity-90">
                The conference will be hosted at the University of Calicut, a premier institution in Kerala known for its academic excellence, research facilities, and serene campus environment. The venue offers excellent connectivity and a vibrant setting for international collaboration.
              </p>
              <div className="flex items-center gap-3 border-l-2 border-[#745b04] pl-4 italic text-[#ffe08d]">
                November 19&ndash;22, 2026 at University of Calicut Campus, Malappuram (Dt.), Kerala.
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <Image 
                src={universityImg} 
                alt="University of Calicut Campus" 
                className="absolute inset-0 h-full w-full object-cover" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-[#00375e] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
