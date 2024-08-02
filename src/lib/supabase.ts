import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_ANON_KEY;

console.log(SUPABASE_KEY, SUPABASE_URL)
if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Supabase URL and Key must be set');
}

console.log(SUPABASE_KEY, SUPABASE_URL)
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);