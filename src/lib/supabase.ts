import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.SUPABASE_URL
const key = import.meta.env.SUPABASE_ANON_KEY

if (!url)
    throw new Error("URL is required")
if (!key)
    throw new Error("Key is required")

export const supabase = createClient(
    url,
    key
);