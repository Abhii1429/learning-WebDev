//String indexing:
// it is similar to array indexing
// it is zero based indexing and each character has its own index including spaces and special characters
// it is immutable (cannot be changed) because strings are immutable in js.

let firstName = "abhishek";
 // a b h i s h e k
//  0 1 2 3 4 5 6 7

console.log(firstName[4]);

//length of string:
// "stringName.length" gives the length of string
console.log(firstName.length);
console.log(firstName[firstName.length-1]);

// last index = length -1
