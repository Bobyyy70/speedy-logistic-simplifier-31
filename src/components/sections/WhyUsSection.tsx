
import React, { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Effet de parallaxe pour l'image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.3]);
  
  // Définir les avantages avec des détails spécifiques
  const advantages = [
    {
      title: "Expertise E-commerce Ciblée",
      description: "Nous comprenons vos enjeux et sommes spécialisés dans les produits non fragiles <30kg, optimisant chaque étape pour votre type d'inventaire."
    },
    {
      title: "Technologie Efficace",
      description: "Profitez d'un suivi en temps réel et d'intégrations faciles, basés sur des systèmes internes efficaces (WMS/OMS/TMS) pensés pour l'automatisation."
    },
    {
      title: "Flexibilité pour PME",
      description: "Nos services s'adaptent à votre croissance, que vous expédiiez 50 ou 500 colis par jour, tout en restant focalisés sur les besoins des PME."
    },
    {
      title: "Transparence Totale",
      description: "Aucun frais caché. Notre grille tarifaire claire (voir section Tarification) vous permet de maîtriser vos coûts logistiques."
    },
    {
      title: "Partenariat & Accompagnement",
      description: "Nous sommes un véritable partenaire de croissance, pas un simple prestataire logistique."
    },
    {
      title: "Compétitivité & Qualité Garantie",
      description: "Profitez de nos tarifs négociés et de notre localisation pour des expéditions rapides et économiques vers la France l'Europe ainsi que partout dans le Monde. Nous nous engageons sur une qualité de service irréprochable pour chaque colis."
    }
  ];
  
  return (
    <section 
      id="why-us" 
      ref={ref}
      className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Cercles décoratifs flottants */}
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]),
        }}
      />
      <motion.div 
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]),
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          {/* Text Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="pin-badge text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 
              }}
            >
              Notre différence
            </motion.div>
            
            <AnimatedText 
              text="Pourquoi choisir Speed E-Log ?"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white" 
              delay={0.2}
            />
            
            <motion.p 
              className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Nous combinons expertise logistique, technologie et flexibilité pour offrir un service <strong>parfaitement adapté aux PME e-commerce ambitieuses de notre niche</strong>.
            </motion.p>
            
            <ul className="grid gap-4 py-4">
              {advantages.map((advantage, index) => (
                <motion.li 
                  key={index} 
                  className="section-box flex items-start space-x-3 p-3 hover:bg-slate-50/70 dark:hover:bg-slate-900/70 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <CheckCircle className={`mt-1 h-5 w-5 flex-shrink-0 ${index % 2 === 0 ? 'text-orange-500 dark:text-orange-400' : 'text-blue-600 dark:text-blue-500'}`} />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{advantage.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{advantage.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div 
            className="flex items-center justify-center"
            style={{ y: imageY, opacity }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-green-500/20 rounded-xl blur-lg"></div>
              <img 
                alt="Avantages Speed E-Log" 
                width="600" 
                height="400" 
                src="/lovable-uploads/8496c6ed-4aa6-48c1-a91a-046ad5db961f.png" 
                className="mx-auto aspect-video overflow-hidden rounded-xl shadow-lg object-fill relative z-10" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
