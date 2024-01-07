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
    mdx({
      shikiConfig: {
        langs: ['shell', 'docker']
      }
    }),
    sitemap({
      serialize(item) {
        item.url = item.url.toLowerCase(); // 專案中頁面資料夾命名已統一小寫 這邊為將產生的提交網址確保小寫
        item.lastmod = new Date();
        return item;
      }
    })
  ],
  // output: 'server',
  adapter: netlify()
});
