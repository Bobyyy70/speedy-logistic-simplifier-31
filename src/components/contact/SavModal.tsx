
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
        <div className="min-h-[500px]">
          <iframe 
            src="https://share-eu1.hsforms.com/1434e2703-cd85-4a7d-a84b-69d4b12f04d6Falmanzo"
            width="100%" 
            height="500" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Formulaire SAV Speed E-Log"
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
