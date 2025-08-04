import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { AttractiveQuoteModal } from "@/components/contact/AttractiveQuoteModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Globe } from "lucide-react";

const Integrations = () => {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  const transporteurs = [
    { name: "DPD", description: "Livraison express en Europe" },
    { name: "Colissimo", description: "La Poste - Solutions nationaux" },
    { name: "Chronopost", description: "Livraison rapide garantie" },
    { name: "UPS", description: "Leader mondial de l'expédition" }
  ];

  const plateformes = [
    { name: "Shopify", description: "CMS e-commerce leader", type: "CMS" },
    { name: "WooCommerce", description: "Solution WordPress", type: "CMS" },
    { name: "PrestaShop", description: "Open source français", type: "CMS" },
    { name: "Magento", description: "Enterprise e-commerce", type: "CMS" },
    { name: "Amazon", description: "Marketplace mondiale", type: "Marketplace" },
    { name: "Cdiscount", description: "Marketplace française", type: "Marketplace" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intégrations Speed E-Log",
    "description": "Connectez facilement votre écosystème e-commerce avec nos nombreuses intégrations : transporteurs, CMS et marketplaces",
    "provider": {
      "@type": "Organization",
      "name": "Speed E-Log"
    },
    "serviceType": "Logistique e-commerce",
    "areaServed": "France"
  };

  return (
    <>
      <Helmet>
        <title>Intégrations Speed E-Log | Connecteurs E-commerce & Transporteurs</title>
        <meta 
          name="description" 
          content="Découvrez nos nombreuses intégrations : transporteurs (DPD, Colissimo, Chronopost, UPS), CMS (Shopify, WooCommerce, PrestaShop, Magento) et marketplaces (Amazon, Cdiscount). Et bien plus encore !" 
        />
        <meta name="keywords" content="intégrations logistiques, connecteurs e-commerce, API transporteurs, synchronisation CMS, marketplace" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl mx-8"></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Intégrations simplifiées
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
              Intégrations Speed E-Log
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connectez facilement votre écosystème e-commerce avec nos nombreuses intégrations. 
              <span className="text-primary font-semibold"> Et bien plus d'intégrations disponibles</span> selon vos besoins.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>50+ Transporteurs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                <span>20+ CMS & Marketplaces</span>
              </div>
            </div>
          </div>
        </section>

        {/* Transporteurs Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transporteurs Intégrés</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expédiez avec les meilleurs transporteurs français et européens. 
                <span className="text-primary"> Bien d'autres transporteurs disponibles</span> selon vos besoins géographiques et commerciaux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {transporteurs.map((transporteur, index) => (
                <div 
                  key={transporteur.name}
                  className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <span className="text-xl font-bold text-primary">{transporteur.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{transporteur.name}</h3>
                  <p className="text-sm text-muted-foreground">{transporteur.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground italic">
                + Nombreux autres transporteurs selon vos besoins : FedEx, TNT, GLS, Mondial Relay...
              </p>
            </div>
          </div>
        </section>

        {/* Plateformes Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plateformes E-commerce & Marketplaces</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Synchronisez vos stocks et commandes avec les principales plateformes du marché. 
                <span className="text-primary"> Compatible avec de nombreuses autres plateformes</span> sur demande.
              </p>
            </div>

            {/* CMS Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Solutions CMS E-commerce</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plateformes.filter(p => p.type === "CMS").map((plateforme, index) => (
                  <div 
                    key={plateforme.name}
                    className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <span className="text-xl font-bold text-accent">{plateforme.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{plateforme.name}</h4>
                    <p className="text-sm text-muted-foreground">{plateforme.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplaces Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Marketplaces</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plateformes.filter(p => p.type === "Marketplace").map((plateforme, index) => (
                  <div 
                    key={plateforme.name}
                    className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <span className="text-xl font-bold text-secondary">{plateforme.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{plateforme.name}</h4>
                    <p className="text-sm text-muted-foreground">{plateforme.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground italic">
                + Et bien d'autres : eBay, Fnac, Rue du Commerce, Zalando, Rakuten...
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre plateforme n'est pas listée ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous développons régulièrement de nouvelles intégrations. 
              Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            
            <Button 
              onClick={openModal}
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 text-lg"
            >
              Demander un devis personnalisé
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Réponse sous 24h • Devis gratuit et sans engagement
            </p>
          </div>
        </section>
      </div>

      <AttractiveQuoteModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Integrations;