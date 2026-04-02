import Icon from "@/components/icon";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F3F3F4]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="space-y-6">
          <div className="font-serif text-lg font-bold uppercase tracking-widest text-[#1E4E79]">IISA 2026</div>
          <p className="text-sm leading-relaxed text-slate-600">
            Advancing the frontiers of acoustics through collaborative innovation and academic excellence.
          </p>
          <div className="flex gap-4">
            <Icon className="size-6 cursor-pointer text-[#00375e] hover:opacity-70" name="share" />
            <Icon className="size-6 cursor-pointer text-[#00375e] hover:opacity-70" name="mail" />
          </div>
        </div>
        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#00375e]">Quick Links</h5>
          <ul className="space-y-4">
            <li>
              <a className="text-sm text-slate-600 underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Guidelines
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Visa Info
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Contact Email
              </a>
            </li>
            <li>
              <a className="text-sm text-slate-600 underline-offset-4 hover:text-[#1E4E79] hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#00375e]">Contact</h5>
          <p className="text-sm leading-loose text-slate-600">
            Organizing Secretariat
            <br />
            University of Calicut,
            <br />
            Thenhipalam, Kerala 673635
            <br />
            Email: info@iisa2026.org
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#00375e]">Newsletter</h5>
          <p className="mb-4 text-xs text-slate-500">Stay updated with symposium deadlines and announcements.</p>
          <div className="flex border-b border-[rgba(114,119,127,0.3)] py-2">
            <input className="w-full border-none bg-transparent text-sm focus:ring-0" placeholder="Your Email" type="email" />
            <button className="text-[#745b04] transition-transform hover:translate-x-1">
              <Icon className="size-5" name="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-[rgba(114,119,127,0.1)] px-8 py-8 text-center">
        <p className="text-xs text-slate-500">© 2026 IISA. University of Calicut, Kerala, India.</p>
      </div>
    </footer>
  );
}
