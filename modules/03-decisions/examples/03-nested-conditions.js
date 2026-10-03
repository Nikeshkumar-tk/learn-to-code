// You can put an if inside another if (NESTING).
// Often, combining conditions with && makes it flatter and easier to read.

const isLoggedIn = true;
const isAdmin = false;

// Nested version
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Nested: show admin dashboard");
  } else {
    console.log("Nested: show user dashboard");
  }
} else {
  console.log("Nested: show login page");
}

// Flatter version — same behaviour
if (!isLoggedIn) {
  console.log("Flat: show login page");
} else if (isAdmin) {
  console.log("Flat: show admin dashboard");
} else {
  console.log("Flat: show user dashboard");
}
