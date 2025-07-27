import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Zap, 
  Package, 
  TrendingUp,
  CheckCircle,
  Clock,
  Truck,
  BarChart3,
  Cog,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PartenaireShopify = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Connexion Instantanée",
      description: "Intégration Shopify native en moins de 5 minutes via notre app officielle"
    },
    {
      icon: Package,
      title: "Synchronisation Automatique",
      description: "Stocks, commandes et statuts synchronisés en temps réel sans intervention"
    },
    {
      icon: Truck,
      title: "Fulfillment Simplifié",
      description: "Vos commandes Shopify sont automatiquement préparées et expédiées"
    },
    {
      icon: BarChart3,
      title: "Analytics Unifiées",
      description: "Dashboard unique combinant données Shopify et métriques logistiques"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Installation App",
      description: "Installez l'app Speed E Log depuis le Shopify App Store",
      duration: "2 min"
    },
    {
      step: "2", 
      title: "Configuration",
      description: "Configurez vos paramètres logistiques et zones de livraison",
      duration: "5 min"
    },
    {
      step: "3",
      title: "Test & Validation",
      description: "Nous testons l'intégration avec une commande de validation",
      duration: "24h"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Votre logistique est externalisée, concentrez-vous sur vos ventes !",
      duration: "Immédiat"
    }
  ];

  const features = [
    "Synchronisation bidirectionnelle stocks",
    "Import automatique des commandes",
    "Mise à jour tracking en temps réel",
    "Gestion des retours intégrée",
    "Support multi-devises",
    "Webhooks pour événements logistiques",
    "API REST complète",
    "Support technique dédié"
  ];

  return (
    <>
      <Helmet>
        <title>Intégration Shopify - Logistique Externalisée pour E-commerce | Speed E Log</title>
        <meta 
          name="description" 
          content="Connectez votre boutique Shopify à Speed E Log en 5 minutes. Synchronisation automatique, fulfillment optimisé et support technique dédié." 
        />
        <meta name="keywords" content="intégration Shopify, fulfillment Shopify, logistique Shopify, app Shopify, externalisation logistique" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Intégration Shopify - Speed E Log" />
        <meta property="og:description" content="L'app officielle Speed E Log pour externaliser votre logistique Shopify en quelques clics" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Speed E Log - Shopify Integration",
            "description": "Application Shopify pour l'externalisation logistique",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Installation gratuite"
            },
            "featureList": features
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-8 w-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">Shopify</span>
                    </div>
                    <span className="text-2xl text-slate-400">×</span>
                    <div className="text-2xl font-bold text-primary">Speed E Log</div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Externalisez Votre Logistique
                    <span className="text-green-600"> Shopify</span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Connectez votre boutique Shopify à notre entrepôt en 5 minutes. 
                    Synchronisation automatique, fulfillment optimisé et support dédié.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                      <a href="https://apps.shopify.com/speed-e-log" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Installer l'App Shopify
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/contact">
                        Demander une Démo
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Installation gratuite
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <Clock className="h-3 w-3 mr-1" />
                      Setup en 5 minutes
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      <Cog className="h-3 w-3 mr-1" />
                      Support technique dédié
                    </Badge>
                  </div>
                </div>
                
                <div className="relative">
                  <Card className="shadow-2xl">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-700 font-medium">Synchronisation en cours</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Dashboard Unifié</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm">Commandes Shopify</span>
                          <Badge className="bg-green-600">247 nouvelles</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm">Stock synchronisé</span>
                          <Badge variant="outline">✓ Temps réel</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm">Expéditions aujourd'hui</span>
                          <Badge className="bg-primary">189 colis</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Pourquoi Choisir Notre Intégration Shopify ?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Une solution native développée spécialement pour les boutiques Shopify 
                qui veulent externaliser leur logistique sans complexité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 bg-green-50 rounded-full w-fit mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Mise en Route en 4 Étapes Simples
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                De l'installation à la première expédition, nous vous accompagnons 
                à chaque étape pour une transition en douceur.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {process.map((step, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                        {index < process.length - 1 && (
                          <ArrowRight className="h-5 w-5 text-slate-400 hidden md:block" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Fonctionnalités Incluses
                </h2>
                <p className="text-lg text-slate-600">
                  Une intégration complète avec toutes les fonctionnalités nécessaires 
                  pour une gestion logistique optimale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Optimiser Votre Logistique Shopify ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez les centaines de boutiques Shopify qui nous font confiance 
              pour leur fulfillment quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://apps.shopify.com/speed-e-log" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Installer l'App Gratuite
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Parler à un Expert
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartenaireShopify;