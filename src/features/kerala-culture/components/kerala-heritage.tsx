import Icon from "@/components/icon";

const heritage = [
  {
    icon: "bank" as const,
    title: "Tali Temple",
    description:
      "A 14th-century Shiva temple in Kozhikode with exquisite Kerala-style wood carvings and copper-tiled roofs — a masterpiece of the Kēraḷa school of temple architecture.",
  },
  {
    icon: "building" as const,
    title: "Kozhikode Beach Fort",
    description:
      "The ruins of the Zamorin's sea fort recall Calicut's era as the most important trading port on the Malabar Coast — the destination of Vasco da Gama's historic voyage.",
  },
  {
    icon: "foundation" as const,
    title: "Pazhassiraja Museum",
    description:
      "Kerala's finest repository of ancient bronzes, antique coins, paintings, and megalithic relics — tracing the region's continuous civilizational heritage.",
  },
  {
    icon: "school" as const,
    title: "Zamorin's Palace",
    description:
      "The historic residence of the Zamorin dynasty that ruled Calicut for centuries and welcomed Arab traders, Chinese delegations, and Portuguese explorers alike.",
  },
  {
    icon: "globe" as const,
    title: "Spice Markets",
    description:
      "Kozhikode's spice trade that changed world history — still alive in the fragrant markets of SM Street (Mittai Theruvu), where every stall tells centuries of commerce.",
  },
  {
    icon: "article" as const,
    title: "Thunchath Ezhuthachan Heritage",
    description:
      "The father of the Malayalam language, Ezhuthachan, was born in Tirur near Kozhikode. The region is the birthplace of the literary tradition that gave Malayalam its modern form.",
  },
];

export default function KeralaHeritage() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            History &amp; Heritage
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Where History Lives
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Kozhikode was once the most powerful city on the Indian Ocean trade network. Its temples,
            forts, and markets carry the weight of a history that shaped the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {heritage.map((item, index) => (
            <div
              key={item.title}
              className={`editorial-shadow rounded-lg bg-white p-5 md:p-8 ${index % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <Icon className="mb-4 size-10 text-[#00375e]" name={item.icon} />
              <h3 className="font-headline mb-3 text-xl text-[#00375e]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
