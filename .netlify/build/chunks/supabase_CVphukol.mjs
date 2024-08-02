import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://fvoiqaiptjqyoxvdumcg.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2lxYWlwdGpxeW94dmR1bWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0ODYzOTksImV4cCI6MjAzODA2MjM5OX0.W7DS8hwi-QwGNZO2BABRtYGoJlBdAv_Nzmn_YRzCzzo";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase as s };
