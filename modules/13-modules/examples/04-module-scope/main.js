// @entry
// Run:  node examples/04-module-scope/main.js
import { clickA } from "./feature-a.js";
import { clickB } from "./feature-b.js";
import { current } from "./counter.js";

clickA();
clickA();
clickB();
console.log("Shared count:", current()); // 3 — both features use the same counter module

// This is how a module can hold application state (like an in-memory list of tasks):
// every file that imports it sees the same data. A closure, but file-sized!
