// Fixed. The terminal showed: "TypeError: Cannot destructure property 'name' of 'req.body'
// as it is undefined." Express only fills req.body if a body-parsing middleware is installed.
// Add express.json() BEFORE the routes that need it.
import express from "express";

export const app = express();
app.use(express.json());

const products = [];

app.post("/products", (req, res) => {
  const { name, price } = req.body ?? {}; // `?? {}` also protects against requests with no body at all
  if (!name) return res.status(400).json({ error: "name is required" });
  const product = { id: products.length + 1, name, price };
  products.push(product);
  res.status(201).json(product);
});
