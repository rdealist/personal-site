"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

export const NoiseOverlay = ({ className, opacity = 0.05 }: { className?: string, opacity?: number }) => {
    // Base64 SVG Noise Pattern
    // This creates a grainy texture without needing an external image file
    const noiseImage = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E`;

    return (
        <div
            className={cn("pointer-events-none absolute inset-0 z-50", className)}
            style={{
                backgroundImage: `url("${noiseImage}")`,
                opacity: opacity,
                mixBlendMode: "overlay"
            }}
        />
    );
};
