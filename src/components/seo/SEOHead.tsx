import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateMetadata, seoPages } from '@/lib/seo';

interface SEOHeadProps {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  structuredData?: any;
}

export const SEOHead = ({
  page,
  title,
  description,
  keywords,
  image,
  structuredData
}: SEOHeadProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Get SEO data from config or use props
  const pageSEO = page && seoPages[page] ? seoPages[page] : seoPages['/'];
  const metadata = generateMetadata(
    {
      title: title || pageSEO.title,
      description: description || pageSEO.description,
      keywords: keywords || pageSEO.keywords,
      image: image || pageSEO.image,
      structuredData: structuredData || pageSEO.structuredData
    },
    currentPath
  );

  // Handle structured data - can be array or single object
  const structuredDataArray = Array.isArray(metadata.structuredData)
    ? metadata.structuredData
    : [metadata.structuredData];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <link rel="canonical" href={metadata.canonical} />

      {/* Robots */}
      <meta name="robots" content={metadata.robots} />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

      {/* Language */}
      <html lang="fr" />
      <meta httpEquiv="content-language" content="fr-FR" />

      {/* Geographic Targeting */}
      <meta name="geo.region" content={metadata.geo.region} />
      <meta name="geo.placename" content={metadata.geo.placename} />
      <meta name="geo.position" content={metadata.geo.position} />
      <meta name="ICBM" content={metadata.geo.position} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:image" content={metadata.openGraph.image} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content={metadata.twitter.card} />
      <meta property="twitter:url" content={metadata.openGraph.url} />
      <meta property="twitter:title" content={metadata.twitter.title} />
      <meta property="twitter:description" content={metadata.twitter.description} />
      <meta property="twitter:image" content={metadata.twitter.image} />
      <meta property="twitter:site" content={metadata.twitter.site} />
      <meta property="twitter:creator" content={metadata.twitter.creator} />

      {/* Structured Data (JSON-LD) */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
