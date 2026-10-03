// @entry
// Debug 19.2 — The API returns an HTML error page instead of JSON
// Run:  node debug/02-html-errors/demo.js
// Expected:
//   ← 404 {"error":"Order 7 not found"}
// Express also prints the error's stack trace in the terminal: that is ITS default error handler
// talking — a clue that YOUR handler never ran. Hint: Express decides whether a middleware is an
// error handler by counting something.
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /orders/7"]);
