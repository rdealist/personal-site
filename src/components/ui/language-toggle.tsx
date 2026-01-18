"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "EN", flag: "🇺🇸" },
];

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState("zh");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // In a real app, this would update next-intl locale
    // For now, we just update state
  };

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "px-3 h-9 rounded-lg flex items-center gap-1.5",
          "bg-muted hover:bg-primary/10 transition-colors",
          "border border-border hover:border-primary/50",
          "text-sm font-medium"
        )}
      >
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 glass rounded-lg overflow-hidden min-w-[100px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "w-full px-3 py-2 flex items-center gap-2 text-sm",
                  "hover:bg-primary/10 transition-colors",
                  currentLang === lang.code && "text-primary"
                )}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
