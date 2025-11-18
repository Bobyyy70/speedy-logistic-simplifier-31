/**
 * Alternating Services Section
 * Based on specifications: Service cards with alternating image/content layout
 */

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Fulfillment E-commerce",
    description: "Solution complète de préparation et expédition de commandes e-commerce. Stockage sécurisé, picking professionnel, emballage soigné et expédition rapide avec tracking en temps réel.",
    benefits: [
      "Préparation en 24h maximum",
      "Intégration avec vos plateformes (Shopify, WooCommerce, etc.)",
      "Emballage professionnel et personnalisable",
      "Suivi en temps réel de vos stocks"
    ],
    image: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
    link: "/services"
  },
  {
    title: "Warehouse Management",
    description: "Gestion complète de votre entrepôt avec système WMS de pointe. Optimisation des espaces, inventaire en temps réel et processus automatisés pour maximiser votre efficacité.",
    benefits: [
      "Dashboard temps réel de vos stocks",
      "Inventaires tournants automatisés",
      "Optimisation des emplacements",
      "Alertes de réapprovisionnement"
    ],
    image: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
    link: "/services"
  },
  {
    title: "Transport & Distribution",
    description: "Réseau multi-transporteurs avec tarifs négociés. Livraison France et International avec les meilleurs délais et tarifs du marché.",
    benefits: [
      "Tarifs négociés -30% vs standard",
      "Choix automatique du meilleur transporteur",
      "Livraison express disponible",
      "Suivi de bout en bout"
    ],
    image: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
    link: "/services"
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center py-8 lg:py-12`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Image Column */}
      <motion.div
        className="w-full lg:w-1/2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
          {service.title}
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-3 mb-8">
          {service.benefits.map((benefit, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to={service.link}>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-500 text-primary-500 rounded-md font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export const AlternatingServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
