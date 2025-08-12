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
    let cleanupFns: Array<() => void> = [];
    let headObserver: MutationObserver | null = null;
    let bodyObserver: MutationObserver | null = null;
    let debounceTimer: number | null = null;
    let poFCP: PerformanceObserver | null = null;
    let poLCP: PerformanceObserver | null = null;
    let poCLS: PerformanceObserver | null = null;
    let poFID: PerformanceObserver | null = null;

    const debounce = (fn: () => void, delay = 150) => {
      if (debounceTimer) window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(fn, delay);
    };

    // Measure Core Web Vitals progressively using PerformanceObserver where available
    const measureNavigation = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      if (navigation) {
        setMetrics(prev => ({
          ...(prev ?? {
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            cumulativeLayoutShift: 0,
            firstInputDelay: 0,
          }),
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.loadEventStart,
        }));
      }
    };

    const observePerf = () => {
      if (typeof PerformanceObserver === 'undefined') return;
      try {
        poFCP = new PerformanceObserver((list) => {
          const entry = list.getEntries().find(e => (e as PerformanceEntry).name === 'first-contentful-paint') as PerformanceEntry | undefined;
          if (entry) {
            setMetrics(prev => ({
              ...(prev ?? { pageLoadTime: 0, domContentLoaded: 0, largestContentfulPaint: 0, cumulativeLayoutShift: 0, firstInputDelay: 0 }),
              firstContentfulPaint: entry.startTime,
            }));
          }
        });
        poFCP.observe({ type: 'paint', buffered: true } as PerformanceObserverInit);
      } catch {}

      try {
        poLCP = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const last = entries[entries.length - 1] as PerformanceEntry | undefined;
          if (last) {
            setMetrics(prev => ({
              ...(prev ?? { pageLoadTime: 0, domContentLoaded: 0, firstContentfulPaint: 0, cumulativeLayoutShift: 0, firstInputDelay: 0 }),
              largestContentfulPaint: last.startTime,
            }));
          }
        });
        poLCP.observe({ type: 'largest-contentful-paint', buffered: true } as PerformanceObserverInit);
      } catch {}

      try {
        let clsValue = 0;
        poCLS = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as any[]) {
            if (!entry.hadRecentInput) clsValue += entry.value;
          }
          setMetrics(prev => ({
            ...(prev ?? { pageLoadTime: 0, domContentLoaded: 0, firstContentfulPaint: 0, largestContentfulPaint: 0, firstInputDelay: 0 }),
            cumulativeLayoutShift: clsValue,
          }));
        });
        poCLS.observe({ type: 'layout-shift', buffered: true } as PerformanceObserverInit);
      } catch {}

      try {
        poFID = new PerformanceObserver((list) => {
          const first = list.getEntries()[0] as any;
          if (first) {
            const fid = (first.processingStart ?? 0) - (first.startTime ?? 0);
            setMetrics(prev => ({
              ...(prev ?? { pageLoadTime: 0, domContentLoaded: 0, firstContentfulPaint: 0, largestContentfulPaint: 0, cumulativeLayoutShift: 0 }),
              firstInputDelay: fid,
            }));
          }
        });
        poFID.observe({ type: 'first-input', buffered: true } as PerformanceObserverInit);
      } catch {}
    };

    // Validate SEO elements; called debounced and on mutations
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
        totalImages: images.length,
      });
    };

    // Initial measurements
    measureNavigation();
    observePerf();

    const runValidations = () => debounce(validateSEO, 150);

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      runValidations();
    } else {
      const onLoad = () => runValidations();
      window.addEventListener('load', onLoad, { once: true });
      cleanupFns.push(() => window.removeEventListener('load', onLoad));
    }

    // Observe head/body changes to catch Helmet injections and dynamic content
    headObserver = new MutationObserver(() => runValidations());
    bodyObserver = new MutationObserver(() => runValidations());

    try {
      headObserver.observe(document.head, { childList: true, subtree: true, attributes: true });
      bodyObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['alt'] });
      cleanupFns.push(() => headObserver && headObserver.disconnect());
      cleanupFns.push(() => bodyObserver && bodyObserver.disconnect());
    } catch {}

    return () => {
      cleanupFns.forEach(fn => fn());
      if (debounceTimer) window.clearTimeout(debounceTimer);
      poFCP?.disconnect?.();
      poLCP?.disconnect?.();
      poCLS?.disconnect?.();
      poFID?.disconnect?.();
    };
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