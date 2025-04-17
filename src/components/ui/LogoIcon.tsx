
import React from "react";
import { cn } from "@/lib/utils";
import { Ship } from "lucide-react";

// Base LogoIcon component
const LogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("inline-flex", className)}>
      <Ship className="h-6 w-6" />
    </div>
  );
};

// LogoIcon with text - used in Header and Footer
const LogoIconWithText: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("inline-flex items-center space-x-2", className)}>
      <Ship className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">
        Speed E-Log
      </span>
    </div>
  );
};

// Logo variant for the homepage hero section
const HomeLogoWithText: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("inline-flex items-center space-x-2", className)}>
      <Ship className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-green-400">
        Speed E-Log
      </span>
    </div>
  );
};

export { LogoIcon, LogoIconWithText, HomeLogoWithText };
