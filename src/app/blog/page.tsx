import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on AI and technology",
};

const posts = [
  {
    title: "Understanding Transformer Architecture",
    excerpt:
      "A deep dive into the attention mechanism and how transformers revolutionized NLP and beyond.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["AI", "Deep Learning", "Transformers"],
    slug: "understanding-transformers",
    featured: true,
  },
  {
    title: "Building AI Agents with LangChain",
    excerpt:
      "Learn how to create autonomous agents that can use tools, make decisions, and solve complex problems.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["LangChain", "AI Agents", "Python"],
    slug: "ai-agents-langchain",
    featured: true,
  },
  {
    title: "RAG Systems: Best Practices",
    excerpt:
      "Retrieval-Augmented Generation explained with practical implementation tips and common pitfalls to avoid.",
    date: "2025-01-05",
    readTime: "10 min read",
    tags: ["RAG", "LLM", "Vector Search"],
    slug: "rag-best-practices",
    featured: true,
  },
  {
    title: "Prompt Engineering Techniques",
    excerpt:
      "Master the art of crafting effective prompts for better AI outputs.",
    date: "2024-12-28",
    readTime: "6 min read",
    tags: ["Prompt Engineering", "LLM"],
    slug: "prompt-engineering",
  },
  {
    title: "Fine-tuning vs RAG: When to Use What",
    excerpt:
      "Compare two popular approaches to customizing LLM behavior for your use case.",
    date: "2024-12-20",
    readTime: "9 min read",
    tags: ["Fine-tuning", "RAG", "LLM"],
    slug: "finetuning-vs-rag",
  },
  {
    title: "Building a Modern Personal Website",
    excerpt:
      "How I built this site with Next.js, Tailwind CSS, and a touch of AI flair.",
    date: "2024-12-15",
    readTime: "7 min read",
    tags: ["Next.js", "Tailwind", "Web Dev"],
    slug: "building-personal-website",
  },
];

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

export default function BlogPage() {
  const featuredPosts = posts.filter((p) => p.featured);
  const recentPosts = posts.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Thoughts & <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Writing about AI, technology, and the journey of building things.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                className={cn(
                  "w-full pl-10 pr-4 py-3 rounded-xl",
                  "bg-muted border border-border",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50",
                  "placeholder:text-muted-foreground"
                )}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 5).map((tag) => (
                <button
                  key={tag}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm",
                    "bg-muted hover:bg-primary/10 transition-colors",
                    "border border-border hover:border-primary/50"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className={cn(
                  "group p-6 rounded-2xl glass",
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
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>

          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className={cn(
                  "group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-all"
                )}
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span>{post.readTime}</span>
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
