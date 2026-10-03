// Exercise 19.3 — Refactor: routers + centralised error handling  ⭐
// Check: node exercises/03-routers-and-errors/check.js
//
// This app WORKS, but every route repeats try/catch and status-code logic.
// Refactor it into:
//
//   errors.js                     ValidationError (400) and NotFoundError (404), each with a statusCode
//   routes/products.js            a Router (DEFAULT export) with the /products routes — no try/catch,
//                                 just THROW the errors
//   middleware/error-handler.js   errorHandler(err, req, res, next): statusCode errors -> that status
//                                 + { error: message }; anything else -> 500 { error: "Internal server error" }
//   app.js (this file)            express.json(), mount the router at /products, then a JSON 404
//                                 for unknown routes: { error: "Route not found: GET /nope" },
//                                 then the error handler. Keep the GET /boom route here (it tests 500s).
//
// Behaviour must stay the same (check.js tests it), apart from the new 404 and 500 responses.
import express from "express";

export const app = express();
app.use(express.json());

let products = [{ id: 1, name: "Keyboard", price: 50 }];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  try {
    const product = products.find((p) => p.id === Number(req.params.id));
    if (!product) throw new Error("not found");
    res.json(product);
  } catch {
    res.status(404).json({ error: `Product ${req.params.id} not found` });
  }
});

app.post("/products", (req, res) => {
  try {
    const { name, price } = req.body ?? {};
    if (!name) throw new Error("name is required");
    if (typeof price !== "number" || price < 0) throw new Error("price must be a non-negative number");
    const product = { id: Math.max(0, ...products.map((p) => p.id)) + 1, name, price };
    products.push(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/products/:id", (req, res) => {
  const exists = products.some((p) => p.id === Number(req.params.id));
  if (!exists) return res.status(404).json({ error: `Product ${req.params.id} not found` });
  products = products.filter((p) => p.id !== Number(req.params.id));
  res.status(204).end();
});

app.get("/boom", () => {
  throw new Error("Simulated bug with secret details: password=hunter2");
});
