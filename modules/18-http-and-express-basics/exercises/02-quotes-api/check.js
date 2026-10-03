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
  return { status: res.status, body: await res.json().catch(() => null) };
}

try {
  const all = await get("/quotes");
  check("GET /quotes returns 4", [all.status, all.body?.length], [200, 4]);
  const hopper = await get("/quotes?author=HOPPER");
  check("author filter (case-insensitive)", hopper.body?.map((q) => q.id), [2, 3]);
  const one = await get("/quotes/4");
  check("GET /quotes/4", [one.status, one.body?.author], [200, "Edsger Dijkstra"]);
  const random = await get("/quotes/random");
  check("GET /quotes/random returns a quote", [random.status, typeof random.body?.text], [200, "string"]);
  check("GET /quotes/99", await get("/quotes/99"), { status: 404, body: { error: "Quote 99 not found" } });
  check("GET /quotes/abc", await get("/quotes/abc"), { status: 400, body: { error: "Quote id must be a positive whole number" } });
  check("GET /quotes/-1", (await get("/quotes/-1")).status, 400);
} finally {
  server.close();
  server.closeAllConnections();
}
