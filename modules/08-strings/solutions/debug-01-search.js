// Fixed. includes() is case-sensitive: "Node.js" doesn't include "node".
// Normalise BOTH sides to the same case before comparing.
const titles = ["Learn Node.js basics", "Buy groceries", "Deploy the NODE server"];
const searchTerm = "node";

for (const title of titles) {
  if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
    console.log("Found:", title);
  }
}
