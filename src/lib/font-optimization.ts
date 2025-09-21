/**
 * Font optimization utilities for better loading performance
 */

// Font loading strategies
export const FONT_STRATEGIES = {
  CRITICAL: 'critical',      // For above-the-fold content
  IMPORTANT: 'important',    // For important UI elements
  DEFERRED: 'deferred'       // For below-the-fold content
} as const;

type FontStrategy = typeof FONT_STRATEGIES[keyof typeof FONT_STRATEGIES];

interface FontConfig {
  family: string;
  weights: number[];
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  strategy: FontStrategy;
  preconnect?: string;
}

// Font configurations for the project
export const FONT_CONFIGS: Record<string, FontConfig> = {
  // Example custom font configuration
  'inter': {
    family: 'Inter',
    weights: [400, 500, 600, 700],
    display: 'swap',
    strategy: FONT_STRATEGIES.CRITICAL,
    preconnect: 'https://fonts.googleapis.com'
  },
  'playfair': {
    family: 'Playfair Display', 
    weights: [400, 700],
    display: 'swap',
    strategy: FONT_STRATEGIES.IMPORTANT,
    preconnect: 'https://fonts.googleapis.com'
  }
};

/**
 * Generate Google Fonts URL with optimizations
 */
export const generateFontUrl = (configs: FontConfig[]): string => {
  const families = configs.map(config => {
    const weights = config.weights.join(';');
    return `family=${config.family.replace(' ', '+')}:wght@${weights}`;
  }).join('&');

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
};

/**
 * Preload fonts based on strategy
 */
export const preloadFont = (url: string, strategy: FontStrategy = FONT_STRATEGIES.IMPORTANT) => {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  link.href = url;
  
  // Apply loading strategy
  switch (strategy) {
    case FONT_STRATEGIES.CRITICAL:
      link.fetchPriority = 'high';
      break;
    case FONT_STRATEGIES.DEFERRED:
      link.fetchPriority = 'low';
      break;
    default:
      link.fetchPriority = 'auto';
  }

  document.head.appendChild(link);
};

/**
 * Font loading optimization hook
 */
export const useFontOptimization = () => {
  const preloadCriticalFonts = () => {
    if (typeof window === 'undefined') return;

    // Preload critical system font metrics to prevent layout shift
    const criticalFonts = Object.values(FONT_CONFIGS)
      .filter(config => config.strategy === FONT_STRATEGIES.CRITICAL);

    criticalFonts.forEach(config => {
      if (config.preconnect) {
        // Add preconnect for faster DNS resolution
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = config.preconnect;
        document.head.appendChild(preconnect);
      }
    });
  };

  const loadFontsOnIdle = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => preloadCriticalFonts());
    } else {
      setTimeout(preloadCriticalFonts, 100);
    }
  };

  return { preloadCriticalFonts, loadFontsOnIdle };
};

/**
 * Font fallback stack for better FOUT/FOIT handling
 */
export const FONT_STACKS = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"', 
    'Roboto',
    'sans-serif'
  ].join(', '),
  
  serif: [
    'Georgia',
    '"Times New Roman"',
    'Times',
    'serif'
  ].join(', '),
  
  mono: [
    '"SF Mono"',
    'Monaco',
    '"Cascadia Code"',
    '"Roboto Mono"',
    'Consolas',
    'monospace'
  ].join(', ')
};

/**
 * CSS-in-JS font face declaration generator
 */
export const generateFontFace = (config: FontConfig): string => {
  return config.weights.map(weight => `
    @font-face {
      font-family: '${config.family}';
      font-weight: ${weight};
      font-display: ${config.display || 'swap'};
      src: url('/fonts/${config.family.toLowerCase().replace(' ', '-')}-${weight}.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `).join('\n');
};