//undefined
//null

// var firstName;
// console.log(typeof firstName); //undefned
// firstName = "abhishek";
// console.log(typeof firstName, firstName);

// const age; --> constant must be initialized

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);

console.log(typeof null);// bug, error

//BigInt -->came into 2020, used for storing high numerical value

//  let myNumber = BigInt(129447439846316141475184);
let myNumber = BigInt(12);
 let sameMyNumber = 123n; //BigInt
console.log(myNumber);

console.log(myNumber + sameMyNumber);

 console.log(Number.MAX_SAFE_INTEGER);
