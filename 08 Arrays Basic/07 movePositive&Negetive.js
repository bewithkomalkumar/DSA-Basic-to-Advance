let arr = [2, 4, -1, -2, 4, 5, -7, 6];

let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
