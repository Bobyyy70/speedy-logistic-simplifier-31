
import React, { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHubSpot } from "@/hooks/useHubSpot";

interface SavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SavModal = ({ open, onOpenChange }: SavModalProps) => {
  const { createSavForm } = useHubSpot();
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && formContainerRef.current) {
      // Clear any existing form
      formContainerRef.current.innerHTML = '';
      
      // Create the HubSpot form
      setTimeout(() => {
        createSavForm('hubspot-sav-form');
      }, 100);
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
        <div className="min-h-[400px] w-full">
          <div id="hubspot-sav-form" ref={formContainerRef}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
