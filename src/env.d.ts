/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly CMS_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}