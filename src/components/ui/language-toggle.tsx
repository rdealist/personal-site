"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { getLocaleDisplayName, getLocaleFlag, type Locale } from "@/i18n/utils";

const languages: { code: Locale; label: string }[] = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
];

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: Locale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: langCode });
  };

  const currentFlag = getLocaleFlag(locale);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "px-3 h-9 rounded-lg flex items-center gap-1.5 cursor-pointer",
          "bg-muted hover:bg-primary/10 transition-colors duration-200",
          "border border-border hover:border-primary/50",
          "text-sm font-medium",
        )}
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label="Switch language"
      >
        <span aria-hidden="true">{currentFlag}</span>
        <span className="hidden sm:inline">{getLocaleDisplayName(locale)}</span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 border-0 p-0 bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-label="Close language menu"
          />
          <div
            id="language-menu"
            className="absolute right-0 top-full mt-2 z-50 glass rounded-lg overflow-hidden min-w-[120px] shadow-lg"
            role="menu"
          >
            {languages.map((lang) => {
              const flag = getLocaleFlag(lang.code);
              const isActive = locale === lang.code;

              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "w-full px-3 py-2.5 flex items-center gap-2 text-sm cursor-pointer",
                    "hover:bg-primary/10 transition-colors duration-150",
                    isActive ? "text-primary font-medium" : "text-foreground/80",
                  )}
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span aria-hidden="true">{flag}</span>
                  <span>{lang.label}</span>
                  {isActive && (
                    <span className="ml-auto text-primary" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
