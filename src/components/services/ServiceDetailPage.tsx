/**
 * Service Detail Page Template
 * Reusable template for all service pages
 */

import { motion } from "framer-motion";
import { Check, ArrowRight, Package, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceDetail } from "@/data/services-data";
import { SEOHead } from "@/components/seo/SEOHead";

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

// Icon mapping
const iconMap: Record<string, any> = {
  'plug': Package,
  'zap': Zap,
  'package': Package,
  'monitor': TrendingUp,
  'brain': TrendingUp,
  'scan': Shield,
  'layers': Package,
  'chart': TrendingUp,
  'truck': Package,
  'target': TrendingUp,
  'globe': Package,
  'map-pin': Shield,
  'check-circle': Check,
  'tag': Package,
  'shield': Shield,
  'package-check': Check,
  'palette': Package,
  'printer': Package,
  'gift': Package,
  'box': Package,
  'refresh-cw': Zap,
  'search': Shield,
  'chart-line': TrendingUp,
  'settings': Shield,
  'cable': Package,
  'package-2': Package,
  'layers-2': Package,
  'calendar-clock': Shield,
};

export const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO */}
      <SEOHead
        title={`${service.title} | Speed E-Log`}
        description={service.description}
        keywords={`${service.title}, ${service.slug}, logistique e-commerce, Speed E-Log`}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
          <div className="max-w-3xl">
            <motion.div
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium">Service Premium</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
                  {service.cta.primary}
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300">
                  {service.cta.secondary}
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Avantages Clés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Check className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Fonctionnalités
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Package;
              return (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Comment Ça Marche
          </h2>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Line */}
                {index < service.process.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-primary-200" />
                )}

                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                  {step.step}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Services Complémentaires
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((relatedSlug, index) => (
              <Link
                key={index}
                to={`/services/${relatedSlug}`}
                className="group"
              >
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                    {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-500">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Obtenez votre devis personnalisé gratuit en moins de 24h
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Obtenir mon devis gratuit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
