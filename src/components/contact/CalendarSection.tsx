
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const CalendarSection = () => {
  useEffect(() => {
    // Simple and clean HubSpot calendar loading
    const loadCalendar = () => {
      // Remove any existing scripts to avoid conflicts
      const existingScript = document.querySelector('script[src*="MeetingsEmbedCode"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and load the script
      const script = document.createElement('script');
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('HubSpot meetings script loaded successfully');
        // Wait a bit for the script to initialize
        setTimeout(() => {
          try {
            if (window.hbspt && window.hbspt.meetings) {
              window.hbspt.meetings.create({
                portalId: "144571109",
                meetingId: "falmanzo",
                target: "#meetings-container"
              });
            }
          } catch (error) {
            console.error('Error initializing HubSpot calendar:', error);
          }
        }, 500);
      };

      script.onerror = () => {
        console.error('Failed to load HubSpot meetings script');
      };

      document.head.appendChild(script);
    };

    // Load after component mounts
    const timer = setTimeout(loadCalendar, 300);
    
    return () => {
      clearTimeout(timer);
    };
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
          id="meetings-container"
          className="w-full h-full min-h-[600px]" 
        ></div>
      </div>
    </motion.section>
  );
};
