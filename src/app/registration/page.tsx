"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { routes } from "@/navigation/routes";
import {
  RegistrationHero,
  PricingTable,
  SponsorshipTiers,
  ExhibitionExpo,
} from "@/features/registration";

export default function RegistrationPage() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.registration} />
      <main>
        <RegistrationHero />
        <div className="mx-auto max-w-7xl px-8 py-16">
          <PricingTable />
          <div className="mt-24">
            <SponsorshipTiers />
            <div className="mt-16">
              <ExhibitionExpo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
