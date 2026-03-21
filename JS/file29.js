// how to clone array

// how to concatenate two array


let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2); // true ; becoz both are stored in same memory location & are reference to the same array in memory.

// let array2 = ["item1", "item2"];
// console.log(array1 === array2); // false ; becoz both are stored in different memory locations & are independent of each other

// Cloning Array:

// method 1: this method is faster than other two

// let array2 = array1.slice(0);

// let array2 = array1.slice(0).concat(["item3", "item4"]);

// method 2 :

// let array2 = [].concat(array1);
//  let array2 = [].concat(array1, ["item3", "item4"]);

// #method 3 --> Spread operator  => this method is mostly used in JS.

// let array2 = [...array1,"item3", "item4", "item5"];

let oneMoreArray = ["Ram", "Shyam"];

// let array2 = [...array1, ...oneMoreArray]; // output : ["item1", "item2", "Ram", "Shyam"]

// array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);