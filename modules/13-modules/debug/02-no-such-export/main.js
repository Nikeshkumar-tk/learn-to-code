// @entry @expect-error
// Debug 13.2 — "does not provide an export named"
// Run:  node debug/02-no-such-export/main.js
// Expected: [LOG] Server started

import { log } from "./logger.js";

log("Server started");
