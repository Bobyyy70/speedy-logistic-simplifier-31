
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Données des témoignages
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
  },
  {
    quote: "Depuis que nous avons externalisé notre logistique à Speed E Log, nous avons pu réduire nos coûts opérationnels de 30% tout en améliorant la satisfaction client.",
    name: "Pierre Dupuis",
    role: "COO, TechAccessories",
    avatar: "/placeholder.svg",
    initials: "PD"
  },
  {
    quote: "Un partenaire fiable qui comprend les enjeux du e-commerce. Réactivité, précision et transparence sont au rendez-vous.",
    name: "Sophie Martin",
    role: "Responsable Logistique, ModeEthique",
    avatar: "/placeholder.svg",
    initials: "SM"
  }
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(intervalId);
  }, [api, current]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2 md:basis-2/3" key={index}>
                  <div className="bg-muted/30 border-0 rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <Star className="w-8 h-8 stroke-1 text-primary/20" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <p className="text-lg font-medium leading-snug tracking-tight">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">Par</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">{testimonial.name}</span>
                        <span className="text-muted-foreground">{testimonial.role}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
