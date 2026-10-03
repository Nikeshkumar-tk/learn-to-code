// Solution 13.3
const settings = { theme: "light", language: "en" };

export function getSetting(key) {
  return settings[key];
}

export function setSetting(key, value) {
  if (!(key in settings)) {
    throw new Error(`Unknown setting: ${key}`);
  }
  settings[key] = value;
}

export function getAllSettings() {
  return { ...settings };
}
