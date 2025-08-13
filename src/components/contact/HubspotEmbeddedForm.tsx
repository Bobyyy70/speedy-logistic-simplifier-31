import React, { useEffect, useRef, useState } from "react";
import { getHubSpotConfig, hubSpotUtils } from "@/lib/hubspot-config";

const SCRIPT_ID = "hs-forms-v2-script";
const EMBED_SCRIPT_ID = "hs-forms-embed-components-script";

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
      const fallbackLegacyEmbed = async () => {
        try {
          if (!containerRef.current) return;
          // Prepare container for legacy embed components script
          containerRef.current.innerHTML = "";
          const target = document.createElement("div");
          target.className = "hs-form-frame";
          target.setAttribute("data-region", config.region || "eu1");
          target.setAttribute("data-form-id", config.forms.quote);
          target.setAttribute("data-portal-id", config.portalId);
          containerRef.current.appendChild(target);

          // Load legacy embed script once
          let embedScript = document.getElementById(EMBED_SCRIPT_ID) as HTMLScriptElement | null;
          if (!embedScript) {
            embedScript = document.createElement("script");
            embedScript.id = EMBED_SCRIPT_ID;
            embedScript.src = hubSpotUtils.getScriptUrl(config);
            embedScript.defer = true;
            embedScript.onload = () => {
              if (!cancelled) setReady(true);
            };
            embedScript.onerror = async () => {
              console.error("HubSpot legacy embed failed to load; trying v2 SDK");
              try {
                await ensureScriptLoaded();
                if (cancelled) return;
                if (containerRef.current) {
                  containerRef.current.innerHTML = "";
                  await hubSpotUtils.createForm(config.forms.quote, containerRef.current, config);
                }
                if (!cancelled) setReady(true);
              } catch (e2) {
                console.error("HubSpot v2 fallback also failed:", e2);
                if (!cancelled) setReady(true);
              }
            };
            document.head.appendChild(embedScript);
          } else {
            // Script already present; assume it processes current DOM
            if (!cancelled) setReady(true);
          }
        } catch (e) {
          console.error("HubSpot fallback error:", e);
          if (!cancelled) setReady(true);
        }
      };

      // Prefer legacy embed components first to reduce 403s on dev domains
      await fallbackLegacyEmbed();
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
