import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { routes } from "@/navigation/routes";
import {
  VenueHero,
  VenueOverview,
  UniversityInfo,
  AccessibilitySection,
  AboutCalicut,
  VenueSummary,
} from "@/features/venue";

export const metadata: Metadata = {
  title: "Venue | IISA 2026",
  description:
    "Explore the venue for IISA 2026 at the University of Calicut, Kerala, India. Discover campus details, accessibility, and the vibrant city of Kozhikode.",
  openGraph: {
    title: "Venue | IISA 2026",
    description: "IISA 2026 will be held at the University of Calicut, Kerala, India.",
  },
};

export default function VenuePage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.venue} />
      <main>
        <VenueHero />
        <VenueOverview />
        <UniversityInfo />
        <AccessibilitySection />
        <AboutCalicut />
        <VenueSummary />
      </main>
      <Footer />
    </div>
  );
}
