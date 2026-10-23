//Faulty Calculator

let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let op = prompt("Enter operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
  }

let random = Math.random();  
alert(random)
if(random>0.1){
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}else{  
  op = obj[op] 
  alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}
