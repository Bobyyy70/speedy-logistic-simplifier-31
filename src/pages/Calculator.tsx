import { ROICalculator } from "@/components/calculator/ROICalculator";
import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <SEOHead
        title="Calculateur ROI | Estimez vos Économies Logistiques"
        description="Calculez vos économies potentielles en externalisant votre logistique e-commerce avec Speed E-Log. Réduisez vos coûts de 30-40% et libérez du temps pour votre croissance."
        keywords="calculateur logistique, ROI fulfillment, économies logistique, calculer coûts logistique"
      />

      <div className="container mx-auto px-4 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Combien Pouvez-Vous Économiser ?
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez en 2 minutes vos économies potentielles en externalisant votre logistique
          </p>
        </motion.div>

        <ROICalculator />

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="text-sm">
            * Estimations basées sur nos tarifs moyens et l'expérience de 500+ clients.
            <br />
            Votre devis personnalisé peut varier selon vos besoins spécifiques.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;
