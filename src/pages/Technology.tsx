
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatedButton } from "@/components/ui/moving-border";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenshots = [
    "/lovable-uploads/7e668035-1d72-4474-a463-2edc7209bb2a.png",
    "/lovable-uploads/f1857faa-e92e-4c2f-8baa-f5d3ce99f322.png",
    "/lovable-uploads/c85b8c1f-5982-46a8-ad62-46a9dbe6e3a5.png"
  ];

  const features = [
    {
      title: "Gestion d'Entrepôt (WMS)",
      description: "Contrôle complet de votre inventaire avec une visibilité en temps réel sur tous les mouvements de stock, les emplacements et les niveaux de stock.",
      icon: "📦"
    },
    {
      title: "Gestion des Commandes (OMS)",
      description: "Traitement automatisé des commandes depuis la réception jusqu'à l'expédition, avec orchestration intelligente du flux de travail.",
      icon: "📝"
    },
    {
      title: "Gestion du Transport (TMS)",
      description: "Intégration multi-transporteurs permettant une comparaison des tarifs en temps réel et un suivi automatisé des expéditions.",
      icon: "🚚"
    },
    {
      title: "Tableaux de Bord Analytics",
      description: "Visualisation des KPIs logistiques essentiels avec des tableaux de bord personnalisables pour une prise de décision éclairée.",
      icon: "📊"
    },
    {
      title: "Intégrations E-commerce",
      description: "Connecteurs natifs pour les principales plateformes e-commerce, garantissant une synchronisation fluide des commandes et des stocks.",
      icon: "🔄"
    },
    {
      title: "Interface Client",
      description: "Portail client intuitif permettant de suivre les commandes, gérer les stocks et accéder aux rapports en temps réel.",
      icon: "👤"
    }
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>Notre Technologie SupplyOS | Speed E-Log</title>
        <meta 
          name="description" 
          content="Découvrez SupplyOS, notre solution logistique intégrée combinant WMS, OMS et TMS pour une gestion optimale de votre chaîne logistique e-commerce."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 px-4">
        <div className="container mx-auto relative">
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notre Technologie <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">SupplyOS</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Une plateforme logistique intégrée et moderne combinant WMS, OMS et TMS pour 
            optimiser chaque étape de votre chaîne logistique e-commerce.
          </motion.p>
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
        </div>
      </section>

      {/* Screenshots Carousel */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Interface Intuitive et Puissante
        </motion.h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {screenshots.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 overflow-hidden bg-transparent">
                  <CardContent className="p-1">
                    <img 
                      src={src} 
                      alt={`SupplyOS Interface ${index + 1}`} 
                      className="rounded-lg shadow-lg w-full h-auto object-contain aspect-video"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="absolute top-1/4 right-8 w-20 h-20 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Fonctionnalités Clés
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute bottom-1/3 left-8 w-16 h-16 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
      </section>

      {/* Logo and CTA section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/9e3dc511-3aec-4dc9-840f-187ab8de7235.png" 
              alt="SupplyOS Logo" 
              className="w-[400px] max-w-full mx-auto aspect-[2/1] object-contain relative z-10 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
          
          <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
            Notre technologie SupplyOS est constamment améliorée pour répondre aux besoins 
            spécifiques des PME e-commerce et optimiser chaque étape de votre logistique.
          </p>
          
          <AnimatedButton asChild className="mx-auto">
            <Link to="/contact">
              Discuter de vos besoins technologiques
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
};

export default Technology;
