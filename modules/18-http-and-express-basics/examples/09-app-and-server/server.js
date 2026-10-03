// @skip-verify  (server)
//   node examples/09-app-and-server/server.js
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
