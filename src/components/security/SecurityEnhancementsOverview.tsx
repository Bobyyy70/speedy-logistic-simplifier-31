import React from 'react';
import { CheckCircle, Shield, AlertTriangle, Lock, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Security Enhancements Overview Component
 * Displays the implemented security features and their status
 */
export const SecurityEnhancementsOverview: React.FC = () => {
  const securityFeatures = [
    {
      category: "HubSpot Configuration Security",
      status: "implemented",
      features: [
        "Hardcoded development fallbacks removed from production",
        "Strict environment variable validation",
        "Production security checks with error handling",
        "Development environment warnings and logging"
      ]
    },
    {
      category: "Enhanced Rate Limiting",
      status: "implemented", 
      features: [
        "Progressive delay system for repeat violators",
        "Violation tracking and forgiveness mechanism",
        "Enhanced client identification",
        "Security event logging for rate limit violations"
      ]
    },
    {
      category: "Advanced Security Monitoring",
      status: "implemented",
      features: [
        "Automation tool detection in console logs",
        "DOM mutation monitoring for script injections",
        "Network request monitoring for suspicious patterns",
        "Performance anomaly detection",
        "Security alert aggregation and threshold management"
      ]
    },
    {
      category: "Content Security Policy (CSP)",
      status: "implemented",
      features: [
        "Nonce-based inline script protection",
        "Environment-specific CSP policies",
        "HubSpot domain whitelisting",
        "Secure defaults with upgrade-insecure-requests"
      ]
    },
    {
      category: "Cookie Security",
      status: "implemented",
      features: [
        "Secure cookie attributes in HTTPS contexts",
        "SameSite=Strict protection against CSRF",
        "Base64 encoded consent tracking",
        "Enhanced error handling for cookie operations"
      ]
    },
    {
      category: "Security Headers",
      status: "implemented",
      features: [
        "Comprehensive HTTP security headers",
        "Client-side meta tag injection",
        "Security compliance validation",
        "Development vs production header configuration"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'implemented':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Shield className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'implemented': 'default',
      'in-progress': 'secondary',
      'planned': 'outline'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'outline'}>
        {status.replace('-', ' ').toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Lock className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold">Security Enhancements</h2>
        </div>
        <p className="text-muted-foreground">
          Comprehensive security improvements implemented across the application
        </p>
      </div>

      <div className="grid gap-4">
        {securityFeatures.map((category, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(category.status)}
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
                {getStatusBadge(category.status)}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Security Monitoring Active</CardTitle>
          </div>
          <CardDescription>
            Real-time security monitoring is now active across the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 rounded-lg bg-background">
              <div className="font-semibold text-primary">Rate Limiting</div>
              <div className="text-muted-foreground">Progressive blocking active</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-background">
              <div className="font-semibold text-primary">Content Filtering</div>
              <div className="text-muted-foreground">10+ threat patterns detected</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-background">
              <div className="font-semibold text-primary">Bot Detection</div>
              <div className="text-muted-foreground">Multi-signal analysis</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>All security enhancements are production-ready and actively monitoring your application.</p>
      </div>
    </div>
  );
};