"use client";

import { Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  description?: string;
  className?: string;
}

export function ShareButton({ title, description, className }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log("Share cancelled or failed:", error);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert("链接已复制到剪贴板!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
        "glass hover:bg-primary/5 transition-[transform,background-color] hover:scale-105",
        className
      )}
    >
      <Share2 className="w-4 h-4" />
      分享笔记
    </button>
  );
}
