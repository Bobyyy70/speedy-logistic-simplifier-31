/**
 * Featured Testimonial Section
 * Based on specifications: Large testimonial with photo and link to case study
 */

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedTestimonialProps {
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  clientSince?: string;
  photo?: string;
  caseStudyLink?: string;
}

export const FeaturedTestimonialSection = ({
  quote = "Speed E-Log a réduit nos coûts logistiques de 35% et amélioré nos délais de livraison de 2 jours. Leur plateforme est intuitive et leur équipe est toujours disponible. C'est le partenaire idéal pour notre croissance.",
  author = "Jean Dupont",
  role = "CEO",
  company = "MarqueFashion",
  clientSince = "Client depuis 2023",
  photo = "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
  caseStudyLink = "/services"
}: FeaturedTestimonialProps) => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[900px]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Quote Icon */}
          <motion.div
            className="absolute -top-4 -left-4 md:-left-8 text-primary-500 opacity-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Quote className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>

          {/* Quote */}
          <blockquote className="relative z-10 mb-8">
            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed italic">
              "{quote}"
            </p>
          </blockquote>

          {/* Author Section */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Author Photo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <img
                src={photo}
                alt={author}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Author Info */}
            <div>
              <div className="text-lg md:text-xl font-semibold text-gray-900">
                {author}
              </div>
              <div className="text-base md:text-lg text-gray-600">
                {role}, {company}
              </div>
              <div className="text-sm md:text-base text-gray-500 italic mt-1">
                {clientSince}
              </div>
            </div>
          </motion.div>

          {/* Case Study Link */}
          {caseStudyLink && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to={caseStudyLink}
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium group transition-colors duration-300"
              >
                Lire le case study complet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
