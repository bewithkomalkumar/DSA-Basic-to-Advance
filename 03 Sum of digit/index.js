let digit = Number(prompt("Give a number to produce sum of digit"));

if (Number.isNaN(digit)) {
  console.log("wrong Input");
  digit = Number(prompt("Give a number to produce sum of digit"));
}
let sum = 0;
while (digit > 0) {
  sum += digit % 10;
  digit = Math.floor(digit / 10);
}

console.log(sum);
