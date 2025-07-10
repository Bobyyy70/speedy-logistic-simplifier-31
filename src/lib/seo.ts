
export type SEOPageData = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
  alternateUrls?: { [lang: string]: string };
  structuredData?: any;
};

export const generateMetadata = (page?: SEOPageData, currentPath?: string) => {
  const baseUrl = "https://speedelog.net";
  const defaultImage = `${baseUrl}/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png`; // Logo Speed E-Log
  
  const title = page?.title || defaultSEO.title;
  const description = page?.description || defaultSEO.description;
  const keywords = page?.keywords || defaultSEO.keywords;
  const image = page?.image || defaultImage;
  const canonical = page?.canonical || (currentPath ? `${baseUrl}${currentPath}` : baseUrl);

  return {
    title,
    description,
    keywords,
    canonical,
    robots: "index, follow",
    author: "Speed E-Log",
    language: "fr-FR",
    geo: {
      region: "FR-70",
      placename: "Port-sur-Saône, France",
      position: "47.6891;6.0456"
    },
    openGraph: {
      title,
      description,
      url: canonical,
      image,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Speed E-Log',
      site: '@speedelog'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@speedelog',
      creator: '@speedelog',
      title,
      description,
      image
    },
    structuredData: page?.structuredData || generateDefaultStructuredData()
  };
};

// Generate JSON-LD structured data for better SEO
export const generateDefaultStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Speed E-Log",
  "description": "Expert en logistique e-commerce pour PME",
  "url": "https://speedelog.net",
  "logo": "https://speedelog.net/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-XXX-XXX-XXX",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Port-sur-Saône",
    "addressRegion": "Haute-Saône",
    "postalCode": "70170",
    "addressCountry": "FR"
  },
  "areaServed": "France",
  "serviceType": "Logistique e-commerce",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de logistique e-commerce",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Externalisation logistique",
        "description": "Solutions complètes de logistique externalisée pour PME"
      },
      {
        "@type": "Service", 
        "name": "Fulfillment e-commerce",
        "description": "Préparation et expédition de commandes e-commerce"
      }
    ]
  }
});

export const defaultSEO: SEOPageData = {
  title: "Speed E-Log | Logistique E-commerce Simplifiée pour PME",
  description: "Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé.",
  keywords: "logistique e-commerce, externalisation logistique, 3PL, fulfillment, préparation commandes, PME logistique",
  image: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
};

export const seoPages: { [key: string]: SEOPageData } = {
  "/": {
    title: "Speed E-Log | Logistique E-commerce Simplifiée pour PME",
    description: "Externalisez votre logistique e-commerce avec Speed E-Log. Services fiables et transparents pour PME. Obtenez un devis personnalisé.",
    keywords: "logistique e-commerce PME, externalisation logistique, fulfillment France, 3PL e-commerce",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Speed E-Log",
      "description": "Expert en logistique e-commerce pour PME",
      "url": "https://speedelog.net",
      "telephone": "+33-XXX-XXX-XXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Port-sur-Saône",
        "addressRegion": "Haute-Saône",
        "postalCode": "70170",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.6891",
        "longitude": "6.0456"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "serviceArea": "France"
    }
  },
  "/services": {
    title: "Services Logistiques E-commerce | Speed E-Log - Externalisation 3PL",
    description: "Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions complètes pour PME.",
    keywords: "services logistique e-commerce, 3PL France, fulfillment, préparation commandes, stockage e-commerce",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Services de Logistique E-commerce",
      "provider": {
        "@type": "Organization",
        "name": "Speed E-Log"
      },
      "serviceType": "Logistique e-commerce",
      "description": "Services complets de logistique externalisée pour e-commerce"
    }
  },
  "/contact": {
    title: "Contact Speed E-Log - Consultation Logistique Gratuite | Devis 24h",
    description: "Contactez Speed E-Log pour optimiser votre logistique e-commerce. Réservez une consultation gratuite ou utilisez nos formulaires. Réponse sous 24h garantie.",
    keywords: "contact logistique e-commerce, consultation gratuite, devis logistique PME, Speed E-Log contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Speed E-Log",
      "description": "Page de contact pour consultation logistique gratuite"
    }
  },
  "/about": {
    title: "À propos Speed E-Log - Expert Logistique E-commerce PME | Histoire",
    description: "Découvrez Speed E-Log, votre partenaire logistique e-commerce. Notre histoire, mission et expertise au service des PME françaises depuis Port-sur-Saône.",
    keywords: "à propos Speed E-Log, histoire entreprise logistique, expert e-commerce PME, Port-sur-Saône",
  },
  "/faq": {
    title: "FAQ Logistique E-commerce PME | Speed E-Log - Questions Fréquentes",
    description: "Réponses expertes aux questions sur l'externalisation logistique e-commerce, coûts, délais et avantages pour PME. Guide complet Speed E-Log.",
    keywords: "FAQ logistique e-commerce, questions externalisation, coûts 3PL, avantages fulfillment PME",
  },
  "/technology": {
    title: "Technologie Logistique Avancée | Speed E-Log - Innovation E-commerce",
    description: "Découvrez notre technologie de pointe pour optimiser votre logistique e-commerce. Solutions innovantes et automatisation pour PME performantes.",
    keywords: "technologie logistique, automatisation e-commerce, innovation 3PL, solutions technologiques PME",
  },
  "/mentions-legales": {
    title: "Mentions Légales | Speed E-Log - Logistique E-commerce Port-sur-Saône",
    description: "Mentions légales Speed E-Log, société de logistique e-commerce basée à Port-sur-Saône, Haute-Saône. Informations légales et réglementaires.",
    keywords: "mentions légales Speed E-Log, société logistique Port-sur-Saône, informations légales",
  },
  "/politique-confidentialite": {
    title: "Politique Confidentialité | Speed E-Log - Protection Données RGPD",
    description: "Politique de confidentialité Speed E-Log conforme RGPD. Protection et traitement des données personnelles pour nos services logistique e-commerce.",
    keywords: "politique confidentialité, protection données RGPD, confidentialité Speed E-Log",
  },
  "/cgv": {
    title: "CGV Speed E-Log | Conditions Générales Logistique E-commerce",
    description: "Conditions générales de vente Speed E-Log pour services de logistique e-commerce. Tarifs, engagements et modalités de nos prestations 3PL.",
    keywords: "CGV Speed E-Log, conditions générales logistique, tarifs 3PL, conditions services e-commerce",
  },
};

// Generate sitemap data
export const generateSitemap = () => {
  const baseUrl = "https://speedelog.net";
  const pages = Object.keys(seoPages);
  
  return pages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.8
  }));
};
