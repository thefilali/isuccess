import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Session {
  id: string;
  name: string;
  company_name: string | null;
  facilitator_pin: string;
  num_teams: number;
  lang: string;
  status: string;
  created_at: string;
}

export interface Team {
  id: string;
  session_id: string;
  team_number: number;
  name: string | null;
  animal_emoji: string | null;
  animal_name: string | null;
  created_at: string;
}

export interface SessionActivity {
  id: string;
  session_id: string;
  activity_key: string;
  phase: 'opening' | 'closing';
  status: 'pending' | 'active' | 'completed';
  order_num: number;
  config: Record<string, unknown>;
  created_at: string;
}

export interface Response {
  id: string;
  session_activity_id: string;
  team_id: string;
  data: Record<string, unknown>;
  created_at: string;
}
