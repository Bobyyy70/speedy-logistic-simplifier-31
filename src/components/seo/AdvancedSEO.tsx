import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  structuredData?: any[];
  hreflang?: Record<string, string>;
  businessInfo?: {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    logo: string;
    socialLinks: string[];
  };
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title = 'Speed E Log - Logistique E-commerce Sans les Tracas',
  description = 'Externalisez votre logistique e-commerce avec Speed E Log. Fulfillment, stockage et expédition optimisés pour PME. Intégration Shopify, WooCommerce et 40+ plateformes.',
  keywords = ['logistique e-commerce', 'fulfillment', 'expédition', 'stockage', 'PME', 'Shopify', 'WooCommerce'],
  canonicalUrl,
  ogImage = '/og-image-default.jpg',
  ogType = 'website',
  structuredData = [],
  hreflang = {},
  businessInfo
}) => {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  
  // Default business info for Speed E Log
  const defaultBusinessInfo = {
    name: 'Speed E Log',
    description: 'Solutions logistiques pour e-commerce - La logistique sans les tracas',
    address: 'Paris, France',
    phone: '+33 1 23 45 67 89',
    email: 'contact@speedelog.com',
    logo: '/logo-speedelog.png',
    socialLinks: [
      'https://www.linkedin.com/company/speedelog',
      'https://twitter.com/speedelog'
    ]
  };

  const business = businessInfo || defaultBusinessInfo;

  // Generate Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    description: business.description,
    url: currentUrl,
    logo: business.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      email: business.email,
      availableLanguage: 'French'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: business.address
    },
    sameAs: business.socialLinks
  };

  // Generate Service structured data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fulfillment E-commerce',
    description: 'Service de fulfillment complet pour e-commerce : réception, stockage, préparation et expédition de commandes',
    provider: {
      '@type': 'Organization',
      name: business.name
    },
    serviceType: 'Logistique E-commerce',
    offers: {
      '@type': 'Offer',
      priceRange: 'À partir de 6,50€',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    }
  };

  // Generate WebSite structured data with search action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: currentUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${currentUrl}/recherche?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Combine all structured data
  const allStructuredData = [
    organizationSchema,
    serviceSchema,
    websiteSchema,
    ...structuredData
  ];

  // Generate rich meta tags
  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: business.name },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: business.name },
    { property: 'og:locale', content: 'fr_FR' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    
    // Additional SEO meta tags
    { name: 'theme-color', content: '#0066cc' },
    { name: 'msapplication-TileColor', content: '#0066cc' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'format-detection', content: 'telephone=no' },
    
    // Business specific
    { name: 'geo.region', content: 'FR' },
    { name: 'geo.placename', content: 'France' },
    { name: 'ICBM', content: '48.8566, 2.3522' }, // Paris coordinates
    
    // Schema.org microdata
    { itemProp: 'name', content: title },
    { itemProp: 'description', content: description },
    { itemProp: 'image', content: ogImage }
  ];

  // Track SEO performance
  useEffect(() => {
    // Monitor Core Web Vitals and other performance metrics
    if (typeof window !== 'undefined') {
      // Track page load time
      const startTime = performance.now();
      
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        console.log(`Page Load Time: ${loadTime.toFixed(2)}ms`);
        
        // Send to analytics if available
        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'Performance'
          });
        }
      });

      // Track Core Web Vitals - simplified version
      try {
        // Basic performance tracking without external dependencies
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log(`${entry.name}: ${entry.startTime}ms`);
            }
          });
          observer.observe({ entryTypes: ['navigation', 'paint'] });
        }
      } catch (error) {
        console.log('Performance tracking not available');
      }
    }
  }, []);

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => {
        if (tag.name) {
          return <meta key={index} name={tag.name} content={tag.content} />;
        } else if (tag.property) {
          return <meta key={index} property={tag.property} content={tag.content} />;
        } else if (tag.itemProp) {
          return <meta key={index} itemProp={tag.itemProp} content={tag.content} />;
        }
        return null;
      })}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Hreflang */}
      {Object.entries(hreflang).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Additional SEO optimizations */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Security headers via meta tags */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: *.google-analytics.com; connect-src 'self' *.google-analytics.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};