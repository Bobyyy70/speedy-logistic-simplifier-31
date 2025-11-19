/**
 * Blog Listing Page
 * SEO-optimized blog with category filtering and featured articles
 */

import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  blogArticlesData,
  getFeaturedArticles,
  getLatestArticles,
  getBlogArticlesByCategory
} from "@/data/blog-articles-data";
import { Calendar, Clock, Tag, TrendingUp, BookOpen } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const categories = ["Tous", "Guides", "Industry News", "Best Practices", "Case Studies", "Tutorials", "Ecommerce Tips"];
  const featuredArticles = getFeaturedArticles();

  // Filter articles by category
  const filteredArticles = selectedCategory === "Tous"
    ? blogArticlesData
    : getBlogArticlesByCategory(selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Blog Logistique E-commerce | Guides, Conseils & Actualités"
        description="Découvrez nos guides, tutoriels et conseils d'experts en logistique e-commerce. Optimisez votre fulfillment, réduisez vos coûts et boostez votre croissance."
        keywords="blog logistique, guides fulfillment, conseils e-commerce, tutoriels 3PL, actualités supply chain"
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-[1280px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">50+ Articles d'Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Blog Logistique E-commerce
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Guides pratiques, conseils d'experts et actualités pour optimiser votre supply chain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1280px]">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              <h2 className="text-3xl font-heading font-bold">Articles Vedettes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.div
                  key={article.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-xs font-semibold">
                        Vedette
                      </span>
                    </div>
                    <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readingTime} min</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.publishDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                      </div>
                      <Link to={`/blog/${article.slug}`} className="text-primary-500 font-semibold hover:text-primary-700 transition-colors">
                        Lire →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Tag className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1280px]">
          {currentArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % articlesPerPage) * 0.05 }}
                  >
                    <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-900" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readingTime} min</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.publishDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <span>Par {article.author}</span>
                      </div>
                      <Link to={`/blog/${article.slug}`} className="text-primary-500 font-semibold hover:text-primary-700 transition-colors">
                        Lire l'article →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                  >
                    Précédent
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-md font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-primary-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                  >
                    Suivant
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Aucun article trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Restez Informé
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Recevez nos derniers articles et guides directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-6 py-4 rounded-md text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-primary-500 rounded-md font-semibold hover:scale-105 transition-all duration-300">
              S'abonner
            </button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Pas de spam. Désinscription en 1 clic.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Prêt à Optimiser votre Logistique ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Découvrez comment Speed E-Log peut transformer votre supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-300">
                Obtenir un devis gratuit
              </button>
            </Link>
            <Link to="/calculator">
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Calculer vos économies
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
