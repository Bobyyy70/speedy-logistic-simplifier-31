
import React, { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Effet de parallaxe pour l'image
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
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
      description: "Profitez de nos tarifs négociés et de notre localisation pour des expéditions rapides et économiques vers la France l'Europe ainsi que partout dans le Monde."
    }
  ];
  
  return (
    <section 
      id="why-us" 
      ref={ref}
      className="py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column: advantages list */}
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-slate-900/60 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800/50 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`mt-1 h-5 w-5 flex-shrink-0 ${index % 2 === 0 ? 'text-blue-500 dark:text-blue-400' : 'text-orange-500 dark:text-orange-400'}`} />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{advantage.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column: Specialization card */}
          <motion.div 
            className="lg:mt-10"
            style={{ y: imageY, opacity }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-700 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Spécialisés pour votre niche</h3>
                  <p className="mb-6 opacity-90">Notre expertise est concentrée sur les produits à fort potentiel e-commerce :</p>
                  
                  <ul className="space-y-4">
                    {[
                      "Produits non fragiles",
                      "Produits non périssables",
                      "Sans température dirigée",
                      "Poids inférieur à 30 kg",
                      "Idéal pour produits à forte rotation"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-orange-300" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
