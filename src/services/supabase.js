import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uvgwetavenpawrmscsdx.supabase.co";
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Z3dldGF2ZW5wYXdybXNjc2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MzQwMjcsImV4cCI6MjA1NjQxMDAyN30.-iFJApM6UboqXoQotzJ8iILI1bOsbBNmEvKE5-uyxWE`;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
