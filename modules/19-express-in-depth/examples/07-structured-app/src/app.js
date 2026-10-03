// The APP: assembles middleware and routers, in order. Read it top to bottom = the request pipeline.
import express from "express";
import { requestLogger } from "./middleware/request-logger.js";
import { booksRouter } from "./routes/books-router.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();

app.use(requestLogger);       // 1. log every request
app.use(express.json());      // 2. parse JSON bodies
app.use("/books", booksRouter); // 3. routes
app.use(notFound);            // 4. nothing matched -> 404
app.use(errorHandler);        // 5. anything threw -> error response
