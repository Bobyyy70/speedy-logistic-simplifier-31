import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Target, Star, MapPin, History, Truck, Quote, Award, ChevronRight, HandHeart, BadgeCheck, Receipt, CircleUser } from "lucide-react";
import { AnimatedButton } from "@/components/ui/moving-border";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLazyImage } from "@/hooks/use-lazy-image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { motion } from "framer-motion";
import { CTALinkButton } from "@/components/ui/CTALinkButton";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <BackgroundPaths 
        opacity={0.15} 
        preserveBackground={true}
        className="fixed inset-0 z-0"
      />

      <Helmet>
        <title>À Propos de Speed E-Log | Votre Partenaire Logistique</title>
        <meta name="description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta property="og:title" content="À Propos de Speed E-Log | Votre Partenaire Logistique" />
        <meta property="og:description" content="Découvrez Speed E-Log, votre partenaire logistique e-commerce à Port-sur-Saône. Notre mission: simplifier la logistique pour les PME françaises avec fiabilité et transparence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative z-10 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white dark:from-blue-950/30 dark:via-slate-950 dark:to-slate-950"
      >
        <div className="container px-4 mx-auto">
          <motion.div 
            variants={fadeIn}
            custom={0}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              Notre histoire
            </div>
            <motion.h1 
              variants={fadeIn}
              custom={1}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-slate-900 dark:text-white"
            >
              Qui Sommes-nous ?
            </motion.h1>
            <motion.div 
              variants={fadeIn}
              custom={2}
              className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-orange-400 to-orange-500"
            />
            <motion.p 
              variants={fadeIn}
              custom={3}
              className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300"
            >
              Speed E-Log est un partenaire logistique spécialisé pour les PME e-commerce françaises.
              Notre mission est de vous permettre de vous concentrer sur la croissance de votre entreprise
              en gérant votre logistique de manière fiable et efficace.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-300/20 to-red-300/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.section>

      {/* Values Section */}
      <section className="relative z-10 py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Notre Mission et Nos Valeurs
            </h2>
            <div className="w-16 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <p className="max-w-2xl mx-auto text-lg font-medium text-slate-600 dark:text-slate-300">
              Simplifier la logistique e-commerce pour les PME françaises
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Value Card 1 - Updated icon from Award to Receipt */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="pb-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 transform group-hover:scale-105 transition-all duration-500 rounded-t-lg" />
                  <div className="flex items-center space-y-0 relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                      <Receipt className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Transparence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 dark:text-slate-300">
                    Une tarification claire et une communication ouverte à chaque étape du processus logistique.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Value Card 2 - Updated icon from Star to BadgeCheck */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="pb-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 transform group-hover:scale-105 transition-all duration-500 rounded-t-lg" />
                  <div className="flex items-center space-y-0 relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300">
                      <BadgeCheck className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Fiabilité</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 dark:text-slate-300">
                    Un engagement sur la qualité et la précision des préparations pour satisfaire vos clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Value Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="pb-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 transform group-hover:scale-105 transition-all duration-500 rounded-t-lg" />
                  <div className="flex items-center space-y-0 relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
                      <Truck className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Efficacité</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 dark:text-slate-300">
                    Des processus optimisés et des technologies avancées pour une logistique performante et rentable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Value Card 4 - Updated icon from Target to CircleUser */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-none shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="pb-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 transform group-hover:scale-105 transition-all duration-500 rounded-t-lg" />
                  <div className="flex items-center space-y-0 relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                      <CircleUser className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Partenariat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 dark:text-slate-300">
                    Une relation basée sur l'écoute et l'accompagnement pour soutenir votre croissance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Histoire Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-950 dark:to-blue-950/10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full space-y-6 md:w-1/2"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                  <History className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">Notre Histoire</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Speed E-Log est née d'une passion pour l'optimisation logistique et d'une compréhension 
                approfondie des défis auxquels sont confrontées les PME du e-commerce.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Après plusieurs années d'expérience dans le secteur, nous avons identifié un besoin crucial : 
                offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et 
                technologiquement avancée, sans les coûts prohibitifs des grands prestataires.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
                logistique de nos clients et contribuer à leur succès.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-orange-950/20">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-8">
                    <div className="p-5 rounded-full bg-orange-100 dark:bg-orange-900/40">
                      <Quote className="w-16 h-16 text-orange-500 dark:text-orange-400" />
                    </div>
                  </div>
                  <p className="text-xl font-medium text-center text-slate-700 md:text-2xl dark:text-slate-200">
                    "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
                  </p>
                  <div className="flex items-center justify-center mt-8 space-x-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="relative z-10 py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2 group"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl transform group-hover:scale-[0.98] transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-100/80 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500 -z-10 blur-xl opacity-50" />
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  alt="Équipe de Speed E-Log en réunion stratégique analysant des données logistiques" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
                  loading="lazy" 
                  src="/lovable-uploads/0eebcb35-a340-42cb-b519-5af8f45c8f76.png" 
                />
              </AspectRatio>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full space-y-6 md:w-1/2"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">Notre Mission</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Speed E-Log est bien plus qu'un prestataire logistique : nous sommes le partenaire opérationnel 
                des e-commerces TPE/PME, déterminés à transformer leur chaîne logistique en levier de croissance.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                En nous appuyant sur une relation de proximité et une écoute active de vos besoins, nous 
                construisons des collaborations pérennes où performances riment avec agilité.
              </p>
              
              <Card className="border-none mt-8 shadow-lg bg-gradient-to-r from-blue-50/80 to-green-50/80 dark:from-blue-900/30 dark:to-green-900/20">
                <CardContent className="p-6">
                  <p className="text-xl italic font-medium text-center text-slate-700 dark:text-slate-200">
                    "Chez Speed E-Log, chaque colis expédié incarne notre promesse : une logistique fiable, 
                    des délais maîtrisés et une traçabilité totale pour garantir votre réputation."
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-4">
                Notre engagement ? Vous offrir une logistique fluide, scalable et transparente, conçue pour 
                renforcer la satisfaction de vos clients et accroître votre compétitivité sur un marché en 
                constante évolution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Valeurs Section (with Image) - Updated Icon */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-blue-50/30 to-white dark:from-blue-950/10 dark:to-slate-950">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full space-y-6 md:w-1/2"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                  <HandHeart className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">Nos Valeurs</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Chez Speed E-Log, nous percevons la logistique bien au-delà d'une simple chaîne d'opérations : 
                c'est un écosystème vibrant, où chaque maillon est une opportunité de créer de la valeur partagée.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Dans ce domaine passionnant, chaque acteur devient gagnant – qu'il s'agisse de nos prestataires, 
                de nos clients ou de leurs destinataires finaux. Les défis, qu'ils soient techniques, humains ou 
                environnementaux, ne sont pas des obstacles, mais des leviers pour innover et progresser ensemble.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full md:w-1/2 group"
            >
              <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl transform group-hover:scale-[0.98] transition-transform duration-500" />
              <div className="absolute inset-0 bg-indigo-100/80 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500 -z-10 blur-xl opacity-50" />
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  alt="Équipe de Speed E-Log collaborant sur des solutions logistiques innovantes" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" 
                  loading="lazy" 
                  src="/lovable-uploads/7e668035-1d72-4474-a463-2edc7209bb2a.png" 
                />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Temoignages */}
      <TestimonialsSection />
      
      {/* CTA Section - Updated button */}
      <section className="relative z-10 py-20 text-center bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-slate-950">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Envie de travailler avec nous ?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-600 md:text-xl dark:text-slate-300">
              Découvrez comment Speed E-Log peut devenir votre partenaire logistique et vous accompagner 
              dans la croissance de votre entreprise e-commerce.
            </p>
            
            <CTALinkButton 
              to="/contact"
              variant="blue" 
              size="2xl" 
              className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
            >
              <span className="flex items-center gap-2">
                Obtenir un devis personnalisé
                <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </CTALinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
