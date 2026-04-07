import Link from "next/link";
import Icon from "@/components/icon";
import { routes } from "@/navigation/routes";

export default function KeralaCultureCta() {
  return (
    <section className="bg-[#00375e] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-label mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe08d]">
              Join Us in Kerala
            </p>
            <h2 className="font-headline mb-6 text-5xl leading-tight text-white">
              Experience It First-Hand
            </h2>
            <div className="mb-8 h-1 w-24 bg-[#745b04]" />
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
              IISA 2026 takes place at the University of Calicut — in the heart of this extraordinary
              region. Come for the science, stay for the culture. We look forward to hosting you in
              God&apos;s Own Country.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="kasavu-gold-gradient rounded-md px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
                href={routes.registration}
              >
                Register Now
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                href={routes.venue}
              >
                Explore the Venue
                <Icon className="size-5" name="arrow-right" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Days of Cultural Events", value: "4" },
              { label: "Cultural Performances", value: "12+" },
              { label: "Heritage Sites Nearby", value: "20+" },
              { label: "Culinary Experiences", value: "Endless" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <p className="font-headline mb-2 text-4xl font-bold text-[#ffe08d]">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
