"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, Clock, Tag, Search, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Note } from "@/lib/notes";

interface NotesPageClientProps {
  initialNotes: Note[];
  initialTags: string[];
}

export default function NotesPageClient({ initialNotes, initialTags }: NotesPageClientProps) {
  const t = useTranslations("notes");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allNotes = useMemo(() => initialNotes, [initialNotes]);
  const allTags = useMemo(() => initialTags, [initialTags]);

  const filteredNotes = useMemo(() => {
    if (!selectedTag) return allNotes;
    return allNotes.filter((note) => note.metadata.tags?.includes(selectedTag));
  }, [allNotes, selectedTag]);

  const featuredNotes = filteredNotes.filter((n) => n.metadata.featured);
  const recentNotes = filteredNotes.filter((n) => !n.metadata.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t("sectionTitle")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("description")}
          </p>
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
                aria-label={t("searchPlaceholder")}
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
              <button
                onClick={() => setSelectedTag(null)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm transition-colors",
                  selectedTag === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-primary/10 border border-border hover:border-primary/50"
                )}
              >
                {t("allNotes")}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-primary/10 border border-border hover:border-primary/50"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Tag Indicator */}
          {selectedTag && (
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Tag className="w-4 h-4" />
              <span>
                筛选: <span className="text-primary font-medium">{selectedTag}</span>
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-auto flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
                清除
              </button>
            </div>
          )}
        </div>

        {/* Featured Notes */}
        {featuredNotes.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{t("featured")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNotes.map((note, index) => (
                <NoteCard key={index} note={note} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Notes */}
        {recentNotes.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">{t("recent")}</h2>

            <div className="space-y-4">
              {recentNotes.map((note, index) => (
                <NoteRow key={index} note={note} />
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">没有找到相关笔记</p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-primary hover:underline"
            >
              查看所有笔记
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={`/notes/${note.metadata.slug}`}
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
          {new Date(note.metadata.date || "").toLocaleDateString("zh-CN", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {note.metadata.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {note.metadata.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {note.metadata.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {note.metadata.tags?.slice(0, 3).map((tag) => (
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
}

function NoteRow({ note }: { note: Note }) {
  return (
    <Link
      href={`/notes/${note.metadata.slug}`}
      className={cn(
        "group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl glass",
        "hover:border-primary/50 transition-colors"
      )}
    >
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
          {note.metadata.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {note.metadata.description}
        </p>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
        <span>{note.metadata.readTime}</span>
        <span>
          {new Date(note.metadata.date || "").toLocaleDateString("zh-CN", {
            month: "short",
            day: "numeric",
          })}
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
