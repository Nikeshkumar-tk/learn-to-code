// Fixed. The middleware never called next() on the success path, so the request stopped
// inside it: no route ran, no response was sent, the client waited forever.
// Every middleware must either RESPOND or call next() — on every path.
import express from "express";

export const app = express();

function checkApiKey(req, res, next) {
  const key = req.get("x-api-key");
  if (key !== "secret") {
    return res.status(401).json({ error: "Invalid API key" });
  }
  req.client = "mobile-app";
  next();
}

app.use(checkApiKey);

app.get("/profile", (req, res) => {
  res.json({ name: "Ana", via: req.client });
});
