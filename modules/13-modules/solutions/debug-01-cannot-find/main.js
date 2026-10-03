// @entry
// Fixed. Error: ERR_MODULE_NOT_FOUND "Cannot find module '.../greeting'".
// In Node's ES modules, relative imports need the FULL file name, including ".js".
// (Many older tutorials and bundler-based projects leave it off — that's why it's confusing.)
import { greet } from "./greeting.js";

console.log(greet("Ana"));
