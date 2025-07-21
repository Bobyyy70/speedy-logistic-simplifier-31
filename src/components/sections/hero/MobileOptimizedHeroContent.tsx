
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MobileOptimizedButton } from "@/components/ui/mobile-optimized-button";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialProof } from "@/components/sections/hero/SocialProof";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";

export function MobileOptimizedHeroContent() {
  const { isMobile, getMobileSpacing } = useMobileOptimization();

  return (
    <div className={cn(
      "flex flex-col justify-center text-center lg:text-left px-4 md:px-6",
      getMobileSpacing("space-y-6")
    )}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <HomeLogoWithText className={cn(
          "lg:self-start mx-auto lg:mx-0",
          isMobile ? "w-40" : "w-36"
        )} />
      </motion.div>

      <div className={cn(getMobileSpacing("space-y-4"))}>
        <AnimatedText
          text="La logistique E-commerce,"
          className={cn(
            "font-bold tracking-tighter text-slate-900",
            isMobile 
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" 
              : "text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          )}
          delay={0.2}
        />
        <AnimatedText
          text="sans les tracas."
          className={cn(
            "font-bold tracking-tighter text-[#2F68F3]",
            isMobile 
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" 
              : "text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          )}
          delay={0.6}
        />
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className={cn(
          "max-w-[600px] text-slate-700 mx-auto lg:mx-0",
          isMobile ? "text-lg leading-relaxed px-2" : "md:text-xl"
        )}
      >
        Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. 
        <br className="hidden sm:block" />
        Speed E-Log simplifie vos expéditions vers le monde entier.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className={cn(
          "flex flex-col justify-center lg:justify-start",
          isMobile ? "gap-4" : "gap-3 min-[400px]:flex-row"
        )}
      >
        <MobileOptimizedButton 
          variant="blue" 
          size={isMobile ? "xl" : "2xl"}
          className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300 rounded-full"
          asChild
        >
          <Link to="/contact">
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
          </Link>
        </MobileOptimizedButton>
      </motion.div>
      
      {/* Social Proof - With enhanced mobile spacing */}
      <div className={cn(isMobile ? "pt-6" : "")}>
        <SocialProof />
      </div>
    </div>
  );
}
