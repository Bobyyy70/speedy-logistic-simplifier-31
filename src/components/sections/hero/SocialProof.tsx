
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function SocialProof() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      className="mt-6 flex items-center justify-center lg:justify-start space-x-3"
    >
      <div className="flex -space-x-2">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo HEFA Group" className="p-1 object-cover" src="/lovable-uploads/44a63774-38e6-47c0-bddf-56c2d10f5e6c.png" />
            <AvatarFallback>HG</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo THOMAS" className="p-1 object-cover" src="/lovable-uploads/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb.png" />
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Avatar className="inline-block h-8 w-8 border-2 border-white">
            <AvatarImage alt="Logo Heatzy" className="p-1 object-cover" src="/lovable-uploads/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6.png" />
            <AvatarFallback>HZ</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
      <motion.p 
        className="text-sm text-slate-600 font-medium"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Déjà <span className="font-bold text-slate-900">20+ PME</span> nous font confiance
      </motion.p>
    </motion.div>
  );
}
