import Link from "next/link";
import { routes } from "@/navigation/routes";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F3F3F4]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="mb-7 font-serif text-[15px] text-[#1E4E79]">IISA 2026</div>
          <p className="mb-8 max-w-sm text-[13px] leading-relaxed text-[#5f6670]">
            The International Symposium on Integrated Systems &amp; Applications is a premier venue for academic
            exchange in signal processing and artificial intelligence.
          </p>
          <p className="text-[11px] text-[#5f6670]">© 2026 IISA. University of Calicut, Kerala, India.</p>
        </div>
        <div>
          <h5 className="mb-6 text-[13px] font-bold text-[#1E4E79]">Quick Links</h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href={routes.callForPapers}
              >
                Guidelines
              </Link>
            </li>
            <li>
              <a className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Visa Info
              </a>
            </li>
            <li>
              <a
                className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline"
                href="mailto:iisa2026@uoc.ac.in"
              >
                Contact Email
              </a>
            </li>
            <li>
              <a className="text-[13px] text-[#5f6670] underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-[13px] font-bold text-[#1E4E79]">Contact</h5>
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
