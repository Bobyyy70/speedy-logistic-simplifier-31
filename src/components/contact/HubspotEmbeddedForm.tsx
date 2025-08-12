import React, { useEffect, useRef, useState } from "react";
import { getHubSpotConfig, hubSpotUtils } from "@/lib/hubspot-config";

const SCRIPT_ID = "hs-forms-v2-script";

/**
 * HubSpot Forms v2 embed: loads official SDK and renders the exact original form styling.
 * Ensures single script injection and prevents duplicate renders on modal reopen.
 */
export const HubspotEmbeddedForm: React.FC = () => {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const config = getHubSpotConfig();

  useEffect(() => {
    let cancelled = false;

    const ensureScriptLoaded = () =>
      new Promise<void>((resolve, reject) => {
        if (hubSpotUtils.isHubSpotLoaded()) {
          resolve();
          return;
        }
        let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
        if (script && (window as any).hbspt) {
          resolve();
          return;
        }
        if (!script) {
          script = document.createElement("script");
          script.id = SCRIPT_ID;
          script.src = hubSpotUtils.getV2ScriptUrl(config);
          script.async = true;
          script.defer = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load HubSpot forms v2.js"));
          document.head.appendChild(script);
        } else {
          script.addEventListener("load", () => resolve(), { once: true });
          script.addEventListener("error", () => reject(new Error("Failed to load HubSpot forms v2.js")), { once: true });
        }
      });

    const render = async () => {
      try {
        await ensureScriptLoaded();
        if (cancelled) return;
        if (containerRef.current) {
          // Clear any previous markup to avoid duplicate forms
          containerRef.current.innerHTML = "";
          await hubSpotUtils.createForm(config.forms.quote, containerRef.current, config);
        }
        if (!cancelled) setReady(true);
      } catch (err) {
        console.error("HubSpot form load error:", err);
        if (!cancelled) setReady(true); // fail-open so users still see container/fallback
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [config.forms.quote, config.portalId, config.region]);

  return (
    <div className="space-y-3">
      {!ready && (
        <div className="text-sm text-muted-foreground">Chargement du formulaire…</div>
      )}
      <div ref={containerRef} />
      <noscript>Veuillez activer JavaScript pour afficher le formulaire HubSpot.</noscript>
    </div>
  );
};

export default HubspotEmbeddedForm;
