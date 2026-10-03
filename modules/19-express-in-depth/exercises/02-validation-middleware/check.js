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
async function post(body) {
  const res = await fetch(`${base}/tasks`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

try {
  check("valid", await post({ title: "Write tests", priority: "high", estimate: 2 }), {
    status: 201,
    body: { id: 1, title: "Write tests", priority: "high", estimate: 2 },
  });
  check("optional fields can be left out", (await post({ title: "Minimal" })).status, 201);
  check("everything wrong", await post({ title: "   ", priority: "urgent", estimate: "2h" }), {
    status: 400,
    body: { error: "Validation failed", details: ["title is required", "priority must be one of low, medium, high", "estimate must be a number"] },
  });
  check("wrong type", (await post({ title: 42 })).body.details, ["title must be a string"]);
} finally {
  server.close();
  server.closeAllConnections();
}
