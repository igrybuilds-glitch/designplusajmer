import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Default credentials provided by user (can be overridden by environment variables)
const DEFAULT_SUPABASE_URL = "https://ddtbmfnfwmffpqibjpks.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_cPKJKB8nwYUvwWmXbeKsrw_Yvw_NFEb";

let supabaseClient: SupabaseClient | null = null;
let supabaseAdminClient: SupabaseClient | null = null;

/**
 * Returns the standard Supabase client for backend operations.
 * Uses lazy initialization to prevent crashes on startup if configuration changes.
 */
export function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    const supabaseUrl = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
    const supabaseKey = 
      process.env.SUPABASE_ANON_KEY || 
      process.env.SUPABASE_PUBLISHABLE_KEY || 
      DEFAULT_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL and API Key must be provided in environment or configuration.");
    }

    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseClient;
}

/**
 * Returns a privileged Supabase client if SUPABASE_SERVICE_ROLE_KEY is set.
 * WARNING: Never expose this client or its key to the browser!
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return null;
  }
  if (!supabaseAdminClient) {
    const supabaseUrl = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
    supabaseAdminClient = createClient(supabaseUrl, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseAdminClient;
}

/**
 * Test connectivity to Supabase project
 */
export async function testSupabaseConnection(): Promise<{
  connected: boolean;
  projectId: string;
  url: string;
  keyType: "publishable_anon" | "service_role";
  error?: string;
  status: string;
}> {
  const url = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const projectId = "ddtbmfnfwmffpqibjpks";

  try {
    const client = getSupabase();
    // Test connection using a lightweight call to the Supabase auth/health endpoint
    const { error } = await client.auth.getSession();
    
    if (error && !error.message.includes("session")) {
      return {
        connected: false,
        projectId,
        url,
        keyType: "publishable_anon",
        error: error.message,
        status: "error",
      };
    }

    return {
      connected: true,
      projectId,
      url,
      keyType: "publishable_anon",
      status: "connected",
    };
  } catch (err: any) {
    return {
      connected: false,
      projectId,
      url,
      keyType: "publishable_anon",
      error: err?.message || String(err),
      status: "connection_failed",
    };
  }
}
