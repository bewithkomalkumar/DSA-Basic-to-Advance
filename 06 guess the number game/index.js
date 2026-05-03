let digit = Number(prompt("Choose a number bitween 1 to 100"));
let guess = Math.floor(Math.random() * 100) + 1;
// console.log(guess);
// return;
while (true) {
  if (Number.isNaN(digit)) {
    digit = Number(
      prompt("Wrong input ! please Choose a number bitween 1 to 100")
    );
  }
  if (digit > guess) {
    console.log("Number too high");
    digit = Number(prompt("please Choose a number bitween 1 to 100"));
  } else if (digit < guess) {
    console.log("Number too low");
    digit = Number(prompt("please Choose a number bitween 1 to 100"));
  } else if (digit == guess) {
    console.log("yes the number is", guess);
    break;
  }
}
