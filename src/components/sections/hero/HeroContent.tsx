import React from "react";
import { Link } from "react-router-dom";
import { UltraLazyMotion, performanceVariants } from "@/components/ui/ultra-lazy-motion";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";
import { InlineQuoteForm } from "@/components/contact/InlineQuoteForm";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-4 md:px-6">
      <UltraLazyMotion 
        variants={performanceVariants}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
      </UltraLazyMotion>

      <h1 className="space-y-4">
        <AnimatedText
          text="La logistique E-commerce,"
          className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-slate-900"
          delay={0.2}
        />
        <AnimatedText
          text="sans les tracas."
          className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold tracking-tighter text-[#2F68F3]"
          delay={0.6}
        />
      </h1>

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
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100"
      >
        <InlineQuoteForm 
          title="Obtenir un devis personnalisé"
          description="Remplissez ce formulaire pour recevoir un devis adapté à vos besoins logistiques."
        />
      </UltraLazyMotion>
      
      {/* Social Proof - With animation */}
      <SocialProof />
    </div>
  );
}
