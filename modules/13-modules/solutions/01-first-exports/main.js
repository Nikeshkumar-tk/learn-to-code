// @entry
// Solution 13.1
import formatName, { capitalize, truncate } from "./string-utils.js";

console.log(formatName(capitalize("ada"), capitalize("lovelace")));
console.log(truncate("Modules keep code organised", 10));
