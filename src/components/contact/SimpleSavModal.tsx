
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HubSpotSavForm } from "./HubSpotSavForm";

interface SimpleSavModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SimpleSavModal = ({ open, onOpenChange }: SimpleSavModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Service Après-Vente</DialogTitle>
        </DialogHeader>
        <HubSpotSavForm isModalOpen={open} />
      </DialogContent>
    </Dialog>
  );
};
