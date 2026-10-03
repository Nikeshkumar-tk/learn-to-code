import { once } from "node:events";
import { app, logs } from "./app.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  const r1 = await fetch(`${base}/hello`);
  const r2 = await fetch(`${base}/missing`);
  const r3 = await fetch(`${base}/hello`, { headers: { "User-Agent": "Mozilla BadBot/1.0" } });
  await wait(50);
  check("request ids", [r1.headers.get("x-request-id"), r2.headers.get("x-request-id"), r3.headers.get("x-request-id")], ["1", "2", "3"]);
  check("normal request works", [r1.status, await r1.json()], [200, { message: "hello" }]);
  check("bot is blocked", [r3.status, await r3.json()], [403, { error: "Forbidden" }]);
  check("access log", logs, ["GET /hello -> 200", "GET /missing -> 404", "GET /hello -> 403"]);
} finally {
  server.close();
  server.closeAllConnections();
}
