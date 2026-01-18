"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const recentPosts = [
  {
    title: "Understanding Transformer Architecture",
    excerpt: "A deep dive into the attention mechanism and how transformers revolutionized NLP.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["AI", "Deep Learning"],
    slug: "understanding-transformers",
  },
  {
    title: "Building AI Agents with LangChain",
    excerpt: "Learn how to create autonomous agents that can use tools and make decisions.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["LangChain", "Agents"],
    slug: "ai-agents-langchain",
  },
  {
    title: "RAG Systems: Best Practices",
    excerpt: "Retrieval-Augmented Generation explained with practical implementation tips.",
    date: "2025-01-05",
    readTime: "10 min read",
    tags: ["RAG", "LLM"],
    slug: "rag-best-practices",
  },
];

export function BlogPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-title",
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
        ".blog-card",
        { opacity: 0, y: 30 },
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
    <section ref={sectionRef} className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="blog-title text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Latest Posts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            From the{" "}
            <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on AI, technology, and product building.
          </p>
        </div>

        {/* Posts Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className={cn(
                "blog-card group p-6 rounded-2xl glass",
                "hover:border-primary/50 transition-all duration-300",
                "hover:scale-[1.02]"
              )}
            >
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "glass font-medium",
              "hover:bg-primary/10 transition-all group"
            )}
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
