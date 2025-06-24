//intro to array
//reference type
// how to create arrays
//array indexing


//Array--> ordered collection of items 
//Arr is reference type thus called object 

// let fruits = ["apple", "mango","grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1, 2, 2.3, "string", null, undefined]; 
// //any type of data type can be stored inside an array
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);

let fruits = ["apple", "mango","grapes"]; //array
let obj = {}; //object literal
// console.log(fruits);

// fruits[1] = "banana"; //updation can be done in this 
// console.log(fruits);

console.log(typeof fruits); //type --> object.
console.log(typeof obj); //type --> object.

console.log(Array.isArray(fruits));// true
console.log(Array.isArray(obj));//false
