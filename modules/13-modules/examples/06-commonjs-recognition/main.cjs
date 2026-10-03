// @entry
// Run:  node examples/06-commonjs-recognition/main.cjs
const { add } = require("./math.cjs"); // instead of: import { add } from "./math.js"
const path = require("node:path");      // instead of: import path from "node:path"

console.log(add(2, 2));
console.log(path.basename("/tmp/report.pdf"));

// Translation table:
//   ES modules (this course)              CommonJS (older code)
//   import x from "./a.js"                const x = require("./a")
//   import { y } from "./a.js"            const { y } = require("./a")
//   export default x                      module.exports = x
//   export function y() {}                module.exports.y = y  /  module.exports = { y }
//
// Which one a project uses is decided by "type": "module" in package.json (or the
// file extension: .mjs = ES module, .cjs = CommonJS).
