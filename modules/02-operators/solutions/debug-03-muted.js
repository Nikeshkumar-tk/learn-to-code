// Fixed. || treats 0 as "missing" (0 is falsy — more on that in Module 03),
// so the user's mute was ignored. ?? only replaces null/undefined.
const userVolume = 0;
const volume = userVolume ?? 50;

console.log("Playing at volume", volume);
