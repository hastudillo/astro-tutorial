// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stupendous-chebakia-7ce03b.netlify.app/",
  integrations: [preact()]
});