
import React from "react";
import { cn } from "@/lib/utils";
import { Ship } from "lucide-react";

type LogoIconProps = {
  className?: string;
  size?: number;
};

export const LogoIcon = React.forwardRef<HTMLDivElement, LogoIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-flex items-center", className)} {...props}>
        <Ship size={size} className="text-blue-600 dark:text-blue-400" />
      </div>
    );
  }
);
LogoIcon.displayName = "LogoIcon";

export const HomeLogoIcon = React.forwardRef<HTMLDivElement, LogoIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-block", className)} {...props}>
        <LogoIcon size={32} />
      </div>
    );
  }
);
HomeLogoIcon.displayName = "HomeLogoIcon";

export const LogoWithText = React.forwardRef<
  HTMLDivElement,
  LogoIconProps & { text?: string }
>(({ className, text = "Speed E-Log", ...props }, ref) => {
  return (
    <div ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      <LogoIcon />
      <span className="font-bold text-lg text-blue-700 dark:text-blue-400">{text}</span>
    </div>
  );
});
LogoWithText.displayName = "LogoWithText";

export const HomeLogoWithText = React.forwardRef<HTMLDivElement, LogoIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-block", className)} {...props}>
        <LogoWithText text="Speed E-Log" />
      </div>
    );
  }
);
HomeLogoWithText.displayName = "HomeLogoWithText";
