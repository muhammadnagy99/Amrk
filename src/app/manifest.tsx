import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "Amrk RMS",
    short_name: "Amrk",
    start_url: '/',
    display: 'standalone',
    display_override: ["fullscreen","standalone" ],
    background_color: '#ffffff',
    theme_color: '#23314c',
    description: 'Amrk Restaurants Managmenets Systems',
    icons: [
      {
        src: './favicon.ico',
        sizes: '32x32',
        type: 'ico'
      },
     
    ],
    lang: 'en',
    orientation: 'portrait',
    scope: '/',
    categories: ['productivity', 'social', 'utilities'],
  };
}
