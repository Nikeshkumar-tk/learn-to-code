// Exercise 12.2 — Throw useful errors
// Run:  node exercises/02-validate-and-throw.js
//
// createUser(input) receives an object like { name, email, age } (e.g. from a web form).
// Throw an Error with EXACTLY these messages, checking in this order:
//   input missing or not an object         -> "Input must be an object"
//   name missing or only spaces            -> "Name is required"
//   email doesn't include "@"              -> "Email is invalid"
//   age not a whole number between 13-120  -> "Age must be a whole number between 13 and 120"
// Otherwise return { name: trimmed name, email: lowercased email, age }.
//
// Useful: typeof input === "object", Number.isInteger(age), optional chaining.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
function errorMessageOf(fn) {
  try {
    fn();
    return "(no error thrown)";
  } catch (error) {
    return error.message;
  }
}
check("valid user", createUser({ name: " Ana ", email: "ANA@X.COM", age: 30 }), { name: "Ana", email: "ana@x.com", age: 30 });
check("no input", errorMessageOf(() => createUser()), "Input must be an object");
check("null input", errorMessageOf(() => createUser(null)), "Input must be an object");
check("blank name", errorMessageOf(() => createUser({ name: "   ", email: "a@b.c", age: 20 })), "Name is required");
check("bad email", errorMessageOf(() => createUser({ name: "Ana", email: "ana.x.com", age: 20 })), "Email is invalid");
check("age too low", errorMessageOf(() => createUser({ name: "Ana", email: "a@b.c", age: 9 })), "Age must be a whole number between 13 and 120");
check("age as string", errorMessageOf(() => createUser({ name: "Ana", email: "a@b.c", age: "30" })), "Age must be a whole number between 13 and 120");
check("age decimal", errorMessageOf(() => createUser({ name: "Ana", email: "a@b.c", age: 30.5 })), "Age must be a whole number between 13 and 120");
