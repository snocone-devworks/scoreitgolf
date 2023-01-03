import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const dbUrl = import.meta.env.VITE_SUPABASE_URL;
const dbAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(dbUrl, dbAnonKey);

export const firstOrDefault= <T, TOut>(data: T | T[] | null): TOut | undefined => {
  if (!data) return undefined;
  if (Array.isArray(data)) return data.length === 0 ? undefined : data[0] as unknown as TOut;
  return data as TOut;
}