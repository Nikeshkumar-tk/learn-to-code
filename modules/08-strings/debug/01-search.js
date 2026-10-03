// Debug 08.1 — Search finds nothing
// The user searches for "node". Expected:
//   Found: Learn Node.js basics
//   Found: Deploy the NODE server

const titles = ["Learn Node.js basics", "Buy groceries", "Deploy the NODE server"];
const searchTerm = "node";

for (const title of titles) {
  if (title.includes(searchTerm)) {
    console.log("Found:", title);
  }
}
