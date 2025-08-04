import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { AttractiveQuoteModal } from "@/components/contact/AttractiveQuoteModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Globe, Truck, ShoppingCart, Package, Link2, CheckCircle, ArrowUpRight } from "lucide-react";

const Integrations = () => {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  const transporteurs = [
    { 
      name: "DPD", 
      description: "Livraison express en Europe", 
      features: ["Express 24h", "Suivi temps réel", "Point relais"],
      color: "from-red-500/10 to-red-600/10",
      icon: "🚚"
    },
    { 
      name: "Colissimo", 
      description: "La Poste - Solutions nationaux", 
      features: ["Réseau national", "Domicile & relais", "Assurance incluse"],
      color: "from-yellow-500/10 to-yellow-600/10",
      icon: "📮"
    },
    { 
      name: "Chronopost", 
      description: "Livraison rapide garantie", 
      features: ["Garantie horaire", "Express France", "Signature requise"],
      color: "from-blue-500/10 to-blue-600/10",
      icon: "⚡"
    },
    { 
      name: "UPS", 
      description: "Leader mondial de l'expédition", 
      features: ["International", "Tracking avancé", "Livraison flexible"],
      color: "from-amber-500/10 to-amber-600/10",
      icon: "🌍"
    }
  ];

  const plateformes = [
    { 
      name: "Shopify", 
      description: "CMS e-commerce leader", 
      type: "CMS",
      features: ["API native", "Sync automatique", "Apps dédiées"],
      color: "from-green-500/10 to-green-600/10",
      icon: "🛍️"
    },
    { 
      name: "WooCommerce", 
      description: "Solution WordPress", 
      type: "CMS",
      features: ["Plugin officiel", "Sync stocks", "Gestion commandes"],
      color: "from-purple-500/10 to-purple-600/10",
      icon: "🔗"
    },
    { 
      name: "PrestaShop", 
      description: "Open source français", 
      type: "CMS",
      features: ["Module natif", "Multi-boutiques", "Synchronisation"],
      color: "from-pink-500/10 to-pink-600/10",
      icon: "🏪"
    },
    { 
      name: "Magento", 
      description: "Enterprise e-commerce", 
      type: "CMS",
      features: ["Extension premium", "B2B & B2C", "Haute performance"],
      color: "from-orange-500/10 to-orange-600/10",
      icon: "⚙️"
    },
    { 
      name: "Amazon", 
      description: "Marketplace mondiale", 
      type: "Marketplace",
      features: ["FBA compatible", "Sync inventaire", "Gestion multi-pays"],
      color: "from-yellow-500/10 to-orange-600/10",
      icon: "📦"
    },
    { 
      name: "Cdiscount", 
      description: "Marketplace française", 
      type: "Marketplace",
      features: ["API officielle", "Fulfillment", "Prêt à vendre"],
      color: "from-red-500/10 to-pink-600/10",
      icon: "🎯"
    }
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

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:40px_40px] opacity-30"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Link2 className="w-5 h-5" />
              <span>Écosystème connecté</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Intégrations
              </span>
              <br />
              <span className="text-foreground/80">Simplifiées</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Connectez <span className="text-primary font-semibold">instantanément</span> votre écosystème e-commerce. 
              <br className="hidden md:block" />
              Transporteurs, CMS, marketplaces... <span className="text-accent font-semibold">Et bien plus encore !</span>
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Transporteurs</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">CMS & Marketplaces</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Automatisé</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transporteurs Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                Transporteurs partenaires
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Expédiez partout
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connectez-vous aux meilleurs transporteurs européens et bénéficiez de tarifs négociés. 
                <br className="hidden md:block" />
                <span className="text-primary font-semibold">Plus de 50 transporteurs disponibles</span> selon vos besoins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {transporteurs.map((transporteur, index) => (
                <div 
                  key={transporteur.name}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:border-primary/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" 
                       style={{background: `linear-gradient(135deg, var(--primary), var(--accent))`}}></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${transporteur.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{transporteur.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">{transporteur.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{transporteur.description}</p>
                  
                  <div className="space-y-2">
                    {transporteur.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-gray-50 to-primary/5 rounded-2xl p-8 border border-gray-200/50">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">Et bien plus encore...</p>
              <p className="text-muted-foreground">
                FedEx • TNT • GLS • Mondial Relay • Relay Colis • So Colissimo • Aramex • DHL • LaPoste • Colis Privé...
              </p>
            </div>
          </div>
        </section>

        {/* Plateformes Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-50/50 to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Plateformes e-commerce
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Synchronisez tout
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connectez vos boutiques et marketplaces pour une gestion centralisée. 
                <br className="hidden md:block" />
                <span className="text-accent font-semibold">Stocks, commandes et expéditions synchronisés</span> en temps réel.
              </p>
            </div>

            {/* CMS Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                Solutions CMS E-commerce
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plateformes.filter(p => p.type === "CMS").map((plateforme, index) => (
                  <div 
                    key={plateforme.name}
                    className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:border-accent/20 hover:-translate-y-2"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${plateforme.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{plateforme.icon}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3 text-foreground">{plateforme.name}</h4>
                    <p className="text-muted-foreground mb-4 text-sm">{plateforme.description}</p>
                    
                    <div className="space-y-2">
                      {plateforme.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplaces Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Globe className="w-6 h-6 text-secondary" />
                Marketplaces
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plateformes.filter(p => p.type === "Marketplace").map((plateforme, index) => (
                  <div 
                    key={plateforme.name}
                    className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:border-secondary/20 hover:-translate-y-2"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${plateforme.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{plateforme.icon}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3 text-foreground">{plateforme.name}</h4>
                    <p className="text-muted-foreground mb-4 text-sm">{plateforme.description}</p>
                    
                    <div className="space-y-2">
                      {plateforme.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-white/90 to-accent/5 rounded-2xl p-8 border border-gray-200/50">
              <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">Et de nombreuses autres plateformes</p>
              <p className="text-muted-foreground">
                eBay • Fnac • Rue du Commerce • Zalando • Rakuten • Darty • Conforama • Back Market • Vinted...
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Intégration sur mesure
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Votre plateforme manque ?
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Nous développons <span className="text-primary font-semibold">régulièrement</span> de nouvelles intégrations. 
                  Contactez-nous pour discuter de vos besoins spécifiques et obtenez une solution sur mesure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button 
                    onClick={openModal}
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Demander un devis personnalisé
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Réponse sous 24h</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Devis gratuit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Support dédié</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AttractiveQuoteModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Integrations;