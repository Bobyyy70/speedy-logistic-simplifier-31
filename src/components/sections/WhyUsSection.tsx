
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
export function WhyUsSection() {
  // Define advantages with specific details
  const advantages = [{
    title: "Expertise E-commerce Ciblée",
    description: "Nous comprenons vos enjeux et sommes spécialisés dans les produits non fragiles <30kg, optimisant chaque étape pour votre type d'inventaire."
  }, {
    title: "Technologie Efficace",
    description: "Profitez d'un suivi en temps réel et d'intégrations faciles, basés sur des systèmes internes efficaces (WMS/OMS/TMS) pensés pour l'automatisation."
  }, {
    title: "Flexibilité pour PME",
    description: "Nos services s'adaptent à votre croissance, que vous expédiiez 50 ou 500 colis par jour, tout en restant focalisés sur les besoins des PME."
  }, {
    title: "Transparence Totale",
    description: "Aucun frais caché. Notre grille tarifaire claire (voir section Tarifs) vous permet de maîtriser vos coûts logistiques."
  }, {
    title: "Partenariat Dédié",
    description: "Plus qu'un prestataire, nous sommes votre partenaire logistique engagé, basé à Port-sur-Saône, prêt à vous accompagner."
  }, {
    title: "Compétitivité Europe & Qualité Garantie",
    description: "Profitez de nos tarifs négociés et de notre localisation pour des expéditions rapides et économiques vers la France et l'Europe proche. Nous nous engageons sur une qualité de service irréprochable pour chaque colis."
  }];
  return <section id="why-us" className="py-12 md:py-24 lg:py-32 bg-gradient-to-bl from-orange-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-950 dark:to-orange-950/20">
      <div className="container mx-auto">
        <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          {/* Text Column */}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm">
              Notre Différence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Pourquoi choisir Speed E-Log ?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Nous combinons expertise logistique, technologie et flexibilité pour offrir un service <strong>parfaitement adapté aux PME e-commerce ambitieuses de notre niche</strong>.
            </p>
            
            <ul className="grid gap-4 py-4">
              {advantages.map((advantage, index) => <motion.li key={index} className="flex items-start space-x-3" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500 dark:text-orange-400" />
                  <div>
                    <h3 className="font-semibold">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </motion.li>)}
            </ul>
          </motion.div>
          
          {/* Visual Column */}
          <motion.div className="flex items-center justify-center" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <img src="https://placehold.co/600x400/fff7ed/f97316?text=Avantages+Speed+E-Log" alt="Avantages Speed E-Log" width="600" height="400" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>;
}
