// @entry
// Run:  node examples/02-named-and-default/main.js

import formatTask, { formatMoney, formatDate } from "./format.js";
//     ^ default          ^ named

console.log(formatTask({ title: "Learn modules", completed: false }));
console.log(formatMoney(9.5));
console.log(formatDate(new Date("2026-05-01T10:00:00Z")));

// Because the default export has no fixed name, this works too:
import prettyTask from "./format.js";
console.log(prettyTask({ title: "Same function, different name", completed: true }));

// Many teams prefer ONLY named exports: names stay consistent everywhere,
// and editors can auto-import them. This course mostly uses named exports.
