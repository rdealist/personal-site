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
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Stone
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
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
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-muted hover:bg-primary/10 transition-colors",
                    "border border-border hover:border-primary/50",
                    "text-muted-foreground hover:text-primary",
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate Links */}
          <div>
            <h3 className="font-semibold mb-4">{tFooter("navigate")}</h3>
            <ul className="space-y-2">
              {navLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="font-semibold mb-4">{tFooter("resources")}</h3>
            <ul className="space-y-2">
              {resourceLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{tCommon("copyright", { year: new Date().getFullYear() })}</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
