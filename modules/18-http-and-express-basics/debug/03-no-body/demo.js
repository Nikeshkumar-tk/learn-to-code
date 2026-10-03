// @entry
// Debug 18.3 — Creating a product gives a 500 error page
// Run:  node debug/03-no-body/demo.js
// Expected:
//   POST /products -> 201 {"id":1,"name":"Lamp","price":30}
// Look at BOTH the demo output and the error Express prints in the terminal.
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
const text = await res.text();
console.log(`POST /products -> ${res.status} ${text.length > 120 ? text.slice(0, 120) + "..." : text}`);
server.close();
server.closeAllConnections();
