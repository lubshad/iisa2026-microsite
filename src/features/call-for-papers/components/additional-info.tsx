"use client";

import { motion } from "framer-motion";
import Icon from "@/components/icon";

export default function AdditionalInfo() {
  const sections = [
    {
      title: "Publication",
      icon: "article" as const,
      items: [
        "Journal of the Acoustical Society of India",
        "Springer Lecture Notes / Proceedings",
      ],
    },
    {
      title: "Presentation",
      icon: "microphone" as const,
      items: [
        "Structured & Regular technical sessions",
        "Sessions chaired by national & international experts",
        "Foreign acousticians are welcome to organize structured sessions",
      ],
    },
    {
      title: "Language",
      icon: "globe" as const,
      items: ["The official language of the conference is English"],
    },
    {
      title: "Important Notes",
      icon: "info" as const,
      items: [
        "Placement in structured sessions on request",
        "Communication through official website only",
        "EasyChair is the official abstract and paper submission platform",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#00375e] py-12 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
            Additional Information
          </p>
          <h2 className="font-headline mb-6 text-3xl leading-tight text-white md:mb-8 md:text-5xl">
            What to Expect
          </h2>
          <div className="h-1 w-16 bg-[#745b04] md:w-24" />
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9fcafc] via-[#ffe08d] to-[#745b04]" />
              <div className="mb-6 flex size-12 items-center justify-center bg-[#745b04]/30 text-[#ffe08d] transition-colors group-hover:bg-[#745b04]">
                <Icon className="size-6" name={section.icon} />
              </div>
              <h3 className="font-headline mb-5 text-xl text-[#ffe08d]">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                    <Icon className="size-4 mt-0.5 shrink-0 text-[#745b04]" name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 overflow-hidden rounded bg-white/5 px-2 py-2">
                <svg className="h-4 w-full" preserveAspectRatio="none" viewBox="0 0 200 24">
                  <path d="M0,12 C10,12 10,5 20,5 C30,5 30,19 40,19 C50,19 50,8 60,8 C70,8 70,16 80,16 C90,16 90,4 100,4 C110,4 110,20 120,20 C130,20 130,9 140,9 C150,9 150,15 160,15 C170,15 170,7 180,7 C190,7 190,12 200,12" fill="none" stroke="#9fcafc" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl border border-white/10 bg-white/5 p-6 text-center md:p-12"
        >
          <p className="font-body text-xl italic leading-relaxed text-white/90">
            &quot;Authors are encouraged to contribute to IISA 2026 and be part of
            a global platform that promotes innovation, collaboration, and impactful
            research in acoustics and AI-driven technologies.&quot;
          </p>
          <div className="mt-8 flex justify-center items-center gap-6">
            <div className="w-16 h-0.5 bg-white/20" />
            <Icon name="star" className="w-5 h-5 text-[#ffe08d]" />
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
