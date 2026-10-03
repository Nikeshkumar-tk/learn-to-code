// Solution 19.1
import express from "express";

export const app = express();
export const logs = [];

// ORDER: requestId and accessLog come FIRST, so even blocked requests get an id and a log line.
let nextRequestId = 1;
app.use((req, res, next) => {
  res.set("X-Request-Id", String(nextRequestId++));
  next();
});

app.use((req, res, next) => {
  res.on("finish", () => {
    logs.push(`${req.method} ${req.path} -> ${res.statusCode}`);
  });
  next();
});

app.use((req, res, next) => {
  const userAgent = req.get("User-Agent") ?? "";
  if (userAgent.includes("BadBot")) {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
});

app.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

app.get("/missing", (req, res) => {
  res.status(404).json({ error: "nothing here" });
});
