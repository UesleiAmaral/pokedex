import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

export const connection = () => {
  const supabaseUrl = process.env.URL;
  const supabaseKey = process.env.PIVATE_KEY_SUPABASE;
  const supabase = createClient(supabaseUrl, supabaseKey);

  return supabase;

};
