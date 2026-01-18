"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power3.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            AI Explorer & Product Builder
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Stone</span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Exploring AI, Building Products
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          I'm passionate about the intersection of artificial intelligence and practical applications.
          Here I share my learning journey, projects, and insights.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "bg-primary text-primary-foreground font-medium",
              "hover:opacity-90 transition-all hover:scale-105",
              "glow-primary"
            )}
          >
            <Lightbulb className="w-5 h-5" />
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/notes"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "glass font-medium",
              "hover:bg-primary/10 transition-all hover:scale-105"
            )}
          >
            <BookOpen className="w-5 h-5" />
            Explore Notes
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
