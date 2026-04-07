"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Spice Route Legacy",
    desc: "Kozhikode, the City of Spices, welcomed Vasco da Gama in 1498. Explore the historic Kappad beach and the vibrant silk street.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7IQkyxKPWHfyeys2qrmZYtBw4XwaIHwUZyYaMy5Y5iAS3vffKH5sNW1DJnEevQHFFMrrod82h20_I6y_QKRrrhaWKbCx7YCcSEHVRbed5dkuIgN4XC7P6HgjGmi6YPl5_x4w3uLvqq1K28P8UG-zj76YxSy-FqrHTZbhMjqRR8ge_8e1yeQrcIHRbPYNXTbF8BnXx70oAJYqB_IedN6p6JYvpc2wsXObRgzeIEk-aToC1qjmqZQYZAwf8cB2rhc7MokUNuFs3NFvO",
  },
  {
    title: "Theyyam Rituals",
    desc: "Witness the divine dance of North Malabar. Theyyam is an ancient folk ritual art form that blends dance, mime, and music.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzWEl22r446i1dEYss2iZ-TKd41CF3k2yTgYz4icH-GfBg1tjVp_Y5NM7vwVbc6EvPATAtDuYBE7-1X0TsvL4sJV-vqQ4sSgcwyO5p6OkSUYaKY3cG3xVBPNjAeEm1syQNkf5A-xbTEzBQF6m7qT_nmAmKpJ7qpzghs4zKYUQBSSnyyWCCBexkkXd6-TRMjC2hXt7F_XDnLzPgK4bz7k8JcjQmvrmxjvqbaDEhsIkRjMD2KZtPqx36VaH_vQ5YrdGKYF9a7kEnYWNy",
  },
  {
    title: "Coastal Serenity",
    desc: "From the Muzhappilangad drive-in beach to the tranquil backwaters of Valapattanam, experience the soul of Kerala's coast.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_qYoPWnP2FSKKshmxuk8ibAaqXNzWfgjFoVK5LrE2Y9NYicF1VBzQvs87ITM_O1HIODnpdTST3v90tscUpa4nRdo6-7-jSihyUd-bfSRT60PlXxq7nqLnoi_rpLuUwpEg_HkMB2wHpYQ5dU_ggECtPpPTDNM6EqNPySI-x39EtAiwatnGtixDUXjgsCJiyZ-6IAnndLsde3xqlgoh9qEIfZ7HkrPleSttql3sLuxUJfg11jWU4So_kn7TH3HM2g0tLlBV5vfLyITE",
  },
];

export default function ExperienceMalabar() {
  return (
    <section id="culture" className="mb-20">
      <div className="text-center mb-16">
        <span className="text-[#745b04] font-bold tracking-[0.3em] uppercase text-xs">
          Cultural Heritage
        </span>
        <h2 className="font-headline text-5xl font-bold text-[#00375e] mt-4">
          Experience Malabar
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#c2c7d0]/20">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 border-b md:border-b-0 md:border-r border-[#c2c7d0]/20 group hover:bg-[#1e4e79] transition-all duration-500"
          >
            <div className="relative w-full h-48 mb-8 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
            <h3 className="font-headline text-2xl mb-4 text-[#1a1c1c] group-hover:text-white transition-colors">
              {exp.title}
            </h3>
            <p className="text-[#42474f] group-hover:text-white/80 leading-relaxed font-light transition-colors">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
