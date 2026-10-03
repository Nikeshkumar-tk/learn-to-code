// Milestone 1 checks:  npm run check:m1   (or: node checks/m1.js)
import { runSuites, taskManagerPrelude } from "./lib.js";

runSuites({ prelude: taskManagerPrelude(), suites: ["m1.suite.js"], milestone: 1 });
