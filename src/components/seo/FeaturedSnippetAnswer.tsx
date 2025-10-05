import React from "react";
import { cn } from "@/lib/utils";

interface FeaturedSnippetAnswerProps {
  question: string;
  answer: string;
  type?: "direct" | "list" | "steps" | "definition";
  items?: string[];
  className?: string;
}

export const FeaturedSnippetAnswer: React.FC<FeaturedSnippetAnswerProps> = ({
  question,
  answer,
  type = "direct",
  items = [],
  className
}) => {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {question}
      </h3>
      
      {type === "direct" && (
        <p className="text-base text-slate-700 dark:text-slate-300">
          <strong className="text-blue-600 dark:text-blue-400">La réponse est :</strong> {answer}
        </p>
      )}

      {type === "definition" && (
        <p className="text-base text-slate-700 dark:text-slate-300">
          {answer}
        </p>
      )}

      {type === "list" && (
        <>
          <p className="text-base text-slate-700 dark:text-slate-300">{answer}</p>
          {items.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </>
      )}

      {type === "steps" && (
        <>
          <p className="text-base text-slate-700 dark:text-slate-300">{answer}</p>
          {items.length > 0 && (
            <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4">
              {items.map((item, index) => (
                <li key={index} className="font-medium">{item}</li>
              ))}
            </ol>
          )}
        </>
      )}
    </div>
  );
};
