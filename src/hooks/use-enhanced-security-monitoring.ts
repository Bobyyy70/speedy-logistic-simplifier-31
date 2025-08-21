import { useEffect, useCallback, useRef } from 'react';
import { logSecurityEvent } from '@/lib/security-utils';

interface SecurityAlert {
  type: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  data?: any;
}

interface EnhancedSecurityMonitoringOptions {
  enableAutomationDetection?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableDOMMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  alertThreshold?: number;
  reportingEndpoint?: string;
}

interface SecurityMetrics {
  totalEvents: number;
  highRiskEvents: number;
  lastEventTimestamp: number;
  suspiciousPatterns: string[];
}

export const useEnhancedSecurityMonitoring = (
  options: EnhancedSecurityMonitoringOptions = {}
) => {
  const {
    enableAutomationDetection = true,
    enablePerformanceMonitoring = true,
    enableDOMMonitoring = true,
    enableNetworkMonitoring = true,
    alertThreshold = 5,
    reportingEndpoint
  } = options;

  const alertsRef = useRef<SecurityAlert[]>([]);
  const metricsRef = useRef<SecurityMetrics>({
    totalEvents: 0,
    highRiskEvents: 0,
    lastEventTimestamp: 0,
    suspiciousPatterns: []
  });

  // Enhanced console monitoring with pattern detection
  useEffect(() => {
    if (!enableAutomationDetection) return;

    const originalConsole = { ...console };
    const suspiciousKeywords = [
      'selenium', 'webdriver', 'puppeteer', 'playwright', 'chromedriver',
      'automation', 'bot', 'scraping', 'phantom', 'nightmare'
    ];

    ['log', 'warn', 'error', 'info'].forEach(method => {
      const originalMethod = originalConsole[method as keyof typeof originalConsole] as Function;
      (console as any)[method] = (...args: any[]) => {
        const message = args.join(' ').toLowerCase();
        const detectedKeywords = suspiciousKeywords.filter(keyword => message.includes(keyword));
        
        if (detectedKeywords.length > 0) {
          addSecurityAlert('high', 'Automation tool detected in console', {
            keywords: detectedKeywords,
            message: args.join(' ')
          });
          reportSecurityEvent('automation_console_detection', { keywords: detectedKeywords });
        }
        
        originalMethod.apply(console, args);
      };
    });

    return () => {
      Object.assign(console, originalConsole);
    };
  }, [enableAutomationDetection]);

  // Enhanced DOM monitoring with risk assessment
  useEffect(() => {
    if (!enableDOMMonitoring) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // High-risk script injections
            if (element.tagName === 'SCRIPT') {
              if (!element.hasAttribute('data-expected') && !element.hasAttribute('nonce')) {
                addSecurityAlert('critical', 'Suspicious script injection detected', {
                  src: element.getAttribute('src'),
                  content: element.textContent?.substring(0, 100)
                });
                reportSecurityEvent('critical_script_injection', { element: element.outerHTML });
              }
            }
            
            // Suspicious iframe injections
            if (element.tagName === 'IFRAME') {
              const src = element.getAttribute('src');
              const allowedDomains = ['hubspot.com', 'hsforms.com', 'meetings.hubspot.com'];
              const isSuspicious = src && !allowedDomains.some(domain => src.includes(domain));
              
              if (isSuspicious) {
                addSecurityAlert('high', 'Suspicious iframe injection detected', { src });
                reportSecurityEvent('suspicious_iframe_injection', { src });
              }
            }
            
            // Form tampering detection
            if (element.tagName === 'FORM' || element.querySelector('form')) {
              addSecurityAlert('medium', 'Form modification detected', {
                action: element.getAttribute('action'),
                method: element.getAttribute('method')
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'href', 'action']
    });

    return () => observer.disconnect();
  }, [enableDOMMonitoring]);

  // Network request monitoring
  useEffect(() => {
    if (!enableNetworkMonitoring) return;

    const originalFetch = window.fetch;
    const originalXHROpen = XMLHttpRequest.prototype.open;

    // Monitor fetch requests
    window.fetch = async (...args) => {
      const [url] = args;
      const urlString = typeof url === 'string' ? url : (url as Request).url;
      
      // Detect suspicious external requests
      if (urlString.includes('eval') || urlString.includes('javascript:')) {
        addSecurityAlert('high', 'Suspicious network request detected', { url: urlString });
        reportSecurityEvent('suspicious_network_request', { url: urlString });
      }
      
      return originalFetch.apply(window, args);
    };

    // Monitor XMLHttpRequest
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      if (typeof url === 'string' && (url.includes('eval') || url.includes('javascript:'))) {
        addSecurityAlert('high', 'Suspicious XHR request detected', { url, method });
        reportSecurityEvent('suspicious_xhr_request', { url, method });
      }
      
      return originalXHROpen.apply(this, [method, url, ...args]);
    };

    return () => {
      window.fetch = originalFetch;
      XMLHttpRequest.prototype.open = originalXHROpen;
    };
  }, [enableNetworkMonitoring]);

  // Performance anomaly detection
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Detect unusually fast page loads (potential automation)
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.fetchStart;
          
          if (loadTime < 100) { // Less than 100ms is suspicious
            addSecurityAlert('medium', 'Unusually fast page load detected', {
              loadTime,
              userAgent: navigator.userAgent
            });
            reportSecurityEvent('suspicious_load_performance', { loadTime });
          }
        }
        
        // Monitor for performance attacks
        if (entry.entryType === 'measure' && entry.duration > 5000) {
          addSecurityAlert('medium', 'Performance degradation detected', {
            name: entry.name,
            duration: entry.duration
          });
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    return () => observer.disconnect();
  }, [enablePerformanceMonitoring]);

  const addSecurityAlert = useCallback((type: SecurityAlert['type'], message: string, data?: any) => {
    const alert: SecurityAlert = {
      type,
      message,
      timestamp: Date.now(),
      data
    };
    
    alertsRef.current.push(alert);
    metricsRef.current.totalEvents++;
    metricsRef.current.lastEventTimestamp = alert.timestamp;
    
    if (type === 'high' || type === 'critical') {
      metricsRef.current.highRiskEvents++;
    }
    
    // Trigger alert if threshold exceeded
    if (metricsRef.current.highRiskEvents >= alertThreshold) {
      triggerSecurityAlert();
    }
    
    // Keep only last 100 alerts
    if (alertsRef.current.length > 100) {
      alertsRef.current = alertsRef.current.slice(-100);
    }
  }, [alertThreshold]);

  const triggerSecurityAlert = useCallback(() => {
    const criticalAlerts = alertsRef.current.filter(alert => 
      alert.type === 'critical' && Date.now() - alert.timestamp < 60000
    );
    
    if (criticalAlerts.length > 0) {
      // In a real application, this would trigger monitoring alerts
      console.error('🚨 SECURITY ALERT: Critical security events detected', criticalAlerts);
      
      // Report to external monitoring service if configured
      if (reportingEndpoint) {
        fetch(reportingEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'security_alert',
            alerts: criticalAlerts,
            metrics: metricsRef.current,
            timestamp: Date.now()
          })
        }).catch(error => console.error('Failed to report security alert:', error));
      }
    }
  }, [reportingEndpoint]);

  const reportSecurityEvent = useCallback((type: string, data: any = {}) => {
    logSecurityEvent(type, {
      ...data,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  }, []);

  const getSecurityMetrics = useCallback((): SecurityMetrics => {
    return { ...metricsRef.current };
  }, []);

  const getRecentAlerts = useCallback((minutes = 10): SecurityAlert[] => {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return alertsRef.current.filter(alert => alert.timestamp > cutoff);
  }, []);

  const clearAlerts = useCallback(() => {
    alertsRef.current = [];
    metricsRef.current = {
      totalEvents: 0,
      highRiskEvents: 0,
      lastEventTimestamp: 0,
      suspiciousPatterns: []
    };
  }, []);

  return {
    reportSecurityEvent,
    addSecurityAlert,
    getSecurityMetrics,
    getRecentAlerts,
    clearAlerts,
    triggerSecurityAlert
  };
};
