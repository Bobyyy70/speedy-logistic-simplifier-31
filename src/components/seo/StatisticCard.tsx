import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, ExternalLink } from "lucide-react";

interface StatisticCardProps {
  value: string;
  label: string;
  source?: string;
  sourceUrl?: string;
  trend?: "up" | "down" | "stable";
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  source,
  sourceUrl,
  trend,
  className
}) => {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-white dark:bg-slate-900/60",
      "border border-slate-200 dark:border-slate-800",
      "shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex items-start justify-between mb-2">
        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
          {value}
        </div>
        {trend && (
          <TrendingUp className={cn(
            "w-5 h-5",
            trend === "up" && "text-green-600 dark:text-green-400",
            trend === "down" && "text-red-600 dark:text-red-400 rotate-180",
            trend === "stable" && "text-slate-400 dark:text-slate-600"
          )} />
        )}
      </div>
      
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
        {label}
      </p>
      
      {source && (
        <div className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1">
          <span>Source :</span>
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              {source}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span>{source}</span>
          )}
        </div>
      )}
    </div>
  );
};
