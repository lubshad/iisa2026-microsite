import Link from "next/link";
import { routes } from "@/navigation/routes";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#F3F3F4] md:mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12 md:px-8 md:py-16">
        <div>
          <div className="mb-7 font-serif text-[15px] text-[#1E4E79]">IISA 2026</div>
          <p className="mb-8 max-w-sm text-[13px] leading-relaxed text-[#5f6670]">
            Join IISA 2026 and be part of a global effort to shape the future of acoustics through innovation, collaboration, and impact.
          </p>
          <p className="text-[11px] text-[#5f6670]">© 2026 IISA. University of Calicut, Kerala, India.</p>
        </div>
        <div>
          <h2 className="mb-6 text-[13px] font-bold text-[#1E4E79]">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={routes.registration}
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={routes.callForPapers}
              >
                Call for Papers
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={`${routes.registration}/#sponsorship`}
              >
                Sponsorship
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={`${routes.registration}/#exhibition`}
              >
                Exhibition
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={routes.committee}
              >
                Committees
              </Link>
            </li>
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={routes.venue}
              >
                Venue
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-[13px] font-bold text-[#1E4E79]">Contact</h2>
          <div className="space-y-2 text-[13px] text-[#5f6670]">
            <p>Department of Electronics</p>
            <p>University of Calicut</p>
            <p>Kerala, 673635, India</p>
            <p className="pt-4 font-semibold">iisa2026@uoc.ac.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
