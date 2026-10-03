// Debug 03.2 — Everyone is an admin?!
// Expected: "Welcome, editor"
// Hint: add console.log(role) AFTER the if statement. Surprised?

let role = "editor";

if (role = "admin") {
  console.log("Welcome, administrator. You can delete everything.");
} else {
  console.log("Welcome, " + role);
}
