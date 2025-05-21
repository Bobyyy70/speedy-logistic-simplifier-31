
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

// Styled Star component
const Star = () => (
  <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

// Testimonial data with real reviews
const testimonials = [
  {
    id: 1,
    content: "Tarifs justes, professionnalisme, et hyper sympa ! Il y a encore des gens passionnés et impliqués. A su gérer récemment un gros pic d'activité sans baisser la qualité du service.",
    author: "Cédric M.",
    rating: 5
  },
  {
    id: 2,
    content: "En tant qu'e-commerçant actif sur Amazon, Cdiscount et d'autres plateformes, j'ai besoin d'un logisticien sur qui je peux vraiment compter. Ce que j'apprécie particulièrement chez lui, c'est sa réactivité exceptionnelle : que ce soit un dimanche soir ou un jour férié, il est toujours là pour répondre présent. Il sait s'adapter à toutes les situations, toujours avec professionnalisme et efficacité. Les tarifs sont compétitifs, mais surtout, le service est irréprochable. C'est rare de trouver un partenaire aussi fiable, et pour moi, c'est devenu un pilier de mon activité !",
    author: "Fred P.",
    rating: 5
  },
  {
    id: 3,
    content: "Pour mon activité e-commerce et trouver un logisticien avec le peu de moyens que nous avons... mais speedElog nous a tout de suite confiance en intégrant nos produits chez eux. Cerise sur le gâteau ils nous donnent de vrais conseils pour nous aider.",
    author: "Mathieu M.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-300/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-orange-300/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pin-badge text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 mb-4"
          >
            Témoignages
          </motion.div>
          
          <AnimatedText
            text="Ils nous font confiance"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
            delay={0.2}
          />
          
          <motion.p
            className="max-w-[700px] mx-auto mt-4 text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Découvrez comment Speed E-Log aide d'autres e-commerçants à simplifier leur logistique.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="testimonial-card h-full">
                <CardContent className="pt-6 pb-2 flex flex-col h-full">
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="flex-grow mb-4">
                    <p className="text-slate-600 dark:text-slate-300 italic">"{testimonial.content}"</p>
                  </div>
                  
                  {/* Author */}
                  <div className="text-right">
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
