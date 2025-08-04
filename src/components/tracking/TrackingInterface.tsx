import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation-utils";
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface TrackingEvent {
  id: string;
  status: string;
  location: string;
  date: string;
  time: string;
  description: string;
  isCompleted: boolean;
}

interface TrackingData {
  trackingNumber: string;
  status: "delivered" | "in-transit" | "pending" | "error";
  carrier: string;
  estimatedDelivery?: string;
  events: TrackingEvent[];
}

const TrackingInterface = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [error, setError] = useState("");

  const mockTrackingData: TrackingData = {
    trackingNumber: "SP123456789FR",
    status: "in-transit",
    carrier: "Colissimo",
    estimatedDelivery: "Demain avant 18h",
    events: [
      {
        id: "1",
        status: "Colis créé",
        location: "Lyon, France",
        date: "03/01/2025",
        time: "09:15",
        description: "Votre colis a été pris en charge par notre entrepôt",
        isCompleted: true
      },
      {
        id: "2",
        status: "En cours d'acheminement",
        location: "Paris, France",
        date: "03/01/2025",
        time: "15:30",
        description: "Colis en transit vers votre centre de livraison",
        isCompleted: true
      },
      {
        id: "3",
        status: "Arrivé au centre de tri",
        location: "Marseille, France",
        date: "04/01/2025",
        time: "08:45",
        description: "Colis arrivé au centre de tri local",
        isCompleted: false
      },
      {
        id: "4",
        status: "En livraison",
        location: "Marseille, France",
        date: "04/01/2025",
        time: "À venir",
        description: "Colis en cours de livraison",
        isCompleted: false
      }
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!trackingNumber.trim()) {
      setError("Veuillez saisir un numéro de suivi");
      return;
    }

    setIsLoading(true);
    
    // Simulation d'appel API
    setTimeout(() => {
      if (trackingNumber.includes("ERROR")) {
        setError("Numéro de suivi non trouvé. Vérifiez et réessayez.");
        setTrackingData(null);
      } else {
        setTrackingData({
          ...mockTrackingData,
          trackingNumber: trackingNumber
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge variant="default" className="bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-700">
          <CheckCircle className="w-3 h-3 mr-1" />
          Livré
        </Badge>;
      case "in-transit":
        return <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-700">
          <Truck className="w-3 h-3 mr-1" />
          En transit
        </Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-orange-500/10 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400 dark:border-orange-700">
          <Clock className="w-3 h-3 mr-1" />
          En attente
        </Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const getEventIcon = (index: number, isCompleted: boolean) => {
    if (isCompleted) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else if (index === trackingData?.events.findIndex(e => !e.isCompleted)) {
      return <Truck className="w-5 h-5 text-blue-500" />;
    } else {
      return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="section-container">
      <LazyMotionDiv variants={staggerContainer} className="max-w-4xl mx-auto">
        {/* Formulaire de recherche */}
        <LazyMotionDiv {...fadeInUp} className="mb-8">
          <Card className="section-box">
            <CardHeader className="text-center">
              <CardTitle className="section-title">
                <Package className="w-8 h-8 mx-auto mb-4 text-primary" />
                Suivez votre colis en temps réel
              </CardTitle>
              <p className="section-subtitle">
                Entrez votre numéro de suivi pour connaître l'état de votre livraison
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                      Numéro de suivi *
                    </label>
                    <Input
                      id="tracking"
                      type="text"
                      placeholder="Ex: SP123456789FR"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium mb-2">
                      Code postal (optionnel)
                    </label>
                    <Input
                      id="postcode"
                      type="text"
                      placeholder="Ex: 13000"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full modern-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Recherche en cours...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Rechercher
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </LazyMotionDiv>

        {/* Résultats de suivi */}
        {trackingData && (
          <LazyMotionDiv {...fadeInUp} className="space-y-6">
            {/* Statut principal */}
            <Card className="section-box">
              <CardContent className="p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Suivi: {trackingData.trackingNumber}
                    </h3>
                    <p className="text-muted-foreground">
                      Transporteur: {trackingData.carrier}
                    </p>
                    {trackingData.estimatedDelivery && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Livraison estimée: {trackingData.estimatedDelivery}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {getStatusBadge(trackingData.status)}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline des événements */}
            <Card className="section-box">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Historique de livraison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.events.map((event, index) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        {getEventIcon(index, event.isCompleted)}
                        {index < trackingData.events.length - 1 && (
                          <div className={`w-px h-12 mt-2 ${
                            event.isCompleted ? 'bg-green-200' : 'bg-border'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-medium ${
                            event.isCompleted ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {event.status}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {event.date} • {event.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {event.description}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </LazyMotionDiv>
        )}
      </LazyMotionDiv>
    </div>
  );
};

export default TrackingInterface;