// An ARRAY is an ordered list of values, written with [ ].
const fruits = ["apple", "banana", "cherry"];

console.log(fruits);
console.log(fruits.length);   // how many items: 3

// Each item has an INDEX (its position). Indexes start at 0, not 1!
console.log(fruits[0]);       // "apple"  — the first item
console.log(fruits[1]);       // "banana"
console.log(fruits[2]);       // "cherry" — the last item (length - 1)
console.log(fruits[3]);       // undefined — there's nothing at position 3

// The last item, whatever the length:
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));   // modern shortcut: negative numbers count from the end

// Arrays can hold any values, even mixed (but usually you keep one kind per array):
const mixed = [42, "text", true, null, [1, 2]];
console.log(mixed.length);
console.log(typeof fruits);   // "object" — arrays are a special kind of object
console.log(Array.isArray(fruits)); // the reliable way to ask "is this an array?"
