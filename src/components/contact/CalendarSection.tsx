
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const CalendarSection = () => {
  useEffect(() => {
    // Load HubSpot meetings script and initialize calendar
    const loadHubSpotCalendar = () => {
      // Check if script is already loaded
      if (document.querySelector('script[src*="MeetingsEmbedCode"]')) {
        // If script exists, try to initialize the calendar
        if ((window as any).hbspt?.meetings) {
          (window as any).hbspt.meetings.create({
            portalId: "144571109",
            meetingId: "falmanzo", 
            target: ".meetings-iframe-container"
          });
        }
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      script.onload = () => {
        console.log('HubSpot meetings script loaded');
        // Initialize calendar after script loads
        if ((window as any).hbspt?.meetings) {
          (window as any).hbspt.meetings.create({
            portalId: "144571109",
            meetingId: "falmanzo",
            target: ".meetings-iframe-container"
          });
        }
      };
      document.head.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadHubSpotCalendar, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8 text-blue-600" />
          Planifiez votre rendez-vous
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Réservez un créneau de 15 minutes pour discuter de votre projet logistique avec notre équipe d'experts.
        </p>
      </div>
      
      <div className="min-h-[600px] border border-slate-200 rounded-xl overflow-hidden bg-white">
        <div 
          className="meetings-iframe-container w-full h-full min-h-[600px]" 
        ></div>
      </div>
    </motion.section>
  );
};
