import { defineConfig } from 'astro/config';
// import netlify from '@astrojs/netlify'; // Nur benötigt für Server-Side Rendering

// https://astro.build/config
export default defineConfig({
  output: 'static', // Für statische Websites
  // Für Server-Side Rendering: output: 'server' und adapter: netlify() aktivieren
  // adapter: netlify(),
});

