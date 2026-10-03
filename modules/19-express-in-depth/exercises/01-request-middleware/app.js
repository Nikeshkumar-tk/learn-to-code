// Exercise 19.1 — Write your own middleware
// Check: node exercises/01-request-middleware/check.js
//
// Add THREE middleware to this app (before the routes):
//
// 1. requestId: gives every response a header "X-Request-Id" with a counter: "1", "2", "3"...
//    (res.set("X-Request-Id", String(n)))
//
// 2. accessLog: when each response has FINISHED, pushes a line into the exported `logs` array:
//       "GET /hello -> 200"
//    (use res.on("finish", ...) — see examples/01)
//
// 3. blockBots: if the "User-Agent" header contains "BadBot", respond 403 { error: "Forbidden" }
//    and DON'T call next(). (req.get("User-Agent") reads a header; it may be undefined!)
//
// Should blocked requests still get an X-Request-Id and appear in the log? Yes — so think
// about the ORDER you add them in.
import express from "express";

export const app = express();
export const logs = [];

// Write your middleware below (before the routes).

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

app.get("/missing", (req, res) => {
  res.status(404).json({ error: "nothing here" });
});
