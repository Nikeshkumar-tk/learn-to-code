// @entry
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
for (const path of ["/orders/1", "/orders/2"]) {
  try {
    const res = await fetch(base + path, { signal: AbortSignal.timeout(1500) });
    console.log(`GET ${path} -> ${res.status} ${await res.text()}`);
  } catch {
    console.log(`GET ${path} -> ⏱️  no response after 1.5 seconds`);
  }
}
server.close();
server.closeAllConnections();
