const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

try {
  const res = await fetch(`${url}/auth/v1/health`, { headers: { apikey: key } });
  console.log("HTTP status:", res.status);
  console.log("Response:", await res.text());
} catch (err) {
  console.error("Request failed:", err.message);
  process.exit(1);
}