import Icon from "@/components/icon";
import { technicalTracks } from "@/features/call-for-papers/data";

export default function TechnicalTracks() {
  return (
    <section>
      <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-headline mb-6 text-4xl text-[#00375e]">Technical Tracks</h2>
          <p className="max-w-xl text-base leading-[1.8] text-[#42474f]">
            We welcome submissions in the following specialized research domains. Each track is chaired by
            internationally renowned subject matter experts.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-md bg-[#ffe08d] px-5 py-4 text-[#241a00]">
          <Icon className="size-4" name="info" />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Multidisciplinary Focus</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {technicalTracks.map((track) => (
          <article
            key={track.id}
            className={`flex h-64 flex-col justify-between rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
              track.wide ? "lg:col-span-2" : ""
            }`}
          >
            <div className={track.wide ? "max-w-sm" : ""}>
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.08em] text-[#b0a38a]">{track.id}</span>
              <h3 className={`font-headline leading-tight text-[#00375e] ${track.wide ? "text-[2rem]" : "text-[1.6rem]"}`}>
                {track.title}
              </h3>
            </div>
            <Icon className="size-4 self-end text-[#745b04]" name={track.icon} />
          </article>
        ))}
      </div>
    </section>
  );
}
