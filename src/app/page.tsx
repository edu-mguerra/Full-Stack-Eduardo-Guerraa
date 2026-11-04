import "./globals.css";
import Hero from "@/components/hero";
import Education from "@/components/education";
import FeaturedProjects from "@/components/projectsDestaque";
import Projects from "@/components/projectsGit";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <FeaturedProjects />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
