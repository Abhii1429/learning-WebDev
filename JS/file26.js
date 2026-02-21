// intro to array
// reference type
// how to create arrays
// array indexing

// intro:
// Array--> ordered collection of items 
// Array is reference type thus called object 
// thus Array is an Object.
// Properties of array are length and methods are push, pop, shift, unshift, slice, concat etc

//# In JavaScript, arrays are objects under the hood, but they are specialized for indexed, ordered data, while objects are designed for key–value mappings. Both are reference types, but they serve different purposes.
//-------------------------------

//# refrence type: data types that are stored as reference. When we assign an array or object to a variable, we are actually assigning a reference to that data in memory, not the data itself. This means that if we change the array or object through one variable, it will affect all variables that reference the same data.
//  Array is also a reference type because when we create an array and assign it to a variable, we are actually assigning a reference to that array in memory. When we modify the array through one variable, it will affect all variables that reference the same array.
// ----------------------------------------------------------------

// how to create array?:
// let arrayName = [item1, item2, item3,...]; // array literal syntax
// let arrayName = new Array(item1, item2, item3,...); // array constructor syntax
//---------------------------------------------------------------

// array indexing:
// array indexing starts from 0. Thus, the first element of the array is at index 0, the second element is at index 1, and so on. The last element of the array is at index length-1, where length is the number of elements in the array. We can access any element of the array using its index by using square brackets [].
// --------------------------------------------------------------

// let fruits = ["apple", "mango","grapes"]; // array containing string
// let numbers = [1,2,3,4]; // array containing numbers
// let mixed = [1, 2, 2.3, "string", null, undefined]; // array containing mixed data types

//# any type of data type can be stored inside an array

// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);

let fruits = ["apple", "mango","grapes"]; // array containing string 
let obj = {}; // object literal syntax to create an object
// console.log(fruits);

// fruits[1] = "banana"; // updation can be done in array by using index and assignment operator 
// console.log(fruits);

console.log(typeof fruits); // type --> object.
console.log(typeof obj); // type --> object.

console.log(Array.isArray(fruits));// true
console.log(Array.isArray(obj));//false

// .isArray() method is used to check whether the given variable is an array or not. It returns true if the variable is an array, and false otherwise.