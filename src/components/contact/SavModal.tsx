
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Après-Vente</DialogTitle>
          <DialogDescription>
            Un problème avec votre commande ? Contactez notre équipe SAV.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px] w-full">
          {/* Formulaire SAV HubSpot avec votre code d'intégration */}
          <div className="hs-form-frame" data-region="eu1" data-form-id="434e2703-cd85-4a7d-a84b-69d4b12f04d6" data-portal-id="144571109"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
