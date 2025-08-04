import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TrackingInterface from "@/components/tracking/TrackingInterface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyMotionDiv } from "@/components/ui/lazy-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation-utils";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

const SuiviColis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen site-background">
      <Helmet>
        <title>Suivi Colis E-commerce | Speed E Log - Tracking en Temps Réel</title>
        <meta 
          name="description" 
          content="Suivez vos colis e-commerce en temps réel avec Speed E Log. Interface de tracking avancée pour toutes vos expéditions en France et Europe. Suivi précis et notifications automatiques." 
        />
        <meta name="keywords" content="suivi colis, tracking, livraison, expédition, e-commerce, logistique, transport, Speed E Log" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/suivi-colis`} />
        
        {/* Schema markup pour SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Suivi de Colis Speed E Log",
            "description": "Service de suivi de colis en temps réel pour e-commerce",
            "provider": {
              "@type": "Organization",
              "name": "Speed E Log"
            },
            "serviceType": "Logistics",
            "areaServed": "France"
          })}
        </script>
      </Helmet>

      <div className="section-container">
        <LazyMotionDiv variants={staggerContainer}>
          {/* Hero Section */}
          <LazyMotionDiv {...fadeInUp} className="text-center mb-16">
            <h1 className="section-title mb-6">
              Suivi de Colis en Temps Réel
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Suivez l'état de vos expéditions e-commerce en temps réel avec notre interface de tracking avancée. 
              Localisation précise, notifications automatiques et visibilité complète sur vos livraisons.
            </p>
          </LazyMotionDiv>

          {/* Interface de Suivi */}
          <TrackingInterface />

          {/* FAQ et Aide */}
          <LazyMotionDiv {...fadeInUp} className="mt-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* FAQ */}
              <Card className="section-box">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    Questions Fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quels transporteurs sont supportés ?</h4>
                    <p className="text-sm text-muted-foreground">
                      Nous supportons tous les principaux transporteurs : Colissimo, Chronopost, DPD, UPS, FedEx, et plus de 40 autres partenaires.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">À quelle fréquence les données sont-elles mises à jour ?</h4>
                    <p className="text-sm text-muted-foreground">
                      Nos données de suivi sont synchronisées en temps réel avec les systèmes des transporteurs, avec une fréquence de mise à jour de 15 minutes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Puis-je recevoir des notifications ?</h4>
                    <p className="text-sm text-muted-foreground">
                      Oui, nos clients bénéficient de notifications automatiques par email et SMS à chaque étape de livraison.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="section-box">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Besoin d'Aide ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Notre équipe support est disponible pour vous aider avec le suivi de vos colis et répondre à toutes vos questions logistiques.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">Support téléphonique : 09 XX XX XX XX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">Email : support@speedelog.com</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Nous contacter
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </LazyMotionDiv>

          {/* Section SEO additionnelle */}
          <LazyMotionDiv {...fadeInUp} className="mt-16">
            <Card className="section-box">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Optimisez votre Logistique E-commerce avec Speed E Log
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Au-delà du simple suivi, Speed E Log vous offre une solution complète de fulfillment pour votre e-commerce. 
                  Stockage sécurisé, préparation automatisée, expédition multi-transporteurs et retours simplifiés.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>• Fulfillment France</span>
                  <span>• Expédition Europe</span>
                  <span>• API d'intégration</span>
                  <span>• Support 7j/7</span>
                </div>
              </CardContent>
            </Card>
          </LazyMotionDiv>
        </LazyMotionDiv>
      </div>
    </div>
  );
};

export default SuiviColis;