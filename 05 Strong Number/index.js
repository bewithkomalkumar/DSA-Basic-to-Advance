let digit = Number(prompt("Give a number to check is Strong"));

if (Number.isNaN(digit)) {
  console.log("wrong Input");
  digit = Number(prompt("Give a number to check is Strong"));
}

let sum = 0;
let strong = digit;
while (digit > 0) {
  let lastDigit = digit % 10;
  let fact = 1;
  for (let i = 1; i <= lastDigit; i++) {
    fact = fact * i;
  }
  // console.log(fact, lastDigit);
  sum += fact;
  digit = Math.floor(digit / 10);
}

if (sum == strong) {
  console.log("Number is strong");
} else {
  console.log("Number is not Strong");
}
