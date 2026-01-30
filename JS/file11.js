//undefined
//null

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

console.log(typeof null);// bug, error
//-------------------------------

// BigInt -->came into 2020, used for storing high numerical value

//  let myNumber = BigInt(129447439846316141475184);
let myNumber = BigInt(12);
 let sameMyNumber = 123n; //BigInt
console.log(myNumber);

console.log(myNumber + sameMyNumber);

 console.log(Number.MAX_SAFE_INTEGER);
