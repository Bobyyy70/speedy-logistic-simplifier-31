
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// Updated testimonial data from Testimonials.tsx component
const testimonials = [
  {
    quote: "Speed E Log nous a permis de nous concentrer sur notre croissance sans nous soucier de la logistique. Service impeccable et réactif !",
    name: "Marie Dupont",
    role: "Fondatrice, BeautyBox France",
    avatar: "/placeholder.svg",
    initials: "MD"
  },
  {
    quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
    name: "Thomas Laurent",
    role: "Directeur E-commerce, GreenLife",
    avatar: "/placeholder.svg",
    initials: "TL"
  },
  {
    quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus pour notre activité.",
    name: "Julie Moreau",
    role: "CEO, FashionTrend",
    avatar: "/placeholder.svg",
    initials: "JM"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-900 py-12 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            Nos Clients Témoignent
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Témoignages de nos Partenaires E-commerce
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Découvrez comment Speed E Log a transformé la logistique de nos clients et les a aidés à se concentrer sur leur cœur de métier.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Card className="border-0 bg-muted/30 h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary/20" />
                  <blockquote className="pl-6 text-lg font-medium leading-snug tracking-tight">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section - Commented out for now */}
        {/*
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-4">
            Quelques unes des marques qui nous font confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+1" alt="Client Logo 1" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+2" alt="Client Logo 2" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+3" alt="Client Logo 3" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+4" alt="Client Logo 4" className="h-10"/>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
