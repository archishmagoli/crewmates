import { createClient } from '@supabase/supabase-js';
const URL = process.env.PROJECT_URL;
const API_KEY = process.env.API_KEY;

export const supabase = createClient(URL, API_KEY);
