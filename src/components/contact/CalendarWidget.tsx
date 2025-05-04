
import React, { useState } from "react";
import Cal from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const CalendarWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await Cal.getCalApi();
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#3182ce'
          }
        },
        hideEventTypeDetails: false
      });
    })();
  }, []);

  // Handlers pour l'expansion/contraction du calendrier
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  // Animations avec framer-motion
  const variants = {
    expanded: {
      height: "600px",
      zIndex: 50
    },
    collapsed: {
      height: "350px",
      zIndex: 10
    }
  };

  return (
    <>
      {/* Backdrop flou qui apparaît lorsque le calendrier est développé */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <motion.div 
        className="relative overflow-auto border border-gray-200 rounded-lg shadow-lg"
        variants={variants}
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <Cal
          calLink="speedelog/30min"
          style={{ width: "100%", height: "100%", overflow: "auto" }}
          config={{
            layout: "month_view",
            hideEventTypeDetails: false,
            uiOptions: {
              hideEventTypeDetails: false
            }
          }}
        />
      </motion.div>
    </>
  );
};

export default CalendarWidget;
