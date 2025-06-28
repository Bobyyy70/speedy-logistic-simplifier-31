
import React from "react";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarContainer } from "./components/CalendarContainer";

interface CalendarBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarBookingPopup = ({ isOpen, onClose }: CalendarBookingPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            Choisissez votre créneau
          </DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          <p className="text-slate-600">
            Sélectionnez le créneau qui vous convient le mieux pour votre consultation gratuite de 15 minutes.
          </p>
        </div>

        <CalendarContainer />
      </DialogContent>
    </Dialog>
  );
};
