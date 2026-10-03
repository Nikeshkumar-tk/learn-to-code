// @skip-verify  (server)
// The SERVER: the only file that knows about ports.
//   node examples/07-structured-app/src/server.js
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Book API listening on http://localhost:${port}`));
