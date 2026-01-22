"use client";

import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
  Brain,
  Rocket,
  Coffee,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const timelineKeys = [
  { year: "2024", key: "2024", icon: Rocket },
  { year: "2023", key: "2023", icon: Brain },
  { year: "2022", key: "2022", icon: Briefcase },
  { year: "2020", key: "2020", icon: Code },
];

const interestKeys = [
  { key: "aiResearch", icon: Brain },
  { key: "productDesign", icon: Rocket },
  { key: "openSource", icon: Code },
  { key: "coffee", icon: Coffee },
];

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t("sectionTitle")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("greeting")} <span className="text-gradient">Stone</span>
          </h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <section className="mb-16">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{t("location")}</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p dangerouslySetInnerHTML={{ __html: t.raw("bio.p1") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("bio.p2") }} />
                <p dangerouslySetInnerHTML={{ __html: t.raw("bio.p3") }} />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("journeyTitle")}
            </h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {timelineKeys.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                        "bg-primary/10 relative z-10",
                      )}
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-6 flex-1">
                      <span className="text-primary text-sm font-medium">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">
                        {t(`timeline.${item.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {t(`timeline.${item.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("interestsTitle")}{" "}
              <Heart className="w-6 h-6 inline text-accent" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interestKeys.map((interest, index) => (
                <div
                  key={index}
                  className={cn(
                    "glass rounded-2xl p-6 text-center",
                    "hover:border-primary/50 transition-colors",
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <interest.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">
                    {t(`interests.${interest.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
