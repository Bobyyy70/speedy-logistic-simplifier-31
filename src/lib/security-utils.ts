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

// Enhanced rate limiting with localStorage persistence and progressive blocking
export class ClientRateLimiter {
  private attempts: Map<string, { count: number; firstAttempt: number; lastAttempt: number; violations: number }> = new Map();
  private maxAttempts: number;
  private windowMs: number;
  private blockDurationMs: number;
  private progressiveDelay: boolean;

  constructor(maxAttempts = 5, windowMs = 60000, blockDurationMs = 300000, progressiveDelay = true) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.blockDurationMs = blockDurationMs;
    this.progressiveDelay = progressiveDelay;
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('rate-limiter-attempts');
      if (stored) {
        const data = JSON.parse(stored);
        this.attempts = new Map(Object.entries(data).map(([key, value]: [string, any]) => [
          key,
          {
            count: value.count || 0,
            firstAttempt: value.firstAttempt || Date.now(),
            lastAttempt: value.lastAttempt || Date.now(),
            violations: value.violations || 0
          }
        ]));
      }
    } catch (error) {
      console.warn('Failed to load rate limiter data from storage:', error);
      this.attempts = new Map();
    }
  }

  private saveToStorage(): void {
    try {
      const data = Object.fromEntries(this.attempts);
      localStorage.setItem('rate-limiter-attempts', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save rate limiter data to storage:', error);
    }
  }

  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];
    
    this.attempts.forEach((value, key) => {
      const effectiveBlockDuration = this.progressiveDelay 
        ? this.blockDurationMs * Math.pow(2, Math.min(value.violations, 5))
        : this.blockDurationMs;
      
      if (now - value.lastAttempt > effectiveBlockDuration) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => this.attempts.delete(key));
    if (keysToDelete.length > 0) {
      this.saveToStorage();
    }
  }

  private getBlockDuration(violations: number): number {
    if (!this.progressiveDelay) return this.blockDurationMs;
    return this.blockDurationMs * Math.pow(2, Math.min(violations, 5)); // Max 32x delay
  }

  isAllowed(identifier: string): boolean {
    this.cleanup();
    const now = Date.now();
    const attempt = this.attempts.get(identifier);

    if (!attempt) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
        violations: 0
      });
      this.saveToStorage();
      return true;
    }

    const effectiveBlockDuration = this.getBlockDuration(attempt.violations);

    // Check if we're still in the rate limit window
    if (now - attempt.firstAttempt < this.windowMs) {
      if (attempt.count >= this.maxAttempts) {
        // Check if block period has expired
        if (now - attempt.lastAttempt < effectiveBlockDuration) {
          // Log security event for repeated violations
          if (attempt.violations > 3) {
            logSecurityEvent('repeated_rate_limit_violations', { 
              identifier, 
              violations: attempt.violations,
              blockDuration: effectiveBlockDuration 
            });
          }
          return false;
        } else {
          // Block period expired, reset but track violation
          this.attempts.set(identifier, {
            count: 1,
            firstAttempt: now,
            lastAttempt: now,
            violations: attempt.violations + 1
          });
          this.saveToStorage();
          return true;
        }
      } else {
        // Increment attempt count
        attempt.count++;
        attempt.lastAttempt = now;
        this.attempts.set(identifier, attempt);
        this.saveToStorage();
        return true;
      }
    } else {
      // Window expired, reset attempts but keep violation history
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
        violations: Math.max(0, attempt.violations - 1) // Gradually forgive violations
      });
      this.saveToStorage();
      return true;
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