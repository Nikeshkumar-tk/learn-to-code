// Debug 15.2 — Port arithmetic
// If the main port is busy, the app tries the next one.
// Run with PORT set:
//   Git Bash/macOS/Linux: PORT=3000 node debug/02-next-port.js
//   PowerShell:           $env:PORT="3000"; node debug/02-next-port.js
// Expected: "Port 3000 busy, trying 3001"

const port = process.env.PORT ?? 3000;
const nextPort = port + 1;

console.log(`Port ${port} busy, trying ${nextPort}`);
