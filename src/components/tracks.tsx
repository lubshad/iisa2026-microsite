const tracks = [
  ["01", "Aero/Hydro Acoustics", "Flow-induced noise and fluid structure interactions."],
  ["02", "Architectural", "Room acoustics and building performance modeling."],
  ["03", "Bioacoustics & Biomedical", "Ultrasound imaging, animal communication, and therapeutic acoustic technology."],
  ["04", "Physical", "Wave propagation and non-linear phenomena."],
  ["05", "Musical", "Instrument design and psychoacoustics of harmony."],
  ["06", "Psychological", "Human perception and cognitive sound processing."],
  ["07", "Structural", "Vibration analysis and material sound properties."],
  ["08", "Computational", "Large scale acoustic simulations and AI models."],
  ["09", "Communication", "Telephony, networks, and auditory display systems."],
] as const;

export default function Tracks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-label mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#745b04]">
              Academic Scope
            </p>
            <h2 className="font-headline text-5xl leading-tight text-[#00375e]">Conference Tracks</h2>
          </div>
          <p className="max-w-md text-on-surface-variant">
            Explore the diverse domains of modern acoustics. We welcome submissions in 10 primary technical domains.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {tracks.map(([number, title, description], index) => (
            <div
              key={title}
              className={`group cursor-default rounded-lg bg-[#f3f3f4] p-6 transition-all duration-300 hover:bg-[#00375e] hover:text-white ${
                index === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="font-headline mb-4 text-3xl text-[#745b04] group-hover:text-[#ffe08d]">{number}</div>
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="text-xs opacity-60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
