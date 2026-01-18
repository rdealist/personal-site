"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { Link } from "@/i18n/navigation";

const navKeys = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/blog", key: "blog" },
  { href: "/notes", key: "notes" },
  { href: "/skills", key: "skills" },
  { href: "/resume", key: "resume" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl",
          isScrolled ? "glass shadow-lg" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Stone
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  "text-muted-foreground hover:text-foreground",
                  "hover:bg-primary/5 cursor-pointer",
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
                "border border-border hover:bg-primary/5 cursor-pointer",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-2">
          {navKeys.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-primary/5 cursor-pointer",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
