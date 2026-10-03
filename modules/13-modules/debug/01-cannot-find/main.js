// @entry @expect-error
// Debug 13.1 — "Cannot find module"
// Run:  node debug/01-cannot-find/main.js
// Expected: Hello, Ana!

import { greet } from "./greeting";

console.log(greet("Ana"));
