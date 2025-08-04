import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackingEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
  type: 'in-transit' | 'delivered' | 'picked-up' | 'pending';
}

interface TrackingResult {
  trackingNumber: string;
  status: 'delivered' | 'in-transit' | 'pending' | 'exception';
  currentLocation: string;
  estimatedDelivery: string;
  events: TrackingEvent[];
}

// Demo data for testing
const demoTrackingData: TrackingResult = {
  trackingNumber: "SPL123456789",
  status: "in-transit",
  currentLocation: "Centre de tri Lyon",
  estimatedDelivery: "Demain avant 18h00",
  events: [
    {
      date: "2024-01-15",
      time: "14:30",
      status: "En cours de livraison",
      location: "Lyon - Centre de distribution",
      description: "Votre colis est en cours de livraison",
      type: "in-transit"
    },
    {
      date: "2024-01-15",
      time: "08:15",
      status: "En transit",
      location: "Lyon - Centre de tri",
      description: "Votre colis a quitté le centre de tri",
      type: "in-transit"
    },
    {
      date: "2024-01-14",
      time: "16:45",
      status: "Collecté",
      location: "Paris - Entrepôt Speed E Log",
      description: "Votre colis a été collecté et pris en charge",
      type: "picked-up"
    }
  ]
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-green-100 text-green-800 border-green-200">Livré</Badge>;
    case "in-transit":
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">En transit</Badge>;
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">En attente</Badge>;
    case "exception":
      return <Badge className="bg-red-100 text-red-800 border-red-200">Problème</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getEventIcon = (type: TrackingEvent['type']) => {
  switch (type) {
    case "delivered":
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "in-transit":
      return <Truck className="h-4 w-4 text-blue-600" />;
    case "picked-up":
      return <Package className="h-4 w-4 text-orange-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

export function TrackingInterface() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!trackingNumber.trim()) {
      setError("Veuillez entrer un numéro de suivi");
      return;
    }

    setIsLoading(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      setResult(demoTrackingData);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setResult(null);
    setTrackingNumber("");
    setPostalCode("");
    setError("");
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher votre colis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="tracking" className="text-sm font-medium">
                Numéro de suivi *
              </label>
              <Input
                id="tracking"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Ex: SPL123456789"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="postal" className="text-sm font-medium">
                Code postal (optionnel)
              </label>
              <Input
                id="postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Ex: 69000"
                className="w-full"
              />
            </div>
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <div className="flex gap-2">
            <Button 
              onClick={handleSearch} 
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Recherche...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Suivre
                </>
              )}
            </Button>
            {result && (
              <Button variant="outline" onClick={handleReset}>
                Nouvelle recherche
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Status Overview */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Colis {result.trackingNumber}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusBadge(result.status)}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {result.currentLocation}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Livraison estimée</p>
                  <p className="font-semibold">{result.estimatedDelivery}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Historique du suivi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.events.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {getEventIcon(event.type)}
                      {index < result.events.length - 1 && (
                        <div className="h-8 w-px bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <p className="font-medium">{event.status}</p>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{event.date}</p>
                          <p>{event.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}