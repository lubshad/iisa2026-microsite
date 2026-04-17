"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";
import HeroBackdrop from "@/components/hero-backdrop";
import universityImg from "@/assets/images/university-of-calicut.jpg";

export default function VenueHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-[#120f2e] md:h-[85vh] md:min-h-[750px]">
      <Image
        alt="University of Calicut Campus"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={universityImg}
      />
      <HeroBackdrop className="opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,16,40,0.58)_0%,rgba(15,16,40,0.38)_45%,rgba(15,16,40,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,16,40,0.08)_0%,rgba(15,16,40,0.32)_100%)]" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 md:px-8 md:pb-20">
          <div className="grid items-end gap-8">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="font-label mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffe08d] md:mb-5 md:text-xs">
                Conference Venue
              </p>
              <h1 className="font-headline mb-3 text-4xl font-bold leading-tight text-white md:text-7xl">
                University of Calicut
              </h1>
              <p className="font-headline mb-8 text-xl font-light text-white/70 md:text-3xl">
                Thenhipalam, Malappuram, Kerala
              </p>
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
                University of Calicut Campus, Malappuram (Dt.), Kerala - 673635, India
              </p>

              <div className="mb-8 h-1 w-24 bg-[#745b04]" />

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-white md:gap-x-10 md:gap-y-4">
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
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#745b04]" />
    </section>
  );
}
