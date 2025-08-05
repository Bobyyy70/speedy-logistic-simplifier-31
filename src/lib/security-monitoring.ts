// Enhanced security monitoring and audit logging
interface SecurityEvent {
  action: string;
  details: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  metadata?: Record<string, any>;
}

interface RLSViolationEvent {
  table: string;
  operation: string;
  userId?: string;
  timestamp: Date;
}

export class SecurityMonitor {
  private static instance: SecurityMonitor;
  private violationBuffer: RLSViolationEvent[] = [];
  private readonly MAX_BUFFER_SIZE = 100;
  private readonly FLUSH_INTERVAL = 30000; // 30 seconds

  constructor() {
    // Set up periodic flushing of violation buffer
    setInterval(() => {
      this.flushViolationBuffer();
    }, this.FLUSH_INTERVAL);
  }

  static getInstance(): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor();
    }
    return SecurityMonitor.instance;
  }

  // Log security events to console (simplified for now)
  async logSecurityEvent(event: SecurityEvent): Promise<void> {
    try {
      // For now, log to console. In production, this would integrate with audit table
      this.logToConsole(event);
      
      // Could be extended to send to external monitoring service
      // await this.sendToExternalMonitoring(event);
    } catch (error) {
      console.error('Error logging security event:', error);
    }
  }

  // Log RLS policy violations
  logRLSViolation(table: string, operation: string, userId?: string): void {
    const violation: RLSViolationEvent = {
      table,
      operation,
      userId,
      timestamp: new Date()
    };

    this.violationBuffer.push(violation);

    // If buffer is full, flush immediately
    if (this.violationBuffer.length >= this.MAX_BUFFER_SIZE) {
      this.flushViolationBuffer();
    }

    // Log critical violations immediately
    this.logSecurityEvent({
      action: 'rls_violation',
      details: `RLS violation detected on table ${table} for operation ${operation}`,
      severity: 'high',
      metadata: { table, operation, userId }
    });
  }

  // Monitor for suspicious form submissions
  async monitorFormSubmission(formType: string, data: Record<string, any>): Promise<boolean> {
    const suspiciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // Script tags
      /javascript:/gi, // JavaScript protocol
      /on\w+\s*=/gi, // Event handlers
      /data:text\/html/gi, // Data URLs
      /vbscript:/gi, // VBScript
      /expression\s*\(/gi // CSS expressions
    ];

    let isSuspicious = false;
    const suspiciousFields: string[] = [];

    // Check all form fields for suspicious content
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string') {
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(value)) {
            isSuspicious = true;
            suspiciousFields.push(key);
          }
        });
      }
    });

    if (isSuspicious) {
      await this.logSecurityEvent({
        action: 'suspicious_form_submission',
        details: `Suspicious content detected in form ${formType}`,
        severity: 'critical',
        metadata: {
          formType,
          suspiciousFields,
          userAgent: navigator.userAgent
        }
      });
      return false; // Block submission
    }

    return true; // Allow submission
  }

  // Monitor for rate limiting violations
  async monitorRateLimit(identifier: string, limit: number, window: number): Promise<boolean> {
    const key = `rate_limit_${identifier}`;
    const now = Date.now();
    
    try {
      // Get current attempts from localStorage (simplified rate limiting)
      const storedData = localStorage.getItem(key);
      const attempts = storedData ? JSON.parse(storedData) : { count: 0, resetTime: now + window };

      // Reset if window has passed
      if (now > attempts.resetTime) {
        attempts.count = 0;
        attempts.resetTime = now + window;
      }

      attempts.count++;
      localStorage.setItem(key, JSON.stringify(attempts));

      if (attempts.count > limit) {
        await this.logSecurityEvent({
          action: 'rate_limit_exceeded',
          details: `Rate limit exceeded for identifier ${identifier}`,
          severity: 'medium',
          metadata: { identifier, limit, attempts: attempts.count }
        });
        return false; // Block request
      }

      return true; // Allow request
    } catch (error) {
      console.error('Rate limiting error:', error);
      return true; // Allow request on error
    }
  }

  // Check for common security headers
  async validateSecurityHeaders(): Promise<void> {
    const requiredHeaders = [
      'X-Content-Type-Options',
      'X-Frame-Options',
      'X-XSS-Protection',
      'Strict-Transport-Security'
    ];

    try {
      const response = await fetch(window.location.href, { method: 'HEAD' });
      const missingHeaders: string[] = [];

      requiredHeaders.forEach(header => {
        if (!response.headers.get(header)) {
          missingHeaders.push(header);
        }
      });

      if (missingHeaders.length > 0) {
        await this.logSecurityEvent({
          action: 'missing_security_headers',
          details: `Missing security headers: ${missingHeaders.join(', ')}`,
          severity: 'medium',
          metadata: { missingHeaders }
        });
      }
    } catch (error) {
      console.error('Error validating security headers:', error);
    }
  }

  // Private helper methods
  private async flushViolationBuffer(): Promise<void> {
    if (this.violationBuffer.length === 0) return;

    const violations = [...this.violationBuffer];
    this.violationBuffer = [];

    try {
      // Log violations to console for now
      console.warn('RLS Violation Buffer Flush:', {
        count: violations.length,
        violations: violations,
        timestamp: new Date().toISOString()
      });
      
      // Could be extended to send to external monitoring
    } catch (error) {
      console.error('Error flushing violation buffer:', error);
      this.violationBuffer.unshift(...violations);
    }
  }

  private async getClientIP(): Promise<string | null> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return null;
    }
  }

  private logToConsole(event: SecurityEvent): void {
    const logData = {
      action: event.action,
      details: event.details,
      severity: event.severity,
      metadata: event.metadata,
      timestamp: new Date().toISOString()
    };

    switch (event.severity) {
      case 'low':
        console.info('Security Event:', logData);
        break;
      case 'medium':
        console.warn('Security Event:', logData);
        break;
      case 'high':
      case 'critical':
        console.error('Security Event:', logData);
        break;
      default:
        console.log('Security Event:', logData);
    }
  }
}

// Export singleton instance
export const securityMonitor = SecurityMonitor.getInstance();

// Auto-initialize security monitoring
if (typeof window !== 'undefined') {
  // Check security headers on page load
  securityMonitor.validateSecurityHeaders();
  
  // Set up global error monitoring
  window.addEventListener('error', (event) => {
    securityMonitor.logSecurityEvent({
      action: 'javascript_error',
      details: `JavaScript error: ${event.message}`,
      severity: 'low',
      metadata: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      }
    });
  });
}