"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("hero");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Single key element animation - Hero title only
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" },
      );

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: 0.5,
            ease: "power2.out",
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl text-center">
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-border/50">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            {t("badge")}
          </span>
        </div>

        {/* Bold Minimalist Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("greeting")}{" "}
          <span className="text-gradient inline-block">Stone</span>
          <br />
          <span className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {t("tagline")}
          </span>
        </h1>

        {/* Clean Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("description")}
        </p>

        {/* Minimalist CTA */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className={cn(
              "group inline-flex items-center gap-2 px-8 py-4 rounded-xl",
              "bg-primary text-primary-foreground font-semibold text-base",
              "hover:opacity-90 transition-[opacity,box-shadow] duration-200 cursor-pointer",
              "shadow-lg hover:shadow-xl",
            )}
          >
            {t("viewProjects")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl",
              "glass font-semibold text-base border border-border/50",
              "hover:bg-primary/5 transition-colors duration-200 cursor-pointer",
            )}
          >
            {t("exploreNotes")}
          </Link>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            {t("scrollToExplore")}
          </span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
