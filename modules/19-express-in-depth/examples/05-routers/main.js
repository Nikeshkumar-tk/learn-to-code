// @entry
// Run:  node examples/05-routers/main.js
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /", "GET /books", "GET /books/1", "GET /authors"]);
