let i = 1;
let sum = 0;
let count = 0;

while(i<=100){

  if(i%2==0){
    sum = sum+i;
    count = count+1;
  }
  i++;
  
}
console.log("avg = ",sum/count);