// @expect-error
// Debug 12.3 — The config disappeared
// Expected output:
//   Server will start on port 8080

const configText = '{"port": 8080}';

try {
  const config = JSON.parse(configText);
} catch (error) {
  console.log("Bad config:", error.message);
}

console.log("Server will start on port", config.port);
