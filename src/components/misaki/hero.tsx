"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InfoCarousel } from "./info-carousel";
import { KoiBackground } from "./koi-background";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const Hero = () => {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = (y: number, delay: number, duration: number) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay },
        };

  const fadeIn = (delay: number, duration: number) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, delay },
        };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      <KoiBackground />

      <div className="z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8 pt-20">
        {/* Badge */}
        <motion.div
          {...fadeInUp(20, 0, 0.5)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md shadow-xs hover:scale-105 transition-transform duration-300 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-[rgb(var(--misaki-pink))] animate-pulse" />
          <span className="text-sm font-medium text-foreground">
            {t("badge")}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-tighter leading-tight whitespace-nowrap"
          {...fadeInUp(30, 0.2, 0.8)}
        >
          <span className="text-[rgb(var(--misaki-pink))]">
            {t("headline.explore")}
          </span>{" "}
          <span className="text-[rgb(var(--misaki-blue))]">
            {t("headline.build")}
          </span>{" "}
          <span className="text-foreground">{t("headline.innovate")}</span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center"
          {...fadeIn(0.4, 0.8)}
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          {...fadeInUp(20, 0.6, 0.8)}
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg overflow-hidden transition-[transform,box-shadow] hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("viewProjects")}{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/notes"
            className="px-8 py-4 bg-background/50 backdrop-blur-sm border border-border text-foreground rounded-full font-medium text-lg hover:bg-background/80 transition-[transform,background-color] hover:scale-105"
          >
            {t("exploreNotes")}
          </Link>
        </motion.div>

        {/* Info Carousel */}
        <motion.div
          className="w-full mt-8"
          {...fadeIn(0.8, 1)}
        >
          <InfoCarousel />
        </motion.div>
      </div>
    </section>
  );
};
