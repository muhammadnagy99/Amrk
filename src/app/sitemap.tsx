import type { MetadataRoute } from 'next';

const DOMAIN = 'https://amrk.co'; 

import { weblinks } from '../data/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = weblinks.flatMap(section => 
    section.items.map(item => ({
      url: `${DOMAIN}${item.url}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${DOMAIN}/en${item.url}`,
          ar: `${DOMAIN}/ar${item.url}`,
        },
      },
    }))
  );

  return urls;
}
