// SCOPE = "where in the code can this variable be seen?"

const appName = "TaskApp";     // top level of the file: visible everywhere in this file

function showWelcome() {
  const message = "Welcome!";  // function scope: exists ONLY inside showWelcome
  console.log(appName, message); // ✅ can see appName (outer) and message (own)
}

showWelcome();

console.log(appName);          // ✅
try {
  console.log(message);        // ❌ message doesn't exist out here
} catch (error) {
  console.log("Error:", error.message);
}

// Each call gets FRESH local variables. Parameters are local variables too.
function square(n) {
  const result = n * n;
  return result;
}
console.log(square(3), square(4)); // `result` is created and thrown away on each call
