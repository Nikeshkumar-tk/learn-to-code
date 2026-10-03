// @entry
// Debug 18.4 — Some requests never get an answer
// Run:  node debug/04-hanging-request/demo.js
// Expected:
//   GET /orders/1 -> 200 {"id":1,"status":"shipped"}
//   GET /orders/2 -> 404 {"error":"Order 2 not found"}
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
for (const path of ["/orders/1", "/orders/2"]) {
  try {
    const res = await fetch(base + path, { signal: AbortSignal.timeout(1500) }); // give up after 1.5s
    console.log(`GET ${path} -> ${res.status} ${await res.text()}`);
  } catch {
    console.log(`GET ${path} -> ⏱️  no response after 1.5 seconds (the browser would spin forever)`);
  }
}
server.close();
server.closeAllConnections();
