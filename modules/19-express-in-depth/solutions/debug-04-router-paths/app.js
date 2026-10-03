import express from "express";
import booksRouter from "./routes/books.js";

export const app = express();
app.use("/books", booksRouter);
