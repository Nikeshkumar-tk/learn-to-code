// Fixed. The loop gave up after checking only the FIRST name, because the else-branch
// said "not found" and broke out immediately.
// You only know something is "not found" AFTER checking every item.
// Pattern: remember whether you found it in a variable, and decide after the loop.
const usernames = ["alice", "bob", "carol", "dave"];
const wanted = "carol";
let found = false;

for (const name of usernames) {
  if (name === wanted) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Found", wanted);
} else {
  console.log("Not found");
}
