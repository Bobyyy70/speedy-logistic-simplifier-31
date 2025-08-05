import DOMPurify from 'dompurify';

// Input sanitization utilities
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// Enhanced rate limiting with localStorage persistence
export class ClientRateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;
  private readonly storageKey: string;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000, storageKey: string = 'rate_limiter') {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.storageKey = storageKey;
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          const data = JSON.parse(stored);
          this.attempts = new Map(Object.entries(data));
        }
      }
    } catch (error) {
      console.warn('Failed to load rate limiting data from storage:', error);
    }
  }

  private saveToStorage(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = Object.fromEntries(this.attempts);
        localStorage.setItem(this.storageKey, JSON.stringify(data));
      }
    } catch (error) {
      console.warn('Failed to save rate limiting data to storage:', error);
    }
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const record = this.attempts.get(identifier);

    if (!record) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      this.saveToStorage();
      return true;
    }

    // Reset if window has passed
    if (now - record.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      this.saveToStorage();
      return true;
    }

    // Check if limit exceeded
    if (record.count >= this.maxAttempts) {
      this.logSecurityEvent('rate_limit_exceeded', { identifier, count: record.count });
      return false;
    }

    // Increment counter
    record.count++;
    record.lastAttempt = now;
    this.saveToStorage();
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
    this.saveToStorage();
  }

  private logSecurityEvent(type: string, data: any): void {
    if (import.meta.env.DEV || import.meta.env.VITE_DEBUG_MODE === 'true') {
      console.warn(`Security Event [${type}]:`, data);
    }
  }
}

// Form security utilities
export const generateHoneypot = () => ({
  name: 'website', // Common bot field name
  value: '',
  style: { display: 'none' }
});

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Enhanced content validation with security monitoring
export const validateContent = (content: string): { isValid: boolean; sanitized: string; threats: string[] } => {
  const sanitized = sanitizeInput(content);
  const threats: string[] = [];
  
  // Enhanced suspicious patterns detection
  const suspiciousPatterns = [
    { pattern: /<script/i, threat: 'script_injection' },
    { pattern: /javascript:/i, threat: 'javascript_protocol' },
    { pattern: /on\w+\s*=/i, threat: 'event_handler' },
    { pattern: /data:text\/html/i, threat: 'data_uri_html' },
    { pattern: /vbscript:/i, threat: 'vbscript_protocol' },
    { pattern: /expression\s*\(/i, threat: 'css_expression' },
    { pattern: /import\s+/i, threat: 'es6_import' },
    { pattern: /eval\s*\(/i, threat: 'eval_function' },
    { pattern: /document\.(write|writeln)/i, threat: 'document_write' },
    { pattern: /window\.(location|open)/i, threat: 'window_manipulation' }
  ];

  suspiciousPatterns.forEach(({ pattern, threat }) => {
    if (pattern.test(content)) {
      threats.push(threat);
    }
  });

  // Additional checks
  if (content.length > 10000) threats.push('content_too_long');
  if (content.split('\n').length > 100) threats.push('too_many_lines');
  
  // Log security events in development
  if (threats.length > 0) {
    logSecurityEvent('suspicious_content_detected', { 
      threats, 
      contentLength: content.length,
      timestamp: new Date().toISOString()
    });
  }
  
  return {
    isValid: threats.length === 0,
    sanitized,
    threats
  };
};

// Bot detection patterns
export const detectBotBehavior = (formData: Record<string, any>): { isBot: boolean; signals: string[] } => {
  const signals: string[] = [];
  
  // Check for honeypot field
  if (formData.website && formData.website.length > 0) {
    signals.push('honeypot_filled');
  }
  
  // Check for suspicious form completion speed (less than 3 seconds)
  const formStartTime = formData._startTime;
  if (formStartTime && (Date.now() - formStartTime) < 3000) {
    signals.push('form_completed_too_fast');
  }
  
  // Check for suspicious field patterns
  const textFields = Object.values(formData).filter(value => typeof value === 'string');
  const suspiciousFieldPatterns = [
    /^test$/i,
    /^[a-z]{20,}$/,  // Random string
    /^\d+$/,         // Only numbers for name fields
    /@test\.com$/i,  // Test email domains
  ];
  
  textFields.forEach(field => {
    suspiciousFieldPatterns.forEach(pattern => {
      if (pattern.test(String(field))) {
        signals.push('suspicious_field_pattern');
      }
    });
  });
  
  if (signals.length > 0) {
    logSecurityEvent('bot_behavior_detected', { signals, formData: sanitizeFormData(formData) });
  }
  
  return {
    isBot: signals.length > 0,
    signals
  };
};

// Security event logging
export const logSecurityEvent = (type: string, data: any): void => {
  const isDevelopment = import.meta.env.DEV;
  const debugMode = import.meta.env.VITE_DEBUG_MODE === 'true';
  
  if (isDevelopment || debugMode) {
    console.warn(`🚨 Security Event [${type}]:`, {
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
      data
    });
  }
  
  // In production, you could send this to a security monitoring service
  if (!isDevelopment && typeof window !== 'undefined') {
    // Example: Send to analytics or monitoring service
    try {
      // This would be replaced with actual monitoring service integration
      window.dispatchEvent(new CustomEvent('security-event', { 
        detail: { type, data, timestamp: Date.now() } 
      }));
    } catch (error) {
      // Silently fail in production
    }
  }
};

// Sanitize form data for logging (remove sensitive information)
const sanitizeFormData = (formData: Record<string, any>): Record<string, any> => {
  const sanitized = { ...formData };
  
  // Remove sensitive fields
  const sensitiveFields = ['password', 'ssn', 'creditCard', 'token', 'apiKey'];
  sensitiveFields.forEach(field => {
    if (sanitized[field]) {
      sanitized[field] = '[REDACTED]';
    }
  });
  
  // Truncate long text fields
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key] === 'string' && sanitized[key].length > 100) {
      sanitized[key] = sanitized[key].substring(0, 97) + '...';
    }
  });
  
  return sanitized;
};

// Security headers utility
export const getSecurityHeaders = () => ({
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
});