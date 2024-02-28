import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gffjerehwsuqsxyaknpr.supabase.co";
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmplcmVod3N1cXN4eWFrbnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NjY3NDYsImV4cCI6MjAyMzQ0Mjc0Nn0.aQ3__4eRuxsWmWcCquIha0w-lbFTdkFUmgJpk0FMiaE`;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
