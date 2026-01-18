"use client";

import { motion } from "framer-motion";
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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-12">
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveFeature(index)}
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
                                className="h-full bg-gradient-to-r from-[rgb(var(--misaki-pink))] to-[rgb(var(--misaki-blue))]"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                            />
                        )}
                        {/* Completed State */}
                        {activeFeature > index && (
                            <div className="h-full w-full bg-foreground/20" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
