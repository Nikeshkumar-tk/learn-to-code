// Fixed. `const config` was declared INSIDE the try block, so it doesn't exist after it
// (block scope — Module 11). Declare it before the try, assign inside.
// And if parsing fails, decide what should happen (here: use a default).
const configText = '{"port": 8080}';

let config = { port: 3000 };
try {
  config = JSON.parse(configText);
} catch (error) {
  console.log("Bad config, using defaults:", error.message);
}

console.log("Server will start on port", config.port);
