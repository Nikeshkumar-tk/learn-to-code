// ORDER MATTERS. Express runs middleware and routes in the order you add them,
// and stops as soon as something sends a response.
//
// Run:  node examples/02-middleware-order.js
import express from "express";
import { runDemo } from "../demo-client.js";

const app = express();
let maintenanceMode = false;

// A middleware that can STOP requests by responding instead of calling next()
app.use((req, res, next) => {
  if (maintenanceMode && req.path !== "/status") {
    return res.status(503).json({ error: "Down for maintenance" });
  }
  next();
});

app.get("/status", (req, res) => res.json({ maintenanceMode }));
app.get("/tasks", (req, res) => res.json(["task A", "task B"]));

// Added AFTER the routes: only runs for requests that no route answered.
// This is how you make a JSON 404 for unknown URLs.
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

await runDemo(app, ["GET /tasks", "GET /nope"]);

maintenanceMode = true;
console.log("\n--- maintenance mode ON ---");
await runDemo(app, ["GET /tasks", "GET /status"]);
