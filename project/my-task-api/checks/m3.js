// Milestone 3 checks:  npm run check:m3   (also re-runs Milestones 1 and 2)
import { runSuites, taskManagerPrelude } from "./lib.js";

runSuites({ prelude: taskManagerPrelude(), suites: ["m1.suite.js", "m2.suite.js", "m3.suite.js"], milestone: 3 });
