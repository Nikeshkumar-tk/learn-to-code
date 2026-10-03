// @entry
// Debug 19.1 — Requests with a CORRECT key never get an answer
// Run:  node debug/01-stuck-requests/demo.js
// Expected:
//   → GET /profile                    ← 401 {"error":"Invalid API key"}
//   → GET /profile (with the key)     ← 200 {"name":"Ana","via":"mobile-app"}
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /profile", { method: "GET", path: "/profile", headers: { "x-api-key": "secret" } }]);
