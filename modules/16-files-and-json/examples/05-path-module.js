// The path module builds and takes apart file paths correctly on every OS
// (Windows uses \ , macOS/Linux use / — path handles it for you).
import path from "node:path";

const file = path.join("data", "users", "ana.json");   // join with the right separator
console.log("join:    ", file);

console.log("basename:", path.basename("/home/ana/report.final.pdf"));  // "report.final.pdf"
console.log("extname: ", path.extname("/home/ana/report.final.pdf"));   // ".pdf"
console.log("dirname: ", path.dirname("/home/ana/report.final.pdf"));   // "/home/ana"
console.log("name only:", path.basename("report.final.pdf", ".pdf"));  // "report.final"

// resolve -> turns a relative path into an ABSOLUTE one (starting from cwd)
console.log("resolve: ", path.resolve("data", "tasks.json"));

// ".." means "one folder up"
console.log("up one:  ", path.join("/projects/app/src", "..", "data"));

// Never build paths by gluing strings with "/" — use path.join.
