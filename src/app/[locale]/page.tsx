import { ParticleBackground } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { SkillsPreviewSection } from "@/components/sections/skills-preview-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { NotesPreviewSection } from "@/components/sections/notes-preview-section";
import { CTASection } from "@/components/sections/cta-section";
import { Hero } from "@/components/misaki/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Kept other sections but commented out ParticleBackground as it conflicts with the new style */}
      {/* <ParticleBackground /> */}
      {/* <HeroSection /> */}
      <AboutPreviewSection />
      <NotesPreviewSection />
      <ProjectsPreviewSection />
      <SkillsPreviewSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
