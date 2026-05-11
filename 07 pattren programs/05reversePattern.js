const prompt = require("prompt-sync")();
let n = prompt("Enter the number : ");

for (let i = n; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
