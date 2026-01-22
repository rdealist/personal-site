"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const featuredTopics = [
  {
    title: "核心概念与原理",
    description: "AI、ML、DL基础,神经网络,通用智能",
    icon: "🧠",
    slug: "核心概念与原理",
  },
  {
    title: "Transformer架构",
    description: "注意力机制、模型组件、架构创新",
    icon: "🏗️",
    slug: "模型架构与组件",
  },
  {
    title: "提示工程",
    description: "Prompt设计、上下文学习、思维链",
    icon: "✨",
    slug: "提示工程与交互",
  },
];

export function NotesPreviewSection() {
  const t = useTranslations("notes");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI Knowledge Base
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            探索 <span className="text-gradient">AI 知识库</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从核心概念到前沿技术,系统化的AI学习笔记
          </p>
        </div>

        {/* Featured Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredTopics.map((topic, index) => (
            <Link
              key={index}
              href={`/notes/${topic.slug.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-\u4e00-\u9fa5]+/g, "")}`}
              className={cn(
                "group p-6 rounded-2xl glass",
                "hover:border-primary/50 transition-[transform,box-shadow,border-color] duration-300",
                "hover:scale-[1.02] hover:shadow-lg"
              )}
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {topic.description}
              </p>
              <div className="flex items-center text-sm text-primary font-medium">
                查看笔记
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/notes"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl",
              "bg-primary text-primary-foreground font-semibold",
              "hover:opacity-90 transition-[opacity,box-shadow] duration-200",
              "shadow-lg hover:shadow-xl"
            )}
          >
            <BookOpen className="w-5 h-5" />
            浏览所有笔记
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
