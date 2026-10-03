import { setSetting } from "./store.js";

export function userPicksDarkMode() {
  setSetting("theme", "dark");
}
