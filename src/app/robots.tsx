import type { MetadataRoute } from 'next'
 
const DOMAIN = 'https://amrk.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  }
}