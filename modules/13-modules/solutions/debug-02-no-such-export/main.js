// @entry
// Fixed. "The requested module './logger.js' does not provide an export named 'log'".
// logger.js has a DEFAULT export. { braces } import NAMED exports only.
// Two possible fixes:
//   1. import log from "./logger.js";                 (what we did here)
//   2. change logger.js to `export function log(...)`  and keep the braces
import log from "./logger.js";

log("Server started");
