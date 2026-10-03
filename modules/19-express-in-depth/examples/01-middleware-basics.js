// MIDDLEWARE: a function that runs BEFORE your route handlers, for every request
// (or a chosen set of requests). Signature: (req, res, next)
//
// A middleware can:
//   - look at the request and do something (log it, time it)
//   - add things to req (req.requestTime, req.user)
//   - END the request by sending a response (e.g. 401)
//   - or call next() to pass the request on to the next middleware/route
//
// Run:  node examples/01-middleware-basics.js
import express from "express";
import { runDemo } from "../demo-client.js";

const app = express();

// 1. A logger: runs for EVERY request, then passes it on.
app.use((req, res, next) => {
  console.log(`   [logger] ${req.method} ${req.path}`);
  next(); // ⚠️ without this, the request stops here and never gets a response
});

// 2. Add information to req for later handlers.
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3. Run code AFTER the response is sent: listen for the response's "finish" event.
app.use((req, res, next) => {
  const started = Date.now();
  res.on("finish", () => {
    console.log(`   [timer] ${req.method} ${req.path} -> ${res.statusCode} in ${Date.now() - started}ms`);
  });
  next();
});

// express.json() is ALSO middleware — that's why it's added with app.use!
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello!", receivedAt: req.requestTime });
});

await runDemo(app, ["GET /hello", "GET /unknown"]);

// Mental model — a pipeline. Each request flows through in the order things were added:
//   request → logger → requestTime → timer → express.json → route handler → response
