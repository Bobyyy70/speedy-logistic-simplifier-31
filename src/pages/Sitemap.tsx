import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { discoverRoutes } from "@/lib/route-discovery";
import { ArrowUpRight, Home, FileText, Info, Mail, HelpCircle, Shield, Scale, ScrollText } from "lucide-react";

const Sitemap: React.FC = () => {
  const routes = discoverRoutes();
  
  const getRouteIcon = (path: string) => {
    switch (path) {
      case "/": return Home;
      case "/services": return FileText;
      case "/technology": return Info;
      case "/about": return Info;
      case "/contact": return Mail;
      case "/faq": return HelpCircle;
      case "/mentions-legales": return Scale;
      case "/politique-confidentialite": return Shield;
      case "/cgv": return ScrollText;
      default: return FileText;
    }
  };

  const getRouteDescription = (path: string) => {
    const descriptions: { [key: string]: string } = {
      "/": "Page d'accueil avec nos services et présentation",
      "/services": "Découvrez nos solutions logistiques e-commerce",
      "/technology": "Notre technologie et infrastructure",
      "/about": "À propos de Speed E-Log et notre équipe",
      "/contact": "Contactez-nous pour vos besoins logistiques",
      "/faq": "Questions fréquemment posées",
      "/mentions-legales": "Mentions légales et informations juridiques",
      "/politique-confidentialite": "Politique de confidentialité et protection des données",
      "/cgv": "Conditions générales de vente"
    };
    return descriptions[path] || "Page du site Speed E-Log";
  };

  const mainPages = routes.filter(route => ["/", "/services", "/technology", "/about", "/contact", "/faq"].includes(route.path));
  const legalPages = routes.filter(route => ["/mentions-legales", "/politique-confidentialite", "/cgv"].includes(route.path));

  return (
    <>
      <Helmet>
        <title>Plan du Site - Speed E-Log | Navigation Complète</title>
        <meta name="description" content="Plan du site Speed E-Log - Accédez facilement à toutes nos pages : services logistiques, technologie, contact, FAQ et mentions légales." />
        <meta name="keywords" content="plan du site, navigation, Speed E-Log, logistique, e-commerce" />
        <link rel="canonical" href="https://speedelog.net/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plan du Site
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naviguez facilement sur notre site et découvrez toutes nos pages dédiées 
              à la logistique e-commerce pour les PME.
            </p>
          </div>

          {/* Main Navigation */}
          <div className="grid gap-12 lg:gap-16">
            {/* Main Pages */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Home className="h-6 w-6 mr-3 text-blue-600" />
                Pages Principales
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((route) => {
                  const Icon = getRouteIcon(route.path);
                  return (
                    <Link
                      key={route.path}
                      to={route.path}
                      className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {route.path === "/" ? "Accueil" : route.component}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {getRouteDescription(route.path)}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Legal Pages */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-blue-600" />
                Informations Légales
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalPages.map((route) => {
                  const Icon = getRouteIcon(route.path);
                  return (
                    <Link
                      key={route.path}
                      to={route.path}
                      className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {route.component}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {getRouteDescription(route.path)}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Besoin d'aide pour naviguer ?
            </h3>
            <p className="text-gray-600 mb-6">
              Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter 
              ou à consulter notre FAQ pour obtenir des réponses rapides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Nous Contacter
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Consulter la FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;