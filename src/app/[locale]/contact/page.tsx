"use client";

import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    key: "email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: Twitter,
    key: "twitter",
    value: "@your-username",
    href: "https://twitter.com/your-username",
  },
  {
    icon: Github,
    key: "github",
    value: "your-username",
    href: "https://github.com/your-username",
  },
  {
    icon: Linkedin,
    key: "linkedin",
    value: "your-username",
    href: "https://linkedin.com/in/your-username",
  },
];

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t("sectionTitle")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("title")}{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-muted-foreground">{t("description")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                {t("form.title")}
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder={t("form.namePlaceholder")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      "placeholder:text-muted-foreground",
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    placeholder={t("form.emailPlaceholder")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      "placeholder:text-muted-foreground",
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    placeholder={t("form.subjectPlaceholder")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      "placeholder:text-muted-foreground",
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    autoComplete="off"
                    placeholder={t("form.messagePlaceholder")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl resize-none",
                      "bg-muted border border-border",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      "placeholder:text-muted-foreground",
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
                    "bg-primary text-primary-foreground font-medium",
                    "hover:opacity-90 transition-[transform,opacity] hover:scale-[1.02]",
                    "glow-primary",
                  )}
                >
                  <Send className="w-5 h-5" />
                  {t("form.submit")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">{t("info.title")}</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("info.location")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("info.locationValue")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("info.responseTime")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("info.responseTimeValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">{t("social.title")}</h2>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl",
                        "bg-muted/50 hover:bg-primary/10 transition-colors",
                        "group",
                      )}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {t(`social.${method.key}.label`)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t(`social.${method.key}.description`)}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
