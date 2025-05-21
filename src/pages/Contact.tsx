
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFAQLink } from "@/components/contact/ContactFAQLink";
import { AuroraBackground } from "@/components/ui/aurora-background";

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

      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <AuroraBackground 
          className="w-full h-full"
          showRadialGradient={true}
          keepExistingBackground={true}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact form container with glass effect */}
            <div className="tech-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl">
              <ContactHeader />
              <ContactForm />
              <ContactFAQLink />
            </div>
            
            {/* Contact info container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="tech-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl flex flex-col justify-center"
            >
              <ContactInfo />
              
              {/* Data visualization element */}
              <div className="relative mt-8 h-60">
                <div className="absolute w-full h-full rounded-xl overflow-hidden tech-grid">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#76ABFF]/20 via-transparent to-[#9D4EDD]/20 animate-pulse"></div>
                  <motion.div 
                    className="w-full h-full"
                    initial={{ backgroundPosition: "0% 0%" }}
                    animate={{ backgroundPosition: "100% 100%" }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(118, 171, 255, 0.2) 0%, rgba(118, 74, 241, 0.2) 40%, rgba(157, 78, 221, 0.2) 70%, rgba(76, 201, 240, 0.2) 100%)",
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
                    <span className="tech-gradient-text font-bold">Révolutionnez</span> votre <span className="font-bold text-[#4CC9F0]">logistique</span> <span className="font-bold text-[#9D4EDD]">e-commerce</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating tech particles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              index % 3 === 0
                ? "bg-[#76ABFF]/30 w-4 h-4"
                : index % 3 === 1
                ? "bg-[#9D4EDD]/30 w-6 h-6"
                : "bg-[#4CC9F0]/30 w-5 h-5"
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
