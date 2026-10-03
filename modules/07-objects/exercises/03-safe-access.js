// Exercise 07.3 — Safe access with bracket notation, ?. and ??
// Run:  node exercises/03-safe-access.js
//
// 1. getSetting(settings, key, fallback)
//      returns settings[key], or `fallback` if that setting is null/undefined.
//
// 2. getCity(user)
//      returns user.profile.address.city — but ANY of profile/address may be missing.
//      If so, return "Unknown". Must never crash.
//
// 3. getFirstTagName(post)
//      returns the `name` of the first object in post.tags, or "untagged"
//      if tags is missing or empty. (Optional chaining works on arrays too: list?.[0])

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const settings = { theme: "dark", pageSize: 0, language: null };
check("existing setting", getSetting(settings, "theme", "light"), "dark");
check("0 is a real value", getSetting(settings, "pageSize", 20), 0);
check("null falls back", getSetting(settings, "language", "en"), "en");
check("missing falls back", getSetting(settings, "font", "serif"), "serif");
check("full city", getCity({ profile: { address: { city: "Kochi" } } }), "Kochi");
check("no address", getCity({ profile: {} }), "Unknown");
check("no profile", getCity({}), "Unknown");
check("first tag", getFirstTagName({ tags: [{ name: "node" }, { name: "js" }] }), "node");
check("empty tags", getFirstTagName({ tags: [] }), "untagged");
check("no tags", getFirstTagName({}), "untagged");
