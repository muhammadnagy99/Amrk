import type { MetadataRoute } from 'next';

const DOMAIN = 'https://yourdomain.com'; // Change this constant as needed

import { footerNavLinks_en } from '../data/footer/footer-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = footerNavLinks_en.flatMap(section => 
    section.items.map(item => ({
      url: `${DOMAIN}${item.url}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${DOMAIN}${item.url}`,
          ar: `${DOMAIN}/ar${item.url}`,
        },
      },
    }))
  );

  return urls;
}
