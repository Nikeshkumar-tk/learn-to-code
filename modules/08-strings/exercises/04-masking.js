// Exercise 08.4 — Hide sensitive data
// Run:  node exercises/04-masking.js
//
// 1. maskCard(cardNumber)  -> every character except the last 4 becomes "*"
//      "4111111111111111" -> "************1111"
//
// 2. maskEmail(email)      -> keep the first letter of the name part, replace the rest
//                             of the name with "*", keep the domain
//      "ada@example.com"   -> "a**@example.com"
//      "jo@site.io"        -> "j*@site.io"
//
// Tools: slice, repeat, padStart, indexOf.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("maskCard 16 digits", maskCard("4111111111111111"), "************1111");
check("maskCard short", maskCard("123456"), "**3456");
check("maskEmail", maskEmail("ada@example.com"), "a**@example.com");
check("maskEmail short name", maskEmail("jo@site.io"), "j*@site.io");
