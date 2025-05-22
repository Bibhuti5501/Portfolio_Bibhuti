
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { AboutSection } from "@/components/sections/about-section";
import { CareerSection } from "@/components/sections/career-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ProjectShowcase />
    </>
  );
}
