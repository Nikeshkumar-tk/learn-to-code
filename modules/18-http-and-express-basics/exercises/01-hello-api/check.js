import { once } from "node:events";
import { app } from "./app.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
async function get(path) {
  const res = await fetch(base + path);
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { status: res.status, body };
}

try {
  check("GET /", await get("/"), { status: 200, body: { message: "Welcome to my API" } });
  const health = await get("/health");
  check("GET /health status field", health.body.status, "ok");
  check("GET /health uptimeSeconds is a number", typeof health.body.uptimeSeconds, "number");
  check("GET /greet/Ana", await get("/greet/Ana"), { status: 200, body: { greeting: "Hello, Ana!" } });
  check("GET /add?a=2&b=3", await get("/add?a=2&b=3"), { status: 200, body: { result: 5 } });
  check("GET /add?a=2.5&b=-1", (await get("/add?a=2.5&b=-1")).body, { result: 1.5 });
  check("GET /add?a=2", await get("/add?a=2"), { status: 400, body: { error: "a and b must be numbers" } });
  check("GET /add?a=x&b=1", (await get("/add?a=x&b=1")).status, 400);
} finally {
  server.close();
  server.closeAllConnections();
}
