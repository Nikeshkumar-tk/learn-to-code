// Fixed. `role = "admin"` is ASSIGNMENT, not comparison. It sets role to "admin",
// and the value "admin" is truthy, so the if always runs. (A security bug in real life!)
// Use === to compare.
let role = "editor";

if (role === "admin") {
  console.log("Welcome, administrator. You can delete everything.");
} else {
  console.log("Welcome, " + role);
}
