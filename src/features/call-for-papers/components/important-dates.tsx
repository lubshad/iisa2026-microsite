import { importantDates } from "@/features/call-for-papers/data";

export default function ImportantDates() {
  return (
    <section className="mb-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="font-headline mb-5 text-4xl text-[#00375e]">Important Dates</h2>
        <div className="mx-auto h-[2px] w-20 bg-[#745b04]"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {importantDates.map((item) => (
          <div key={item.title} className="group relative">
            <div className="h-full rounded-xl border-t-2 border-transparent bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(30,78,121,0.06)] transition-all group-hover:border-secondary">
              <span className="mb-4 block text-[11px] font-bold tracking-[0.2em] text-[#745b04]">{item.date}</span>
              <h3 className="font-headline mb-4 text-xl text-[#00375e]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#42474f]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
