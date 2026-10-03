// @entry
// Debug 19.4 — Every book route is a 404
// Run:  node debug/04-router-paths/demo.js
// Expected:
//   → GET /books     ← 200 [{"id":1,"title":"The Hobbit"}]
//   → GET /books/1   ← 200 {"id":1,"title":"The Hobbit"}
// Try requesting "/books/books" too. Interesting...
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /books", "GET /books/1"]);
