import React from 'react';
import { CheckCircle2, Smartphone, Tablet, Monitor, Users } from 'lucide-react';
import { useEnhancedMobile } from '@/hooks/use-enhanced-mobile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MobileOptimizationSummary() {
  const mobile = useEnhancedMobile();

  const optimizations = [
    {
      category: 'Touch Targets',
      items: [
        'Minimum 48px height for all interactive elements',
        'Touch-manipulation CSS for better responsiveness',
        'Proper spacing between clickable elements',
        'Optimized button and input sizing'
      ]
    },
    {
      category: 'Typography',
      items: [
        'Fluid typography scaling with clamp()',
        'Improved line-height for mobile readability',
        'Responsive font sizes across breakpoints',
        'Enhanced text contrast and accessibility'
      ]
    },
    {
      category: 'Layout & Spacing',
      items: [
        'Mobile-first responsive grid system',
        'Optimized container padding and margins',
        'Consistent spacing scale across devices',
        'Improved content hierarchy'
      ]
    },
    {
      category: 'Form Elements',
      items: [
        'Mobile-optimized input field heights',
        'Touch-friendly form controls',
        'Improved textarea resizing behavior',
        'Better label positioning and sizing'
      ]
    },
    {
      category: 'Performance',
      items: [
        'Conditional rendering for small screens',
        'Optimized animations for mobile devices',
        'Reduced complexity on smaller viewports',
        'Enhanced scroll performance'
      ]
    }
  ];

  const deviceInfo = [
    { label: 'Device Type', value: mobile.isMobile ? 'Mobile' : mobile.isTablet ? 'Tablet' : 'Desktop' },
    { label: 'Screen Width', value: `${mobile.screenWidth}px` },
    { label: 'Touch Support', value: mobile.touchSupported ? 'Yes' : 'No' },
    { label: 'Orientation', value: mobile.orientation },
    { label: 'Pixel Ratio', value: mobile.pixelRatio.toFixed(1) }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-blue-600" />
          Mobile Optimization Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Device Info */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-slate-50 rounded-lg">
          {deviceInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-muted-foreground">{info.label}</div>
              <div className="font-medium">{info.value}</div>
            </div>
          ))}
        </div>

        {/* Optimization Categories */}
        <div className="grid gap-4 md:grid-cols-2">
          {optimizations.map((category, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <h3 className="font-semibold">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Device Icons */}
        <div className="flex justify-center gap-4 pt-4 border-t">
          <div className={`p-2 rounded-lg ${mobile.isMobile ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground'}`}>
            <Smartphone className="h-6 w-6" />
          </div>
          <div className={`p-2 rounded-lg ${mobile.isTablet ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground'}`}>
            <Tablet className="h-6 w-6" />
          </div>
          <div className={`p-2 rounded-lg ${!mobile.isMobile && !mobile.isTablet ? 'bg-blue-100 text-blue-600' : 'text-muted-foreground'}`}>
            <Monitor className="h-6 w-6" />
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          ✅ All components are now optimized for seamless mobile experience
        </div>
      </CardContent>
    </Card>
  );
}