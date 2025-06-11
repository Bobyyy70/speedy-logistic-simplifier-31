
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      console.log('Chargement du formulaire de contact HubSpot...');
      
      // Attendre que HubSpot soit disponible
      const loadForm = () => {
        if (typeof (window as any).hbspt !== 'undefined' && (window as any).hbspt.forms) {
          try {
            // Nettoyer le conteneur avant de créer un nouveau formulaire
            const container = document.getElementById('hs-contact-form-container');
            if (container) {
              container.innerHTML = '';
            }

            (window as any).hbspt.forms.create({
              region: "eu1",
              portalId: "144571109",
              formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
              target: "#hs-contact-form-container",
              onFormReady: () => {
                console.log('Formulaire de contact HubSpot prêt');
                setIsFormLoaded(true);
              },
              onFormSubmit: () => {
                console.log('Formulaire de contact soumis');
              }
            });
          } catch (error) {
            console.error('Erreur lors du chargement du formulaire de contact:', error);
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
          <DialogTitle>Formulaire de Contact</DialogTitle>
          <DialogDescription>
            Parlez-nous de votre projet et obtenez une réponse personnalisée sous 24h.
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
          <div id="hs-contact-form-container" className="w-full"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
