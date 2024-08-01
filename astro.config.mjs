import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), auth()],
  output: "server",
  adapter: cloudflare(),
});
