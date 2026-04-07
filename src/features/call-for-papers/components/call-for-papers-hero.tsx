"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";

export default function CallForPapersHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#00375e]">
      <Image
        alt="University of Calicut campus aerial view"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/university of calicut.png"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
            Call for Papers
          </p>
          <h1 className="font-headline mb-4 text-5xl font-bold leading-tight text-white md:text-7xl max-w-3xl">
            India International Symposium on Acoustics
          </h1>
          <p className="font-headline mb-10 text-2xl font-light text-white/70 md:text-3xl">
            IISA 2026
          </p>
          <div className="mb-10 h-1 w-24 bg-[#745b04]" />
          <p className="font-body mb-12 max-w-2xl text-lg leading-relaxed text-white/80">
            IISA 2026 invites researchers, academicians, industry professionals,
            and practitioners to submit original research papers in all areas of
            acoustics, ultrasonics, and vibration.
          </p>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-[#ffe08d]" name="calendar" />
              <div>
                <p className="text-xs uppercase opacity-60 text-white">Date</p>
                <p className="font-medium text-white">November 19–22, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-[#ffe08d]" name="location" />
              <div>
                <p className="text-xs uppercase opacity-60 text-white">Venue</p>
                <p className="font-medium text-white">University of Calicut, Kerala</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-[#ffe08d]" name="article" />
              <div>
                <p className="text-xs uppercase opacity-60 text-white">Format</p>
                <p className="font-medium text-white">Max 6 pages, A4, Double-blind review</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
