import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config

export default defineConfig({
    integrations: [tailwind(), preact()],
    output: "server",
    vite: {
      define: {
          "process.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
          "process.env.SUPABASE_ANON_KEY": JSON.stringify(process.env.SUPABASE_ANON_KEY)
      }
    },
    adapter: cloudflare({
        mode: "directory"
    })
});