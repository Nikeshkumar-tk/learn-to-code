// Fixed. Nothing inside the loop changed `progress`, so `progress <= 100` was true forever.
// Every while loop needs something in its body that moves it towards the exit.
let progress = 10;

while (progress <= 100) {
  console.log(`Loading ${progress}%`);
  progress += 10;
}

console.log("Done!");
