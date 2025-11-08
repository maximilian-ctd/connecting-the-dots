import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import netlify from '@astrojs/netlify'; // Nur benötigt für Server-Side Rendering

// https://astro.build/config
export default defineConfig({
  output: 'static', // Für statische Websites
  integrations: [tailwind()],
  // Für Server-Side Rendering: output: 'server' und adapter: netlify() aktivieren
  // adapter: netlify(),
});

