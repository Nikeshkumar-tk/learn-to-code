// Exercise 02.4 — Defaults for user settings
// Run:  node exercises/04-settings-defaults.js
//
// These are a user's saved settings. null/undefined means "never set".
// Create the "effective" settings, falling back to a default ONLY when nothing was saved:
//
//   pageSize      -> saved value, or 20
//   language      -> saved value, or "en"
//   notifications -> saved value, or true
//
// Careful: 0, "" and false can be real choices the user made!

const savedPageSize = undefined;
const savedLanguage = "fr";
const savedNotifications = false;   // the user turned notifications OFF

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("pageSize falls back to 20", pageSize, 20);
check("language keeps 'fr'", language, "fr");
check("notifications stays OFF (false)", notifications, false);
