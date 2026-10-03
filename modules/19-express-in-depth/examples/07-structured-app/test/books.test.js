// @entry
// A first taste of AUTOMATED TESTS with Node's built-in test runner (node:test).
//   npm test                                        (runs every test file in test/)
//   node examples/07-structured-app/test/books.test.js
//
// Same idea as the ✅/❌ checks you've been running all course — just the standard tool.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";

process.env.NODE_ENV = "test"; // keep the request logger quiet
const { app } = await import("../src/app.js");

let server;
let base;
before(async () => {
  server = app.listen(0);
  await once(server, "listening");
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => {
  server.close();
  server.closeAllConnections();
});

test("GET /books lists books", async () => {
  const res = await fetch(`${base}/books`);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).length, 2);
});

test("GET /books/99 is a 404 with a JSON error", async () => {
  const res = await fetch(`${base}/books/99`);
  assert.equal(res.status, 404);
  assert.deepEqual(await res.json(), { error: "Book 99 not found" });
});

test("POST /books validates the title", async () => {
  const res = await fetch(`${base}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author: "Nobody" }),
  });
  assert.equal(res.status, 400);
});

test("invalid JSON is a 400, not a 500", async () => {
  const res = await fetch(`${base}/books`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{oops" });
  assert.equal(res.status, 400);
});
