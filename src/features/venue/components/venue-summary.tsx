"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

export default function VenueSummary() {
  const reasons = [
    {
      title: "Peaceful Campus",
      desc: "Ideal for academic conferences, fostering meaningful discussions and intellectual curiosity.",
    },
    {
      title: "Strong Ecosystem",
      desc: "An active research and academic environment that supports innovation and collaboration.",
    },
    {
      title: "Easy Accessibility",
      desc: "Conveniently located near international airports and railway stations for easy delegate travel.",
    },
    {
      title: "Culturally Rich City",
      desc: "Located in Kozhikode, a historically significant and vibrant city known for its beauty and hospitality.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#00375e] py-12 text-white md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-20"
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
            The Case for Calicut
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-white md:mb-8 md:text-5xl">
            Why This Venue?
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-[#745b04] md:w-24" />
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:mb-24 md:grid-cols-2 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex gap-5 md:gap-8"
            >
              <div className="flex-shrink-0 w-20 h-20 border border-[#745b04]/30 flex items-center justify-center transition-all group-hover:bg-[#745b04] group-hover:border-[#745b04]">
                <span className="text-3xl font-headline font-bold text-[#ffe08d] group-hover:text-white">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-[#ffe08d]">
                  {reason.title}
                </h3>
                <p className="text-lg opacity-80 leading-relaxed font-body">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-12 border border-white/10 bg-white/5 p-8 text-center md:mt-32 lg:p-20"
        >
          <p className="text-xl md:text-2xl font-body leading-relaxed max-w-4xl mx-auto italic opacity-90">
            &quot;The University of Calicut provides the perfect setting for IISA
            2026, fostering meaningful discussions, collaboration, and
            innovation in acoustics and AI-driven technologies.&quot;
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 md:mt-16">
            <div className="w-16 h-0.5 bg-white/20" />
            <Icon name="star" className="w-6 h-6 text-[#ffe08d]" />
            <div className="w-16 h-0.5 bg-white/20" />
          </div>
        </motion.div>
      </div>

      {/* Background pattern */}
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
    </section>
  );
}
