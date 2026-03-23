import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import netlify from '@astrojs/netlify'; // Nur benötigt für Server-Side Rendering

// https://astro.build/config
export default defineConfig({
  site: 'https://connectingthe.de',
  output: 'static', // Für statische Websites
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
      filter: (page) =>
        ![
          'https://connectingthe.de/',
          'https://connectingthe.de/datenschutz/',
          'https://connectingthe.de/impressum/',
          'https://connectingthe.de/de/test/',
        ].includes(page),
    }),
  ],
  // Für Server-Side Rendering: output: 'server' und adapter: netlify() aktivieren
  // adapter: netlify(),
});

