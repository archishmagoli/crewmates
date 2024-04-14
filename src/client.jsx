import { createClient } from '@supabase/supabase-js';
const URL = 'https://yriynosjvhdbywilowxn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyaXlub3NqdmhkYnl3aWxvd3huIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjk3Njc4MiwiZXhwIjoyMDI4NTUyNzgyfQ.JGIgExRXcceGN7M9Lsk03UFOpRP4goTGz-u8LtSd-Hc';

export const supabase = createClient(URL, API_KEY);
