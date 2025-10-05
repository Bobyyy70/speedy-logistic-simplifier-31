import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Award, CheckCircle2, TrendingUp, Users, Star } from "lucide-react";

interface QualityBadgeProps {
  type: "certification" | "satisfaction" | "experience" | "clients" | "precision" | "custom";
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const iconMap = {
  certification: Award,
  satisfaction: Star,
  experience: TrendingUp,
  clients: Users,
  precision: CheckCircle2,
  custom: Shield
};

export const QualityBadge: React.FC<QualityBadgeProps> = ({
  type,
  value,
  label,
  icon,
  className
}) => {
  const Icon = iconMap[type];

  return (
    <div className={cn(
      "inline-flex items-center gap-3 px-4 py-3 rounded-lg",
      "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10",
      "border border-blue-200 dark:border-blue-800/50",
      "shadow-sm",
      className
    )}>
      <div className="flex-shrink-0">
        {icon || <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {value}
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};
