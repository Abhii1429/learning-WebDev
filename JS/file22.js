// intro to for loop:

for(let i = 0; i <= 9; i++){
     console.log(i)
}
console.log(i);// #1 "let" exist only inside loop cannot be accessed outside the loop


for(var i = 0; i <= 9; i++){
     console.log(i)
}
console.log(i);// #2 "var" can be accessed from outside the loop also

// #3 if we declare "let i" outside the loop then we can use this inside the loop and it is also accessible outside the loop as well
// example:
// let i = 0;
// for(; i <= 9; i++){
//      console.log(i);
// }

// console.log("value of i is ", i); // i is accessible here as well i.e outside the loop