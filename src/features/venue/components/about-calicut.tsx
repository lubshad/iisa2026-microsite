"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/icon";

export default function AboutCalicut() {
  const features = [
    "Historic importance as the landing place of Vasco da Gama in 1498 (Kappad Beach)",
    "Blend of tradition and modern development",
    "Famous for beaches, markets, and cuisine",
    "Warm and welcoming environment for visitors",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f3f4] py-12 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 px-4 md:gap-20 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Experience Kozhikode
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            About Calicut (Kozhikode)
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-10 md:w-24" />
          <p className="font-body text-lg text-[#42474f] leading-relaxed mb-6">
            Calicut is a historic coastal city in Kerala known for its cultural
            heritage, academic significance, and scenic beauty. It has stood as
            a gateway to the East for centuries, blending tradition with modern
            development.
          </p>
          <ul className="mb-10 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-[#42474f]">
                <Icon className="mt-1.5 size-4 shrink-0 text-[#745b04]" name="check" />
                <span className="text-lg leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="border-l-4 border-[#745b04] bg-white p-5 shadow-sm md:p-8">
            <h4 className="text-xl font-headline font-bold text-[#00375e] mb-3 italic">
              City of Spices
            </h4>
            <p className="text-[#42474f] max-w-sm leading-relaxed">
              Discover why travelers have been flocking to this coastal gem since
              the medieval era.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group h-full"
        >
          <div className="aspect-[4/5] overflow-hidden shadow-2xl relative">
            <Image
              src="/kozhikode_beach_culture_1775544870042.jpg"
              alt="Kozhikode Beach Sunset"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00375e]/70 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-4xl font-headline font-bold mb-2">Kozhikode Beach</h4>
              <p className="opacity-80 font-label tracking-widest uppercase text-xs">Where tradition meets the sea</p>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 border-r-8 border-b-8 border-[#745b04]/20 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
