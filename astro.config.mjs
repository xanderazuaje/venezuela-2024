import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind(), preact()],
  output: "server",
  adapter: cloudflare()
});