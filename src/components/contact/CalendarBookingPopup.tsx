
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHubSpotFormLoader } from "./hooks/useHubSpotFormLoader";
import { HubSpotFormContainer } from "./components/HubSpotFormContainer";
import { CalendarContainer } from "./components/CalendarContainer";
import { hubspotFormStyles } from "./styles/hubspot-form-styles";

interface CalendarBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarBookingPopup = ({ isOpen, onClose }: CalendarBookingPopupProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleFormSubmitted = (data: any) => {
    setSubmittedData(data);
    setTimeout(() => {
      setShowCalendar(true);
    }, 1000);
  };

  const { formLoading, formError, loadHubSpotForm } = useHubSpotFormLoader({
    isOpen,
    showCalendar,
    onFormSubmitted: handleFormSubmitted
  });

  // Reset state when closing
  const handleClose = () => {
    setShowCalendar(false);
    setSubmittedData(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            {!showCalendar ? "Planifiez votre rendez-vous" : "Choisissez votre créneau"}
          </DialogTitle>
        </DialogHeader>

        {/* Inject CSS styles */}
        <style dangerouslySetInnerHTML={{ __html: hubspotFormStyles }} />

        <AnimatePresence mode="wait">
          {!showCalendar ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <p className="text-slate-600">
                  Aidez-nous à mieux préparer votre consultation en complétant ce court formulaire.
                </p>
              </div>

              <HubSpotFormContainer
                formLoading={formLoading}
                formError={formError}
                onRetry={loadHubSpotForm}
              />
            </motion.div>
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CalendarContainer />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
