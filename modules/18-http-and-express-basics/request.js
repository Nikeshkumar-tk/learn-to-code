// Our own tiny "curl": send an HTTP request and print the response.
// (Typing JSON on the command line is painful, especially in PowerShell — so this tool
//  turns key=value pairs into a JSON body for you.)
//
// Usage:
//   node request.js GET /books
//   node request.js GET "/books?author=tolkien"
//   node request.js POST /books title="Dune" author="Frank Herbert" year=1965
//   node request.js DELETE /books/2
//
// Set PORT if your server isn't on 3000:  PORT=4000 node request.js GET /
//
// You understand every line of this file now: argv, fetch, async/await, JSON, objects.

const [method = "GET", rawPath = "/", ...pairs] = process.argv.slice(2);
const port = Number(process.env.PORT ?? 3000);

// Git Bash on Windows quietly turns "/books" into "C:/Program Files/Git/books". Undo that.
let path = rawPath;
if (process.env.MSYSTEM && /^[A-Za-z]:\//.test(path)) {
  const gitRoot = (process.env.EXEPATH ?? "").replaceAll("\\", "/").replace(/\/(usr\/)?bin$/i, "");
  if (gitRoot && path.toLowerCase().startsWith(gitRoot.toLowerCase())) path = path.slice(gitRoot.length);
}
if (!path.startsWith("/")) path = "/" + path; // "books/1" works too

function parseValue(text) {
  if (text === "true") return true;
  if (text === "false") return false;
  if (text !== "" && !Number.isNaN(Number(text))) return Number(text);
  return text;
}

const body = {};
for (const pair of pairs) {
  const [key, ...rest] = pair.split("=");
  body[key] = parseValue(rest.join("="));
}

const options = { method: method.toUpperCase(), headers: {} };
if (pairs.length > 0) {
  options.headers["Content-Type"] = "application/json";
  options.body = JSON.stringify(body);
}

try {
  const response = await fetch(`http://localhost:${port}${path}`, options);
  console.log(`${response.status} ${response.statusText}`);
  console.log(`content-type: ${response.headers.get("content-type") ?? "(none)"}`);
  const text = await response.text();
  if (text) {
    try {
      console.log(JSON.stringify(JSON.parse(text), null, 2));
    } catch {
      console.log(text);
    }
  }
} catch (error) {
  console.error(`Could not reach http://localhost:${port}${path} — is the server running?`);
  console.error(error.cause?.code ?? error.message);
  process.exitCode = 1;
}
