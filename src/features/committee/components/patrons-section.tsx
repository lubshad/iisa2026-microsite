"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const patrons = [
  {
    name: "Prof. P. Raveendran",
    role: "Vice-Chancellor",
    institution: "University of Calicut, Kerala",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCjmNtj9HiHdsjNF-0pHwrka5OlkpqbbO6S5c2gTbHAnTxRdhb4DBEDENI4E1HDixAAjb9Lnu5lRRCEOHf5GU8UIsGS6OU7EzHQSpLuymGTT9xdJMdyGgECN-1McPCWPbMVayxx3qhQd4niDwwm17iC6B5dAJUWOoxg33Qm5uKLRN_7wN2U5Rnv44Hdjyj23IdyhYLrptvtUBBPRjovZrkt4-XxtV5tzY3P3C8JkYlingRzM7duDEJBQRTt_d7RUi1Y7oXjYfJ56Aj",
  },
  {
    name: "Prof. K.K. Saju",
    role: "Vice-Chancellor",
    institution: "Kannur University, Kerala",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7aJZaofTisWpCCtn3-e8xZlUElw-EORLz73yrCaXocm_I7bmBMq3yY5SEB89Xt11uDtDSqJn-EcyenjfJrXLyMDF8dSQxFfWkKBqWCxh6T__Eui317oPP-Yj57iA6bQ3Q_cfFkowQmiWO4LDeDR5ywGXujRTtrr2BU5fJlny875s8l_DyRM46WISpgAzOKQCDDJ6NYZDBrHKaIrHFcEb_ohPQ6nVvFTcwnFg91i8tJ6ktXJHi1h-eh4DXJCTaldb154rRTmGsrPOr",
  },
];

export default function PatronsSection() {
  return (
    <section id="committee" className="mb-32">
      <div className="flex flex-col md:flex-row gap-8 items-baseline mb-16">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-headline text-5xl font-bold text-[#00375e] tracking-tight max-w-xl"
        >
          IISA 2026 Committees
        </motion.h2>
        <div className="h-px bg-outline-variant flex-grow opacity-30"></div>
        <span className="font-label text-sm tracking-widest text-[#745b04] font-bold">
          ESTEEMED PANEL
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
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
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
