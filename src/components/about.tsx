import Icon from "@/components/icon";

const focusAreas = [
  {
    icon: "hearing" as const,
    title: "Speech & Hearing Technologies",
    description: "Advancing digital intelligence in speech processing and inclusive hearing assistance tools.",
  },
  {
    icon: "chip" as const,
    title: "Intelligent Sound Systems",
    description: "Developing smart acoustic systems utilizing AI for enhanced audio processing.",
  },
  {
    icon: "water" as const,
    title: "Underwater Acoustics",
    description: "Deep sea signal processing and sonar innovation combined with predictive modeling.",
  },
  {
    icon: "health" as const,
    title: "Assistive Acoustics",
    description: "Building accessible acoustic solutions and devices for impactful healthcare.",
  },
  {
    icon: "globe" as const,
    title: "Sustainable Acoustic Environments",
    description: "Leveraging technology for noise mapping and sustainable urban acoustic planning.",
  },
  {
    icon: "waves" as const,
    title: "Ultrasonics & Vibration",
    description: "Exploring the intersection of advanced ultrasonic techniques and machine learning.",
  },
];

export default function About() {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 md:px-8 md:gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Scientific Context
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            About the <br />
            Conference
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24"></div>
          <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
            IISA 2026 explores the transformative role of Artificial Intelligence in advancing acoustical science with a strong focus on inclusion and societal impact. The symposium brings together researchers, engineers, healthcare professionals, and industry leaders to share knowledge, innovations, and real-world applications in acoustics.
          </p>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            The conference aims to promote interdisciplinary collaboration and develop accessible, inclusive, and sustainable acoustic solutions for global communities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:col-span-7 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div key={area.title} className={`editorial-shadow rounded-lg bg-white p-5 md:p-8 ${index % 2 === 1 ? "md:mt-12" : ""}`}>
              <Icon className="mb-3 size-8 text-[#00375e] md:mb-4 md:size-10" name={area.icon} />
              <h3 className="font-headline mb-3 text-xl text-[#00375e]">{area.title}</h3>
              <p className="text-sm text-on-surface-variant">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
