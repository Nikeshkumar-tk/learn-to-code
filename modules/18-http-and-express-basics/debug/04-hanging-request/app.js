import express from "express";

export const app = express();

const orders = [{ id: 1, status: "shipped" }];

app.get("/orders/:id", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (order) {
    res.json(order);
  }
  if (!order) {
    console.log(`(server) order ${req.params.id} not found`);
  }
});
