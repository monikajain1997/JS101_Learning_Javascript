//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let num= 0;
let sum= 0
let average= 0
while(num<=100){

if(num%2==0){
  console.log(num);
  sum= sum+num;
  average= (sum % num);
}
  num++;
}
console.log(sum);
console.log(average);