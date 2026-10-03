// @entry
// Debug 19.3 — "Cannot set headers after they are sent to the client"
// Run:  node debug/03-headers-sent/demo.js
// Expected:
//   → POST /tasks {"title":"Valid task"}  ← 201 {"id":1,"title":"Valid task"}
//   → POST /tasks {}                      ← 400 {"error":"title is required"}
//   → GET /tasks                          ← 200 [{"id":1,"title":"Valid task"}]
// The client got the right 400... so is there even a bug? Look at the LAST response,
// and at the error printed in the terminal.
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, [
  { method: "POST", path: "/tasks", body: { title: "Valid task" } },
  { method: "POST", path: "/tasks", body: {} },
  "GET /tasks",
]);
