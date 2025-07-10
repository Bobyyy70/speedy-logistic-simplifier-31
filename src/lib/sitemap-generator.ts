import { discoverRoutes, getLastModifiedDate } from './route-discovery';

const SITE_URL = 'https://speedelog.net';

export const generateDynamicSitemap = (): string => {
  const routes = discoverRoutes();
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlEntries = routes.map(route => {
    const lastModified = getLastModifiedDate(route.path);
    
    return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
${urlEntries}
  
</urlset>`;
};

export const updateSitemapFile = (): void => {
  const sitemapContent = generateDynamicSitemap();
  
  // This would typically write to the file system in a Node.js environment
  // For now, we'll export the content for build-time generation
  console.log('Generated sitemap content:', sitemapContent);
};