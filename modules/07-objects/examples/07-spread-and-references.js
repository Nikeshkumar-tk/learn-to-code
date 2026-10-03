// Objects are REFERENCES too — exactly like arrays.
const original = { name: "Ada", role: "viewer" };
const alias = original;
alias.role = "admin";
console.log(original.role); // "admin" — same object!

// Spread copies the properties into a NEW object:
const copy = { ...original };
copy.role = "guest";
console.log(original.role, copy.role);

// Spread to UPDATE without mutating: later properties win.
const task = { id: 1, title: "Old title", completed: false };
const updated = { ...task, title: "New title", completed: true };
console.log(task);
console.log(updated);

// Merge defaults with user options (a very common pattern):
const defaults = { theme: "light", pageSize: 20, notifications: true };
const userChoices = { theme: "dark" };
const settings = { ...defaults, ...userChoices };
console.log(settings);

// ⚠️ Spread is SHALLOW: nested objects/arrays are still shared!
const user = { name: "Lin", address: { city: "Pune" } };
const userCopy = { ...user };
userCopy.address.city = "Mumbai";
console.log(user.address.city); // "Mumbai" — the inner object was shared
// Fix: copy the nested level too: { ...user, address: { ...user.address, city: "Mumbai" } }
