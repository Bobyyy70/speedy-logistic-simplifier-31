
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";
import { HubSpotCTA } from "@/components/ui/HubSpotCTA";

export function HeroContent() {
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
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-slate-900"
          delay={0.2}
        />
        <AnimatedText
          text="sans les tracas."
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-[#2F68F3]"
          delay={0.6}
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-[600px] text-slate-700 md:text-xl mx-auto lg:mx-0"
      >
        Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
        <br />
        Speed E-Log simplifie vos expéditions vers le monde entier.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start"
      >
        <HubSpotCTA ctaId="248429698260">
          <span className="relative z-10 flex items-center text-white">
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
        </HubSpotCTA>
      </motion.div>
      
      {/* Social Proof - With animation */}
      <SocialProof />
    </div>
  );
}
