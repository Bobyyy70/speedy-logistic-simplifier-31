import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const TrackingInterface = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Suivi de colis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe 
            src="https://tracking.eu-central-1-0.sendcloud.sc/" 
            width="100%" 
            height="450px" 
            frameBorder="0" 
            style={{border: 0}}
            title="Suivi de colis SendCloud"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackingInterface;