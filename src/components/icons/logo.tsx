/**
 * Logo Component
 * Main brand logo component with gradient styling
 */

import { LogoIcon } from "./brand-icons";

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  size?: number;
}

export function Logo({ className = "", showIcon = true, size = 32 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <LogoIcon size={size} />}
      <span
        className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Stone
      </span>
    </div>
  );
}
