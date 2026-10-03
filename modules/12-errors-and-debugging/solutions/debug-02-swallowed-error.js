// Fixed. The empty catch block "swallowed" the error: loadSettings quietly returned undefined,
// and the program printed "Settings saved!" as if nothing had happened.
// An empty catch is almost always a bug. At minimum, report what went wrong.
// Also: the message "Settings saved!" was simply untrue — this code LOADS settings.
function loadSettings(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch (error) {
    console.log("Could not load settings:", error.message);
    return null;
  }
}

const settings = loadSettings("{theme: 'dark'}");
const theme = settings?.theme ?? "light";

console.log("Using default theme:", theme);
