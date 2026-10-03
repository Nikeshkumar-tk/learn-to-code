// Solution 19.2
import express from "express";

export const app = express();
app.use(express.json());

const tasks = [];

function problemWith(field, value, rule) {
  const missing = value === undefined || (typeof value === "string" && value.trim() === "");
  if (missing) return rule.required ? `${field} is required` : null;
  if (rule.type && typeof value !== rule.type) return `${field} must be a ${rule.type}`;
  if (rule.oneOf && !rule.oneOf.includes(value)) return `${field} must be one of ${rule.oneOf.join(", ")}`;
  return null;
}

function validateBody(schema) {
  return (req, res, next) => {
    const body = req.body ?? {};
    const details = Object.entries(schema)
      .map(([field, rule]) => problemWith(field, body[field], rule))
      .filter((message) => message !== null);
    if (details.length > 0) {
      return res.status(400).json({ error: "Validation failed", details });
    }
    next();
  };
}

const taskSchema = {
  title: { required: true, type: "string" },
  priority: { oneOf: ["low", "medium", "high"] },
  estimate: { type: "number" },
};

app.post("/tasks", validateBody(taskSchema), (req, res) => {
  const task = { id: tasks.length + 1, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});
