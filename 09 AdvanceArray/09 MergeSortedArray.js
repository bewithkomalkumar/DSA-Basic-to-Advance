let arr1 = [1, 2, 4, 5, 7, 8];
let arr2 = [3, 6, 9, 10];

let result = new Array(arr1.length + arr2.length);
let i = 0;
j = 0;
k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    result[k] = arr1[i];
    k++;
    i++;
  } else {
    result[k] = arr2[j];
    k++;
    j++;
  }
}

while (i < arr1.length) {
  result[k] = arr1[i];
  i++;
  k++;
}
while (j < arr2.length) {
  result[k] = arr2[j];
  j++;
  k++;
}

console.log(result);
