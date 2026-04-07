import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { routes } from "@/navigation/routes";
import {
  PatronsSection,
  CommitteeLeadership,
  AdvisoryCommittee,
  TechnicalAreasCommittees,
  LocalOrganisingCommittee,
  PastPresidentsASI,
} from "@/features/committee";

export const metadata: Metadata = {
  title: "Committees | IISA 2026",
  description:
    "Explore the various committees supporting the IISA 2026 conference, including leadership, advisory, and technical panels.",
};

export default function CommitteePage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.committee} />
      <main className="max-w-7xl mx-auto px-8 py-16">
        <PatronsSection />
        <CommitteeLeadership />
        <AdvisoryCommittee />
        <LocalOrganisingCommittee />
        <TechnicalAreasCommittees />
        <PastPresidentsASI />
      </main>
      <Footer />
    </div>
  );
}
