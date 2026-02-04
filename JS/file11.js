// undefined
// null
// BigInt

// undefined --> in js when we create a variable and we dont assign any value to it, by default its value is undefined

// let firstName;
// console.log(firstName); // output => undefined

// var firstName;
// console.log(typeof firstName); // undefined( no value assigned)
// firstName = "abhishek";
// console.log(typeof firstName, firstName); // output => string abhishek
//-------------------------------

// null --> in js when we want to clear the value of a variable we assign null to it
// const age; // --> constant must be initialized

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable); // output => harshit string

console.log(typeof null);// output:object => bug,error in JS
//-------------------------------

// BigInt -->came into 2020, used for storing high numerical value
// JS used to store number in 64 bit floating point format 
// max safe integer in JS is 2^53 -1 = 9007199254740991
// if we try to store number more than this value it will give incorrect value
// BigInt operation can be performed by two ways
// 1. by appending n at the end of the number
// 2. by using BigInt() function   


//  let myNumber = BigInt(129447439846316141475184);
let myNumber = BigInt(12);
 let sameMyNumber = 123n; //BigInt
console.log(myNumber);

console.log(myNumber + sameMyNumber);

 console.log(Number.MAX_SAFE_INTEGER);
