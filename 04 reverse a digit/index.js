let digit = Number(prompt("Give a number to Reverse"));

if (Number.isNaN(digit)) {
  console.log("wrong Input");
  digit = Number(prompt("Give a number to Reverse"));
}
let reverse = 0;

while (digit > 0) {
  let rem = digit % 10;
  reverse = reverse * 10 + rem;

  digit = Math.floor(digit / 10);
}

console.log(reverse);
