/**
 * Case Study Detail Page Template
 */

import { motion } from "framer-motion";
import { Check, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/data/case-studies-data";
import { SEOHead } from "@/components/seo/SEOHead";

interface CaseStudyDetailPageProps {
  caseStudy: CaseStudy;
}

export const CaseStudyDetailPage = ({ caseStudy }: CaseStudyDetailPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`Case Study: ${caseStudy.client.name} | Speed E-Log`}
        description={caseStudy.challenge.substring(0, 155)}
        keywords={`case study, ${caseStudy.tags.join(', ')}`}
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex items-center gap-3 mb-6">
            {caseStudy.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Comment {caseStudy.client.name} a {caseStudy.results[0].improvement}
          </h1>

          <div className="flex items-center gap-4 text-lg">
            <span>{caseStudy.client.industry}</span>
            <span>•</span>
            <span>{caseStudy.client.location}</span>
          </div>
        </div>
      </section>

      {/* Results Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  {result.value}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-900 mb-1">
                  {result.metric}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {result.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[900px]">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              Le Défi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              La Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Results Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Les Résultats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {result.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-primary-50 p-8 rounded-xl">
            <Quote className="w-12 h-12 text-primary-500 mb-4" />
            <blockquote className="text-xl italic text-gray-900 mb-6">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-200 rounded-full" />
              <div>
                <div className="font-semibold text-gray-900">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {caseStudy.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Obtenez les Mêmes Résultats
          </h2>
          <p className="text-xl mb-8">
            Découvrez comment Speed E-Log peut transformer votre logistique
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold text-lg hover:scale-105 transition-all duration-300">
              Obtenir mon devis gratuit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
