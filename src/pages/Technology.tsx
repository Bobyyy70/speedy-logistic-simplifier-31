import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Code, Database, Server, ArrowRight, BarChart, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/components/ui/moving-border";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/neon-button";

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // États pour le suivi des images agrandies
  const [enlargedImage, setEnlargedImage] = useState<number | null>(null);
  
  const screenshots = [
    {
      src: "/lovable-uploads/78d7ab9f-306b-4854-a6c6-a1863ac47cf4.png",
      title: "Vue d'ensemble du tableau de bord",
      description: "Notre interface centralisée permet de visualiser toutes vos données logistiques en un coup d'œil. Le tableau de bord personnalisable vous présente vos KPIs essentiels comme le nombre d'expéditions, le coût moyen, les délais et le taux de livraison à temps, ainsi que des graphiques détaillés sur la performance des transporteurs."
    }, 
    {
      src: "/lovable-uploads/b65d821a-6ccc-47a6-b314-0d8cfc210fd1.png",
      title: "Analyse financière et logistique",
      description: "Suivez en temps réel tous vos indicateurs financiers clés: chiffre d'affaires, coûts logistiques, frais d'expédition et marges. Notre tableau de bord vous permet également de surveiller le statut de vos commandes, leur distribution par période et d'identifier rapidement les tendances pour optimiser votre chaîne logistique."
    }, 
    {
      src: "/lovable-uploads/51b5f104-7aea-4689-b53f-7e8e7563143d.png",
      title: "Performance par marketplace et catégorie",
      description: "Analysez précisément la performance de vos ventes par marketplace, avec un suivi détaillé des commandes par statut et des indicateurs de performance (taux de commandes parfaites, commandes en retard). Notre système permet également de segmenter vos données par catégories de produits pour une vision stratégique de votre activité."
    }
  ];
  
  const features = [
    {
      title: "Gestion d'Entrepôt (WMS)",
      description: "Contrôle complet de votre inventaire avec une visibilité en temps réel sur tous les mouvements de stock, les emplacements et les niveaux de stock.",
      icon: Database
    }, 
    {
      title: "Gestion des Commandes (OMS)",
      description: "Traitement automatisé des commandes depuis la réception jusqu'à l'expédition, avec orchestration intelligente du flux de travail.",
      icon: Layers
    }, 
    {
      title: "Gestion du Transport (TMS)",
      description: "Intégration multi-transporteurs permettant une comparaison des tarifs en temps réel et un suivi automatisé des expéditions.",
      icon: Server
    }, 
    {
      title: "Tableaux de Bord Analytics",
      description: "Visualisation des KPIs logistiques essentiels avec des tableaux de bord personnalisables pour une prise de décision éclairée.",
      icon: BarChart
    }, 
    {
      title: "Intégrations E-commerce",
      description: "Connecteurs natifs pour les principales plateformes e-commerce, garantissant une synchronisation fluide des commandes et des stocks.",
      icon: Code
    }, 
    {
      title: "Interface Client",
      description: "Portail client intuitif permettant de suivre les commandes, gérer les stocks et accéder aux rapports en temps réel.",
      icon: Layers
    }
  ];

  return (
    <div className="w-full relative site-background">
      <Helmet>
        <title>Notre Technologie SupplyOS | Speed E-Log</title>
        <meta name="description" content="Découvrez SupplyOS, notre solution logistique intégrée combinant WMS, OMS et TMS pour une gestion optimale de votre chaîne logistique e-commerce." />
      </Helmet>

      {/* Hero Section avec design moderne */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        {/* Arrière-plan stylisé */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950"></div>
          
          {/* Formes géométriques */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-200/20 filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-blue-300/20 filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-[5%] left-[20%] w-56 h-56 rounded-full bg-orange-200/20 filter blur-3xl animate-pulse delay-1000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xaDJ2MWgtMnYtMXptMCAzaDJ2MWgtMnYtMXptLTMtMmgxdjJoLTF2LTJ6bTMtM2gydjFoLTJ2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="text-left">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Notre Technologie <span className="text-blue-600 dark:text-blue-400">Supply<span className="text-blue-400 dark:text-blue-300">OS</span></span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Une plateforme logistique intégrée et moderne, développée en collaboration avec des e-commerces et des logisticiens, pour optimiser chaque étape de votre chaîne logistique e-commerce.
                </motion.p>
                
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">Architecture modulaire adaptée à votre croissance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">Intégration avec toutes les plateformes e-commerce</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">Technologie cloud sécurisée et évolutive</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    Demander une démo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
              
              {/* Right image */}
              <motion.div 
                className="hidden lg:flex items-center justify-center relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-slate-100 dark:bg-slate-800 flex items-center px-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <img 
                    src="/lovable-uploads/78d7ab9f-306b-4854-a6c6-a1863ac47cf4.png" 
                    alt="SupplyOS Dashboard" 
                    className="w-full object-cover pt-12" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-medium text-sm bg-blue-600 px-4 py-2 rounded-full">Interface SupplyOS</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section with Floating effect */}
      <BackgroundPaths className="w-full" preserveBackground={true} opacity={0.35}>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950 dark:to-transparent z-10"></div>
          
          <div className="container mx-auto px-6 relative z-20">
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-12">
                <img 
                  src="/lovable-uploads/9e3dc511-3aec-4dc9-840f-187ab8de7235.png" 
                  alt="SupplyOS Logo" 
                  className="h-28 sm:h-32 object-contain relative z-10" 
                />
                <div className="absolute inset-0 bg-blue-400/10 dark:bg-blue-400/5 rounded-full filter blur-3xl"></div>
              </div>
              
              <p className="text-xl text-center max-w-3xl mx-auto text-slate-700 dark:text-slate-300 leading-relaxed mb-16">
                Notre technologie SupplyOS est constamment améliorée pour répondre aux besoins 
                spécifiques des PME e-commerce et optimiser chaque étape de votre logistique.
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <motion.div 
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Intégration Complète</h3>
                  <p className="text-slate-600 dark:text-slate-300">Une solution tout-en-un qui s'intègre parfaitement avec vos systèmes existants.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Cloud Native</h3>
                  <p className="text-slate-600 dark:text-slate-300">Une architecture cloud moderne pour une flexibilité et une évolutivité maximales.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Analyse Avancée</h3>
                  <p className="text-slate-600 dark:text-slate-300">Des insights détaillés pour optimiser chaque aspect de votre chaîne logistique.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950 dark:to-transparent"></div>
        </section>

        {/* Screenshots with floating UI */}
        <section id="screenshots" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Une Interface Intuitive et Puissante</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Conçue pour offrir une expérience utilisateur exceptionnelle avec des tableaux de bord personnalisables qui répondent à vos besoins spécifiques.
              </p>
            </motion.div>
            
            <div className="space-y-28">
              {screenshots.map((screenshot, index) => (
                <motion.div 
                  key={index} 
                  className={cn(
                    "flex flex-col gap-10 items-center", 
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur-md opacity-30 dark:opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                        {enlargedImage === index ? (
                          <div 
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" 
                            onClick={() => setEnlargedImage(null)}
                          >
                            <div className="relative max-w-6xl max-h-[90vh]">
                              <img 
                                src={screenshot.src} 
                                alt={`SupplyOS - ${screenshot.title}`} 
                                className="w-full h-auto object-contain" 
                              />
                              <button 
                                onClick={() => setEnlargedImage(null)} 
                                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={screenshot.src} 
                            alt={`SupplyOS - ${screenshot.title}`} 
                            className="w-full h-auto rounded-xl cursor-pointer hover:opacity-90 transition-opacity" 
                            onClick={() => setEnlargedImage(index)} 
                          />
                        )}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-xl"></div>
                      {index % 2 === 0 && (
                        <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-orange-400/10 dark:bg-orange-400/5 rounded-full blur-xl"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Text Section */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{screenshot.title}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {screenshot.description}
                    </p>
                    <button 
                      onClick={() => setEnlargedImage(index)}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Voir en détail
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section with animated cards */}
        <section ref={featuresRef} id="features" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Fonctionnalités Clés
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Une Suite Complète de Solutions Logistiques</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Découvrez comment notre plateforme intégrée transforme chaque aspect de votre chaîne logistique e-commerce.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section avec nouveau design */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950"></div>
          
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-slate-950 dark:to-transparent"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-300/10 to-orange-300/10 filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-orange-300/10 to-blue-300/10 filter blur-3xl"></div>
          
          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-tr from-blue-600/[0.08] to-blue-400/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 dark:border-white/5 shadow-lg relative overflow-hidden">
                
                {/* Glowing orbs */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-400/20 filter blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-orange-400/10 filter blur-3xl"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-50">
                      Créez votre avantage concurrentiel avec SupplyOS
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                      Notre technologie logistique vous permet de réduire vos coûts, d'améliorer votre efficacité opérationnelle et d'offrir une meilleure expérience client, le tout avec une transparence totale.
                    </p>
                    <ul className="mb-8 grid gap-3">
                      <li className="flex items-start text-slate-600 dark:text-slate-300">
                        <div className="mr-3 p-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                          </div>
                        </div>
                        <span>Intégration rapide avec vos systèmes existants</span>
                      </li>
                      <li className="flex items-start text-slate-600 dark:text-slate-300">
                        <div className="mr-3 p-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                          </div>
                        </div>
                        <span>Solution évolutive qui s'adapte à votre croissance</span>
                      </li>
                      <li className="flex items-start text-slate-600 dark:text-slate-300">
                        <div className="mr-3 p-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                            <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                          </div>
                        </div>
                        <span>Support technique et onboarding personnalisés</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-4 sm:min-w-[250px]">
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      Demander une démo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link 
                      to="/services" 
                      className="flex items-center justify-center py-3 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 font-medium rounded-lg transition-colors duration-300"
                    >
                      Découvrir nos services
                    </Link>
                    <div className="text-center mt-3">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        Pas d'engagement. Pas de frais cachés.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundPaths>
    </div>
  );
};

export default Technology;
