"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Code2, Database, Globe, Layers, Terminal } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["LLM/GPT", "LangChain", "RAG", "Fine-tuning", "Prompt Engineering", "AI Agents"],
    color: "primary",
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "secondary",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis"],
    color: "accent",
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Docker", "Git", "Vercel", "AWS", "CI/CD"],
    color: "primary",
  },
];

export function SkillsPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
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
        ".skill-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="skills-title text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of AI/ML expertise and full-stack development skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "skill-card p-6 rounded-2xl glass",
                "hover:border-primary/50 transition-all duration-300",
                "group"
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  "bg-primary/10 group-hover:bg-primary/20 transition-colors"
                )}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-lg",
                      "bg-muted hover:bg-primary/10 transition-colors",
                      "cursor-default"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/skills"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "glass font-medium",
              "hover:bg-primary/10 transition-all group"
            )}
          >
            See all skills & prompts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
