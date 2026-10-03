// Exercise 08.3 — Parse CSV text into objects
// Run:  node exercises/03-parse-csv.js
//
// 1. parseContact(line)
//      "Ada Lovelace, ada@example.com , 36"  ->  { name: "Ada Lovelace", email: "ada@example.com", age: 36 }
//      (trim each part; age must be a NUMBER)
//
// 2. parseContacts(csvText)
//      The first line is a header — skip it. Each other line is a contact.
//      Returns an array of contact objects. Ignore empty lines.

const csvText = `name,email,age
Ada Lovelace, ada@example.com , 36
Alan Turing,alan@example.com,41

Grace Hopper , grace@example.com,85`;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("parseContact", parseContact("Ada Lovelace, ada@example.com , 36"), { name: "Ada Lovelace", email: "ada@example.com", age: 36 });
const contacts = parseContacts(csvText);
check("3 contacts (header + blank line skipped)", contacts.length, 3);
check("last contact", contacts[2], { name: "Grace Hopper", email: "grace@example.com", age: 85 });
