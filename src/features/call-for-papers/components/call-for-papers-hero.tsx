import Image from "next/image";

export default function CallForPapersHero() {
  return (
    <section className="relative mb-24 flex h-[400px] items-center overflow-hidden rounded-xl bg-[#1E4E79]">
      <Image
        alt="Stately academic stone building with large columns under a clear blue sky at the University of Calicut campus"
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
        fill
        priority
        sizes="(min-width: 1280px) 1280px, 100vw"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQo5CbPz5n4UWmQfED0hYXjpk3FjBYk_rEJt6pXlZhXUAzCkEybQnOC_dNXxRP2bE3jCNjZ0M55pjg0FxDs8MKapk932U1rROiJEW5ThqiqQodbPJe5K37e5nlNzOnf5_wHfY8Gxod8gckaPSYcj7mWBF-R3YYHP07NjBbh37oluMiapWJy30_1XolmoT_QXVyeAAF93V05zQsFeNLXdB8IqEjxfvCxAxDe-rWf7D2cL_mMC-18bKvxLMXmJ_4fjF9KPVS4Vn3dCGA"
      />
      <div className="relative z-10 max-w-[52rem] px-5 md:px-12">
        <span className="mb-7 inline-block rounded-full bg-[#ffe08d] px-6 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#241a00]">
          Call for Submissions
        </span>
        <h1 className="font-headline mb-7 max-w-[760px] text-[3.65rem] leading-[0.94] tracking-[-0.07em] text-white md:text-[5.4rem]">
          Global Intelligence through Signal Processing.
        </h1>
        <p className="max-w-[720px] text-base leading-[1.45] text-[#d5e3fd] md:text-[1.05rem]">
          Join the world&apos;s leading researchers at the International Symposium on Integrated Systems &amp;
          Applications 2026.
        </p>
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 400 400"
      >
        <path d="M0,200 Q100,50 200,200 T400,200" fill="none" stroke="#ffe08d" strokeWidth="2" />
        <path d="M0,220 Q100,70 200,220 T400,220" fill="none" stroke="#ffe08d" strokeWidth="1" />
        <path d="M0,180 Q100,30 200,180 T400,180" fill="none" stroke="#ffe08d" strokeWidth="0.5" />
      </svg>
    </section>
  );
}
