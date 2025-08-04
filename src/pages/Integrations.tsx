import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { AttractiveQuoteModal } from "@/components/contact/AttractiveQuoteModal";
import IntegrationsSection from "@/components/ui/integrations-component";

function Integrations() {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Intégrations E-commerce | Speed E-Log - Solutions Logistiques</title>
        <meta 
          name="description" 
          content="Intégrez Speed E-Log à vos plateformes e-commerce favorites : Shopify, WooCommerce, Prestashop, Amazon, Cdiscount. API complète et connecteurs prêts à l'emploi." 
        />
        <meta name="keywords" content="intégration logistique, API e-commerce, Shopify fulfillment, WooCommerce logistique, Amazon FBA alternative, connecteur marketplace" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Intégrations E-commerce | Speed E-Log" />
        <meta property="og:description" content="Connectez facilement votre e-commerce à notre solution logistique. +40 intégrations disponibles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speedelog.fr/integrations" />
        
        {/* JSON-LD pour les intégrations */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Intégrations Speed E-Log",
            "description": "Liste des intégrations e-commerce et logistiques disponibles",
            "itemListElement": [
              {
                "@type": "SoftwareApplication",
                "name": "Shopify",
                "description": "Intégration native avec Shopify pour la synchronisation automatique des commandes",
                "applicationCategory": "E-commerce Platform"
              },
              {
                "@type": "SoftwareApplication", 
                "name": "WooCommerce",
                "description": "Plugin WooCommerce pour la gestion logistique automatisée",
                "applicationCategory": "E-commerce Platform"
              },
              {
                "@type": "SoftwareApplication",
                "name": "Amazon",
                "description": "Connecteur Amazon Seller Central pour la gestion FBA alternative",
                "applicationCategory": "Marketplace"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-32">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Stats badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary">
              500+ Intégrations
            </div>
            <div className="px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-semibold text-green-600">
              99.9% Uptime
            </div>
            <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-600">
              API Temps Réel
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">
            Intégrations E-commerce
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Connectez Speed E-Log à vos plateformes favorites en quelques clics. 
            Plus de 40 intégrations natives pour une logistique sans friction, 
            une synchronisation parfaite et une visibilité totale sur vos stocks.
          </p>

          {/* Key benefits cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">🔄 Synchronisation Temps Réel</h3>
              <p className="text-sm text-muted-foreground">
                Stocks, commandes et expéditions synchronisés instantanément sur toutes vos plateformes.
              </p>
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">⚡ Installation en 5 Minutes</h3>
              <p className="text-sm text-muted-foreground">
                Plugins officiels et API REST pour une intégration ultra-rapide sans développement.
              </p>
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2 text-primary">📊 Tableau de Bord Unifié</h3>
              <p className="text-sm text-muted-foreground">
                Gérez tous vos canaux depuis une interface unique avec analytics en temps réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Animation Section */}
      <IntegrationsSection onCTAClick={openModal} />

      {/* Additional Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">API & Webhooks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre API REST complète et nos webhooks en temps réel permettent 
              l'intégration avec n'importe quel système existant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-background border">
              <h3 className="font-semibold mb-2">API REST Complète</h3>
              <p className="text-sm text-muted-foreground">
                Documentation OpenAPI 3.0 avec authentification OAuth2 et rate limiting.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border">
              <h3 className="font-semibold mb-2">Webhooks Temps Réel</h3>
              <p className="text-sm text-muted-foreground">
                Notifications instantanées sur les changements d'état de vos commandes.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border">
              <h3 className="font-semibold mb-2">SDK & Plugins</h3>
              <p className="text-sm text-muted-foreground">
                Bibliothèques officielles en PHP, Node.js, Python et plugins prêts à l'emploi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <AttractiveQuoteModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default Integrations;