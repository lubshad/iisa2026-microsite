import Icon from "@/components/icon";

const organizers = [
  { icon: "school" as const, label: "Acoustical Society of India" },
  { icon: "bank" as const, label: "University of Calicut" },
  { icon: "foundation" as const, label: "Kannur University" },
  { icon: "globe" as const, label: "ICA (International Commission)" },
  { icon: "public" as const, label: "ASA (Acoustical Society of America)" },
];

export default function Organizers() {
  return (
    <section className="bg-[#f3f3f4] py-16">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <h3 className="font-label mb-12 text-xs uppercase tracking-[0.3em] text-[#72777f]">
          Organizers &amp; Strategic Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:gap-20">
          {organizers.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(30,78,121,0.1)]">
                <Icon className="size-8 text-[#00375e]" name={item.icon} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
