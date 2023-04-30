import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shozzle.dev/',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    react(),
    tailwind(),
    mdx(),
    sitemap()
  ],
  // output: 'server',
  adapter: netlify()
});
