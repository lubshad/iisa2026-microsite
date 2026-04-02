import Icon from "@/components/icon";
import { submissionGuidelines } from "@/features/call-for-papers/data";

export default function SubmissionGuidelines() {
  return (
    <section className="mb-24 grid grid-cols-1 items-start gap-10 md:gap-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 className="font-headline mb-8 text-4xl text-[#00375e]">Submission Guidelines</h2>
        <p className="mb-12 text-base leading-[1.85] text-[#42474f]">
          IISA 2026 invites original contributions that have not been published or submitted for publication
          elsewhere. All submissions will undergo a double-blind peer review process by at least three members of the
          technical program committee.
        </p>
        <div className="space-y-8">
          {submissionGuidelines.map((guideline) => (
            <div key={guideline.title} className="group flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e8e8e8] text-[#1a1c1c] transition-colors group-hover:bg-primary-container group-hover:text-white">
                <Icon className="size-6" name={guideline.icon} />
              </div>
              <div>
                <h3 className="mb-2 text-[14px] font-bold text-[#00375e]">{guideline.title}</h3>
                <p className="text-[12px] leading-relaxed text-[#42474f]">{guideline.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border-l-4 border-secondary bg-[#f3f3f4] p-8 md:p-12 lg:col-span-7">
        <div className="mb-8 flex items-center gap-4">
          <Icon className="size-8 text-[#745b04]" name="upload" />
          <h3 className="font-headline text-[2rem] text-[#00375e]">EasyChair Submission Portal</h3>
        </div>
        <p className="mb-10 max-w-2xl text-[14px] leading-[1.8] text-[#42474f]">
          Click the button below to access the official submission system. Ensure your abstract is submitted before
          the preliminary deadline to be eligible for full paper consideration.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="kasavu-gold-gradient inline-flex items-center gap-3 rounded-md px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-secondary/20 transition-transform hover:scale-[1.02]"
            href="#"
          >
            Submit via EasyChair
            <Icon className="size-5" name="external-link" />
          </a>
          <a
            className="rounded-md border border-[#c2c7d0] bg-white px-8 py-4 text-[15px] font-semibold text-[#00375e] transition-colors hover:bg-[#fafafa]"
            href="#"
          >
            Download Template
          </a>
        </div>
      </div>
    </section>
  );
}
