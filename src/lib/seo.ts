import { Metadata } from 'next/dist/lib/metadata/api/types';

export type SEOPageData = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export const generateMetadata = (page?: SEOPageData) => {
  const baseUrl = "https://speedelog.net";
  const defaultImage = `${baseUrl}/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png`; // Logo Speed E-Log
  
  const title = page?.title || defaultSEO.title;
  const description = page?.description || defaultSEO.description;
  const keywords = page?.keywords || defaultSEO.keywords;
  const image = page?.image || defaultImage;
  const url = page?.url ? `${baseUrl}${page.url}` : baseUrl;

  return {
    title,
    description,
    keywords,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      image,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Speed E-Log'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image
    }
  };
};

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
  },
  "/services": {
    title: "Services Logistiques E-commerce | Speed E-Log",
    description: "Découvrez nos services logistiques e-commerce: réception, stockage, préparation de commandes, expédition et gestion des retours. Solutions pour PME.",
  },
  "/contact": {
    title: "Contact Speed E-Log - Réservez votre consultation logistique gratuite",
    description: "Contactez Speed E-Log pour optimiser votre logistique e-commerce. Réservez une consultation gratuite ou utilisez nos formulaires de contact et SAV. Réponse sous 24h garantie.",
  },
  "/about": {
    title: "À propos de Speed E-Log - Votre partenaire logistique e-commerce",
    description: "Découvrez l'histoire, la mission et les valeurs de Speed E-Log, votre expert en logistique e-commerce pour PME.",
  },
  "/faq": {
    title: "FAQ Logistique E-commerce | Speed E-Log",
    description: "Réponses aux questions fréquentes sur nos services de logistique e-commerce, l'externalisation et les avantages pour votre PME.",
  },
  "/technology": {
    title: "Technologie et Logistique E-commerce | Speed E-Log",
    description: "Découvrez comment notre technologie de pointe optimise votre logistique e-commerce. Solutions innovantes pour PME.",
  },
  "/mentions-legales": {
    title: "Mentions Légales | Speed E-Log",
    description: "Mentions légales de Speed E-Log, votre partenaire logistique e-commerce basé à Port-sur-Saône.",
  },
  "/politique-confidentialite": {
    title: "Politique de Confidentialité | Speed E-Log",
    description: "Politique de confidentialité de Speed E-Log concernant la collecte et l'utilisation des données personnelles.",
  },
  "/cgv": {
    title: "CGV | Speed E-Log",
    description: "Conditions générales de vente de Speed E-Log pour les services de logistique e-commerce.",
  },
};
