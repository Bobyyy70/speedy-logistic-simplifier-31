
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoIconProps {
  className?: string;
  withText?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export function LogoIcon({ className, withText = true, textSize = "md" }: LogoIconProps) {
  const textSizeClasses = {
    sm: "text-lg font-bold",
    md: "text-xl font-bold",
    lg: "text-2xl font-bold",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center justify-center bg-primary rounded-md p-1">
        <Truck className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      {withText && (
        <span className={cn("ml-2 text-foreground", textSizeClasses[textSize])}>
          <span>Speed</span>
          <span className="text-primary">E</span>
          <span>Log</span>
        </span>
      )}
    </div>
  );
}
