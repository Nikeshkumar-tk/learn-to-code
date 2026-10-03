// @entry
// Run:  node examples/03-import-styles/main.js

// 1. Import everything as one object (a "namespace")
import * as validate from "./validators.js";
console.log(validate.isEmail("a@b.com"), validate.isPositive(-1));

// 2. Rename on import with `as` (handy when two modules export the same name)
import { isNonEmpty as hasText } from "./validators.js";
console.log(hasText("   "));

// 3. Built-in Node modules use the "node:" prefix (Module 16!)
import path from "node:path";
console.log(path.join("data", "tasks.json"));

// 4. Installed npm packages use just their name: import express from "express"; (Module 15+)
