"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const patrons = [
  {
    name: "Prof. P. Raveendran",
    role: "Vice-Chancellor",
    institution: "University of Calicut, Kerala",
    image: "/portrait_images/Prof. P. Raveendran.jpg",
  },
  {
    name: "Prof. K.K. Saju",
    role: "Vice-Chancellor",
    institution: "Kannur University, Kerala",
    image: "/portrait_images/Prof. K.K. Saju.jpg",
  },
];

export default function PatronsSection() {
  return (
    <section id="committee" className="mb-16 md:mb-32">
      <div className="mb-10 flex flex-col items-baseline gap-8 md:mb-16 md:flex-row">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline max-w-xl text-3xl font-bold tracking-tight text-[#00375e] md:text-5xl"
        >
          IISA 2026 Committees
        </motion.h2>
        <div className="h-px bg-outline-variant flex-grow opacity-30"></div>
        <span className="font-label text-sm tracking-widest text-[#745b04] font-bold">
          ESTEEMED PANEL
        </span>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h3 className="font-headline text-2xl text-[#00375e] mb-4">Chief Patrons</h3>
          <p className="text-[#42474f] leading-relaxed">
            Guiding the symposium with academic leadership and institutional vision.
          </p>
        </motion.div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {patrons.map((patron, index) => (
            <motion.div
              key={patron.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f3f3f4] p-1 group"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-slate-200 dark:bg-slate-800">
                <Image
                  src={patron.image}
                  alt={patron.name}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              <div className="px-4 pb-4">
                <h4 className="font-headline text-lg font-bold text-[#1a1c1c]">
                  {patron.name}
                </h4>
                <p className="text-[#745b04] text-sm font-medium mb-2 uppercase tracking-wide">
                  {patron.role}
                </p>
                <p className="text-[#42474f] text-sm italic">
                  {patron.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
