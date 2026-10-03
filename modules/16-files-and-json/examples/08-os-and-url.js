// Two more handy built-in modules.
import os from "node:os";

// os — information about the computer
console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Free memory (MB):", Math.round(os.freemem() / 1024 / 1024));
console.log("Home folder:", os.homedir());

// URL — parse web addresses properly (it's a global; no import needed)
const url = new URL("https://api.example.com:8080/tasks/42?status=open&sort=priority#top");
console.log("protocol:", url.protocol);   // "https:"
console.log("host:", url.host);           // "api.example.com:8080"
console.log("pathname:", url.pathname);   // "/tasks/42"
console.log("status:", url.searchParams.get("status")); // "open"
console.log("all params:", Object.fromEntries(url.searchParams));

// Build URLs safely — special characters are encoded for you:
const search = new URL("https://example.com/search");
search.searchParams.set("q", "node & express");
console.log(search.toString());

// This is what Express does behind the scenes to give you req.path and req.query.
