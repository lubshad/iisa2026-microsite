import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Organizers from "@/components/organizers";
import Tracks from "@/components/tracks";
import Cultural from "@/components/cultural";
import Footer from "@/components/footer";
import { routes } from "@/navigation/routes";

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar activePath={routes.home} />
      <main>
        <Hero />
        <About />
        <Organizers />
        <Tracks />
        <Cultural />
      </main>
      <Footer />
    </div>
  );
}
