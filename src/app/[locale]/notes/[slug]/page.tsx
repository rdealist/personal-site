import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Tag } from "lucide-react";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ShareButton } from "@/components/notes/share-button";

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

// Allow dynamic params for development
export const dynamicParams = true;

export async function generateStaticParams() {
  const notes = getAllNotes();

  // Only return slug params since locale is handled by parent route
  return notes.map((note) => ({
    slug: note.metadata.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: `${note.metadata.title} | AI Notes`,
    description: note.metadata.description,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  console.log("[NotePage] Requesting slug:", slug);

  const note = getNoteBySlug(slug);
  console.log(
    "[NotePage] Found note:",
    note ? note.metadata.title : "NOT FOUND",
  );

  if (!note) {
    console.error("[NotePage] Note not found for slug:", slug);
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回笔记列表
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-semibold border border-primary/20">
                {note.metadata.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {note.metadata.title}
            </h1>

            {/* Description */}
            {note.metadata.description && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 p-4 rounded-lg bg-muted/30 border-l-4 border-primary/50">
                {note.metadata.description}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>AI Knowledge Base</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className={cn(
              "prose prose-lg dark:prose-invert max-w-none",
              // Headings
              "prose-headings:font-bold prose-headings:tracking-tight",
              "prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:text-foreground",
              "prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:text-foreground",
              "prose-h2:border-b-2 prose-h2:border-primary/30",
              "prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-foreground",
              "prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-foreground",
              // Paragraphs
              "prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4",
              // Links
              "prose-a:text-primary prose-a:font-medium prose-a:no-underline",
              "hover:prose-a:underline prose-a:transition-colors",
              // Strong and emphasis
              "prose-strong:text-foreground prose-strong:font-bold",
              "prose-em:text-muted-foreground",
              // Code
              "prose-code:text-primary prose-code:bg-primary/10",
              "prose-code:px-2 prose-code:py-1 prose-code:rounded-md",
              "prose-code:text-sm prose-code:font-mono prose-code:font-semibold",
              "prose-code:before:content-none prose-code:after:content-none",
              "prose-code:border prose-code:border-primary/20",
              // Pre (code blocks)
              "prose-pre:bg-muted prose-pre:border prose-pre:border-border",
              "prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8",
              "prose-pre:overflow-x-auto prose-pre:shadow-lg",
              // Blockquotes
              "prose-blockquote:border-l-4 prose-blockquote:border-primary",
              "prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl",
              "prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-6",
              "prose-blockquote:not-italic prose-blockquote:text-foreground/90",
              // Tables
              "prose-table:border-collapse prose-table:w-full prose-table:my-8",
              "prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-md",
              "prose-thead:bg-muted",
              "prose-th:bg-muted prose-th:border prose-th:border-border",
              "prose-th:px-6 prose-th:py-4 prose-th:text-left",
              "prose-th:font-bold prose-th:text-foreground",
              "prose-td:border prose-td:border-border prose-td:px-6 prose-td:py-4",
              "prose-td:text-muted-foreground",
              "prose-tr:border-b prose-tr:border-border",
              "prose-tbody:prose-tr:hover:bg-muted/50 prose-tbody:prose-tr:transition-colors",
              // Lists
              "prose-ul:list-none prose-ul:ml-0 prose-ul:my-6",
              "prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-6",
              "prose-li:text-muted-foreground prose-li:my-3 prose-li:leading-relaxed",
              "prose-li:pl-8 prose-li:relative",
              "before:prose-li:content-['▹'] before:prose-li:absolute before:prose-li:left-0",
              "before:prose-li:text-primary before:prose-li:font-bold before:prose-li:text-lg",
              "prose-ol>prose-li:pl-0 prose-ol>prose-li:before:content-none",
              // Horizontal rule
              "prose-hr:border-border prose-hr:my-12",
            )}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {note.content}
            </ReactMarkdown>
          </div>

          {/* Footer Navigation */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/notes"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                  "glass hover:bg-primary/5 transition-[transform,background-color] hover:scale-105",
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                查看所有笔记
              </Link>

              <ShareButton
                title={note.metadata.title}
                description={note.metadata.description}
              />
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
