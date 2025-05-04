
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const CalendarWidget = () => {
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
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Prendre rendez-vous</h3>
          <p className="text-sm text-muted-foreground">
            Sélectionnez une date et un horaire qui vous convient pour un appel de 15 minutes
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative h-[600px] w-full rounded-md" style={{ scrollBehavior: "smooth" }}>
            <Cal
              namespace="15min"
              calLink="admin-speedelog.net/15min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ 
                "layout": "month_view",
                "hideEventTypeDetails": false,
                "bookerLayouts": {
                  "default": {
                    "showRemoveCalendarButton": true
                  }
                }
              }}
              calOrigin="https://calcom.speedelog.space"
              embedJsUrl="https://calcom.speedelog.space/embed/embed.js"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CalendarWidget;
