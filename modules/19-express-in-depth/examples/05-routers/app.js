// app.js MOUNTS each router at a path prefix. The app file stays short and readable,
// and each resource's routes live in their own file.
import express from "express";
import booksRouter from "./routes/books.js";
import authorsRouter from "./routes/authors.js";

export const app = express();
app.use(express.json());

app.use("/books", booksRouter);      // everything in booksRouter now starts with /books
app.use("/authors", authorsRouter);

app.get("/", (req, res) => res.json({ endpoints: ["/books", "/books/:id", "/authors"] }));
