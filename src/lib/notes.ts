import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NoteMetadata {
  title: string;
  category: string;
  slug: string;
  order?: number;
  description?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  featured?: boolean;
}

export interface Note {
  metadata: NoteMetadata;
  content: string;
}

const NOTES_DIRECTORY = path.join(process.cwd(), "content");

/**
 * Generate URL-safe slug from Chinese text
 */
function generateSlug(text: string): string {
  // Simple mapping for common Chinese note titles
  const slugMap: Record<string, string> = {
    核心概念与原理: "core-concepts",
    模型架构与组件: "model-architecture",
    训练与学习机制: "training-learning",
    提示工程与交互: "prompt-engineering",
    数据处理与特征工程: "data-processing",
    性能评估与优化: "performance-optimization",
    特定应用领域术语: "domain-applications",
    前沿技术与概念: "frontier-technologies",
    未来趋势与演进: "future-trends",
    跨界应用与延展思考: "cross-domain-applications",
  };

  // Return mapped slug if exists, otherwise generate from text
  if (slugMap[text]) {
    return slugMap[text];
  }

  // Fallback: simple slug generation
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}

/**
 * Extract a clean description from markdown content
 */
function extractDescription(content: string, maxLength: number = 200): string {
  // Remove markdown syntax
  let clean = content
    .replace(/^#{1,6}\s+/gm, "") // Remove headings
    .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.+?)\*/g, "$1") // Remove italic
    .replace(/`(.+?)`/g, "$1") // Remove inline code
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // Remove links
    .replace(/^\s*[-*+]\s+/gm, "") // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, "") // Remove numbered list markers
    .replace(/^\s*>\s+/gm, "") // Remove blockquotes
    .replace(/\n{2,}/g, " ") // Replace multiple newlines
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();

  // Extract first meaningful sentence or paragraph
  const sentences = clean.split(/[。.!?]/);
  let description = "";

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (trimmed.length > 20) {
      // Skip very short sentences
      description = trimmed;
      break;
    }
  }

  // Fallback to beginning of content
  if (!description) {
    description = clean;
  }

  // Truncate if too long
  if (description.length > maxLength) {
    description = description.substring(0, maxLength).trim() + "…";
  }

  return description || "暂无描述";
}

/**
 * Get all note categories
 */
export function getNoteCategories(): string[] {
  const fileNames = fs.readdirSync(NOTES_DIRECTORY);
  const categories = fileNames
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
    .map((fileName) => fileName.replace(/\.md$/, ""));

  return categories;
}

/**
 * Calculate reading time based on content
 */
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  // Count Chinese characters and English words
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (content.match(/[a-zA-Z]+/g) || []).length;
  const totalWords = chineseChars + englishWords;
  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return `${minutes} min`;
}

/**
 * Get default tags based on category
 */
function getDefaultTags(category: string): string[] {
  const tagMap: Record<string, string[]> = {
    核心概念与原理: ["AI", "基础概念", "机器学习"],
    模型架构与组件: ["深度学习", "神经网络", "架构"],
    训练与学习机制: ["训练", "优化", "学习"],
    提示工程与交互: ["Prompt", "LLM", "交互"],
    数据处理与特征工程: ["数据", "特征工程", "预处理"],
    性能评估与优化: ["评估", "优化", "性能"],
    特定应用领域术语: ["应用", "NLP", "CV"],
    前沿技术与概念: ["前沿", "研究", "创新"],
    未来趋势与演进: ["趋势", "AGI", "未来"],
    跨界应用与延展思考: ["跨领域", "思考", "应用"],
  };
  return tagMap[category] || ["AI", "学习笔记"];
}

/**
 * Get all notes
 */
export function getAllNotes(): Note[] {
  const categories = getNoteCategories();

  const notes = categories.map((category, index) => {
    const fullPath = path.join(NOTES_DIRECTORY, `${category}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse the markdown file
    const { data, content } = matter(fileContents);

    // Generate URL-safe slug using pinyin or simple mapping
    const slug = generateSlug(category);

    // Get file stats for date
    const stats = fs.statSync(fullPath);
    const date = data.date || stats.mtime.toISOString().split("T")[0];

    return {
      metadata: {
        title: category,
        category: category,
        slug,
        order: data.order ?? index,
        description: data.description || extractDescription(content),
        date,
        readTime: data.readTime || calculateReadTime(content),
        tags: data.tags || getDefaultTags(category),
        featured: data.featured ?? index < 3, // First 3 are featured by default
      },
      content,
    };
  });

  // Sort by order if available, otherwise alphabetically
  return notes.sort((a, b) => {
    if (a.metadata.order !== undefined && b.metadata.order !== undefined) {
      return a.metadata.order - b.metadata.order;
    }
    return a.metadata.title.localeCompare(b.metadata.title);
  });
}

/**
 * Get a single note by slug
 */
export function getNoteBySlug(slug: string): Note | null {
  const notes = getAllNotes();
  return notes.find((note) => note.metadata.slug === slug) || null;
}

/**
 * Search notes by keyword
 */
export function searchNotes(keyword: string): Note[] {
  const allNotes = getAllNotes();
  const lowerKeyword = keyword.toLowerCase();

  return allNotes.filter((note) => {
    return (
      note.metadata.title.toLowerCase().includes(lowerKeyword) ||
      note.content.toLowerCase().includes(lowerKeyword)
    );
  });
}

/**
 * Get all unique tags from notes
 */
export function getAllTags(): string[] {
  const allNotes = getAllNotes();
  const tagSet = new Set<string>();
  allNotes.forEach((note) => {
    note.metadata.tags?.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

/**
 * Get featured notes
 */
export function getFeaturedNotes(): Note[] {
  return getAllNotes().filter((note) => note.metadata.featured);
}

/**
 * Get non-featured notes
 */
export function getRecentNotes(): Note[] {
  return getAllNotes().filter((note) => !note.metadata.featured);
}
