// @skip-verify  (needs `npm install` first — see README section 6)
// An example project that uses a third-party package from npm.
//
//   cd examples/07-npm-project
//   npm install          <- reads package.json, downloads picocolors into node_modules/
//   npm start            <- runs the "start" script from package.json
import pc from "picocolors"; // no "./" -> Node looks in node_modules/

console.log(pc.green("✔ Tests passed"));
console.log(pc.red("✖ Build failed"));
console.log(pc.bold(pc.cyan("Node + npm = 💚")));
