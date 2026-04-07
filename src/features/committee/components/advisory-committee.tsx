"use client";

import { motion } from "framer-motion";

const advisoryMembers = [
  "Prof. Dorte Hammershøi – President, ICA",
  "Prof. Mahavir Singh – President, ASI",
  "Prof. Stan E. Dosso – President, ASA",
  "Dr. N. Kalaiselvi – DG, CSIR & Secretary, DSIR",
  "Prof. Sergio Lugli – President, IAV",
  "Dr. Samir V. Kamat – Chairman, DRDO",
  "Prof. Robert J. Bernhard – President, I-INCE",
  "Prof. Abhay Karandikar – Secretary, DST",
  "Prof. Dick Botteldooren – President, EAA",
  "Ms. Neena Nandan – Secretary, MoEF&CC",
  "Prof. Manell E. Zakaria – Past President, EAA",
  "Dr. M. Ravichandran – Secretary, MoES",
  "Dr. Antonino Di Bella – Secretary General, ICA",
  "Prof. R. R. Yadav – President, USI",
  "Prof. Fenghua Li – Chairman, WESPAC",
  "Prof. Ashutosh Sharma – President, INSA",
  "Prof. Xiuming Wang – President, ICU",
  "Prof. Rajesh S. Gokhale – Secretary, DBT",
  "Prof. Charlotte Clark – President, ICBEN",
  "Prof. Sushil Kumar Tomar – Vice-Chancellor, Gurugram University",
];

export default function AdvisoryCommittee() {
  return (
    <section className="mb-32">
      <h3 className="font-headline text-3xl text-[#00375e] mb-8 border-b border-[#c2c7d0]/30 pb-4">
        Advisory Committee
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
        {advisoryMembers.map((member, index) => (
          <motion.div
            key={member}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#745b04] opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="text-[#42474f] text-sm leading-relaxed">
              {member}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
