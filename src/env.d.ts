// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly SUPABASE_DONATIONS_BUCKET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}