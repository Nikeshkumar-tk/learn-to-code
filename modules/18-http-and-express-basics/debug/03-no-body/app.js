import express from "express";

export const app = express();

const products = [];

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (!name) return res.status(400).json({ error: "name is required" });
  const product = { id: products.length + 1, name, price };
  products.push(product);
  res.status(201).json(product);
});
