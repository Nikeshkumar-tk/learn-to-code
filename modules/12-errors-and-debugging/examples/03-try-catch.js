// try { ... } catch (error) { ... }
// "Try to run this. If anything inside throws an error, jump to catch instead of crashing."

const goodJson = '{"title": "Learn errors", "done": false}';
const badJson = "{title: oops}";

try {
  const task = JSON.parse(goodJson);       // JSON.parse turns JSON text into an object
  console.log("Parsed:", task.title);
} catch (error) {
  console.log("Never runs for good JSON");
}

try {
  const task = JSON.parse(badJson);        // throws a SyntaxError
  console.log("This line is skipped");     // everything after the throw in `try` is skipped
} catch (error) {
  console.log("Could not parse:", error.message);
}

console.log("The program keeps running ✅");

// Only wrap code that can REALISTICALLY fail and that you can do something sensible about
// (bad user input, missing files, network problems). Don't wrap everything "just in case".
