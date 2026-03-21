// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i = 0; i <= 9; i++){
//     console.log(i);
// }

// length property of array is the most important property.

// console.log(fruits.length); 
// console.log(fruits[fruits.length-2]);

// for(let i = 0; i <= fruits.length-1; i++){
//     console.log(fruits[i].toUpperCase()); // output : ["APPLE", "MANGO", "GRAPES", "BANANA"]
// }

// storing output of a loop in another array

let fruits2 = [];
for(let i = 0; i <= fruits.length-1; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2); // output : ["APPLE", "MANGO", "GRAPES", "BANANA"]
