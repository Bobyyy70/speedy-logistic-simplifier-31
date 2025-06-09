
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHubSpot } from "@/hooks/useHubSpot";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  const { createSavForm } = useHubSpot();

  useEffect(() => {
    if (open) {
      createSavForm("sav-form-container");
    }
  }, [open, createSavForm]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Après-Vente</DialogTitle>
          <DialogDescription>
            Un problème avec votre commande ? Contactez notre équipe SAV.
          </DialogDescription>
        </DialogHeader>
        <div id="sav-form-container" className="min-h-[400px]"></div>
      </DialogContent>
    </Dialog>
  );
};
