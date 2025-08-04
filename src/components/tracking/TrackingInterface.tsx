import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const TrackingInterface = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Package className="h-5 w-5" />
          Suivi de colis
        </h2>
      </div>
      <div className="w-full rounded-lg border overflow-hidden">
        <iframe 
          src="https://tracking.eu-central-1-0.sendcloud.sc/" 
          width="100%" 
          height="600px" 
          frameBorder="0" 
          style={{border: 0}}
          title="Suivi de colis SendCloud"
          onError={() => console.error('Iframe failed to load')}
          onLoad={() => console.log('Iframe loaded successfully')}
        />
      </div>
    </div>
  );
};

export default TrackingInterface;