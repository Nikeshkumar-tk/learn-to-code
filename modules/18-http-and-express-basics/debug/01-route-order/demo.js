// @entry
// Debug 18.1 — The stats endpoint says "Task stats not found"
// Run:  node debug/01-route-order/demo.js       (fix app.js, run again)
// Expected:
//   GET /tasks/1     -> 200 {"id":1,"title":"Write code","completed":true}
//   GET /tasks/stats -> 200 {"total":2,"done":1}
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
for (const path of ["/tasks/1", "/tasks/stats"]) {
  const res = await fetch(base + path);
  console.log(`GET ${path.padEnd(12)} -> ${res.status} ${await res.text()}`);
}
server.close();
server.closeAllConnections();
