"use client";

import { useState } from "react";
import {
  Brain,
  Code2,
  Database,
  Layers,
  Terminal,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const skillCategories = [
  { key: "ai", icon: Brain },
  { key: "frontend", icon: Code2 },
  { key: "backend", icon: Database },
  { key: "devops", icon: Terminal },
];

const skillLevels = {
  llms: 90,
  promptEng: 95,
  rag: 85,
  agents: 80,
  finetuning: 70,
  langchain: 85,
  react: 90,
  typescript: 85,
  tailwind: 95,
  html: 90,
  framer: 75,
  python: 85,
  nodejs: 80,
  fastapi: 80,
  postgresql: 75,
  redis: 70,
  git: 90,
  docker: 75,
  vercel: 85,
  aws: 65,
  cicd: 70,
};

const promptKeys = ["codeReviewer", "technicalWriter", "aiTutor"];

export default function SkillsPage() {
  const t = useTranslations("skillsPage");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (prompt: string, index: number) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            {t("technicalSkills")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    {t(`categories.${category.key}`)}
                  </h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(skillLevels)
                    .filter(([key]) => {
                      if (category.key === "ai")
                        return ["llms", "promptEng", "rag", "agents", "finetuning", "langchain"].includes(key);
                      if (category.key === "frontend")
                        return ["react", "typescript", "tailwind", "html", "framer"].includes(key);
                      if (category.key === "backend")
                        return ["python", "nodejs", "fastapi", "postgresql", "redis"].includes(key);
                      if (category.key === "devops")
                        return ["git", "docker", "vercel", "aws", "cicd"].includes(key);
                      return false;
                    })
                    .map(([key, level]) => (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{t(`skills.${key}`)}</span>
                          <span className="text-xs text-muted-foreground">{level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                            style={{ width: `${level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prompts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {t("promptTemplates")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {promptKeys.map((key, index) => (
              <div
                key={key}
                className={cn(
                  "glass rounded-2xl p-6",
                  "group hover:border-primary/50 transition-colors"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {t(`prompts.${key}.category`)}
                    </span>
                    <h3 className="font-semibold text-lg mt-2">
                      {t(`prompts.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(`prompts.${key}.description`)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(t.raw(`prompts.${key}.content`), index)}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      "bg-muted hover:bg-primary/10",
                      copiedIndex === index
                        ? "bg-green-500/20 text-green-500"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                    title="Copy prompt"
                    aria-label="Copy prompt"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <pre
                  className={cn(
                    "p-4 rounded-xl bg-muted/50 text-sm",
                    "overflow-x-auto whitespace-pre-wrap",
                    "font-mono text-muted-foreground"
                  )}
                >
                  {t.raw(`prompts.${key}.content`)}
                </pre>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
