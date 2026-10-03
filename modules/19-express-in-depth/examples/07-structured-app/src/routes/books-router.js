// The ROUTER: translates HTTP into service calls, and service results into HTTP responses.
// Thin on purpose — the rules live in the service.
import { Router } from "express";
import * as bookService from "../services/book-service.js";
import { ValidationError } from "../errors.js";

export const booksRouter = Router();

function parseId(text) {
  const id = Number(text);
  if (!Number.isInteger(id) || id <= 0) throw new ValidationError("id must be a positive whole number");
  return id;
}

booksRouter.get("/", (req, res) => {
  res.json(bookService.listBooks({ search: req.query.search }));
});

booksRouter.get("/:id", (req, res) => {
  res.json(bookService.getBook(parseId(req.params.id)));
});

booksRouter.post("/", (req, res) => {
  res.status(201).json(bookService.createBook(req.body));
});

booksRouter.delete("/:id", (req, res) => {
  bookService.deleteBook(parseId(req.params.id));
  res.status(204).end();
});
