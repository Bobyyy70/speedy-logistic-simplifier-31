import React from "react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

interface DefinitionBlockProps {
  term: string;
  definition: string;
  url?: string;
  additionalInfo?: string;
  className?: string;
}

export const DefinitionBlock: React.FC<DefinitionBlockProps> = ({
  term,
  definition,
  url,
  additionalInfo,
  className
}) => {
  // Generate DefinedTerm Schema
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term,
    "description": definition,
    ...(url && { "url": url })
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(definedTermSchema)}
        </script>
      </Helmet>

      <div className={cn(
        "p-6 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900/60 dark:to-slate-900/30",
        "border border-slate-200 dark:border-slate-800",
        className
      )}>
        <div className="flex items-start gap-3 mb-3">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Qu'est-ce que {term} ?
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400">{term}</strong> est défini comme : {definition}
            </p>
          </div>
        </div>
        
        {additionalInfo && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 pl-8">
            {additionalInfo}
          </p>
        )}
      </div>
    </>
  );
};
