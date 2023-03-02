import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react(), tailwind()]
});