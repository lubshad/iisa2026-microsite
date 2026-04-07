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
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#00375e] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe08d]">
            Additional Information
          </p>
          <h2 className="font-headline mb-8 text-5xl leading-tight text-white">
            What to Expect
          </h2>
          <div className="h-1 w-24 bg-[#745b04]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 transition-all hover:bg-white/10"
            >
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-white/10 bg-white/5 p-12 text-center max-w-4xl mx-auto"
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
