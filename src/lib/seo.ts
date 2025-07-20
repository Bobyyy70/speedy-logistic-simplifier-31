
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
// Generate FAQ structured data
export const generateFAQStructuredData = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Generate Review/Testimonial structured data
export const generateReviewStructuredData = (testimonials: { quote: string; name: string; rating: number }[]) => {
  const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Speed E-Log",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.quote,
      "datePublished": "2024-01-01" // You might want to make this dynamic
    }))
  };
};

// Generate enhanced Service structured data
export const generateServiceStructuredData = (serviceName: string, description: string, features?: string[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Speed E-Log",
    "url": "https://speedelog.net",
    "logo": "https://speedelog.net/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png"
  },
  "serviceType": "Logistique e-commerce",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://speedelog.net/contact",
    "serviceSmsNumber": "+33-XXX-XXX-XXX"
  },
  "category": "Logistics",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "Variable selon besoins",
    "priceCurrency": "EUR"
  },
  ...(features && {
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Catalogue ${serviceName}`,
      "itemListElement": features.map(feature => ({
        "@type": "Service",
        "name": feature
      }))
    }
  })
});

// Generate Website structured data
export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Speed E-Log",
  "alternateName": "Speed E-Log - Logistique E-commerce",
  "url": "https://speedelog.net",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://speedelog.net/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

// Generate BreadcrumbList structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

// Generate Product/Service Catalog structured data
export const generateProductCatalogStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services de logistique e-commerce Speed E-Log",
  "description": "Catalogue complet des services logistiques pour e-commerce",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Réception et contrôle qualité",
      "description": "Réception, vérification et mise en stock de vos produits"
    },
    {
      "@type": "Service", 
      "position": 2,
      "name": "Stockage sécurisé",
      "description": "Entreposage professionnel avec suivi en temps réel"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Préparation de commandes",
      "description": "Picking et emballage professionnel de vos commandes"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Expédition multi-transporteurs",
      "description": "Livraison optimisée avec nos partenaires transporteurs"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Gestion des retours",
      "description": "Traitement complet des retours clients"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Reporting et analytiques",
      "description": "Suivi détaillé de votre activité logistique"
    }
  ]
});

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
  description: "Externalisez votre logistique e-commerce avec Speed E-Log. Solutions fiables et transparentes pour PME. Devis personnalisé gratuit.",
  keywords: "logistique e-commerce, externalisation logistique, 3PL, fulfillment, préparation commandes, PME logistique",
  image: "/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png",
};

export const seoPages: { [key: string]: SEOPageData } = {
  "/": {
    title: "Speed E-Log | Logistique E-commerce Simplifiée pour PME",
    description: "Externalisez votre logistique e-commerce avec Speed E-Log. Solutions fiables et transparentes pour PME. Devis personnalisé gratuit.",
    keywords: "logistique e-commerce PME, externalisation logistique, fulfillment France, 3PL e-commerce",
    structuredData: [
      {
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
      },
      generateWebsiteStructuredData(),
      generateProductCatalogStructuredData(),
      generateReviewStructuredData([
        { quote: "Service au top ! Très satisfait de Speedelog", name: "Alexandre. Z.", rating: 4 },
        { quote: "En tant qu'e-commerçant actif sur Amazon, Cdiscount et d'autres plateformes, j'ai besoin d'un logisticien sur qui je peux vraiment compter.", name: "Fred P.", rating: 5 },
        { quote: "Pour mon activité e-commerce et trouver un logisticien avec le peu de moyens que nous avons... mais speedElog nous a tout de suite confiance", name: "Mathieu M.", rating: 5 },
        { quote: "Je crois que je n'ai jamais eu un logisticien aussi fiable depuis le lancement de mon activité", name: "Julie B.", rating: 5 },
        { quote: "Entreprise à taille humaine, avec de vrais valeurs et proches de ses clients", name: "Mathis H.", rating: 4 }
      ])
    ]
  },
  "/services": {
    title: "Services Logistiques E-commerce | Speed E-Log - Externalisation 3PL",
    description: "Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions complètes pour PME.",
    keywords: "services logistique e-commerce, 3PL France, fulfillment, préparation commandes, stockage e-commerce",
    structuredData: generateServiceStructuredData(
      "Services de Logistique E-commerce",
      "Solutions complètes de logistique externalisée pour e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours.",
      [
        "Réception et contrôle qualité",
        "Stockage sécurisé",
        "Préparation de commandes",
        "Expédition multi-transporteurs",
        "Gestion des retours",
        "Reporting et analytiques"
      ]
    )
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
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "À propos de Speed E-Log",
        "description": "Histoire et mission de Speed E-Log, expert en logistique e-commerce pour PME",
        "mainEntity": {
          "@type": "Organization",
          "name": "Speed E-Log",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Équipe Speed E-Log"
          },
          "mission": "Simplifier la logistique e-commerce pour les PME françaises",
          "knowsAbout": [
            "Logistique e-commerce",
            "Fulfillment",
            "Gestion des stocks",
            "Expédition",
            "Solutions 3PL"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "France"
          }
        }
      },
      generateBreadcrumbStructuredData([
        { name: "Accueil", url: "https://speedelog.net" },
        { name: "À propos", url: "https://speedelog.net/about" }
      ])
    ]
  },
  "/faq": {
    title: "FAQ Logistique E-commerce PME | Speed E-Log - Questions Fréquentes",
    description: "Réponses expertes aux questions sur l'externalisation logistique e-commerce, coûts, délais et avantages pour PME. Guide complet Speed E-Log.",
    keywords: "FAQ logistique e-commerce, questions externalisation, coûts 3PL, avantages fulfillment PME",
    structuredData: generateFAQStructuredData([
      {
        question: "Quels types de produits gérez-vous ?",
        answer: "Nous sommes spécialisés dans les produits non fragiles, non périssables, sans température dirigée, et dont le poids ne dépasse pas 30 kg. Nous sommes particulièrement adaptés aux produits à forte rotation comme les compléments alimentaires, cosmétiques, accessoires, etc."
      },
      {
        question: "Comment sont calculés les frais de transport ?",
        answer: "Les frais de transport sont variables en fonction des transporteurs, des destinations, du poids et du volume des colis. Nous avons négocié des tarifs avantageux avec nos partenaires transporteurs que nous répercutons à nos clients."
      },
      {
        question: "Quel est l'engagement contractuel minimum ?",
        answer: "Nous privilégions la flexibilité avec des engagements adaptés à vos besoins, généralement de 3 à 12 mois. Notre objectif est d'établir un partenariat durable plutôt que de vous lier par des contrats contraignants."
      },
      {
        question: "Quelles plateformes e-commerce sont compatibles avec votre système ?",
        answer: "Nous nous intégrons avec la plupart des principales plateformes e-commerce : Shopify, WooCommerce, Prestashop, Magento, ainsi que les marketplaces comme Amazon ou Cdiscount."
      },
      {
        question: "Comment s'effectue le suivi des stocks et des commandes ?",
        answer: "Vous bénéficiez d'un accès à notre outil avec lequel vous pouvez suivre en temps réel vos niveaux de stock, l'état de vos commandes et générer des rapports."
      },
      {
        question: "Comment gérez-vous les retours clients ?",
        answer: "Nous traitons les retours avec le même soin que les expéditions. Chaque retour est réceptionné, contrôlé et, selon vos instructions, remis en stock, mis de côté ou recyclé."
      },
      {
        question: "Quelles sont vos zones de livraison ?",
        answer: "Nous assurons la livraison en France métropolitaine, dans les DOM-TOM, en Europe et à l'international."
      },
      {
        question: "Comment se déroule l'intégration initiale avec Speed E-Log ?",
        answer: "L'intégration se fait en plusieurs étapes : analyse de vos besoins, configuration de notre système pour votre catalogue, mise en place des intégrations techniques, réception de vos stocks."
      }
    ])
  },
  "/technology": {
    title: "Technologie Logistique Avancée | Speed E-Log - Innovation E-commerce",
    description: "Découvrez notre technologie de pointe pour optimiser votre logistique e-commerce. Solutions innovantes et automatisation pour PME performantes.",
    keywords: "technologie logistique, automatisation e-commerce, innovation 3PL, solutions technologiques PME",
    structuredData: [
      generateServiceStructuredData(
        "Technologie Logistique Avancée",
        "Plateforme technologique innovante pour optimiser la logistique e-commerce avec automatisation et suivi en temps réel.",
        [
          "Plateforme SupplyOS",
          "Intégrations e-commerce automatisées",
          "Suivi temps réel des stocks",
          "Analytiques et reporting avancés",
          "API pour développeurs",
          "Automatisation des processus"
        ]
      ),
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SupplyOS",
        "description": "Plateforme logistique intégrée pour e-commerce",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "Inclus dans nos services",
          "priceCurrency": "EUR"
        },
        "featureList": [
          "Gestion des stocks en temps réel",
          "Intégration multiplateforme",
          "Reporting avancé",
          "API REST",
          "Dashboard analytiques"
        ]
      }
    ]
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

// Enhanced sitemap generation with route discovery
export const generateDynamicSitemap = (): string => {
  const baseUrl = "https://speedelog.net";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const routes = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/services', priority: 0.9, changefreq: 'monthly' },
    { path: '/technology', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', priority: 0.9, changefreq: 'monthly' },
    { path: '/about', priority: 0.7, changefreq: 'monthly' },
    { path: '/faq', priority: 0.8, changefreq: 'monthly' },
    { path: '/mentions-legales', priority: 0.3, changefreq: 'yearly' },
    { path: '/politique-confidentialite', priority: 0.3, changefreq: 'yearly' },
    { path: '/cgv', priority: 0.3, changefreq: 'yearly' }
  ];
  
  const urlEntries = routes.map(route => {
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
${urlEntries}
  
</urlset>`;
};
