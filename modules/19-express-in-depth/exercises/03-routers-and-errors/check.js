import { once } from "node:events";
import fs from "node:fs";
import path from "node:path";
import { app } from "./app.js";

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const here = import.meta.dirname;
check("routes/products.js exists", fs.existsSync(path.join(here, "routes", "products.js")), true);
check("errors.js exists", fs.existsSync(path.join(here, "errors.js")), true);
check("middleware/error-handler.js exists", fs.existsSync(path.join(here, "middleware", "error-handler.js")), true);
if (fs.existsSync(path.join(here, "routes", "products.js"))) {
  const routerSource = fs.readFileSync(path.join(here, "routes", "products.js"), "utf8");
  check("no try/catch left in the router", /\btry\s*\{/.test(routerSource), false);
}

const originalError = console.error;
console.error = () => {}; // keep the expected 500 log quiet during checks
const server = app.listen(0);
await once(server, "listening");
const base = `http://127.0.0.1:${server.address().port}`;
async function send(method, p, body) {
  const res = await fetch(base + p, { method, headers: body ? { "Content-Type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = "(not JSON)";
  }
  return { status: res.status, body: json };
}

try {
  check("list", (await send("GET", "/products")).status, 200);
  check("get one", await send("GET", "/products/1"), { status: 200, body: { id: 1, name: "Keyboard", price: 50 } });
  check("get missing", await send("GET", "/products/9"), { status: 404, body: { error: "Product 9 not found" } });
  check("create", await send("POST", "/products", { name: "Mouse", price: 20 }), { status: 201, body: { id: 2, name: "Mouse", price: 20 } });
  check("create invalid", await send("POST", "/products", { name: "Mouse", price: -1 }), { status: 400, body: { error: "price must be a non-negative number" } });
  check("delete", (await send("DELETE", "/products/2")).status, 204);
  check("delete missing", await send("DELETE", "/products/2"), { status: 404, body: { error: "Product 2 not found" } });
  check("unknown route -> JSON 404", await send("GET", "/nope"), { status: 404, body: { error: "Route not found: GET /nope" } });
  check("bug -> safe JSON 500", await send("GET", "/boom"), { status: 500, body: { error: "Internal server error" } });
} finally {
  console.error = originalError;
  server.close();
  server.closeAllConnections();
}
