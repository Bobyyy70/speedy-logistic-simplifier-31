import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package, ExternalLink } from "lucide-react";

const TrackingInterface = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      alert("Veuillez saisir un numéro de suivi");
      return;
    }

    // Show the iframe with tracking results
    setShowIframe(true);
  };

  const getTrackingUrl = () => {
    // Using a generic tracking service that works with multiple carriers
    const encodedTrackingNumber = encodeURIComponent(trackingNumber);
    return `https://www.17track.net/en/track#nums=${encodedTrackingNumber}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tracking Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Suivre votre colis
          </CardTitle>
          <p className="text-muted-foreground">
            Saisissez votre numéro de suivi pour connaître l'état de votre livraison
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="trackingNumber" className="block text-sm font-medium mb-2">
                  Numéro de suivi *
                </label>
                <Input
                  id="trackingNumber"
                  type="text"
                  placeholder="Ex: 1Z999AA1234567890"
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
                  placeholder="Ex: 75001"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="submit" className="flex-1">
                <Search className="h-4 w-4 mr-2" />
                Suivre mon colis
              </Button>
              
              {trackingNumber && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => window.open(getTrackingUrl(), '_blank')}
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ouvrir dans 17Track
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Tracking Results */}
      {showIframe && trackingNumber && (
        <Card>
          <CardHeader>
            <CardTitle>Résultats de suivi pour: {trackingNumber}</CardTitle>
            <p className="text-muted-foreground">
              Service de tracking fourni par 17Track - Compatible avec tous les transporteurs
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <iframe
                src={getTrackingUrl()}
                className="w-full h-96 border-0"
                title="Suivi de colis"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                <strong>Transporteurs supportés:</strong> La Poste, Colissimo, Chronopost, DPD, UPS, FedEx, DHL, GLS, et plus de 170 autres transporteurs dans le monde.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transporteurs supportés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• La Poste</div>
              <div>• Colissimo</div>
              <div>• Chronopost</div>
              <div>• DPD</div>
              <div>• UPS</div>
              <div>• FedEx</div>
              <div>• DHL</div>
              <div>• GLS</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Et plus de 170 autres transporteurs internationaux
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Besoin d'aide ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">
              Votre numéro de suivi ne fonctionne pas ? Contactez notre équipe support.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Contacter le support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrackingInterface;