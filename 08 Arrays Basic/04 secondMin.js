let arr = [1, 2, 4, 100, 125, 7, 9, 3, 5];
let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (min > arr[i]) {
    sMin = min;
    min = arr[i];
  } else if (sMin > arr[i] && arr[i] != min) {
    sMin = arr[i];
  }
}
console.log(sMin);
