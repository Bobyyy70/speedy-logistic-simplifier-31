import React from "react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface Step {
  name: string;
  text: string;
  duration?: string;
  tip?: string;
}

interface HowToStepsProps {
  title: string;
  description: string;
  steps: Step[];
  totalTime?: string;
  className?: string;
}

export const HowToSteps: React.FC<HowToStepsProps> = ({
  title,
  description,
  steps,
  totalTime,
  className
}) => {
  // Generate HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.duration && { "duration": step.duration })
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      <div className={cn("space-y-6", className)}>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {description}
          </p>
          {totalTime && (
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
              Temps total estimé : {totalTime}
            </p>
          )}
        </div>

        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {step.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  {step.text}
                </p>
                {step.duration && (
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    ⏱️ {step.duration}
                  </p>
                )}
                {step.tip && (
                  <div className="mt-2 flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-900 dark:text-blue-300">
                      <strong>Conseil :</strong> {step.tip}
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
