// Exercise 10.7 — Translate loops into array methods
// Run:  node exercises/07-rewrite-loops.js
//
// Each function below works, but uses a loop. Rewrite each body using the most fitting
// array method(s). Keep the function names. The checks must still pass afterwards.
// Before rewriting, write a comment above each: "This is a ___ because ___".

function getEmails(users) {
  const emails = [];
  for (const user of users) {
    emails.push(user.email);
  }
  return emails;
}

function getActive(users) {
  const result = [];
  for (const user of users) {
    if (user.active) result.push(user);
  }
  return result;
}

function hasAdmin(users) {
  for (const user of users) {
    if (user.role === "admin") return true;
  }
  return false;
}

function totalAge(users) {
  let total = 0;
  for (const user of users) {
    total += user.age;
  }
  return total;
}

function activeEmails(users) {
  const result = [];
  for (const user of users) {
    if (user.active) {
      result.push(user.email.toLowerCase());
    }
  }
  return result;
}

// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const users = [
  { email: "Ana@x.com", active: true, role: "admin", age: 30 },
  { email: "ben@x.com", active: false, role: "user", age: 25 },
  { email: "CY@x.com", active: true, role: "user", age: 41 },
];
check("getEmails", getEmails(users), ["Ana@x.com", "ben@x.com", "CY@x.com"]);
check("getActive", getActive(users).length, 2);
check("hasAdmin", hasAdmin(users), true);
check("totalAge", totalAge(users), 96);
check("activeEmails", activeEmails(users), ["ana@x.com", "cy@x.com"]);
const usesLoop = [getEmails, getActive, hasAdmin, totalAge, activeEmails].some((fn) => /\bfor\s*\(/.test(String(fn)));
check("no for loops left", usesLoop, false);
