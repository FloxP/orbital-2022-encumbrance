import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tsblutqmuzhchlugdtar.supabase.co/";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzYmx1dHFtdXpoY2hsdWdkdGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM5MDEyNjIsImV4cCI6MTk2OTQ3NzI2Mn0.esuh57asZdX6RDTORaMoosuAFy1AqHuGowM2sh9W4bA`;
export const supabase = createClient(supabaseUrl, supabaseKey);
