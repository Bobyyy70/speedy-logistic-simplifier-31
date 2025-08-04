export interface RouteInfo {
  path: string;
  component: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  isRedirect?: boolean;
}

export const discoverRoutes = (): RouteInfo[] => {
  return [
    {
      path: '/',
      component: 'Index',
      priority: 1.0,
      changefreq: 'weekly'
    },
    {
      path: '/services',
      component: 'Services',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/technology',
      component: 'Technology',
      priority: 0.8,
      changefreq: 'monthly'
    },
    {
      path: '/contact',
      component: 'Contact',
      priority: 0.9,
      changefreq: 'monthly'
    },
    {
      path: '/about',
      component: 'About',
      priority: 0.7,
      changefreq: 'monthly'
    },
    {
      path: '/faq',
      component: 'FaqPage',
      priority: 0.8,
      changefreq: 'monthly'
    },
    {
      path: '/pricing',
      component: 'Pricing',
      priority: 0.8,
      changefreq: 'monthly'
    },
    {
      path: '/mentions-legales',
      component: 'LegalMentions',
      priority: 0.3,
      changefreq: 'yearly'
    },
    {
      path: '/politique-confidentialite',
      component: 'PrivacyPolicy',
      priority: 0.3,
      changefreq: 'yearly'
    },
    {
      path: '/cgv',
      component: 'TermsOfService',
      priority: 0.3,
      changefreq: 'yearly'
    },
    {
      path: '/sitemap',
      component: 'Sitemap',
      priority: 0.5,
      changefreq: 'monthly'
    }
  ];
};

export const getLastModifiedDate = (path: string): string => {
  // For now, use current date. In a real app, this would check file modification times
  const now = new Date();
  return now.toISOString().split('T')[0];
};