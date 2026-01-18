"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: "AI Agent Framework",
    description: "A flexible framework for building autonomous AI agents with tool use capabilities.",
    tags: ["Python", "LangChain", "OpenAI"],
    image: "/projects/agent-framework.png",
    github: "https://github.com/your-username/agent-framework",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Smart Document Parser",
    description: "Extract structured data from documents using vision models and OCR.",
    tags: ["TypeScript", "Next.js", "Claude"],
    image: "/projects/doc-parser.png",
    github: "https://github.com/your-username/doc-parser",
    featured: true,
  },
  {
    title: "Prompt Library",
    description: "A curated collection of effective prompts for various AI tasks.",
    tags: ["React", "MDX", "Tailwind"],
    image: "/projects/prompt-lib.png",
    demo: "https://prompts.example.com",
    featured: true,
  },
];

export function ProjectsPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="projects-title text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Things I've{" "}
            <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my interests in AI and product development.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "project-card group rounded-2xl glass overflow-hidden",
                "hover:border-primary/50 transition-all duration-300",
                "hover:scale-[1.02] hover:shadow-xl"
              )}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-12 h-12 text-primary/30" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "glass font-medium",
              "hover:bg-primary/10 transition-all group"
            )}
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
