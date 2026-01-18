"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Zap, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Cpu,
    title: "AI/ML Enthusiast",
    description: "Deep diving into LLMs, agents, and practical AI applications",
  },
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Building products from idea to deployment",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Always exploring new technologies and methodologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating to build impactful solutions",
  },
];

export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".about-title",
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

      // Animate cards with stagger
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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
        <div className="about-title text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Crafting the Future with{" "}
            <span className="text-gradient">AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist exploring the boundaries of artificial intelligence
            and building products that make a difference.
          </p>
        </div>

        {/* Highlights Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className={cn(
                "about-card p-6 rounded-2xl glass",
                "hover:border-primary/50 transition-all duration-300",
                "group cursor-pointer hover:scale-105"
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "glass font-medium",
              "hover:bg-primary/10 transition-all group"
            )}
          >
            Learn more about me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
