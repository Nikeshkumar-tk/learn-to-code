// @skip-verify (requires installing dayjs)
// Fixed — not by changing code, but the project setup.
// "Cannot find package 'dayjs'" means: Node looked in node_modules/ and it isn't there.
// Imports without ./ or node: refer to INSTALLED packages. The fix is:
//     npm install dayjs
// ...which also records it in package.json, so teammates get it with a plain `npm install`.
// (If the package IS installed, check the spelling and that you're in the right folder.)
//
// Alternative: do you even need a library? Built-in JavaScript can do this:
console.log(new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }));
