"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeContent = children.trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={cn("relative group my-8", className)}>
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 bg-muted/50 hover:bg-primary/20 focus:opacity-100"
        aria-label={copied ? "已复制" : "复制代码"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Code block */}
      <pre className="bg-muted border border-border rounded-xl p-6 overflow-x-auto shadow-lg">
        <code className={cn("text-sm font-mono", language && `language-${language}`)}>
          {children}
        </code>
      </pre>
    </div>
  );
}
