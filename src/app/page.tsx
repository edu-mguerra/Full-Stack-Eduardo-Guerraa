import "./globals.css";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/projectsDestaque";
import Education from "@/components/education";
import Projects from "@/components/projectsGit";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
