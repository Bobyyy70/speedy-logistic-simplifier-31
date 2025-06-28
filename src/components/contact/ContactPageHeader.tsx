
import React from "react";
import { motion } from "framer-motion";

export const ContactPageHeader = () => {
  return (
    <motion.header 
      className="text-center mb-12 pt-8" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
        📞 Contactez-nous
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
        Comment pouvons-nous{" "}
        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          vous aider ?
        </span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
        Choisissez le moyen de contact qui vous convient le mieux. Notre équipe est là pour vous accompagner.
      </p>
    </motion.header>
  );
};
