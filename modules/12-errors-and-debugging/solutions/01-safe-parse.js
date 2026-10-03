// Solution 12.1
function parseJsonSafely(text) {
  try {
    return { ok: true, data: JSON.parse(text) };
  } catch (error) {
    return { ok: false, error: `Invalid JSON: ${error.message}` };
  }
}

function readSetting(jsonText, key, fallback) {
  const result = parseJsonSafely(jsonText);
  if (!result.ok) return fallback;
  return result.data[key] ?? fallback;
}

console.log(parseJsonSafely("{bad"), readSetting('{"port": 8080}', "port", 3000));
// Note: this is NOT "swallowing" the error — the caller still learns it failed (ok: false)
// and gets the message. We turned an exception into a value the caller must look at.
