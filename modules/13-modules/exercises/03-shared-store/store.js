// Exercise 13.3 — A module that holds state
// Run:  node exercises/03-shared-store/check.js
//
// Make this module a tiny "settings store" that the whole app shares:
//   - keep a PRIVATE object `settings`, starting as { theme: "light", language: "en" }
//   - export getSetting(key)            -> returns the value
//   - export setSetting(key, value)     -> changes it; throws Error(`Unknown setting: ${key}`)
//                                          if key isn't one of the existing keys
//   - export getAllSettings()           -> returns a COPY of the settings object
//
// Then look at ui.js and api.js — they both import this store. Read check.js and
// predict what it will print before running it.
