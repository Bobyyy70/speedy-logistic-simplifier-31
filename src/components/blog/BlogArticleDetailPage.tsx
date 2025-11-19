/**
 * Blog Article Detail Page Template
 */

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogArticle } from "@/data/blog-articles-data";
import { SEOHead } from "@/components/seo/SEOHead";

interface BlogArticleDetailPageProps {
  article: BlogArticle;
  relatedArticles?: BlogArticle[];
}

export const BlogArticleDetailPage = ({ article, relatedArticles = [] }: BlogArticleDetailPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${article.title} | Speed E-Log Blog`}
        description={article.metaDescription}
        keywords={article.seoKeywords.join(", ")}
      />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-[900px]">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              {article.category}
            </span>
            {article.featured && (
              <span className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold">
                Article Vedette
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{new Date(article.publishDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{article.readingTime} min de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Par {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      {article.outline && article.outline.length > 0 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4 max-w-[900px]">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <Check className="w-4 h-4 text-primary-500" />
              </div>
              Sommaire
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {article.outline.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary-500 font-semibold">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[900px]">
          {/* Excerpt */}
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="prose prose-lg max-w-none">
            {article.outline.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-900">
                  {section}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {/* Placeholder for actual content - in real implementation, this would come from a CMS */}
                  <p className="text-base">
                    Contenu détaillé de la section "{section}". Dans une implémentation complète, ce contenu proviendrait d'un CMS ou d'un système de gestion de contenu headless.
                  </p>
                  <p className="text-base">
                    Cette section fournirait des informations approfondies, des exemples concrets, des statistiques pertinentes et des conseils actionnables pour les lecteurs.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-600">Tags:</span>
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {article.ctaText || "Prêt à Optimiser votre Logistique ?"}
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Découvrez comment Speed E-Log peut transformer votre supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold hover:scale-105 transition-all duration-300">
                Obtenir un devis gratuit
              </button>
            </Link>
            <Link to="/calculator">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300">
                Calculer vos économies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1280px]">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Articles Recommandés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.slug}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                        {relatedArticle.category}
                      </span>
                      <span className="text-xs text-gray-500">{relatedArticle.readingTime} min</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <Link to={`/blog/${relatedArticle.slug}`} className="text-primary-500 font-semibold hover:text-primary-700 transition-colors">
                      Lire l'article →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
