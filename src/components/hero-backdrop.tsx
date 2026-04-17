import Image from "next/image";

type HeroBackdropProps = {
  className?: string;
};

export default function HeroBackdrop({ className = "" }: HeroBackdropProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,50,126,0.4),transparent_35%),radial-gradient(circle_at_bottom_center,rgba(121,85,185,0.2),transparent_34%),linear-gradient(135deg,#28184b_0%,#171334_45%,#0f1028_100%)]" />
      <div className="hero-grid-motion absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <Image
        src="/elements/Elements-02.svg"
        alt=""
        fill
        className="hero-layer-drift-slow pointer-events-none object-cover object-top opacity-50 mix-blend-screen"
        aria-hidden="true"
      />
      <Image
        src="/elements/Elements-05.svg"
        alt=""
        fill
        className="hero-layer-drift-fast pointer-events-none object-cover object-top opacity-45 mix-blend-screen"
        aria-hidden="true"
      />
      <Image
        src="/elements/Elements-06.svg"
        alt=""
        fill
        className="hero-layer-drift-slow pointer-events-none object-cover object-top opacity-[0.12]"
        aria-hidden="true"
      />
    </div>
  );
}
