
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // États pour le suivi des images survolées
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const screenshots = [
    {
      src: "/lovable-uploads/7e668035-1d72-4474-a463-2edc7209bb2a.png",
      title: "Vue d'ensemble du tableau de bord",
      description: "Notre interface centralisée permet de visualiser toutes vos données logistiques en un coup d'œil. Le tableau de bord personnalisable vous présente vos KPIs essentiels, l'état des commandes en cours et les alertes importantes pour une gestion proactive de votre chaîne logistique."
    },
    {
      src: "/lovable-uploads/f1857faa-e92e-4c2f-8baa-f5d3ce99f322.png",
      title: "Gestion des commandes en temps réel",
      description: "Suivez chaque étape du processus de traitement des commandes, depuis la réception jusqu'à l'expédition. Notre système offre une visibilité totale sur le statut des commandes, les détails des produits et les informations d'expédition, vous permettant d'anticiper et de résoudre rapidement les problèmes potentiels."
    },
    {
      src: "/lovable-uploads/c85b8c1f-5982-46a8-ad62-46a9dbe6e3a5.png",
      title: "Analytics et rapports avancés",
      description: "Transformez vos données en insights actionnables grâce à nos outils d'analyse avancés. Visualisez les tendances, identifiez les opportunités d'optimisation et prenez des décisions éclairées basées sur des données précises et en temps réel pour améliorer continuellement votre performance logistique."
    }
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

      {/* Screenshots with alternating layout */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Une Interface Intuitive et Puissante
        </motion.h2>
        
        <div className="space-y-16 md:space-y-24">
          {screenshots.map((screenshot, index) => (
            <motion.div 
              key={index}
              className={cn(
                "flex flex-col gap-8 items-center", 
                index % 2 === 0 
                  ? "md:flex-row" 
                  : "md:flex-row-reverse"
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <motion.img
                    src={screenshot.src}
                    alt={`SupplyOS - ${screenshot.title}`}
                    className="w-full h-auto rounded-lg"
                    animate={{
                      scale: hoveredImage === index ? 1.8 : 1,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformOrigin: 'center',
                    }}
                  />
                </div>
              </div>
              
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{screenshot.title}</h3>
                <p className="text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="absolute top-1/4 right-8 w-20 h-20 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
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
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute bottom-1/3 left-8 w-16 h-16 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
      </section>

      {/* Logo and CTA section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
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
          
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
          >
            <Link to="/contact" className="flex items-center">
              Discuter de vos besoins technologiques
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Technology;
