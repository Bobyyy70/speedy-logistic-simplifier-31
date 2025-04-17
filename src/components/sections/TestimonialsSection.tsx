import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// Updated testimonial data from Testimonials.tsx component
const testimonials = [{
  quote: "Speed E Log nous a permis de nous concentrer sur notre croissance sans nous soucier de la logistique. Service impeccable et réactif !",
  name: "Marie Dupont",
  role: "Fondatrice, BeautyBox France",
  avatar: "/placeholder.svg",
  initials: "MD"
}, {
  quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
  name: "Thomas Laurent",
  role: "Directeur E-commerce, GreenLife",
  avatar: "/placeholder.svg",
  initials: "TL"
}, {
  quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus pour notre activité.",
  name: "Julie Moreau",
  role: "CEO, FashionTrend",
  avatar: "/placeholder.svg",
  initials: "JM"
}];
export function TestimonialsSection() {
  return <section id="testimonials" className="bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-900 py-12 md:py-24 my-0 lg:py-[240px]">
      
    </section>;
}