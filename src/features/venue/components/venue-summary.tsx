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
    <section className="py-24 bg-[#00375e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
            The Case for Calicut
          </p>
          <h2 className="font-headline mb-8 text-5xl leading-tight text-white">
            Why This Venue?
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-[#745b04]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 group"
            >
              <div className="flex-shrink-0 w-20 h-20 border border-[#745b04]/30 flex items-center justify-center transition-all group-hover:bg-[#745b04] group-hover:border-[#745b04]">
                <span className="text-3xl font-headline font-bold text-[#ffe08d] group-hover:text-white">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 font-headline text-[#ffe08d]">
                  {reason.title}
                </h4>
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
          className="relative mt-32 p-12 lg:p-20 bg-white/5 border border-white/10 text-center"
        >
          <h3 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-[#ffe08d]">
            Closing Note
          </h3>
          <p className="text-xl md:text-2xl font-body leading-relaxed max-w-4xl mx-auto italic opacity-90">
            &quot;The University of Calicut provides the perfect setting for IISA
            2026, fostering meaningful discussions, collaboration, and
            innovation in acoustics and AI-driven technologies.&quot;
          </p>
          <div className="mt-16 flex justify-center items-center gap-6">
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
