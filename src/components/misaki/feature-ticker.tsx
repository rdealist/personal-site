"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const features = [
    { id: 1, label: "Drawing & Animation" },
    { id: 2, label: "Design System" },
    { id: 3, label: "Prototyping" },
    { id: 4, label: "Development" },
];

export const FeatureTicker = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) return;
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [shouldReduceMotion]);

    return (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-12">
            {features.map((feature, index) => (
                <button
                    key={feature.id}
                    type="button"
                    className="relative group w-full text-left bg-transparent border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={() => setActiveFeature(index)}
                    aria-pressed={activeFeature === index}
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className={cn(
                            "text-lg font-medium transition-colors duration-300",
                            activeFeature === index ? "text-foreground" : "text-muted-foreground"
                        )}>
                            {feature.label}
                        </span>
                        <span className={cn(
                            "text-sm transition-colors duration-300",
                            activeFeature === index ? "text-[rgb(var(--misaki-blue))]" : "opacity-0"
                        )}>
                            0{index + 1}
                        </span>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                        {/* Active Progress Bar */}
                        {activeFeature === index && (
                            <motion.div
                                className="h-full origin-left bg-gradient-to-r from-[rgb(var(--misaki-pink))] to-[rgb(var(--misaki-blue))]"
                                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={shouldReduceMotion ? { duration: 0 } : { duration: 3, ease: "linear" }}
                            />
                        )}
                        {/* Completed State */}
                        {activeFeature > index && (
                            <div className="h-full w-full bg-foreground/20" />
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
};
