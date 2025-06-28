
import React from "react";
import { Loader2, RefreshCw, AlertCircle } from "lucide-react";

interface HubSpotFormContainerProps {
  formLoading: boolean;
  formError: string | null;
  onRetry: () => void;
}

export const HubSpotFormContainer = ({ 
  formLoading, 
  formError, 
  onRetry 
}: HubSpotFormContainerProps) => {
  
  // Diagnostics pour l'utilisateur
  const showDiagnostics = () => {
    const diagnostics = {
      hubspotAvailable: !!window.hbspt,
      formsAvailable: !!(window.hbspt && window.hbspt.forms),
      scriptsLoaded: document.querySelectorAll('script[src*="hs-scripts"]').length,
      containerExists: !!document.getElementById('hubspot-form-container')
    };
    
    console.log('🔍 Diagnostics utilisateur:', diagnostics);
    alert(`Diagnostics HubSpot:\n\n- HubSpot disponible: ${diagnostics.hubspotAvailable ? 'Oui' : 'Non'}\n- Forms disponible: ${diagnostics.formsAvailable ? 'Oui' : 'Non'}\n- Scripts chargés: ${diagnostics.scriptsLoaded}\n- Container présent: ${diagnostics.containerExists ? 'Oui' : 'Non'}\n\nVoir la console pour plus de détails.`);
  };

  return (
    <div className="hubspot-form-wrapper">
      <div 
        id="hubspot-form-container"
        style={{ minHeight: '400px' }}
        className="relative"
      >
        {formLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="text-slate-600 text-center">
                Chargement du formulaire...
                <span className="block text-xs text-slate-500 mt-1">
                  Cela peut prendre quelques secondes
                </span>
              </p>
            </div>
          </div>
        )}
        
        {formError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center p-6 max-w-md">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">
                Problème de chargement
              </h3>
              <p className="text-red-600 mb-4 text-sm">
                {formError}
              </p>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={onRetry}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Réessayer
                </button>
                <button 
                  onClick={showDiagnostics}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-xs"
                >
                  Afficher les diagnostics
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Si le problème persiste, vous pouvez nous contacter directement par téléphone ou email.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
