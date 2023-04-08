import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), tailwind(), mdx()],
  // output: 'server',
  adapter: netlify()
});