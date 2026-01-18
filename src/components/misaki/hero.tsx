"use client";

import { motion } from "framer-motion";
import { FeatureTicker } from "./feature-ticker";
import { KoiBackground } from "./koi-background";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
            <KoiBackground />

            <div className="z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-8 pt-20">

                {/* Beta Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md shadow-xs hover:scale-105 transition-transform duration-300 cursor-default"
                >
                    <span className="w-2 h-2 rounded-full bg-[rgb(var(--misaki-pink))] animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Currently in Beta</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight flex flex-col md:block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-[rgb(var(--misaki-pink))] inline-block">Design.</span>{" "}
                    <span className="text-[rgb(var(--misaki-blue))] inline-block">to Code.</span>{" "}
                    <span className="text-foreground inline-block">Animate.</span>
                </motion.h1>

                {/* Subtitle / Description */}
                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Recreating the magical landing page experience.
                    Smooth animations, vibrant colors, and modern aesthetics.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="px-8 py-4 bg-background/50 backdrop-blur-sm border border-border text-foreground rounded-full font-medium text-lg hover:bg-background/80 transition-all hover:scale-105">
                        View Design System
                    </button>
                </motion.div>

                {/* Ticker Section */}
                <motion.div
                    className="w-full mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <FeatureTicker />
                </motion.div>
            </div>
        </section>
    );
};
