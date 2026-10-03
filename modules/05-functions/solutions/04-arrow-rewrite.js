// Solution 05.4
const isEven = (n) => n % 2 === 0;

const fullName = (first, last) => `${first} ${last}`;

const getTimestamp = () => "2026-01-01T00:00:00Z";

console.log(isEven(10), fullName("Grace", "Hopper"), getTimestamp());
