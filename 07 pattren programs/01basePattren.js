const prompt = require("prompt-sync")();

let n = prompt("Enter the value : ");

// process.stdout.write(n);

for (let i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
