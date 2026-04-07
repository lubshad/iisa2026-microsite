"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Acres of green campus" },
  { value: "50+", label: "Departments & centres" },
  { value: "15,000+", label: "Students enrolled" },
  { value: "1968", label: "Year of establishment" },
];

export default function VenueOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Academic Hub
          </p>
          <h2 className="font-headline mb-8 text-5xl leading-tight text-[#00375e]">
            About the Venue
          </h2>
          <div className="mb-8 h-1 w-24 bg-[#745b04]" />

          <p className="font-body mb-6 text-lg leading-relaxed text-[#42474f]">
            IISA 2026 will be held at the University of Calicut, one of the premier higher
            education institutions in Kerala, India. Established in 1968, the university is known
            for its strong academic environment, research excellence, and modern infrastructure.
          </p>
          <p className="font-body mb-12 text-lg leading-relaxed text-[#42474f]">
            The sprawling green campus at Thenhipalam provides a serene and inspiring setting —
            ideal for academic exchange, international collaboration, and world-class conferences.
          </p>

          {/* Campus stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-[#745b04] pl-5">
                <p className="font-headline text-3xl font-bold text-[#00375e]">{stat.value}</p>
                <p className="font-label mt-1 text-xs uppercase tracking-widest text-[#72777f]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actual campus photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <Image
              alt="University of Calicut campus aerial view"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/university_calicut_campus_aerial_1775544818339.png"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#00375e]/80 to-transparent px-8 py-6">
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
                University of Calicut
              </p>
              <p className="font-body text-sm text-white/80">
                Thenhipalam, Malappuram, Kerala — Aerial View
              </p>
            </div>
          </div>
          {/* Decorative border accent */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border-2 border-[#745b04]/20" />
        </motion.div>
      </div>
    </section>
  );
}
