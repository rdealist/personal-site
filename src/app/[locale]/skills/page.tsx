"use client";

import { useState } from "react";
import {
  Brain,
  Cpu,
  Database,
  Eye,
  Code,
  Server,
  Sparkles,
  Copy,
  Check,
  Building2,
  Bug,
  Database as DatabaseIcon,
  Lightbulb,
  Boxes,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  llm: Brain,
  agents: Cpu,
  rag: Database,
  fineTuning: Sparkles,
  multimodal: Eye,
  fullstack: Code,
};

const promptIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  systemArchitect: Building2,
  codeReviewer: Bug,
  apiDesigner: Server,
  debuggingAssistant: Wrench,
  sqlOptimizer: DatabaseIcon,
  promptEngineer: Lightbulb,
};

const skillKeys = ["llm", "agents", "rag", "fineTuning", "multimodal", "fullstack"];
const promptKeys = ["systemArchitect", "codeReviewer", "apiDesigner", "debuggingAssistant", "sqlOptimizer", "promptEngineer"];

export default function SkillsPage() {
  const t = useTranslations("skillsPage");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = async (prompt: string, key: string) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedIndex(key);
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
            <Boxes className="w-5 h-5 text-primary" />
            {t("technicalSkills")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillKeys.map((key) => {
              const Icon = skillIcons[key];
              const tools = t.raw(`skills.${key}.tools`) as string[];

              return (
                <div
                  key={key}
                  className={cn(
                    "group glass rounded-2xl p-6",
                    "hover:border-primary/50 transition-all duration-300",
                    "hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5"
                  )}
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="font-semibold text-lg">{t(`skills.${key}.title`)}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`skills.${key}.description`)}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Prompts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {t("promptTemplates")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {promptKeys.map((key) => {
              const PromptIcon = promptIcons[key];
              const category = t(`prompts.${key}.category`) as string;

              return (
                <div
                  key={key}
                  className={cn(
                    "glass rounded-2xl overflow-hidden",
                    "hover:border-primary/50 transition-all duration-300",
                    "group"
                  )}
                >
                  {/* Header */}
                  <div className="p-6 border-b border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                        {PromptIcon && <PromptIcon className="w-5 h-5 text-primary" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            {category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">
                          {t(`prompts.${key}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`prompts.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Prompt Content */}
                  <div className="p-4 bg-muted/30">
                    <pre
                      className={cn(
                        "text-sm text-muted-foreground whitespace-pre-wrap",
                        "font-mono leading-relaxed"
                      )}
                    >
                      {t.raw(`prompts.${key}.content`) as string}
                    </pre>
                  </div>

                  {/* Action */}
                  <div className="p-4 border-t border-border/50 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleCopy(t.raw(`prompts.${key}.content`) as string, key)}
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        "bg-primary text-primary-foreground hover:opacity-90",
                        "hover:scale-105 active:scale-95",
                        copiedIndex === key && "bg-green-500"
                      )}
                    >
                      {copiedIndex === key ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Prompt
                        </>
                      )}
                    </button>
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
