
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  useEffect(() => {
    if (open) {
      // Load the HubSpot script when modal opens
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
      script.defer = true;
      script.id = 'hs-sav-script';
      
      // Remove existing script if any
      const existingScript = document.getElementById('hs-sav-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script when modal closes
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
          <DialogTitle>Service Après-Vente</DialogTitle>
          <DialogDescription>
            Un problème avec votre commande ? Contactez notre équipe SAV.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px]">
          <div 
            className="hs-form-frame" 
            data-region="eu1" 
            data-form-id="434e2703-cd85-4a7d-a84b-69d4b12f04d6" 
            data-portal-id="144571109"
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
