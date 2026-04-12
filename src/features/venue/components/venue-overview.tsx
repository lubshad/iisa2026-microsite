"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import universityImg from "@/assets/images/university-of-calicut.jpg";

export default function VenueOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Academic Hub
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            About the Venue
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />

          <p className="font-body mb-6 text-lg leading-relaxed text-[#42474f]">
            IISA 2026 will be held at the University of Calicut, one of Kerala&apos;s premier
            higher education institutions. Established in 1968, it is recognised for academic
            excellence, inclusive education, and impactful research.
          </p>
          <p className="font-body mb-8 text-lg leading-relaxed text-[#42474f] md:mb-12">
            Located at Thenhipalam in Malappuram district, the campus offers a serene academic
            setting with modern infrastructure and active national and international collaborations.
          </p>
          <div className="rounded-lg border border-[#00375e]/8 bg-[#f9f9f9] p-5 md:p-6">
            <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:text-xs">
              Venue Context
            </p>
            <p className="font-body leading-relaxed text-[#42474f]">
              The brochure highlights the university&apos;s strength across science, technology,
              humanities, social sciences, and interdisciplinary studies, with growing work in
              Artificial Intelligence, Data Science, and computational sciences.
            </p>
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
              src={universityImg}
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
