/**
 * Security headers configuration for enhanced application security
 * Implements comprehensive security policies including CSP, HSTS, and more
 */

interface SecurityHeadersConfig {
  isDevelopment: boolean;
  hubspotDomain?: string;
  allowedDomains?: string[];
}

/**
 * Generates Content Security Policy based on environment and configuration
 */
export const generateCSP = (config: SecurityHeadersConfig): string => {
  const { isDevelopment, hubspotDomain = 'js-eu1.hsforms.net', allowedDomains = [] } = config;
  
  // Generate nonce for inline scripts (in real implementation, this would be generated per request)
  const nonce = generateNonce();
  
  const policies = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      // HubSpot domains
      hubspotDomain,
      'js.hsforms.net',
      'js.hscollectedforms.net',
      'js.usemessages.com',
      '*.hubspot.com',
      // Google Analytics and other tracking
      'www.google-analytics.com',
      'www.googletagmanager.com',
      // Development only
      ...(isDevelopment ? ["'unsafe-eval'", "'unsafe-inline'"] : [`'nonce-${nonce}'`]),
      ...allowedDomains
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind and dynamic styles
      'fonts.googleapis.com',
      '*.hubspot.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'blob:',
      'https:',
      '*.hubspot.com',
      '*.hsforms.com'
    ],
    'font-src': [
      "'self'",
      'fonts.gstatic.com',
      'data:'
    ],
    'connect-src': [
      "'self'",
      '*.hubspot.com',
      '*.hsforms.com',
      'api.hubspot.com',
      'forms.hubspot.com',
      ...(isDevelopment ? ['ws:', 'wss:'] : [])
    ],
    'frame-src': [
      "'self'",
      '*.hubspot.com',
      '*.hsforms.com',
      'meetings.hubspot.com',
      'meetings-eu1.hubspot.com'
    ],
    'worker-src': ["'self'", 'blob:'],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'", '*.hubspot.com'],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': isDevelopment ? [] : ['']
  };

  return Object.entries(policies)
    .filter(([_, values]) => values.length > 0)
    .map(([directive, values]) => `${directive} ${values.join(' ')}`)
    .join('; ');
};

/**
 * Generates a cryptographically secure nonce for CSP
 */
export const generateNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, Array.from(array)));
};

/**
 * Complete security headers configuration
 */
export const getSecurityHeaders = (config: SecurityHeadersConfig = { isDevelopment: false }): Record<string, string> => {
  const { isDevelopment } = config;
  
  return {
    // Content Security Policy
    'Content-Security-Policy': generateCSP(config),
    
    // HTTP Strict Transport Security (HTTPS only)
    ...(!isDevelopment && {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    }),
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // XSS Protection
    'X-XSS-Protection': '1; mode=block',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Permissions Policy (Feature Policy)
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'accelerometer=()',
      'gyroscope=()'
    ].join(', '),
    
    // Cross-Origin Policies
    'Cross-Origin-Embedder-Policy': 'unsafe-none', // Required for some third-party integrations
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Resource-Policy': 'cross-origin'
  };
};

/**
 * Initialize security headers for the application
 * This would typically be called during application startup
 */
export const initializeSecurityHeaders = () => {
  const isDevelopment = import.meta.env.DEV;
  const headers = getSecurityHeaders({ isDevelopment });
  
  // Set meta tags for security headers that can be set client-side
  const metaHeaders = [
    { name: 'X-Content-Type-Options', content: headers['X-Content-Type-Options'] },
    { name: 'X-XSS-Protection', content: headers['X-XSS-Protection'] },
    { name: 'Referrer-Policy', content: headers['Referrer-Policy'] }
  ];
  
  metaHeaders.forEach(({ name, content }) => {
    const existingMeta = document.querySelector(`meta[http-equiv="${name}"]`);
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  });
  
  // Log security configuration in development
  if (isDevelopment) {
    console.log('🔒 Security headers initialized:', Object.keys(headers));
  }
};

/**
 * Validate current page against security policies
 */
export const validateSecurityCompliance = (): { compliant: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  // Check for inline scripts without nonce
  const inlineScripts = document.querySelectorAll('script:not([src]):not([nonce])');
  if (inlineScripts.length > 0) {
    issues.push(`${inlineScripts.length} inline scripts without nonce detected`);
  }
  
  // Check for mixed content
  if (location.protocol === 'https:') {
    const insecureContent = document.querySelectorAll('[src^="http:"], [href^="http:"]');
    if (insecureContent.length > 0) {
      issues.push(`${insecureContent.length} insecure content references detected`);
    }
  }
  
  // Check for missing security headers
  const requiredHeaders = ['X-Content-Type-Options', 'X-XSS-Protection'];
  requiredHeaders.forEach(header => {
    const meta = document.querySelector(`meta[http-equiv="${header}"]`);
    if (!meta) {
      issues.push(`Missing security header: ${header}`);
    }
  });
  
  return {
    compliant: issues.length === 0,
    issues
  };
};