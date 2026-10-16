const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const headers = { apikey: key, "Content-Type": "application/json" };

async function show(label, res) {
  console.log(`${label}: HTTP ${res.status}`, (await res.text()).slice(0, 200));
}

await show("anon READ", await fetch(`${url}/rest/v1/profiles?select=*`, { headers }));

await show(
  "anon INSERT",
  await fetch(`${url}/rest/v1/profiles`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      id: "00000000-0000-0000-0000-000000000000",
      username: "attacker",
    }),
  })
);