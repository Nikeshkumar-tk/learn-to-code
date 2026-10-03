const user = { name: "Ada", role: "viewer" };

user.role = "admin";          // change an existing property
user.email = "ada@example.com"; // add a new property — just assign it
console.log(user);

delete user.email;            // remove a property
console.log(user);

// Does a property exist?
console.log("name" in user);          // true
console.log(Object.hasOwn(user, "email")); // false

// Like arrays: const stops reassignment of the NAME, not changes to the contents.
// user = {};  // ❌ TypeError
