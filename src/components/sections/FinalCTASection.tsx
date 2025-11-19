/**
 * Final CTA Section
 * Based on specifications: Call-to-action with inline form
 */

import { motion } from "framer-motion";
import { Shield, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  phone?: string;
  monthly_volume?: string;
}

export const FinalCTASection = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    phone: "",
    monthly_volume: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual HubSpot API endpoint
      const response = await fetch("/api/hubspot/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          phone: "",
          monthly_volume: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-[600px] relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Prêt à optimiser votre logistique ?
        </motion.h2>

        {/* Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Prénom *"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Nom *"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email professionnel *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Entreprise *"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone (optionnel)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              />
            </div>

            {/* Monthly Volume */}
            <div>
              <select
                name="monthly_volume"
                value={formData.monthly_volume}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-md bg-white border-2 border-transparent focus:border-primary-300 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
              >
                <option value="">Volume mensuel de commandes *</option>
                <option value="0-100">0-100 commandes</option>
                <option value="100-500">100-500 commandes</option>
                <option value="500-2000">500-2000 commandes</option>
                <option value="2000+">2000+ commandes</option>
              </select>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Shield className="w-4 h-4 text-green-300" />
              <span>Vos données sont protégées. Réponse sous 24h.</span>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="text-green-300 text-center font-medium">
                ✓ Message envoyé avec succès ! Nous vous recontacterons sous 24h.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-300 text-center font-medium">
                ✗ Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

            {/* Legal */}
            <p className="text-xs text-white/70 text-center">
              En soumettant ce formulaire, j'accepte les{" "}
              <Link to="/cgv" className="underline hover:text-white">
                conditions d'utilisation
              </Link>
              .
            </p>
          </form>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-white/80 font-medium">
                OU
              </span>
            </div>
          </div>

          {/* Secondary CTA */}
          <Link to="/contact">
            <motion.button
              className="w-full h-12 border-2 border-white bg-transparent text-white rounded-md font-medium hover:bg-white hover:text-primary-500 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Planifier une démo
            </motion.button>
          </Link>

          {/* Trust Line */}
          <div className="mt-6 text-center">
            <p className="text-sm text-white/80">
              <span className="font-semibold">500+ entreprises</span> · Setup en{" "}
              <span className="font-semibold">3 jours</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
