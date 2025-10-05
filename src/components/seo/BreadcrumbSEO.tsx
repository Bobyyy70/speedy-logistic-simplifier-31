import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbSEO: React.FC<BreadcrumbSEOProps> = ({ items, className }) => {
  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://speedelog.net${item.href}` })
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav aria-label="Fil d'ariane" className={cn("mb-6", className)}>
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
              )}
              {item.href && index < items.length - 1 ? (
                <Link
                  to={item.href}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
