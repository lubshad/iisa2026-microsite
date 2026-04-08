"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import { importantDates } from "@/features/call-for-papers/data";

export default function ImportantDates() {
  return (
    <section className="bg-[#f3f3f4] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#745b04] md:mb-4 md:text-xs">
            Key Milestones
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-[#00375e] md:mb-8 md:text-5xl">
            Important Dates
          </h2>
          <div className="h-1 w-16 bg-[#745b04] md:w-24" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {importantDates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-5 border-t-4 border-[#745b04] editorial-shadow transition-all hover:-translate-y-1 md:p-8"
            >
              <div className="mb-6 flex size-12 items-center justify-center bg-[#745b04]/10 text-[#745b04] transition-colors group-hover:bg-[#745b04] group-hover:text-white">
                <Icon className="size-6" name="calendar" />
              </div>
              <span className="font-label mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
                {item.date}
              </span>
              <h3 className="font-headline mb-3 text-xl text-[#00375e]">{item.title}</h3>
              <p className="font-body text-sm leading-relaxed text-[#42474f]">
                {item.description}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#745b04] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
