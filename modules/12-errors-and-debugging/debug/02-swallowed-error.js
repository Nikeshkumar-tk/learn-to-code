// Debug 12.2 — "Settings saved!" ...but they weren't
// Expected output:
//   Could not load settings: <some message about the JSON>
//   Using default theme: light

function loadSettings(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch (error) {}
}

const settings = loadSettings("{theme: 'dark'}"); // (this JSON is invalid on purpose — keep it)
const theme = settings?.theme ?? "light";

console.log("Settings saved!");
console.log("Using theme:", theme);
