import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import { routes } from "@/navigation/routes";

const Organizers = dynamic(() => import("@/components/organizers"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-surface-container-low" />,
});
const Highlights = dynamic(() => import("@/components/highlights"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white" />,
});
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.home} />
      <main>
        <Hero />
        <About />
        <Organizers />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}
