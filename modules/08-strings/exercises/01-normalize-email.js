// Exercise 08.1 — Clean up and check emails
// Run:  node exercises/01-normalize-email.js
//
// 1. normalizeEmail(raw)
//      -> trims spaces and lowercases:  "  Ada@Example.COM " -> "ada@example.com"
//
// 2. isValidEmail(email)   (a simple check, not a perfect one)
//      returns true only if ALL of these are true:
//        - it contains no spaces
//        - it contains "@", and it's not the first character
//        - there's a "." somewhere AFTER the "@"
//        - it doesn't end with "."
//
// 3. emailDomain(email) -> everything after the "@"

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("normalizeEmail", normalizeEmail("  Ada@Example.COM "), "ada@example.com");
check("valid", isValidEmail("ada@example.com"), true);
check("no @", isValidEmail("ada.example.com"), false);
check("@ first", isValidEmail("@example.com"), false);
check("no dot after @", isValidEmail("ada.l@example"), false);
check("space inside", isValidEmail("ada @example.com"), false);
check("ends with dot", isValidEmail("ada@example.com."), false);
check("emailDomain", emailDomain("ada@example.com"), "example.com");
