import React, { useMemo, useState } from "react";
import { useSEOMonitoring } from "@/hooks/use-seo-monitoring";

export const SeoAuditWidget: React.FC = () => {
  const { seoScore, recommendations, validation, isLoading } = useSEOMonitoring();
  const [open, setOpen] = useState(false);

  const badgeColor = useMemo(() => {
    if (seoScore >= 90) return "bg-green-500";
    if (seoScore >= 75) return "bg-yellow-500";
    return "bg-red-500";
  }, [seoScore]);

  if (import.meta.env.PROD) return null;

  return (
    <aside className="fixed right-4 bottom-4 z-[9999] select-none">
      <button
        type="button"
        aria-label="Ouvrir l'audit SEO"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-lg text-white ${badgeColor}`}
        title="Audit SEO (dev-only)"
      >
        <span className="font-semibold">SEO {isLoading ? "…" : `${seoScore}/100`}</span>
        {recommendations.length > 0 && (
          <span className="text-xs bg-black/20 rounded-full px-2 py-0.5">
            {recommendations.length}
          </span>
        )}
      </button>

      {open && (
        <div className="mt-2 w-[320px] max-w-[90vw] rounded-xl bg-white shadow-2xl border p-3 text-sm">
          <div className="mb-2 font-semibold">Recommandations</div>
          {recommendations.length === 0 ? (
            <p>Aucune recommandation majeure. Bien joué !</p>
          ) : (
            <ul className="list-disc pl-5 space-y-1">
              {recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          )}
          {validation && (
            <div className="mt-3 grid grid-cols-2 gap-2 opacity-80">
              <div>Titre: {validation.titleLength} car.</div>
              <div>Desc.: {validation.descriptionLength} car.</div>
              <div>H1: {validation.h1Count}</div>
              <div>Images sans alt: {validation.imagesMissingAlt}</div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};
