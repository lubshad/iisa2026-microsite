import Icon from "@/components/icon";

const focusAreas = [
  {
    icon: "hearing" as const,
    title: "Speech & Hearing",
    description:
      "Exploring neural networks in speech synthesis and advanced hearing aid technologies for inclusive healthcare.",
  },
  {
    icon: "water" as const,
    title: "Underwater Acoustics",
    description:
      "Deep sea signal processing and sonar innovation using AI-driven predictive modeling for marine conservation.",
  },
  {
    icon: "document" as const,
    title: "Environmental Noise",
    description:
      "Leveraging machine learning for smart city noise mapping and sustainable urban acoustic planning.",
  },
  {
    icon: "building" as const,
    title: "Architectural Signal",
    description:
      "Generative design in building acoustics to optimize soundscapes in public and private spaces.",
  },
];

export default function About() {
  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Scientific Context
          </p>
          <h2 className="font-headline mb-8 text-5xl leading-tight text-[#00375e]">
            About the <br />
            Conference
          </h2>
          <div className="mb-8 h-1 w-24 bg-[#745b04]"></div>
          <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
            The International Symposium on Acoustics 2026 stands at the forefront of the technological renaissance in
            sound science. As we bridge the gap between physical phenomena and digital intelligence, IISA 2026
            explores how Artificial Intelligence is fundamentally transforming the landscape of acoustics.
          </p>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            From the depths of underwater acoustics to the intricacies of human speech and hearing, we invite the
            global scientific community to contribute to a symposium focused on social impact and sustainable
            innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:col-span-7 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div key={area.title} className={`editorial-shadow rounded-lg bg-white p-8 ${index % 2 === 1 ? "md:mt-12" : ""}`}>
              <Icon className="mb-4 size-10 text-[#00375e]" name={area.icon} />
              <h3 className="font-headline mb-3 text-xl text-[#00375e]">{area.title}</h3>
              <p className="text-sm text-on-surface-variant">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
