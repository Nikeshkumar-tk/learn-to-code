// Debug 02.3 — The un-mutable video player
// The user set the volume to 0 (muted). We should respect that.
// Expected: "Playing at volume 0"

const userVolume = 0;
const volume = userVolume || 50;

console.log("Playing at volume", volume);
