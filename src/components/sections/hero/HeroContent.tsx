
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-[25px]">
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
          className="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl text-white"
          delay={0.2}
        />
        <AnimatedText
          text="sans les tracas."
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400 dark:from-blue-400 dark:to-orange-400 text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl"
          delay={0.6}
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 text-gray-300"
      >
        Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
        <br />
        Speed E-Log simplifie vos expéditions vers le monde entier.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[4px]"
      >
        <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
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
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300">
          <Link to="/services">
            Découvrir nos services
          </Link>
        </Button>
      </motion.div>
      
      {/* Social Proof - With animation */}
      <SocialProof />
    </div>
  );
}
