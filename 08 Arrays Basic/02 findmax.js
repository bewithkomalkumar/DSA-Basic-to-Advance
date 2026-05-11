let arr = [1, 2, 4, 100, 125, 7, 9, 3, 5];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);
