"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

const details = [
  {
    icon: "verified",
    title: "NAAC 'A+' Accredited",
    desc: "An institution of distinction recognized for its quality and research performance.",
  },
  {
    icon: "school",
    title: "Academic Depth",
    desc: "Wide range of postgraduate and research departments spanning multiple disciplines.",
  },
  {
    icon: "science",
    title: "Science & Technology",
    desc: "Strong focus on science, technology, and advanced interdisciplinary research.",
  },
  {
    icon: "psychology",
    title: "Emerging Areas",
    desc: "Active work in Artificial Intelligence, Data Science, and Computational Sciences.",
  },
] as const;

export default function UniversityInfo() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f4] py-12 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
            Institution Profile
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Why University of Calicut?
          </h2>
          <div className="mb-6 h-1 w-16 bg-[#745b04] md:mb-8 md:w-24" />
          <p className="max-w-2xl font-body text-lg leading-relaxed text-[#42474f]">
            The university provides advanced laboratories, research facilities, and a vibrant
            academic atmosphere that supports innovation and international collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 border border-[#c2c7d0]/20 md:grid-cols-2 lg:grid-cols-4">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="group border-b border-[#c2c7d0]/20 border-t-4 border-t-[#745b04] bg-white p-6 transition-colors duration-500 hover:bg-[#00375e] md:border-b-0 md:border-r md:p-10"
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-6 inline-block bg-[#00375e]/10 p-4 transition-colors group-hover:bg-white/10">
                <Icon
                  className="size-10 text-[#00375e] transition-colors group-hover:text-white"
                  name={detail.icon}
                />
              </div>
              <h3 className="font-headline mb-4 text-xl text-[#00375e] transition-colors group-hover:text-white">
                {detail.title}
              </h3>
              <p className="font-body font-light leading-relaxed text-[#42474f] transition-colors group-hover:text-white/80">
                {detail.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
