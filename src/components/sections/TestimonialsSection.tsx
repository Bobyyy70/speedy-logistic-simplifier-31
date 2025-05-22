
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    rating: 4
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
  },
  {
    id: 4,
    content: "Je crois que je n'ai jamais eu un logisticien aussi fiable depuis le lancement de mon activité (en 2015), un taux d'erreurs quasiment nul, une super gestion des retours et un Sav existant contrairement a beaucoup d'autres ;) Merci beaucoup, grâce à speedElog je peux maintenant me consacrer pleinement à mon activité sans me soucier des contraintes logistiques. Allez y les yeux fermés",
    name: "Julie B.",
    rating: 5,
    author: "Julie B."
  },
  {
    id: 5,
    content: "Entreprise à taille humaine, avec de vrais valeurs et proches de ses clients, qui sait nous conseiller sur les meilleures solutions de transport ! je fais clairement des économies depuis que j'ai externalisé ma logistique chez eux",
    author: "Mathis H.",
    rating: 4
  },
  {
    id: 6,
    content: "Je viens de lancer mon activité e-commerce et j'ai eu du mal à trouver un logisticien avec le peu d'expédition que nous avons.. mais speedElog nous a fait tout de suite confiance en intégrant notre stock chez eux. Cerise sur le gâteau ils nous donnent de vrais conseils pour nous développer",
    author: "Mathieu M.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static md:absolute ml-0 mr-2" />
              <CarouselNext className="relative static md:absolute ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
