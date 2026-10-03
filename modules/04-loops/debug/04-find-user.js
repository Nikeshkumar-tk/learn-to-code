// Debug 04.4 — "Not found" even though the user exists
// Expected: "Found carol"

const usernames = ["alice", "bob", "carol", "dave"];
const wanted = "carol";

for (const name of usernames) {
  if (name === wanted) {
    console.log("Found", name);
    break;
  } else {
    console.log("Not found");
    break;
  }
}
