import React, { useEffect, useState, ReactNode } from 'react';
import { ClientRateLimiter, generateHoneypot, detectBotBehavior, logSecurityEvent, validateContent } from '@/lib/security-utils';

interface SecureFormWrapperProps {
  children: ReactNode;
  onSubmit: (data: Record<string, any>) => void;
  rateLimitKey?: string;
  className?: string;
}

// Global rate limiter instance
const formRateLimiter = new ClientRateLimiter(3, 5 * 60 * 1000, 'form_submissions');

export const SecureFormWrapper: React.FC<SecureFormWrapperProps> = ({
  children,
  onSubmit,
  rateLimitKey = 'default',
  className = ''
}) => {
  const [formStartTime] = useState(Date.now());
  const [honeypot] = useState(generateHoneypot());

  useEffect(() => {
    // Log form initialization
    logSecurityEvent('form_initialized', { 
      formType: rateLimitKey,
      timestamp: formStartTime 
    });
  }, [formStartTime, rateLimitKey]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data: Record<string, any> = {};
    
    // Extract form data
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Add form timing data
    data._startTime = formStartTime;
    
    // Security checks
    const securityChecks = performSecurityChecks(data, rateLimitKey);
    
    if (!securityChecks.passed) {
      logSecurityEvent('form_submission_blocked', {
        reasons: securityChecks.reasons,
        formType: rateLimitKey
      });
      
      // Don't give specific feedback to potential attackers
      alert('Submission failed. Please try again later.');
      return;
    }
    
    // Remove security-related fields before passing to parent
    const { _startTime, website, ...cleanData } = data;
    
    // Log successful submission
    logSecurityEvent('form_submission_success', {
      formType: rateLimitKey,
      fieldCount: Object.keys(cleanData).length
    });
    
    onSubmit(cleanData);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      
      {/* Honeypot field */}
      <input
        type="text"
        name={honeypot.name}
        defaultValue={honeypot.value}
        style={honeypot.style}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      
      {/* Hidden field to track form start time */}
      <input
        type="hidden"
        name="_startTime"
        value={formStartTime}
      />
    </form>
  );
};

function performSecurityChecks(data: Record<string, any>, rateLimitKey: string): { passed: boolean; reasons: string[] } {
  const reasons: string[] = [];
  
  // Rate limiting check
  const clientId = getClientIdentifier();
  if (!formRateLimiter.isAllowed(`${rateLimitKey}_${clientId}`)) {
    reasons.push('rate_limit_exceeded');
  }
  
  // Bot detection
  const botCheck = detectBotBehavior(data);
  if (botCheck.isBot) {
    reasons.push(`bot_detected:${botCheck.signals.join(',')}`);
  }
  
  // Content validation for text fields
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string' && value.length > 0) {
      const validation = validateContent(value);
      if (!validation.isValid) {
        reasons.push(`suspicious_content_${key}:${validation.threats.join(',')}`);
      }
    }
  });
  
  return {
    passed: reasons.length === 0,
    reasons
  };
}

function getClientIdentifier(): string {
  // Create a semi-persistent client identifier
  const storageKey = 'client_id';
  
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      let clientId = localStorage.getItem(storageKey);
      if (!clientId) {
        clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        localStorage.setItem(storageKey, clientId);
      }
      return clientId;
    }
  } catch (error) {
    // Fallback to session-based identifier
  }
  
  // Fallback identifier based on browser characteristics
  const nav = typeof navigator !== 'undefined' ? navigator : { userAgent: 'unknown', language: 'unknown' };
  const screenInfo = typeof screen !== 'undefined' ? screen : { width: 0, height: 0 };
  return btoa(`${nav.userAgent || 'unknown'}_${nav.language || 'unknown'}_${screenInfo.width}x${screenInfo.height}`)
    .substring(0, 16);
}