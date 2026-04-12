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
  "Prof. Jean-Dominique Polack – President, SFA",
  "Prof. Gary Gottlieb – President, AES",
  "Dr. Ajit Kumar Mohanty – DAE",
  "Prof. Rangan Banerjee – Director, IIT Delhi",
  "Dr. Rajiv Bahl – DG, ICMR",
  "Sh. Amandeep Garg – Chairman, CPCB",
  "Sh. V. Narayanan – Chairman, ISRO",
  "Prof. Bertrand Dubus – France",
  "Prof. T. G. Sitharam – Chairman, AICTE",
  "Dr. Woon Siong Gan – Singapore",
  "Sh. Vivek Bhasin – BARC, Mumbai",
  "Prof. Venugopal Achanta – Director, CSIR-NPL, New Delhi",
  "Prof. Manoranjan Parida – Director, CSIR-CRRI, New Delhi",
  "Dr. O. R. Nandagopan – Director, DIA-RCoE, IIT Madras",
  "Prof. Nitin Seth – Director, ICFPAR/CEFIPRA",
  "Prof. P. V. S. Rao – Ex-TIFR",
  "Prof. S. S. Agrawal – ASI Past-President and DG, K-IIT GCs, Gurugram",
  "Dr. Yasser Rafat – General Secretary, ASI and Professor, AMU Aligarh",
  "Dr. Atul Kumar – Treasurer, ASI and Faculty, KIIT Gurgaon",
];

export default function AdvisoryCommittee() {
  return (
    <section className="mb-16 md:mb-32">
      <h3 className="font-headline mb-6 border-b border-[#c2c7d0]/30 pb-4 text-2xl text-[#00375e] md:mb-8 md:text-3xl">
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
            className="group flex items-center gap-3 rounded-lg border border-[#00375e]/8 bg-[#f9f9f9] px-4 py-4"
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
