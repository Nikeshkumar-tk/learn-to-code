// Solution 19.3 — app.js is now a readable summary of the request pipeline.
import express from "express";
import productsRouter from "./routes/products.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();
app.use(express.json());

app.use("/products", productsRouter);

app.get("/boom", () => {
  throw new Error("Simulated bug with secret details: password=hunter2");
});

app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

app.use(errorHandler);
