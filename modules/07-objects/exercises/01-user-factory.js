// Exercise 07.1 — Create and read objects
// Run:  node exercises/01-user-factory.js
//
// 1. createUser(name, email)
//      returns { name, email, isActive: true, roles: ["user"] }
//      (use SHORTHAND properties for name and email)
//
// 2. displayName(user)
//      returns user.name — but if the name is an empty string, return the email instead
//
// 3. hasRole(user, role)
//      returns true if the role is in user.roles (use a loop)

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const ada = createUser("Ada", "ada@example.com");
check("createUser", ada, { name: "Ada", email: "ada@example.com", isActive: true, roles: ["user"] });
check("displayName with a name", displayName(ada), "Ada");
check("displayName falls back to email", displayName(createUser("", "x@y.com")), "x@y.com");
check("hasRole user", hasRole(ada, "user"), true);
check("hasRole admin", hasRole(ada, "admin"), false);
check("each user gets their own roles array", createUser("a", "b").roles !== createUser("c", "d").roles, true);
