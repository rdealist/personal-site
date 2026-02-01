import { Hero } from "@/components/misaki/hero";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { NotesPreviewSection } from "@/components/sections/notes-preview-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { SkillsPreviewSection } from "@/components/sections/skills-preview-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreviewSection />
      <NotesPreviewSection />
      <ProjectsPreviewSection />
      <SkillsPreviewSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
