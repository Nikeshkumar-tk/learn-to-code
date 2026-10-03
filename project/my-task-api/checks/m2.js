// Milestone 2 checks:  npm run check:m2   (also re-runs Milestone 1 — nothing may break!)
import { runSuites, taskManagerPrelude } from "./lib.js";

runSuites({ prelude: taskManagerPrelude(), suites: ["m1.suite.js", "m2.suite.js"], milestone: 2 });
