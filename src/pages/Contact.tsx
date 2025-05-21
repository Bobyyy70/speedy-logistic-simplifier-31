
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFAQLink } from "@/components/contact/ContactFAQLink";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Waves } from "@/components/ui/waves-background";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Speed E-Log - Logistique E-commerce pour PME</title>
        <meta
          name="description"
          content="Contactez Speed E-Log pour discuter de vos besoins en logistique e-commerce. Demandez un devis personnalisé ou posez vos questions."
        />
      </Helmet>

      {/* Fond animé avec vagues colorées */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <WavyBackground 
          colors={["#2F68F3", "#F3BA2F", "#45D4BF", "#F0ABFC", "#164E63"]}
          waveWidth={100}
          backgroundFill="rgb(17, 24, 39)"
          blur={10}
          speed="fast"
          waveOpacity={0.5}
          className="w-full h-full"
          containerClassName="w-full h-full"
        />
        
        {/* Couche secondaire d'animation */}
        <div className="absolute inset-0 opacity-20">
          <Waves 
            lineColor="rgba(255, 255, 255, 0.4)"
            backgroundColor="transparent"
            waveSpeedX={0.015}
            waveSpeedY={0.01}
            waveAmpX={30}
            waveAmpY={20}
            friction={0.9}
          />
        </div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contenu de la page de contact */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl">
              <ContactHeader />
              <ContactForm />
              <ContactFAQLink />
            </div>
            
            {/* Informations de contact */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl flex flex-col justify-center"
            >
              <ContactInfo />
              
              {/* Élément décoratif */}
              <div className="relative mt-8 h-60">
                <div className="absolute w-full h-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-orange-500/20 animate-pulse"></div>
                  <motion.div 
                    className="w-full h-full"
                    initial={{ backgroundPosition: "0% 0%" }}
                    animate={{ backgroundPosition: "100% 100%" }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(47, 104, 243, 0.3) 0%, rgba(243, 186, 47, 0.3) 25%, rgba(69, 212, 191, 0.3) 50%, rgba(240, 171, 252, 0.3) 75%, rgba(22, 78, 99, 0.3) 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                </div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <p className="text-xl font-light text-white/90 tracking-wider">
                    Révolutionnez votre <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">logistique e-commerce</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Particules flottantes décoratives */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              index % 3 === 0
                ? "bg-blue-400/30 w-4 h-4"
                : index % 3 === 1
                ? "bg-orange-400/30 w-6 h-6"
                : "bg-green-400/30 w-5 h-5"
            }`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Contact;
