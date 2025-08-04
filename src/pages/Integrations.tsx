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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Intégrations E-commerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connectez Speed E-Log à vos plateformes favorites en quelques clics. 
            Plus de 40 intégrations natives pour une logistique sans friction.
          </p>
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