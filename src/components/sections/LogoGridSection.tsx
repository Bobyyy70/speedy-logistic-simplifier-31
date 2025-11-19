/**
 * Logo Grid Section - Social Proof
 * Based on specifications: "Rejoignez 500+ entreprises qui nous font confiance"
 */

import { motion } from "framer-motion";

interface LogoGridSectionProps {
  title?: string;
  subtitle?: string;
}

export const LogoGridSection = ({
  title = "Rejoignez 500+ entreprises qui nous font confiance",
  subtitle = "Ils nous font confiance"
}: LogoGridSectionProps) => {

  // Client logos - replace with actual client logos
  const clientLogos = [
    { name: "Client 1", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 2", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 3", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 4", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 5", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 6", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 7", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 8", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 9", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 10", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 11", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
    { name: "Client 12", logo: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 mb-6">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <div className="relative group w-full h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-w-[120px] md:max-w-[150px] max-h-[60px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base text-gray-600 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};
