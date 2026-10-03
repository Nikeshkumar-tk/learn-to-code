// An error is an OBJECT with useful properties.

try {
  null.length;
} catch (error) {
  console.log("name:   ", error.name);     // "TypeError" — the kind of error
  console.log("message:", error.message);  // the human-readable explanation
  console.log("stack:  ", error.stack.split("\n").slice(0, 2).join(" | ")); // where it came from
  console.log("is a TypeError?", error instanceof TypeError);
  console.log("is an Error?   ", error instanceof Error);  // all error types are Errors
}

// Built-in error types you'll see most:
//   SyntaxError    — invalid code, or invalid JSON passed to JSON.parse
//   ReferenceError — using a name that doesn't exist
//   TypeError      — using a value the wrong way (calling a non-function, reading from undefined)
//   RangeError     — a number out of the allowed range

// ⚠️ Always throw Error objects, not strings:
try {
  throw "something bad";            // legal, but no .message, no .stack
} catch (error) {
  console.log(error.message);       // undefined
}
