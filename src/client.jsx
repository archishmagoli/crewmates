import { createClient } from '@supabase/supabase-js';
const URL = 'insert URL here';
const API_KEY = 'insert API key here';

export const supabase = createClient(URL, API_KEY);
