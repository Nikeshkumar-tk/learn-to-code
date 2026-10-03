// SERVER: the only file that knows about ports. Starts the app.
//   npm start        or   npm run dev   (restarts on save)
import { app } from "./app.js";
import { config } from "./config.js";

app.listen(config.port, () => {
  console.log(`Task API listening on http://localhost:${config.port}`);
});
