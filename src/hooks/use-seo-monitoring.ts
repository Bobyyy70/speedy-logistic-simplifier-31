import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SEOMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface SEOValidation {
  hasTitle: boolean;
  titleLength: number;
  hasDescription: boolean;
  descriptionLength: number;
  hasH1: boolean;
  h1Count: number;
  hasStructuredData: boolean;
  imagesMissingAlt: number;
  totalImages: number;
}

export function useSEOMonitoring() {
  const location = useLocation();
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [validation, setValidation] = useState<SEOValidation | null>(null);

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setMetrics({
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.loadEventStart,
          firstContentfulPaint: 0, // Would need observer for real FCP
          largestContentfulPaint: 0, // Would need observer for real LCP
          cumulativeLayoutShift: 0, // Would need observer for real CLS
          firstInputDelay: 0 // Would need observer for real FID
        });
      }
    };

    // Validate SEO elements
    const validateSEO = () => {
      const title = document.querySelector('title')?.textContent || '';
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const h1Elements = document.querySelectorAll('h1');
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      const images = document.querySelectorAll('img');
      const imagesMissingAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '');

      setValidation({
        hasTitle: title.length > 0,
        titleLength: title.length,
        hasDescription: description.length > 0,
        descriptionLength: description.length,
        hasH1: h1Elements.length > 0,
        h1Count: h1Elements.length,
        hasStructuredData: structuredData.length > 0,
        imagesMissingAlt: imagesMissingAlt.length,
        totalImages: images.length
      });
    };

    // Run measurements after DOM is loaded
    if (document.readyState === 'complete') {
      measureWebVitals();
      validateSEO();
    } else {
      window.addEventListener('load', () => {
        measureWebVitals();
        validateSEO();
      });
    }
  }, [location.pathname]);

  // Calculate SEO score
  const calculateSEOScore = (): number => {
    if (!validation) return 0;

    let score = 0;
    const maxScore = 100;

    // Title checks (20 points)
    if (validation.hasTitle) score += 10;
    if (validation.titleLength >= 30 && validation.titleLength <= 60) score += 10;

    // Description checks (20 points)
    if (validation.hasDescription) score += 10;
    if (validation.descriptionLength >= 120 && validation.descriptionLength <= 160) score += 10;

    // Heading checks (15 points)
    if (validation.hasH1) score += 10;
    if (validation.h1Count === 1) score += 5;

    // Structured data (15 points)
    if (validation.hasStructuredData) score += 15;

    // Image alt text (20 points)
    if (validation.totalImages > 0) {
      const altTextScore = ((validation.totalImages - validation.imagesMissingAlt) / validation.totalImages) * 20;
      score += altTextScore;
    } else {
      score += 20; // No images means no missing alt text
    }

    // Performance (10 points) - simplified
    if (metrics && metrics.pageLoadTime < 3000) score += 10;

    return Math.round(score);
  };

  // Get SEO recommendations
  const getRecommendations = (): string[] => {
    if (!validation) return [];

    const recommendations: string[] = [];

    if (!validation.hasTitle) {
      recommendations.push("Ajouter une balise title à la page");
    } else if (validation.titleLength < 30 || validation.titleLength > 60) {
      recommendations.push("Optimiser la longueur du titre (30-60 caractères)");
    }

    if (!validation.hasDescription) {
      recommendations.push("Ajouter une meta description");
    } else if (validation.descriptionLength < 120 || validation.descriptionLength > 160) {
      recommendations.push("Optimiser la longueur de la description (120-160 caractères)");
    }

    if (!validation.hasH1) {
      recommendations.push("Ajouter une balise H1 à la page");
    } else if (validation.h1Count > 1) {
      recommendations.push("Utiliser une seule balise H1 par page");
    }

    if (!validation.hasStructuredData) {
      recommendations.push("Ajouter des données structurées JSON-LD");
    }

    if (validation.imagesMissingAlt > 0) {
      recommendations.push(`Ajouter des attributs alt à ${validation.imagesMissingAlt} image(s)`);
    }

    if (metrics && metrics.pageLoadTime > 3000) {
      recommendations.push("Améliorer le temps de chargement de la page");
    }

    return recommendations;
  };

  return {
    metrics,
    validation,
    seoScore: calculateSEOScore(),
    recommendations: getRecommendations(),
    isLoading: !metrics || !validation
  };
}