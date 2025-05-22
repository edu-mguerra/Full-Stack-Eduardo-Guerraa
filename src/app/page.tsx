"use client"
import About from "@/components/aboutMe/page";
import "./globals.css";
import Education from "@/components/education";
import { Hero } from "@/components/hero/page";
import Projects from "@/components/projectsGit/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";




export default function Home() {
  return (
    <>

      <Hero />
      <Education />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
