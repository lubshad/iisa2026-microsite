"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import lajishImg from "@/assets/images/lajish.jpg";
import sunilkumarImg from "@/assets/images/sunilkumar.jpg";

const leadership = [
  {
    name: "Dr. Lajish V L",
    institution: "University of Calicut, Kerala",
    role: "General Chair",
    image: lajishImg,
  },
  {
    name: "Dr. Sunilkumar R K",
    institution: "Kannur University, Kerala",
    role: "General Co-Chair",
    image: sunilkumarImg,
  },
];

const technicalCommittee = [
  {
    title: "Chairs",
    members: [
      { name: "Dr. Ajish K. Abraham", role: "Chair" },
      { name: "Dr. Toru Otsuru", role: "Chair" },
    ],
  },
  {
    title: "Co-Chairs",
    members: [
      { name: "Dr. B. Chakraborty", role: "Co-Chair" },
      { name: "Dr. Jee Woong Choi", role: "Co-Chair" },
    ],
  },
];

export default function CommitteeLeadership() {
  return (
    <div className="mb-16 space-y-10 md:mb-32 md:space-y-16">
      {/* Conference Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-end overflow-hidden bg-[#00375e] p-8 text-white md:col-span-2 md:min-h-[400px] md:p-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-30">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0,72 C80,72 80,32 160,32 C240,32 240,98 320,98 C400,98 400,26 480,26 C560,26 560,90 640,90 C720,90 720,40 800,40 C880,40 880,100 960,100 C1040,100 1040,34 1120,34 C1160,34 1180,48 1200,48" fill="none" stroke="#9fcafc" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-[#ffe08d] text-sm font-bold tracking-[0.2em] mb-4 uppercase">
            LEADERSHIP
          </span>
          <h3 className="font-headline mb-4 text-2xl text-white md:mb-6 md:text-4xl">Conference Leadership</h3>
          <p className="opacity-80 font-light leading-loose text-lg text-white">
            Orchestrating the convergence of global signal processing research and
            Malabar&apos;s intellectual heritage.
          </p>
        </motion.div>

        {leadership.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden bg-[#f3f3f4] p-1"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00375e] via-[#9fcafc] to-[#745b04]" />
            <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-slate-200">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
            <div className="px-4 pb-4 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-headline text-xl text-[#00375e] font-bold">
                  {leader.name}
                </h4>
                <p className="text-[#42474f] text-sm mt-2">
                  {leader.institution}
                </p>
              </div>
              <p className="text-[#745b04] font-bold text-xs uppercase tracking-widest mt-6">
                {leader.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Committee */}
      <div>
        <h3 className="font-headline mb-6 border-b border-[#c2c7d0]/30 pb-4 text-2xl text-[#00375e] md:mb-8 md:text-3xl">
          Technical Committee
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {technicalCommittee.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg bg-[#f3f3f4] p-5 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00375e] via-[#9fcafc] to-[#745b04]" />
              <h4 className="text-[#745b04] font-bold text-sm uppercase tracking-widest mb-6">
                {group.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.members.map((member) => (
                  <div key={member.name}>
                    <p className="font-headline text-lg font-bold text-[#1a1c1c]">
                      {member.name}
                    </p>
                    <p className="text-[#42474f] text-sm italic">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
