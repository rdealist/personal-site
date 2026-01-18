import { Metadata } from "next";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Skills & Prompts",
  description: "Technical skills and prompt templates",
};

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Large Language Models", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "RAG Systems", level: 85 },
      { name: "AI Agents", level: 80 },
      { name: "Fine-tuning", level: 70 },
      { name: "LangChain", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Python", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "FastAPI", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

const promptTemplates = [
  {
    title: "Code Reviewer",
    category: "Development",
    description: "A prompt for reviewing code with best practices in mind",
    prompt: `You are an expert code reviewer. Review the following code for:
1. Bugs and potential issues
2. Performance optimizations
3. Security vulnerabilities
4. Code style and readability
5. Best practices

Provide specific, actionable feedback with examples.`,
  },
  {
    title: "Technical Writer",
    category: "Documentation",
    description: "Generate clear technical documentation",
    prompt: `You are a technical writer. Create documentation for the following:
- Start with a clear overview
- Include usage examples
- Document all parameters/options
- Add troubleshooting tips
- Use clear, concise language`,
  },
  {
    title: "AI Tutor",
    category: "Education",
    description: "Explain complex concepts in simple terms",
    prompt: `You are a patient and knowledgeable tutor. Explain the concept as if teaching someone new to the field:
1. Start with a simple analogy
2. Build up to the technical details
3. Provide practical examples
4. Check for understanding with questions`,
  },
];

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="text-gradient">Prompts</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Technical skills I've developed and prompt templates I use regularly.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
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
            Prompt Templates
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {promptTemplates.map((template, index) => (
              <div
                key={index}
                className={cn("glass rounded-2xl p-6", "group")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {template.category}
                    </span>
                    <h3 className="font-semibold text-lg mt-2">
                      {template.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                  <button
                    className={cn(
                      "p-2 rounded-lg",
                      "bg-muted hover:bg-primary/10 transition-colors",
                      "opacity-0 group-hover:opacity-100"
                    )}
                    title="Copy prompt"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <pre
                  className={cn(
                    "p-4 rounded-xl bg-muted/50 text-sm",
                    "overflow-x-auto whitespace-pre-wrap",
                    "font-mono text-muted-foreground"
                  )}
                >
                  {template.prompt}
                </pre>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
