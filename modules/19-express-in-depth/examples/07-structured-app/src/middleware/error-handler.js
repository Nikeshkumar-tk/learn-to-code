import { AppError } from "../errors.js";

// eslint-disable-next-line no-unused-vars -- Express needs all 4 parameters to know this is an error handler
export function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  if (err.type === "entity.parse.failed") {
    // express.json() throws this when the body isn't valid JSON
    return res.status(400).json({ error: "Request body must be valid JSON" });
  }
  console.error("Unexpected error:", err);
  res.status(500).json({ error: "Internal server error" });
}
