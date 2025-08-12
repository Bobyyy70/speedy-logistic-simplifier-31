import React, { useEffect, useId, useState } from "react";

const SCRIPT_ID = "hs-forms-dev-144571109";
const SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/developer/144571109.js";

/**
 * Lightweight HubSpot embed wrapper using the provided developer script + data attributes.
 * Loads the script on-demand (when the component mounts) and avoids duplicate injections.
 */
export const HubspotEmbeddedForm: React.FC = () => {
  const [ready, setReady] = useState(false);
  const containerId = useId();

  useEffect(() => {
    // Ensure the script is present only once
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const handleReady = () => setReady(true);

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.defer = true;
      script.async = true;
      script.onload = handleReady;
      script.onerror = () => setReady(true); // fail open: show container so users see fallback if any
      document.head.appendChild(script);
    } else {
      // If already injected, consider it ready
      setReady(true);
    }

    return () => {
      // Keep the script cached for future openings, do not remove it
    };
  }, []);

  return (
    <div className="space-y-3">
      {!ready && (
        <div className="text-sm text-muted-foreground">Chargement du formulaire…</div>
      )}
      {/* The developer script will hydrate any .hs-form-html node with data attributes */}
      <div
        id={containerId}
        className="hs-form-html"
        data-region="eu1"
        data-form-id="d5353f82-5ee6-44c1-afd6-501f1f60728c"
        data-portal-id="144571109"
      />
      <noscript>
        Veuillez activer JavaScript pour afficher le formulaire HubSpot.
      </noscript>
    </div>
  );
};

export default HubspotEmbeddedForm;
