// @entry
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
