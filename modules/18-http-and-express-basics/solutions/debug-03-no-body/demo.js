// @entry
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
const res = await fetch(`${base}/products`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Lamp", price: 30 }),
});
console.log(`POST /products -> ${res.status} ${await res.text()}`);
server.close();
server.closeAllConnections();
