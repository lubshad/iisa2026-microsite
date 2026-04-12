"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";
import { importantDates } from "@/features/call-for-papers/data";

export default function ImportantDates() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f4] py-12 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-50">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,82 C80,82 80,32 160,32 C240,32 240,98 320,98 C400,98 400,18 480,18 C560,18 560,88 640,88 C720,88 720,42 800,42 C880,42 880,102 960,102 C1040,102 1040,34 1120,34 C1160,34 1180,46 1200,46" fill="none" stroke="#9fcafc" strokeWidth="2" />
        </svg>
      </div>
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
              className="group relative overflow-hidden border-t-4 border-[#745b04] bg-white p-5 editorial-shadow transition-all hover:-translate-y-1 md:p-8"
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
              <div className="mt-5 overflow-hidden rounded bg-[#f9f9f9] px-2 py-2">
                <svg className="h-4 w-full" preserveAspectRatio="none" viewBox="0 0 200 24">
                  <path d="M0,12 C10,12 10,5 20,5 C30,5 30,19 40,19 C50,19 50,8 60,8 C70,8 70,16 80,16 C90,16 90,4 100,4 C110,4 110,20 120,20 C130,20 130,9 140,9 C150,9 150,15 160,15 C170,15 170,7 180,7 C190,7 190,12 200,12" fill="none" stroke="#1e4e79" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#745b04] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
