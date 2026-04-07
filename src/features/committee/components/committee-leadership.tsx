"use client";

import { motion } from "framer-motion";

const leadership = [
  {
    name: "Dr. Lajish V L",
    institution: "University of Calicut, Kerala",
    role: "General Chair",
  },
  {
    name: "Dr. Sunilkumar R K",
    institution: "Kannur University, Kerala",
    role: "General Co-Chair",
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
    <div className="space-y-16 mb-32">
      {/* Conference Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-[#00375e] p-12 text-white flex flex-col justify-end min-h-[400px]"
        >
          <span className="text-[#ffe08d] text-sm font-bold tracking-[0.2em] mb-4 uppercase">
            LEADERSHIP
          </span>
          <h3 className="font-headline text-4xl mb-6 text-white">Conference Leadership</h3>
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
            className="bg-[#e8e8e8] p-8 flex flex-col justify-between hover:bg-[#e2e2e2] transition-colors"
          >
            <div>
              <h5 className="font-headline text-xl text-[#00375e] font-bold">
                {leader.name}
              </h5>
              <p className="text-[#42474f] text-sm mt-2">
                {leader.institution}
              </p>
            </div>
            <p className="text-[#745b04] font-bold text-xs uppercase tracking-widest mt-8">
              {leader.role}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Technical Committee */}
      <div>
        <h3 className="font-headline text-3xl text-[#00375e] mb-8 border-b border-[#c2c7d0]/30 pb-4">
          Technical Committee
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalCommittee.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f3f3f4] p-8 rounded-lg"
            >
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
