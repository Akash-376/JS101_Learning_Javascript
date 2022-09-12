
let str = "Practice makes a man perfect";

let count = 0;

let N = str.length;
for (i = 0; i <= N - 1; i++) {

  if(str[i]==" "){
    count++;
  }
  
}
console.log(count+1);