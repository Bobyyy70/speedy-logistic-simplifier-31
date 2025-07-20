
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Package, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const trackingSchema = z.object({
  trackingNumber: z.string().min(1, "Le numéro de suivi est requis"),
  postcode: z.string().min(5, "Le code postal doit contenir au moins 5 caractères"),
});

type TrackingFormData = z.infer<typeof trackingSchema>;

const SuiviColis: React.FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  
  const form = useForm<TrackingFormData>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      trackingNumber: "",
      postcode: "",
    },
  });

  const handleTracking = async (data: TrackingFormData) => {
    setIsTracking(true);
    
    try {
      // Simulation d'appel API - à remplacer par l'intégration Sendcloud
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // URL d'exemple pour iframe Sendcloud (marque blanche)
      const sendcloudUrl = `https://panel.sendcloud.sc/tracking?tracking_number=${data.trackingNumber}&postal_code=${data.postcode}`;
      setTrackingResult(sendcloudUrl);
    } catch (error) {
      console.error("Erreur lors du suivi:", error);
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50/30">
      <Helmet>
        <title>Suivi Colis E-commerce | Speed E-Log</title>
        <meta name="description" content="Suivez vos colis en temps réel avec Speed E-Log. Saisissez votre numéro de suivi pour connaître le statut de votre commande e-commerce." />
        <meta name="keywords" content="suivi colis, tracking, livraison e-commerce, Speed E-Log, statut commande" />
        <meta property="og:title" content="Suivi Colis E-commerce | Speed E-Log" />
        <meta property="og:description" content="Suivez vos colis en temps réel avec Speed E-Log. Service de tracking professionnel pour vos commandes e-commerce." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6"
            >
              <Package className="w-8 h-8 text-blue-600" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Suivi de votre colis
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Suivez l'état de votre commande en temps réel. Saisissez votre numéro de suivi et votre code postal pour obtenir les dernières informations.
            </p>
          </div>

          {/* Tracking Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher votre colis
              </CardTitle>
              <CardDescription>
                Entrez les informations de votre commande pour suivre son acheminement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleTracking)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="trackingNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de suivi</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: 3S123456789"
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Code postal de livraison</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: 75001"
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="blue"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isTracking}
                  >
                    {isTracking ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Recherche en cours...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Suivre mon colis
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Tracking Result */}
          {trackingResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Suivi de votre colis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                    <iframe
                      src={trackingResult}
                      className="w-full h-full border-0"
                      title="Suivi de colis Speed E-Log"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Help Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Où trouver mon numéro de suivi ?</h3>
                <p className="text-sm text-slate-600">
                  Votre numéro de suivi vous a été envoyé par email lors de l'expédition de votre commande.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Délais de mise à jour</h3>
                <p className="text-sm text-slate-600">
                  Les informations de suivi sont mises à jour toutes les heures par nos transporteurs partenaires.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Problème avec votre livraison ?</h3>
                <p className="text-sm text-slate-600">
                  Contactez notre service client pour toute question concernant votre commande.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuiviColis;
