import express from "express";

export const app = express();

function checkApiKey(req, res, next) {
  const key = req.get("x-api-key");
  if (key !== "secret") {
    return res.status(401).json({ error: "Invalid API key" });
  }
  req.client = "mobile-app";
}

app.use(checkApiKey);

app.get("/profile", (req, res) => {
  res.json({ name: "Ana", via: req.client });
});
