// @entry
// Run:  node examples/01-first-module/main.js
//
// `import { ... } from "./file.js"` pulls exported things from another file.
//   ./  means "in the same folder as THIS file"
//   .js the extension is REQUIRED in Node's ES modules

import { add, multiply, PI_ROUNDED } from "./math-utils.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(PI_ROUNDED);

// Try: add `secretHelper` to the import list above. Read the error.
