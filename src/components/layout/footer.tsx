"use client";

import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const socialLinks = [
  { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
  {
    href: "https://twitter.com/your-username",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/your-username",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
];

const navLinkKeys = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/blog", key: "blog" },
] as const;

const resourceLinkKeys = [
  { href: "/notes", key: "notes" },
  { href: "/skills", key: "skills" },
  { href: "/resume", key: "resume" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const tCommon = useTranslations("common");

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-gradient inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stone
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              {tFooter("description")}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer",
                    "glass border border-border/50",
                    "hover:bg-primary/5 hover:border-primary/30",
                    "text-muted-foreground hover:text-primary",
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {tFooter("navigate")}
            </h3>
            <ul className="space-y-3">
              {navLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {tFooter("resources")}
            </h3>
            <ul className="space-y-3">
              {resourceLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{tCommon("copyright", { year: new Date().getFullYear() })}</p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary/20" /> using
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
