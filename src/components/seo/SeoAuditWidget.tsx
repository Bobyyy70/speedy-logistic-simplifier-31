import React, { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SeoCheck {
  name: string;
  status: "pass" | "fail" | "warning";
  message: string;
}

export const SeoAuditWidget: React.FC = () => {
  const [checks, setChecks] = useState<SeoCheck[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (import.meta.env.MODE !== 'development') return;
    
    setIsVisible(true);
    
    const runChecks = () => {
      const results: SeoCheck[] = [];
      
      // Check canonical tag
      const canonical = document.querySelector('link[rel="canonical"]');
      results.push({
        name: "Canonical Tag",
        status: canonical ? "pass" : "fail",
        message: canonical 
          ? `✓ Canonical: ${canonical.getAttribute('href')}` 
          : "✗ Missing canonical tag"
      });
      
      // Check title
      const title = document.querySelector('title');
      const titleLength = title?.textContent?.length || 0;
      results.push({
        name: "Title Tag",
        status: titleLength > 0 && titleLength <= 60 ? "pass" : titleLength > 60 ? "warning" : "fail",
        message: `Title: ${titleLength} chars ${titleLength > 60 ? '(too long)' : titleLength === 0 ? '(missing)' : ''}`
      });
      
      // Check meta description
      const description = document.querySelector('meta[name="description"]');
      const descLength = description?.getAttribute('content')?.length || 0;
      results.push({
        name: "Meta Description",
        status: descLength >= 120 && descLength <= 160 ? "pass" : descLength > 160 ? "warning" : "fail",
        message: `Description: ${descLength} chars ${descLength > 160 ? '(too long)' : descLength < 120 ? '(too short)' : ''}`
      });
      
      // Check H1
      const h1s = document.querySelectorAll('h1');
      results.push({
        name: "H1 Tag",
        status: h1s.length === 1 ? "pass" : h1s.length > 1 ? "warning" : "fail",
        message: `H1 count: ${h1s.length} ${h1s.length !== 1 ? '(should be exactly 1)' : ''}`
      });
      
      // Check Open Graph
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      results.push({
        name: "Open Graph",
        status: ogTitle && ogDesc && ogImage ? "pass" : "warning",
        message: `OG tags: ${[ogTitle, ogDesc, ogImage].filter(Boolean).length}/3`
      });
      
      // Check structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      results.push({
        name: "Structured Data",
        status: structuredData.length > 0 ? "pass" : "warning",
        message: `JSON-LD schemas: ${structuredData.length}`
      });
      
      setChecks(results);
    };
    
    // Run checks after a delay to let the page load
    setTimeout(runChecks, 1000);
    
    // Re-run on route changes
    const observer = new MutationObserver(runChecks);
    observer.observe(document.head, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  if (!isVisible || import.meta.env.MODE !== 'development') return null;

  const score = checks.filter(c => c.status === "pass").length;
  const total = checks.length;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-xl border-2 border-blue-200 bg-white/95 backdrop-blur">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center justify-between">
            <span>SEO Audit</span>
            <span className={`text-lg font-bold ${percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
              {percentage}%
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-xs">
          {checks.map((check, index) => (
            <div key={index} className="flex items-start gap-2">
              {check.status === "pass" && <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />}
              {check.status === "fail" && <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />}
              {check.status === "warning" && <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />}
              <span className="text-slate-700">{check.message}</span>
            </div>
          ))}
          <div className="pt-2 mt-2 border-t text-slate-500 italic">
            Dev mode only - Hidden in production
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
