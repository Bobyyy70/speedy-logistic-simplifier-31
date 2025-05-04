
import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const CalendarWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        "namespace": "15min",
        "embedJsUrl": "https://calcom.speedelog.space/embed/embed.js"
      });
      cal("ui", { "hideEventTypeDetails": true, "layout": "week_view" });
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full"
    >
      <Card className="relative z-10">
        <CardHeader>
          <h3 className="text-xl font-semibold">Prendre rendez-vous</h3>
          <p className="text-sm text-muted-foreground">
            Sélectionnez une date et un horaire qui vous convient pour un appel de 15 minutes
          </p>
        </CardHeader>
        <CardContent>
          <motion.div
            className="relative rounded-md overflow-hidden"
            animate={{
              height: isExpanded ? "80vh" : "600px",
              zIndex: isExpanded ? 50 : 1
            }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onTouchStart={() => setIsExpanded(true)}
            style={{ scrollBehavior: "smooth" }}
          >
            {isExpanded && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <div
              className={`relative z-50 w-full h-full ${isExpanded ? "shadow-2xl" : ""}`}
            >
              <Cal
                namespace="15min"
                calLink="admin-speedelog.net/15min"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{ 
                  layout: "month_view",
                  hideEventTypeDetails: false,
                  bookerLayouts: {
                    default: {
                      showRemoveCalendarButton: true
                    }
                  }
                }}
                calOrigin="https://calcom.speedelog.space"
                embedJsUrl="https://calcom.speedelog.space/embed/embed.js"
              />
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CalendarWidget;
