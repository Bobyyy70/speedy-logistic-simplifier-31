
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      console.log('Chargement du formulaire SAV HubSpot...');
      
      // Attendre que HubSpot soit disponible
      const loadForm = () => {
        if (typeof (window as any).hbspt !== 'undefined' && (window as any).hbspt.forms) {
          try {
            // Nettoyer le conteneur avant de créer un nouveau formulaire
            const container = document.getElementById('hs-sav-form-container');
            if (container) {
              container.innerHTML = '';
            }

            (window as any).hbspt.forms.create({
              region: "eu1",
              portalId: "144571109",
              formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
              target: "#hs-sav-form-container",
              onFormReady: () => {
                console.log('Formulaire SAV HubSpot prêt');
                setIsFormLoaded(true);
              },
              onFormSubmit: () => {
                console.log('Formulaire SAV soumis');
              }
            });
          } catch (error) {
            console.error('Erreur lors du chargement du formulaire SAV:', error);
          }
        } else {
          // Réessayer dans 500ms si HubSpot n'est pas encore chargé
          setTimeout(loadForm, 500);
        }
      };

      // Démarrer le chargement après un petit délai
      setTimeout(loadForm, 100);
      
      return () => {
        setIsFormLoaded(false);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Après-Vente</DialogTitle>
          <DialogDescription>
            Un problème avec votre commande ? Contactez notre équipe SAV.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px] relative">
          {!isFormLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
                <p className="text-slate-600 text-sm">Chargement du formulaire...</p>
              </div>
            </div>
          )}
          <div id="hs-sav-form-container" className="w-full"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
