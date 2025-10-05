// Schema validation and utilities for structured data

export interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Validate JSON-LD schema structure
export const validateSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Basic validation
  if (!schema["@context"]) {
    errors.push("Missing @context property");
  }
  
  if (!schema["@type"]) {
    errors.push("Missing @type property");
  }

  // Organization validation
  if (schema["@type"] === "Organization") {
    if (!schema.name) errors.push("Organization missing name");
    if (!schema.url) warnings.push("Organization missing URL");
    if (!schema.logo) warnings.push("Organization missing logo");
  }

  // FAQPage validation
  if (schema["@type"] === "FAQPage") {
    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      errors.push("FAQPage missing mainEntity array");
    } else {
      schema.mainEntity.forEach((question: any, index: number) => {
        if (question["@type"] !== "Question") {
          errors.push(`FAQ item ${index + 1} missing @type: Question`);
        }
        if (!question.name) {
          errors.push(`FAQ item ${index + 1} missing question name`);
        }
        if (!question.acceptedAnswer) {
          errors.push(`FAQ item ${index + 1} missing acceptedAnswer`);
        }
      });
    }
  }

  // Service validation
  if (schema["@type"] === "Service") {
    if (!schema.name) errors.push("Service missing name");
    if (!schema.description) warnings.push("Service missing description");
    if (!schema.provider) warnings.push("Service missing provider");
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

// Generate schema for different content types
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Speed E-Log",
    "logo": {
      "@type": "ImageObject",
      "url": "https://speedelog.net/lovable-uploads/e1cf40f5-51ac-4818-b66e-e65eb61520d1.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  },
  ...(article.image && {
    "image": {
      "@type": "ImageObject",
      "url": article.image
    }
  })
});

// Generate Event schema
export const generateEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organizer: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  ...(event.endDate && { "endDate": event.endDate }),
  "location": {
    "@type": "Place",
    "name": event.location
  },
  "organizer": {
    "@type": "Organization",
    "name": event.organizer
  },
  ...(event.url && { "url": event.url })
});

// Generate HowTo schema for step-by-step guides
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    duration?: string;
    image?: string;
  }>;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  ...(howTo.totalTime && { "totalTime": howTo.totalTime }),
  ...(howTo.url && { "url": howTo.url }),
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    ...(step.duration && { "itemListElement": [{ "@type": "HowToDirection", "text": step.text }] }),
    ...(step.image && { "image": step.image })
  }))
});

// Generate Person schema for author information
export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  email?: string;
  url?: string;
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "description": person.description,
  ...(person.image && { "image": person.image }),
  ...(person.email && { "email": person.email }),
  ...(person.url && { "url": person.url }),
  ...(person.sameAs && { "sameAs": person.sameAs }),
  "worksFor": {
    "@type": "Organization",
    "name": "Speed E-Log"
  }
});

// Generate DefinedTerm schema for glossary items
export const generateDefinedTermSchema = (term: {
  name: string;
  description: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": term.name,
  "description": term.description,
  ...(term.url && { "url": term.url })
});

// Generate BreadcrumbList schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    ...(item.url && { "item": item.url })
  }))
});

// Generate AggregateRating schema for reviews/testimonials
export const generateAggregateRatingSchema = (rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": rating.ratingValue,
  "reviewCount": rating.reviewCount,
  "bestRating": rating.bestRating || 5,
  "worstRating": rating.worstRating || 1
});

// Generate Product/Service offer schema
export const generateOfferSchema = (offer: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  validThrough?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": offer.name,
  "description": offer.description,
  ...(offer.price && { 
    "price": offer.price,
    "priceCurrency": offer.priceCurrency || "EUR"
  }),
  "availability": offer.availability || "https://schema.org/InStock",
  "seller": {
    "@type": "Organization",
    "name": "Speed E-Log"
  },
  ...(offer.validFrom && { "validFrom": offer.validFrom }),
  ...(offer.validThrough && { "validThrough": offer.validThrough })
});

// Development helper to preview structured data
export const previewStructuredData = (schema: any): string => {
  try {
    return JSON.stringify(schema, null, 2);
  } catch (error) {
    return `Error serializing schema: ${error}`;
  }
};

// Extract and combine multiple schemas
export const combineSchemas = (schemas: any[]): any[] => {
  return schemas.filter(schema => schema && typeof schema === 'object');
};

// SEO enhancement utilities
export const enhancePageSEO = (pageType: string, content: any) => {
  const baseSchemas = [];

  // Always include website schema
  baseSchemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Speed E-Log",
    "url": "https://speedelog.net"
  });

  // Add page-specific schemas
  switch (pageType) {
    case 'homepage':
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Speed E-Log",
        "url": "https://speedelog.net"
      });
      break;
    
    case 'contact':
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Speed E-Log"
      });
      break;
    
    case 'services':
      baseSchemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Services de logistique e-commerce",
        "provider": {
          "@type": "Organization",
          "name": "Speed E-Log"
        }
      });
      break;
  }

  return baseSchemas;
};