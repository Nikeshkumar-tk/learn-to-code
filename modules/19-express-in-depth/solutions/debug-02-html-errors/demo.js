// @entry
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /orders/7"]);
