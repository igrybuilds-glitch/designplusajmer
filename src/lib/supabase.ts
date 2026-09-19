import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = 
  (import.meta as any).env?.VITE_SUPABASE_URL || 
  "https://ddtbmfnfwmffpqibjpks.supabase.co";

const SUPABASE_ANON_KEY = 
  (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 
  "sb_publishable_cPKJKB8nwYUvwWmXbeKsrw_Yvw_NFEb";

let clientInstance: SupabaseClient | null = null;

/**
 * Client-side Supabase instance.
 * Uses the publishable key ('sb_publishable_...'), which respects Row Level Security (RLS).
 */
export function getClientSupabase(): SupabaseClient {
  if (!clientInstance) {
    clientInstance = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return clientInstance;
}

export const supabase = getClientSupabase();
