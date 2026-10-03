import { Router } from "express";
import { ValidationError, NotFoundError } from "../errors.js";

const router = Router();
let products = [{ id: 1, name: "Keyboard", price: 50 }];

function findProduct(idText) {
  const product = products.find((p) => p.id === Number(idText));
  if (!product) throw new NotFoundError(`Product ${idText} not found`);
  return product;
}

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  res.json(findProduct(req.params.id));
});

router.post("/", (req, res) => {
  const { name, price } = req.body ?? {};
  if (!name) throw new ValidationError("name is required");
  if (typeof price !== "number" || price < 0) throw new ValidationError("price must be a non-negative number");
  const product = { id: Math.max(0, ...products.map((p) => p.id)) + 1, name, price };
  products.push(product);
  res.status(201).json(product);
});

router.delete("/:id", (req, res) => {
  const product = findProduct(req.params.id);
  products = products.filter((p) => p.id !== product.id);
  res.status(204).end();
});

export default router;
