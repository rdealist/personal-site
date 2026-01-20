"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "w-9 h-9 rounded-lg flex items-center justify-center",
        "bg-muted hover:bg-primary/10 transition-colors",
        "border border-border hover:border-primary/50"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" && <SunIcon size={16} />}
      {theme === "dark" && <MoonIcon size={16} />}
      {theme === "system" && <SunIcon size={16} />}
    </button>
  );
}
