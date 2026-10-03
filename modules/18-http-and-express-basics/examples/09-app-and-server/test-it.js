// @entry
// A script that starts the app on a random free port, sends requests with fetch,
// checks the answers, and shuts down. No terminal juggling needed!
//   node examples/09-app-and-server/test-it.js
import { once } from "node:events";
import { app } from "./app.js";

const server = app.listen(0);                 // 0 = "any free port"
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;

const response = await fetch(`${base}/ping`);
console.log("status:", response.status);
console.log("body:", await response.json());

server.close();
server.closeAllConnections();
