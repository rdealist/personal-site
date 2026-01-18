import { ParticleBackground } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { SkillsPreviewSection } from "@/components/sections/skills-preview-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <AboutPreviewSection />
      <ProjectsPreviewSection />
      <SkillsPreviewSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
