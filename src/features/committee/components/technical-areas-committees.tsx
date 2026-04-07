"use client";

import { motion } from "framer-motion";

const technicalAreas = [
  {
    title: "Aero, Hydro & Underwater Acoustics",
    members: ["Hiroyuki Hachiya", "Jae Soo Kim", "S. Murugan", "B. Chakraborty"],
  },
  {
    title: "Architectural & Building Acoustics",
    members: ["Akira Omoto", "Toru Otsuru", "Mahavir Singh", "S. Kandaswamy"],
  },
  {
    title: "Bioacoustics",
    members: ["Hiroshi Riquimaroux", "Rohini Balakrishnan", "G. Latha"],
  },
  {
    title: "Environmental Noise",
    members: ["Marion Burgess", "A. R. Mohanty"],
  },
  {
    title: "Instrumentation & Signal Processing",
    members: ["Shinichi Sakamoto", "N. Tandon", "Arun Kumar", "Koichi Mizutani"],
  },
  {
    title: "Musical Acoustics",
    members: ["Shankha Sanyal", "Soubhik Chakraborty"],
  },
  {
    title: "Physical Acoustics & Ultrasonics",
    members: ["Nobuyuki Endo", "Dong-Guk Paeng", "Yudhisther K Yadav", "I. Johnson"],
  },
  {
    title: "Speech",
    members: ["Kazunori Mano", "S. S. Agrawal", "Samudra Vijaya"],
  },
  {
    title: "Sound Perception",
    members: ["Tatsuya Hirahara", "Ajish K. Abraham"],
  },
  {
    title: "Transducers & Electro-acoustics",
    members: ["Mitsunori Mizumachi", "Yongrae Roh", "D. D. Ebenezer"],
  },
  {
    title: "Vibro-acoustics & Noise",
    members: ["Takashi Yano", "M. L. Munjal", "P. V. S. Ganesh Kumar"],
  },
];

export default function TechnicalAreasCommittees() {
  return (
    <section className="mb-32">
      <h3 className="font-headline text-3xl text-[#00375e] mb-12 border-b border-[#c2c7d0]/30 pb-4">
        Technical Areas Committees
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {technicalAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-headline text-lg font-bold text-[#745b04] leading-tight">
              {area.title}
            </h4>
            <div className="space-y-1">
              {area.members.map((member) => (
                <p key={member} className="text-[#42474f] text-sm">
                  {member}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
