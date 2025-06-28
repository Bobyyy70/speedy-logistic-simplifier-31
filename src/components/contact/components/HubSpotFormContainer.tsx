
import React from "react";
import { Loader2 } from "lucide-react";

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
  return (
    <div className="hubspot-form-wrapper">
      <div 
        id="hubspot-form-container"
        style={{ minHeight: '400px' }}
        className="relative"
      >
        {formLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="text-slate-600">Chargement du formulaire...</p>
            </div>
          </div>
        )}
        
        {formError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center p-6">
              <p className="text-red-600 mb-4">{formError}</p>
              <button 
                onClick={onRetry}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Réessayer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
