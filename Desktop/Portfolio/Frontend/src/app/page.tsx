
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ContactForm } from "@/components/portfolio/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <SkillsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
