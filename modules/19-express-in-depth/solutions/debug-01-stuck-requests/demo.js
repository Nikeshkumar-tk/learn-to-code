// @entry
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, ["GET /profile", { method: "GET", path: "/profile", headers: { "x-api-key": "secret" } }]);
