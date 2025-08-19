import React, { useEffect, useRef, useState } from "react";
import { getHubSpotConfig, hubSpotUtils } from "@/lib/hubspot-config";

/**
 * HubSpot Forms v2 embed: loads official SDK and renders the exact original form styling.
 * Ensures single script injection and prevents duplicate renders on modal reopen.
 * WARNING: Replace by the explicit script requested by the user (static portal + form ids)
 * This comes from: https://app.hubspot.com/forms/144571109/1f200fa6-947b-4da7-9436-d331bbe3f39f
 */
export const HubspotEmbeddedForm: React.FC = () => {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    // Use the explicit snippet requested by the user (static portal + form ids)
    const EMBED_SCRIPT_ID = "hs-forms-legacy-embed-script";
    const EMBED_SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/144571109.js";
    const EMBED_DIV = `<div class="hs-form-frame" data-region="eu1" data-form-id="1f200fa6-947b-4da7-9436-d331bbe3f39f" data-portal-id="144571109"></div>`;

    try {
      // Prevent duplicate injection
      if (!document.getElementById(EMBED_SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = EMBED_SCRIPT_ID;
        script.src = EMBED_SCRIPT_SRC;
        script.defer = true;
        script.onload = () => {
          if (!cancelled) setReady(true);
        };
        script.onerror = () => {
          console.error("Failed to load HubSpot legacy embed script:", EMBED_SCRIPT_SRC);
          if (!cancelled) setReady(true);
        };
        document.head.appendChild(script);
      } else {
        // If script already present, mark ready
        if (!cancelled) setReady(true);
      }

      // Render the hs form frame inside our container
      if (containerRef.current) {
        containerRef.current.innerHTML = EMBED_DIV;
      }
    } catch (e) {
      console.error("HubSpotEmbeddedForm error:", e);
      if (!cancelled) setReady(true);
    }

    return () => {
      cancelled = true;
    };
  }, []); // static snippet, no dynamic deps

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
