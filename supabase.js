import { createClient } from "@supabase/supabase-js";

// ✨ A CORREÇÃO É ADICIONAR 'export' AQUI ✨
export const supabaseUrl = "https://byicvbaudohehoqfjkxs.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aWN2YmF1ZG9oZWhvcWZqa3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzIwODQsImV4cCI6MjA3MTEwODA4NH0.N0jS5xwQfRlyYDaMGbcLEF5Ca95ZLxNXgVsE2JOrzc8";

// Exporta o cliente já criado
export const supabase = createClient(supabaseUrl, supabaseKey);
