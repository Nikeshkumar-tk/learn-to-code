import { getSetting } from "./store.js";

export function responseHeaders() {
  return { "Content-Language": getSetting("language"), "X-Theme": getSetting("theme") };
}
