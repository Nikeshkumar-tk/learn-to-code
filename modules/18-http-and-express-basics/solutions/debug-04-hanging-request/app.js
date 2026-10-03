// Fixed. Every request MUST end with exactly one response (res.json, res.send, res.end...).
// The "not found" branch only logged on the server and never answered the client,
// so the client waited forever. Use the early-return pattern so every path responds once.
import express from "express";

export const app = express();

const orders = [{ id: 1, status: "shipped" }];

app.get("/orders/:id", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) {
    return res.status(404).json({ error: `Order ${req.params.id} not found` });
  }
  res.json(order);
});
