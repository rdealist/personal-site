"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const postKeys = [
  { key: "transformers", slug: "understanding-transformers", featured: true, date: "2025-01-15", readTime: 8 },
  { key: "agents", slug: "ai-agents-langchain", featured: true, date: "2025-01-10", readTime: 12 },
  { key: "rag", slug: "rag-best-practices", featured: true, date: "2025-01-05", readTime: 10 },
  { key: "promptEng", slug: "prompt-engineering", featured: false, date: "2024-12-28", readTime: 6 },
  { key: "finetuningRag", slug: "finetuning-vs-rag", featured: false, date: "2024-12-20", readTime: 9 },
  { key: "website", slug: "building-personal-website", featured: false, date: "2024-12-15", readTime: 7 },
];

export default function BlogPage() {
  const t = useTranslations("blogPage");

  const featuredPosts = postKeys.filter((p) => p.featured);
  const recentPosts = postKeys.filter((p) => !p.featured);

  const allTags = Array.from(
    new Set(postKeys.flatMap((p) => t.raw(`posts.${p.key}.tags`) as string[]))
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-muted-foreground">{t("description")}</p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                name="search"
                autoComplete="off"
                inputMode="search"
                aria-label="Search posts"
                placeholder={t("searchPlaceholder")}
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-xl",
                  "bg-muted border border-border",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  "placeholder:text-muted-foreground"
                )}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 5).map((tag) => (
                <button
                  key={tag as string}
                  type="button"
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm",
                    "bg-muted hover:bg-primary/10 transition-colors",
                    "border border-border hover:border-primary/50"
                  )}
                >
                  {tag as string}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">{t("featured")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => {
              const tags = t.raw(`posts.${post.key}.tags`) as string[];
              return (
                <Link
                  key={post.key}
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "group p-6 rounded-2xl glass",
                    "hover:border-primary/50 transition-[transform,border-color] duration-300",
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
                      {t("readTime", { time: post.readTime })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {t(`posts.${post.key}.title`)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {t(`posts.${post.key}.excerpt`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
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
              );
            })}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">{t("recentPosts")}</h2>

          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.key}
                href={`/blog/${post.slug}`}
                className={cn(
                  "group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-colors"
                )}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {t(`posts.${post.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {t(`posts.${post.key}.excerpt`)}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span>{t("readTime", { time: post.readTime })}</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
