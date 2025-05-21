
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";

export function HeroContent() {
  // Fonction pour faire défiler vers la section des fonctionnalités
  const scrollToFeatures = () => {
    // Trouver l'élément avec l'ID "features"
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
      </motion.div>

      <div className="space-y-4">
        <AnimatedText
          text="La logistique E-commerce,"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white"
          delay={0.2}
        />
        <AnimatedText
          text="sans les tracas."
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F68F3] to-[#F3BA2F] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter"
          delay={0.6}
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-[600px] text-gray-300 md:text-xl mx-auto lg:mx-0"
      >
        Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
        <br />
        Speed E-Log simplifie vos expéditions vers le monde entier.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start"
      >
        <Button asChild size="lg" className="modern-button relative overflow-hidden bg-gradient-to-r from-[#2F68F3] to-[#2867e5] hover:from-[#2F68F3] hover:to-[#F3BA2F] shadow-lg transition-all duration-300">
          <Link to="/contact">
            <span className="relative z-10 flex items-center">
              Obtenir un devis personnalisé
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </span>
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
          onClick={scrollToFeatures}
        >
          Découvrir nos services
        </Button>
      </motion.div>
      
      {/* Social Proof - With animation */}
      <SocialProof />
    </div>
  );
}
