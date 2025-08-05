import { useEffect, useCallback } from 'react';
import { logSecurityEvent } from '@/lib/security-utils';

interface SecurityMonitoringOptions {
  enableDeviceFingerprinting?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableConsoleMonitoring?: boolean;
}

export const useSecurityMonitoring = (options: SecurityMonitoringOptions = {}) => {
  const {
    enableDeviceFingerprinting = true,
    enablePerformanceMonitoring = true,
    enableConsoleMonitoring = true
  } = options;

  // Monitor console for suspicious activity
  useEffect(() => {
    if (!enableConsoleMonitoring || typeof window === 'undefined') return;

    const originalConsole = { ...console };
    let suspiciousConsoleActivity = 0;

    // Override console methods to detect automated tools
    const monitoredMethods = ['log', 'warn', 'error', 'debug'] as const;
    
    monitoredMethods.forEach(method => {
      (console as any)[method] = (...args: any[]) => {
        // Check for automation tools
        const content = args.join(' ').toLowerCase();
        const automationKeywords = ['selenium', 'webdriver', 'playwright', 'puppeteer', 'phantom'];
        
        if (automationKeywords.some(keyword => content.includes(keyword))) {
          suspiciousConsoleActivity++;
          if (suspiciousConsoleActivity > 3) {
            logSecurityEvent('automation_tool_detected', {
              method,
              content: content.substring(0, 100),
              count: suspiciousConsoleActivity
            });
          }
        }
        
        originalConsole[method](...args);
      };
    });

    return () => {
      // Restore original console
      monitoredMethods.forEach(method => {
        (console as any)[method] = originalConsole[method];
      });
    };
  }, [enableConsoleMonitoring]);

  // Monitor device and browser fingerprinting
  useEffect(() => {
    if (!enableDeviceFingerprinting || typeof window === 'undefined') return;

    const collectDeviceFingerprint = () => {
      const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack,
        screenResolution: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: (navigator as any).deviceMemory,
        connection: (navigator as any).connection?.effectiveType,
        webdriver: (navigator as any).webdriver
      };

      // Detect potential automation
      const automationSignals = [];
      
      if (fingerprint.webdriver === true) {
        automationSignals.push('webdriver_property');
      }
      
      if (window.outerWidth === 0 && window.outerHeight === 0) {
        automationSignals.push('headless_browser');
      }
      
      if (navigator.plugins.length === 0) {
        automationSignals.push('no_plugins');
      }
      
      if (automationSignals.length > 0) {
        logSecurityEvent('automation_signals_detected', {
          signals: automationSignals,
          fingerprint: {
            userAgent: fingerprint.userAgent.substring(0, 50),
            platform: fingerprint.platform,
            webdriver: fingerprint.webdriver
          }
        });
      }

      return fingerprint;
    };

    // Collect fingerprint on load
    setTimeout(collectDeviceFingerprint, 1000);
  }, [enableDeviceFingerprinting]);

  // Monitor performance anomalies
  useEffect(() => {
    if (!enablePerformanceMonitoring || typeof window === 'undefined' || !window.performance) return;

    const monitorPerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        // Detect unusually fast page loads (potential automation)
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        if (loadTime < 50) { // Less than 50ms is suspicious
          logSecurityEvent('suspicious_load_time', {
            loadTime,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            timing: {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              ttfb: navigation.responseStart - navigation.requestStart
            }
          });
        }
      }
    };

    // Monitor after page load
    if (document.readyState === 'complete') {
      setTimeout(monitorPerformance, 2000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(monitorPerformance, 2000);
      });
    }
  }, [enablePerformanceMonitoring]);

  // Monitor DOM mutations for injection attempts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let suspiciousMutations = 0;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Check for suspicious script injections
              if (element.tagName === 'SCRIPT' && !element.hasAttribute('data-expected')) {
                suspiciousMutations++;
                logSecurityEvent('suspicious_script_injection', {
                  tagName: element.tagName,
                  src: element.getAttribute('src'),
                  innerHTML: element.innerHTML.substring(0, 100),
                  count: suspiciousMutations
                });
              }
              
              // Check for suspicious iframe injections
              if (element.tagName === 'IFRAME' && !element.hasAttribute('data-expected')) {
                logSecurityEvent('suspicious_iframe_injection', {
                  src: element.getAttribute('src'),
                  sandbox: element.getAttribute('sandbox')
                });
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  // Report security event manually
  const reportSecurityEvent = useCallback((type: string, data: any) => {
    logSecurityEvent(type, data);
  }, []);

  return {
    reportSecurityEvent
  };
};