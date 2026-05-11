let arr = [1, 2, 4, 100, 125, 7, 9, 3, 5];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (max < arr[i]) {
    sMax = max;
    max = arr[i];
  } else if (sMax < arr[i] && arr[i] != max) {
    sMax = arr[i];
  }
}
console.log(sMax);
