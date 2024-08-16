const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_SEACRET_KEY = import.meta.env.RECAPTCHA_SEACRET_KEY;
const SUPABASE_URL = import.meta.env.SUPABASE_URL
const SUPABASE_KEY = import.meta.env.SUPABASE_ANON_KEY
const SUPABASE_DONATIONS_BUCKET = import.meta.env.SUPABASE_DONATIONS_BUCKET

if (!RECAPTCHA_SITE_KEY || !RECAPTCHA_SEACRET_KEY) {
  throw new Error("RECAPTCHA_SITE_KEY o RECAPTCHA_SEACRET_KEY no encontrado en variables de entorno");
}

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('SUPABASE_URL o SUPABASE_KEY no encontrado en variables de entorno');
}

if (!SUPABASE_DONATIONS_BUCKET) {
  throw new Error('SUPABASE_DONATIONS_BUCKET no encontrado en variables de entorno');
}

export {RECAPTCHA_SITE_KEY, RECAPTCHA_SEACRET_KEY, SUPABASE_URL, SUPABASE_KEY, SUPABASE_DONATIONS_BUCKET};