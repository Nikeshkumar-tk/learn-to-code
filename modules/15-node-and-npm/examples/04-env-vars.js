// ENVIRONMENT VARIABLES are named settings that live OUTSIDE your code,
// in the terminal/process that starts your program. Node exposes them as process.env.
//
// Why? So the same code can run differently in different places (your laptop vs a server)
// and so secrets (passwords, API keys) never get written into your code.
//
// Try it:
//   macOS/Linux/Git Bash:  APP_NAME=Tasky PORT=4000 node examples/04-env-vars.js
//   PowerShell:            $env:APP_NAME="Tasky"; $env:PORT="4000"; node examples/04-env-vars.js
//   (In PowerShell, the variables stay set for that terminal window until you close it.)

const appName = process.env.APP_NAME ?? "MyApp";
const port = Number(process.env.PORT ?? 3000);   // ⚠️ env values are always strings!

console.log(`${appName} would listen on port ${port}`);
console.log("typeof port:", typeof port);

// Some variables are always there, set by your operating system:
console.log("PATH starts with:", (process.env.PATH ?? "").slice(0, 40) + "...");
