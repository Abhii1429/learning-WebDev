// use const for creating array

// heap memory ["apple", "mango"]; //0x11

// const fruits = ["apple", "mango"]; //0x11
// fruits = ["grapes", "pineapple"];// const doesn't let you reassign the same array again
// fruits.push("banana");
// console.log(fruits);

let fruits = ["apple", "mango"];//let keyword let you reassign same array again
fruits = ["grapes", "pineapple"];
fruits.push("banana");
console.log(fruits);

//const is mostly used to prevent accidental reassignment
//we generally used "const" when we are dealing with Reference type DT