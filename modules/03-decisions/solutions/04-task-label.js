// Solution 03.4
const title = "Learn conditionals";
const completed = true;
const priority = "high";

const checkbox = completed ? "[x]" : "[ ]";
const badge = priority === "high" ? "🔥" : "";
const line = `${checkbox} ${title} ${badge}`;

console.log(line);
