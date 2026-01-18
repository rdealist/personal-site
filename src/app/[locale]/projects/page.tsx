import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and experiments by Stone",
};

const projects = [
  {
    title: "AI Agent Framework",
    description:
      "A flexible framework for building autonomous AI agents with tool use capabilities. Supports multiple LLM providers and custom tool definitions.",
    tags: ["Python", "LangChain", "OpenAI", "Claude"],
    github: "https://github.com/your-username/agent-framework",
    demo: "https://demo.example.com",
    featured: true,
    status: "Active",
  },
  {
    title: "Smart Document Parser",
    description:
      "Extract structured data from documents using vision models and OCR. Supports PDFs, images, and scanned documents.",
    tags: ["TypeScript", "Next.js", "Claude Vision", "Tesseract"],
    github: "https://github.com/your-username/doc-parser",
    featured: true,
    status: "Active",
  },
  {
    title: "Prompt Library",
    description:
      "A curated collection of effective prompts for various AI tasks. Includes categorization, search, and version control.",
    tags: ["React", "MDX", "Tailwind", "Vercel"],
    demo: "https://prompts.example.com",
    featured: true,
    status: "Active",
  },
  {
    title: "RAG Pipeline",
    description:
      "Production-ready RAG system with hybrid search, re-ranking, and citation support.",
    tags: ["Python", "FastAPI", "Pinecone", "LlamaIndex"],
    github: "https://github.com/your-username/rag-pipeline",
    status: "Beta",
  },
  {
    title: "AI Chat Widget",
    description:
      "Embeddable chat widget powered by LLMs. Easy integration with any website.",
    tags: ["TypeScript", "Web Components", "OpenAI"],
    github: "https://github.com/your-username/chat-widget",
    demo: "https://chat.example.com",
    status: "Active",
  },
  {
    title: "Model Benchmark Tool",
    description:
      "Compare and evaluate different LLM models on custom datasets with detailed metrics.",
    tags: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/your-username/model-benchmark",
    status: "Archived",
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projects & <span className="text-gradient">Experiments</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of things I've built, explored, and experimented with.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "group rounded-2xl glass overflow-hidden",
                  "hover:border-primary/50 transition-all duration-300",
                  "hover:scale-[1.02]"
                )}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute top-3 right-3">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        project.status === "Active" && "bg-green-500/20 text-green-500",
                        project.status === "Beta" && "bg-yellow-500/20 text-yellow-500",
                        project.status === "Archived" && "bg-gray-500/20 text-gray-500"
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "group p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-all"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "px-2 py-0.5 text-xs rounded-full",
                          project.status === "Active" && "bg-green-500/20 text-green-500",
                          project.status === "Beta" && "bg-yellow-500/20 text-yellow-500",
                          project.status === "Archived" && "bg-gray-500/20 text-gray-500"
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
