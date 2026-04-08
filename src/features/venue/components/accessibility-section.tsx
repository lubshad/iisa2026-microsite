"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";

const accessibilityItems = [
  {
    icon: "flight" as const,
    title: "Calicut International Airport",
    distance: "~11 km away",
    desc: "Direct international connections via CCJ. Domestic flights from all major Indian cities.",
  },
  {
    icon: "train" as const,
    title: "Kozhikode Railway Station",
    distance: "~24 km away",
    desc: "Connects to Mumbai, Chennai, Bangalore, Delhi, and all major regional hubs.",
  },
  {
    icon: "map" as const,
    title: "NH 66 — Direct Road Access",
    distance: "At the University Gate",
    desc: "Excellent highway connectivity. Kochi is ~200 km south; Mangaluru ~200 km north.",
  },
  {
    icon: "bus" as const,
    title: "KSRTC & City Buses",
    distance: "Regular service",
    desc: "State and city bus services connect the campus to Kozhikode city and surrounding towns.",
  },
];

export default function AccessibilitySection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-start gap-10 px-4 md:gap-20 md:px-8 lg:grid-cols-2">
        {/* Left: transit items */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Getting Here
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Accessibility
          </h2>
          <div className="mb-8 h-1 w-16 bg-[#745b04] md:mb-12 md:w-24" />

          <div className="space-y-6 md:space-y-10">
            {accessibilityItems.map((item) => (
              <div key={item.title} className="group flex gap-6">
                <div className="flex size-14 flex-shrink-0 items-center justify-center bg-[#745b04]/10 text-[#745b04] transition-all group-hover:bg-[#745b04] group-hover:text-white">
                  <Icon className="size-6" name={item.icon} />
                </div>
                <div>
                  <h3 className="font-headline mb-1 text-xl text-[#00375e]">{item.title}</h3>
                  <p className="font-label mb-2 text-xs font-bold uppercase tracking-widest text-[#745b04]">
                    {item.distance}
                  </p>
                  <p className="font-body leading-relaxed text-[#42474f]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: actual photo of Kozhikode / campus context */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <Image
              alt="Kozhikode Beach at sunset"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/kozhikode_beach_culture_1775544870042.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00375e]/80 via-transparent to-transparent" />
            {/* Location badge */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
              <Icon className="size-4 text-[#00375e]" name="map" />
              <span className="font-label text-xs font-bold uppercase tracking-widest text-[#00375e]">
                Kozhikode, Kerala
              </span>
            </div>
            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-8">
              <p className="font-headline mb-1 text-2xl font-bold text-white">
                Gateway to IISA 2026
              </p>
              <p className="font-body text-sm text-white/70">
                Thenhipalam · Malappuram District · Kerala, India
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border-2 border-[#745b04]/20" />
        </motion.div>
      </div>
    </section>
  );
}
