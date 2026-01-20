"use client";

import Link from "next/link";
import { ExternalLink, Github, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const featuredProjectKeys = ["agentFramework", "docParser", "promptLib"];
const otherProjectKeys = ["ragPipeline", "chatWidget", "benchmark"];

type ProjectLinks = {
  github?: string;
  demo?: string;
};

const projectLinks: Record<string, ProjectLinks> = {
  agentFramework: { github: "https://github.com/your-username/agent-framework", demo: "https://demo.example.com" },
  docParser: { github: "https://github.com/your-username/doc-parser" },
  promptLib: { demo: "https://prompts.example.com" },
  ragPipeline: { github: "https://github.com/your-username/rag-pipeline" },
  chatWidget: { github: "https://github.com/your-username/chat-widget", demo: "https://chat.example.com" },
  benchmark: { github: "https://github.com/your-username/model-benchmark" },
};

const projectStatus = {
  agentFramework: "active",
  docParser: "active",
  promptLib: "active",
  ragPipeline: "beta",
  chatWidget: "active",
  benchmark: "archived",
};

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");

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

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            {t("featuredProjects")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjectKeys.map((key) => {
              const status = projectStatus[key as keyof typeof projectStatus];
              const links = projectLinks[key as keyof typeof projectLinks] || {};
              const tags = t.raw(`projects.${key}.tags`) as string[];

              return (
                <div
                  key={key}
                  className={cn(
                    "group rounded-2xl glass overflow-hidden",
                    "hover:border-primary/50 transition-[transform,border-color] duration-300",
                    "hover:scale-[1.02]"
                  )}
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute top-3 right-3">
                      <span
                        className={cn(
                          "px-2 py-1 text-xs rounded-full",
                          status === "active" && "bg-green-500/20 text-green-500",
                          status === "beta" && "bg-yellow-500/20 text-yellow-500",
                          status === "archived" && "bg-gray-500/20 text-gray-500"
                        )}
                      >
                        {t(`status.${status}`)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {t(`projects.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {t(`projects.${key}.description`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                      {tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          +{tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          {t("code")}
                        </a>
                      )}
                      {links.demo && (
                        <a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("demo")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">{t("otherProjects")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjectKeys.map((key) => {
              const status = projectStatus[key as keyof typeof projectStatus];
              const links = projectLinks[key as keyof typeof projectLinks] || {};
              const tags = t.raw(`projects.${key}.tags`) as string[];

              return (
                <div
                  key={key}
                  className={cn(
                    "group p-6 rounded-2xl glass",
                    "hover:border-primary/50 transition-colors"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {t(`projects.${key}.title`)}
                        </h3>
                        <span
                          className={cn(
                            "px-2 py-0.5 text-xs rounded-full",
                            status === "active" && "bg-green-500/20 text-green-500",
                            status === "beta" && "bg-yellow-500/20 text-yellow-500",
                            status === "archived" && "bg-gray-500/20 text-gray-500"
                          )}
                        >
                          {t(`status.${status}`)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {t(`projects.${key}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {links.github && (
                        <a
                          href={links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {links.demo && (
                        <a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                          aria-label="Open demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
