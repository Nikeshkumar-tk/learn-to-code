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
async function send(method, path, body) {
  const res = await fetch(base + path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let parsed = null;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch {
    parsed = `(not JSON — probably no route for ${method} ${path} yet)`;
  }
  return { status: res.status, body: parsed };
}

try {
  check("starts empty", await send("GET", "/notes"), { status: 200, body: [] });
  check("POST creates", await send("POST", "/notes", { text: "Buy milk" }), { status: 201, body: { id: 1, text: "Buy milk", pinned: false } });
  await send("POST", "/notes", { text: "Call mum", pinned: true });
  check("POST without text", await send("POST", "/notes", { pinned: true }), { status: 400, body: { error: "text is required" } });
  check("POST with blank text", (await send("POST", "/notes", { text: "   " })).status, 400);
  check("GET /notes/2", (await send("GET", "/notes/2")).body, { id: 2, text: "Call mum", pinned: true });
  check("GET /notes/9", await send("GET", "/notes/9"), { status: 404, body: { error: "Note 9 not found" } });
  check("PUT updates", await send("PUT", "/notes/1", { text: "Buy oat milk", pinned: true }), { status: 200, body: { id: 1, text: "Buy oat milk", pinned: true } });
  check("PUT validates", (await send("PUT", "/notes/1", { text: "" })).status, 400);
  check("PUT missing", (await send("PUT", "/notes/9", { text: "x" })).status, 404);
  check("DELETE", await send("DELETE", "/notes/1"), { status: 204, body: null });
  check("DELETE again", (await send("DELETE", "/notes/1")).status, 404);
  check("one note left", (await send("GET", "/notes")).body.map((n) => n.id), [2]);
} finally {
  server.close();
  server.closeAllConnections();
}
