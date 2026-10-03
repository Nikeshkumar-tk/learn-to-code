// @entry
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
for (const path of ["/users/1", "/users/7"]) {
  const res = await fetch(base + path);
  console.log(`GET ${path} -> ${res.status} ${await res.text()}`);
}
server.close();
server.closeAllConnections();
