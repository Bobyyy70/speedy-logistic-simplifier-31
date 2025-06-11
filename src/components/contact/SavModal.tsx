
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  useEffect(() => {
    if (open) {
      // Charger le script HubSpot quand la modal s'ouvre
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.defer = true;
      script.id = 'hs-sav-script';
      
      // Supprimer le script existant s'il y en a un
      const existingScript = document.getElementById('hs-sav-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
      
      // Créer le formulaire une fois le script chargé
      script.onload = () => {
        if ((window as any).hbspt?.forms) {
          setTimeout(() => {
            try {
              (window as any).hbspt.forms.create({
                region: "eu1",
                portalId: "144571109",
                formId: "434e2703-cd85-4a7d-a84b-69d4b12f04d6",
                target: "#hubspot-sav-form"
              });
            } catch (error) {
              console.error('Erreur lors du chargement du formulaire SAV HubSpot:', error);
            }
          }, 100);
        }
      };
      
      return () => {
        // Nettoyage du script quand la modal se ferme
        const scriptToRemove = document.getElementById('hs-sav-script');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Après-Vente - Speed E-Log</DialogTitle>
          <DialogDescription>
            Un problème avec votre commande ? Notre équipe SAV vous répond rapidement.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px]">
          <div id="hubspot-sav-form"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
