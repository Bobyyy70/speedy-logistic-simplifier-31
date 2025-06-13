
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HubSpotContactForm } from "./HubSpotContactForm";

interface SimpleContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SimpleContactModal = ({ open, onOpenChange }: SimpleContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nous contacter</DialogTitle>
        </DialogHeader>
        <HubSpotContactForm isModalOpen={open} />
      </DialogContent>
    </Dialog>
  );
};
