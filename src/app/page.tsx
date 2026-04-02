import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Organizers from "@/components/organizers";
import Tracks from "@/components/tracks";
import Cultural from "@/components/cultural";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar />
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
