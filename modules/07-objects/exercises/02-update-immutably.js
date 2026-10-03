// Exercise 07.2 — Update objects without mutating them
// Run:  node exercises/02-update-immutably.js
//
// Every function returns a NEW object. The input must stay unchanged.
//
//   updateUser(user, changes)  -> user with the properties in `changes` applied
//   deactivate(user)           -> same user but isActive: false
//   addRole(user, role)        -> same user with role added to the END of roles
//                                 (roles must be a NEW array too!)
//   moveTo(user, city)         -> same user with address.city changed
//                                 (address must be a NEW object too!)

const user = {
  name: "Kai",
  isActive: true,
  roles: ["user"],
  address: { city: "Chennai", country: "IN" },
};

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const snapshot = JSON.stringify(user);
check("updateUser", updateUser(user, { name: "Kai L." }).name, "Kai L.");
check("updateUser keeps other fields", updateUser(user, { name: "K" }).roles, ["user"]);
check("deactivate", deactivate(user).isActive, false);
check("addRole", addRole(user, "admin").roles, ["user", "admin"]);
check("moveTo", moveTo(user, "Delhi").address, { city: "Delhi", country: "IN" });
check("original user completely unchanged", JSON.stringify(user), snapshot);
