
let arr = ["Chunnu", "Munnu", "Rahul", "Ajay", "Vijay","Raju"];

let count = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (i<=arr.length) {
    count = count + arr[i].length;
  }
}
console.log(count);