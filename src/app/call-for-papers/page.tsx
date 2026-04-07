import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CallForPapersHero from "@/features/call-for-papers/components/call-for-papers-hero";
import ImportantDates from "@/features/call-for-papers/components/important-dates";
import SubmissionGuidelines from "@/features/call-for-papers/components/submission-guidelines";
import TechnicalTracks from "@/features/call-for-papers/components/technical-tracks";
import AdditionalInfo from "@/features/call-for-papers/components/additional-info";
import { routes } from "@/navigation/routes";

export const metadata: Metadata = {
  title: "Call for Papers | IISA 2026",
  description: "Submission guidelines, important dates, and topics of interest for IISA 2026.",
};

export default function CallForPapersPage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.callForPapers} />
      <main>
        <CallForPapersHero />
        <SubmissionGuidelines />
        <ImportantDates />
        <TechnicalTracks />
        <AdditionalInfo />
      </main>
      <Footer />
    </div>
  );
}
