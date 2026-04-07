"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";

export default function VenueHero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed campus photo */}
      <Image
        alt="University of Calicut Campus"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/university of calicut.png"
      />

      {/* Gradient: strong at bottom-left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00375e]/90 via-[#00375e]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00375e]/80 via-transparent to-transparent" />

      {/* Content anchored to bottom-left */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-8 pb-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-label mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffe08d]">
              Conference Venue
            </p>
            <h1 className="font-headline mb-3 text-5xl font-bold leading-tight text-white md:text-7xl">
              University of Calicut
            </h1>
            <p className="font-headline mb-8 text-2xl font-light text-white/70 md:text-3xl">
              Thenhipalam, Malappuram, Kerala
            </p>

            {/* Gold accent rule */}
            <div className="mb-8 h-1 w-24 bg-[#745b04]" />

            {/* Key facts row */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-white">
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="verified" />
                <span className="text-sm font-medium">NAAC &lsquo;A+&rsquo; Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="school" />
                <span className="text-sm font-medium">Est. 1968</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="flight" />
                <span className="text-sm font-medium">11 km from Calicut Airport (CCJ)</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-[#ffe08d]" name="map" />
                <span className="text-sm font-medium">NH 66 direct access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
