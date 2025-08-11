import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ChevronRightSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const HomeSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 9l9-7 9 7" />
    <path d="M9 22V12h6v10" />
  </svg>
);

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbSEOProps {
  className?: string;
  customItems?: BreadcrumbItem[];
}

const routeLabels: Record<string, string> = {
  "/": "Accueil",
  "/services": "Services",
  "/contact": "Contact", 
  "/about": "À propos",
  "/pricing": "Tarification",
  "/faq": "FAQ",
  "/mentions-legales": "Mentions légales",
  "/politique-confidentialite": "Politique de confidentialité",
  "/cgv": "Conditions générales",
  "/technology": "Technologie"
};

export function BreadcrumbSEO({ className, customItems }: BreadcrumbSEOProps) {
  const location = useLocation();
  const path = location.pathname;

  // Don't show on home page
  if (path === "/") return null;

  const breadcrumbItems: BreadcrumbItem[] = customItems || [
    { label: "Accueil", href: "/" },
    { label: routeLabels[path] || "Page", href: path }
  ];

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://speedelog.net${item.href}`
    }))
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visual breadcrumb */}
      <nav 
        aria-label="Fil d'Ariane" 
        className={cn("flex items-center space-x-1 text-sm text-muted-foreground mb-6", className)}
      >
        <ol className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRightSVG className="h-4 w-4 mx-1 text-muted-foreground/60" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {index === 0 && <HomeSVG className="h-4 w-4 mr-1 inline" />}
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.href}
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  {index === 0 && <HomeSVG className="h-4 w-4 mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}