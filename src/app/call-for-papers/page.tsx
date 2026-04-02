import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CallForPapersHero from "@/features/call-for-papers/components/call-for-papers-hero";
import ImportantDates from "@/features/call-for-papers/components/important-dates";
import SubmissionGuidelines from "@/features/call-for-papers/components/submission-guidelines";
import TechnicalTracks from "@/features/call-for-papers/components/technical-tracks";
import { routes } from "@/navigation/routes";

export const metadata: Metadata = {
  title: "Call for Papers | IISA 2026",
  description: "Submission guidelines, important dates, and technical tracks for IISA 2026.",
};

export default function CallForPapersPage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.callForPapers} />
      <main className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-12 md:pb-16">
        <CallForPapersHero />
        <SubmissionGuidelines />
        <ImportantDates />
        <TechnicalTracks />
      </main>
      <Footer />
    </div>
  );
}
