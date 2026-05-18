import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative px-[110px] sm:px-[110px]">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-gradient-bg opacity-30 animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] radial-gradient-bg opacity-20"
            style={{ filter: "hue-rotate(45deg)" }}
          />
        </div>

        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}



