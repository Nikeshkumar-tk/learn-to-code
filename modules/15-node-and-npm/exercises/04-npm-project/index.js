// Exercise 15.4 — Set up an npm project from scratch
// Check: node exercises/04-npm-project/check.js
//
// In a terminal, inside THIS folder (cd exercises/04-npm-project):
//   1. npm init -y                        -> creates package.json
//   2. npm pkg set type=module            -> use ES modules (import/export)
//   3. npm install picocolors             -> a dependency
//   4. Add two scripts to package.json:
//        "start": "node index.js"
//        "dev":   "node --watch index.js"
//   5. Change this file to import picocolors and print a coloured message.
//   6. npm start      — then try npm run dev, edit this file, save, and watch it restart.
//                       (Stop it with Ctrl + C.)
//   7. Look inside node_modules/ and package-lock.json. What are they? (README section 6.)

console.log("Replace me with something colourful!");
