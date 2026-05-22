let arr = [1, 2, 3, 4, 5];
//[2,3,4,5,1];
let k = 2;
let res = new Array(arr.length);

for (i = 0; i < arr.length; i++) {
  res[(i + k) % arr.length] = arr[i];
}

console.log(res);
