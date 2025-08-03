import React from "react";
import { Link } from "react-router-dom";
import { UltraLazyMotion, performanceVariants } from "@/components/ui/ultra-lazy-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";
import { AttractiveQuoteModal } from "@/components/contact/AttractiveQuoteModal";
import { useState } from "react";

export function HeroContent() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-4 md:px-6">
      <UltraLazyMotion
        variants={performanceVariants}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
      </UltraLazyMotion>

      {/* SEO H1 - Structure sémantique appropriée */}
      <h1 className="sr-only">
        Speed E-Log - La logistique E-commerce, sans les tracas
      </h1>

      <div className="space-y-4" role="banner" aria-labelledby="hero-title">
        <AnimatedText
          text="La logistique E-commerce,"
          className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-slate-900"
          delay={0.2}
          aria-hidden="true"
        />
        <AnimatedText
          text="sans les tracas."
          className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-[#2F68F3]"
          delay={0.6}
          aria-hidden="true"
        />
      </div>

      <UltraLazyMotion 
        variants={performanceVariants}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-[600px] text-slate-700 text-fluid-base md:text-fluid-lg mx-auto lg:mx-0 leading-relaxed"
      >
        <p>
          Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Speed E-Log simplifie vos expéditions vers le monde entier.
        </p>
      </UltraLazyMotion>

      <UltraLazyMotion 
        variants={performanceVariants}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start"
      >
        <Button 
          variant="blue" 
          size="2xl" 
          className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
          onClick={openModal}
        >
          <span className="relative z-10 flex items-center text-white">
            Obtenir un devis personnalisé
            <span className="ml-2 inline-block">
              <ArrowRight className="h-4 w-4 animate-[bounce_1.2s_ease-in-out_infinite]" />
            </span>
          </span>
        </Button>
      </UltraLazyMotion>
      
      {/* Social Proof - With animation */}
      <SocialProof />

      {/* Attractive Quote Form Modal */}
      <AttractiveQuoteModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
