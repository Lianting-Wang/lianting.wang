import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lianting.wang',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
