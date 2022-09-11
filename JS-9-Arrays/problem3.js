
let arr = [2, 4, 6, 5, 3, 7, 1, 8, 12, 13, 17, 19];
let sum = 0;
let count = 0;

for (i = 0; i < arr.length - 1; i++) {
  if (arr[i] % 2 == 0) {
    sum = sum + arr[i];
    count = count + 1;
  }
}
console.log("average=",sum/count);

