"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
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
        <div className="cta-content max-w-4xl mx-auto text-center p-12 rounded-3xl glass relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              I'd love to hear from you!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                  "bg-primary text-primary-foreground font-medium",
                  "hover:opacity-90 transition-all hover:scale-105",
                  "glow-primary"
                )}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                  "glass font-medium",
                  "hover:bg-primary/10 transition-all"
                )}
              >
                <MessageSquare className="w-5 h-5" />
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
