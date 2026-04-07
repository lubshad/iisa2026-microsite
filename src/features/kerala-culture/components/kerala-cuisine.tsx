import Icon from "@/components/icon";

const dishes = [
  {
    name: "Malabar Biryani",
    description:
      "Fragrant Kaima rice layered with spiced meat, fried onions, and aromatic ghee — the iconic dish of Kozhikode that earned the city its culinary fame.",
    icon: "utensils" as const,
  },
  {
    name: "Kozhikodan Halwa",
    description:
      "A legendary confection of Calicut — dense, chewy, and perfumed with cardamom and rose water. Gifted to visitors for centuries.",
    icon: "star" as const,
  },
  {
    name: "Kerala Sadhya",
    description:
      "A celebratory vegetarian feast served on banana leaf — over 20 dishes including avial, olan, payasam, and pickle arranged in a precise traditional order.",
    icon: "utensils" as const,
  },
  {
    name: "Fish Curry & Appam",
    description:
      "Kerala's coastal bounty at its finest — tangy coconut-milk fish curry paired with lacy, fermented rice pancakes. A breakfast classic.",
    icon: "waves" as const,
  },
  {
    name: "Puttu & Kadala",
    description:
      "Steamed rice cake cylinders with coconut, served alongside spiced black chickpea curry. The quintessential Kerala morning meal.",
    icon: "utensils" as const,
  },
  {
    name: "Payasam",
    description:
      "Sweet milk-based desserts in dozens of varieties — ada, semiya, palada — served at every festival and ceremony across Kerala.",
    icon: "star" as const,
  },
];

export default function KeralaCuisine() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
              Gastronomy
            </p>
            <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
              Malabar on a Plate
            </h2>
            <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Kozhikode (Calicut) is a UNESCO Creative City of Gastronomy. Its cuisine is a
              fragrant crossroads of Arab trade routes, spice heritage, and coastal abundance —
              one of India&apos;s most distinctive regional food cultures.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {dishes.map((dish, index) => (
                <div
                  key={dish.name}
                  className={`editorial-shadow rounded-lg bg-white p-5 md:p-8 ${index % 2 === 1 ? "md:mt-12" : ""}`}
                >
                  <Icon className="mb-4 size-10 text-[#00375e]" name={dish.icon} />
                  <h3 className="font-headline mb-3 text-xl text-[#00375e]">{dish.name}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
