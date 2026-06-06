import { MetadataRoute } from 'next';
import { i18n } from '@/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advancechiropractic.in';

  // Core static routes for our website
  const routes = [
    '',
    '/about',
    '/services',
    '/therapy',
    '/symptoms',
    '/gallery',
    '/contact',
    '/privacy',
    '/terms',
  ];

  // We map over each route and each locale to generate localized sitemap entries
  const sitemapEntries = routes.flatMap((route) => {
    return i18n.locales.map((locale) => {
      // Create path depending on whether it's the root '/' or a specific page '/about'
      // Omitting '/en' from the URL for the default English locale
      const prefix = locale === 'en' ? '' : `/${locale}`;
      const path = route === '' ? prefix : `${prefix}${route}`;
      return {
        url: `${baseUrl}${path || '/'}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
      };
    });
  });

  return sitemapEntries;
}
