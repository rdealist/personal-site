"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CodeIcon, StarIcon, ArrowRightIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

type CarouselCategory = "skills" | "stats" | "capabilities";

const categoryIcons: Record<CarouselCategory, React.FC<{ size?: number; className?: string }>> = {
  skills: CodeIcon,
  stats: ArrowRightIcon,
  capabilities: StarIcon,
};

export const InfoCarousel = () => {
  const t = useTranslations("hero.carousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const categories: CarouselCategory[] = ["skills", "stats", "capabilities"];
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [categories.length, shouldReduceMotion]);

  const activeCategory = categories[activeIndex];
  const Icon = categoryIcons[activeCategory];

  // Get items for current category
  const getItems = (category: CarouselCategory): string[] => {
    const items: string[] = [];
    for (let i = 1; i <= 4; i++) {
      const key = `${category}.item${i}` as const;
      if (t.has(key)) {
        items.push(t(key));
      }
    }
    return items;
  };

  const items = getItems(activeCategory);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Content Row */}
      <div className="relative h-10 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-background/60 backdrop-blur-sm border border-border/50">
              <Icon size={16} className="text-muted-foreground" />
            </div>

            {/* Items */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className={cn(
                    "px-3 py-1 text-sm rounded-full",
                    "bg-background/60 backdrop-blur-sm border border-border/50",
                    "text-foreground/80"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center gap-2">
        {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                activeIndex === idx
                  ? "w-4 bg-gradient-to-r from-[rgb(var(--misaki-pink))] to-[rgb(var(--misaki-blue))]"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            aria-label={`Switch to ${categories[idx]}`}
          />
        ))}
      </div>
    </div>
  );
};
