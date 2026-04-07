import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { routes } from "@/navigation/routes";
import {
  KeralaCultureHero,
  KeralaArts,
  KeralaCuisine,
  KeralaNature,
  KeralaHeritage,
  KeralaCultureCta,
} from "@/features/kerala-culture";

export const metadata: Metadata = {
  title: "Kerala Culture | IISA 2026",
  description:
    "Discover the rich cultural heritage of Kerala — from Theyyam and Kathakali to Malabar cuisine and pristine coastlines. IISA 2026 is held in Kozhikode, God's Own Country.",
  openGraph: {
    title: "Kerala Culture | IISA 2026",
    description:
      "Experience the living traditions, natural wonders, and culinary heritage of Kerala at IISA 2026, Kozhikode.",
  },
};

export default function KeralaCulturePage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.keralaCulture} />
      <main>
        <KeralaCultureHero />
        <KeralaArts />
        <KeralaCuisine />
        <KeralaNature />
        <KeralaHeritage />
        <KeralaCultureCta />
      </main>
      <Footer />
    </div>
  );
}
