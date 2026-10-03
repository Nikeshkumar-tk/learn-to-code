// Middleware can be attached to SPECIFIC routes, between the path and the handler.
// Middleware FACTORIES (functions that return middleware — Modules 09 and 11!) make them configurable.
//
// Run:  node examples/03-route-middleware.js
import express from "express";
import { runDemo } from "../demo-client.js";

const app = express();

// A plain middleware
function requireApiKey(req, res, next) {
  if (req.get("x-api-key") !== "secret-key") {
    return res.status(401).json({ error: "Missing or invalid API key" });
  }
  next();
}

// A middleware FACTORY: configure it with a role, get back a middleware that remembers it
function requireRole(role) {
  return (req, res, next) => {
    if (req.get("x-role") !== role) {
      return res.status(403).json({ error: `Only ${role}s can do this` });
    }
    next();
  };
}

app.get("/public", (req, res) => res.json({ message: "Anyone can see this" }));

app.get("/private", requireApiKey, (req, res) => res.json({ message: "You have a valid key" }));

// Several middleware in a row: each must call next() for the request to reach the handler
app.delete("/everything", requireApiKey, requireRole("admin"), (req, res) => {
  res.json({ message: "Deleted everything (not really)" });
});

await runDemo(app, [
  "GET /public",
  "GET /private",
  { method: "GET", path: "/private", headers: { "x-api-key": "secret-key" } },
  { method: "DELETE", path: "/everything", headers: { "x-api-key": "secret-key", "x-role": "user" } },
  { method: "DELETE", path: "/everything", headers: { "x-api-key": "secret-key", "x-role": "admin" } },
]);

// (Real authentication uses tokens or sessions — a topic for later. The middleware SHAPE is the same.)
