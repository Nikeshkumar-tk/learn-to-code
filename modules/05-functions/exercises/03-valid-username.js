// Exercise 05.3 — Validate a username (early returns)
// Run:  node exercises/03-valid-username.js
//
// Write `validateUsername(username)` that RETURNS a message:
//   "Username is required"          if it's empty ("")
//   "Must be 3-15 characters"       if it's shorter than 3 or longer than 15
//   "No spaces allowed"             if it contains a space anywhere
//   "That name is reserved"         if it is "admin" or "root"
//   "OK"                            otherwise
//
// Use early returns — no else needed.
// To find a space, loop over the characters with for...of. (Yes, you can return inside a loop!)

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("empty", validateUsername(""), "Username is required");
check("too short", validateUsername("al"), "Must be 3-15 characters");
check("too long", validateUsername("averyveryverylongname"), "Must be 3-15 characters");
check("has a space", validateUsername("ada lovelace"), "No spaces allowed");
check("reserved: admin", validateUsername("admin"), "That name is reserved");
check("reserved: root", validateUsername("root"), "That name is reserved");
check("valid", validateUsername("ada_99"), "OK");
