//String Methods in JavaScript:

//trim()--> removes the empty spaces
//toUpperCase()--> makes strings in capital format
//toLowerCase()--> makes string in lower case format
//slice--> used to extract a portion of an array or string.
 
// let firstName = "  abhishek  "; // string with spaces
let firstName = "AbhiShek";
// console.log(firstName);
console.log(firstName.length);

// trim method:

// it does not change the original string, it returns a new string after removing the spaces.
// it only removes the spaces from the beginning and the end of the string, not from the middle.

// firstName = firstName.trim(); //"abhishek" 
// console.log(firstName);
// console.log(firstName.length);

// toUpperCase and toLowerCase methods:

// firstName = firstName.toUpperCase(); // output: ABHISHEK

// .toUpperCase() method does not change the original string, it returns a new string in uppercase.

firstName = firstName.toLowerCase(); // output: abhishek
console.log(firstName);

// slice method : 
// it extracts a part of string and returns it as a new string, without modifying the original string.
// it takes two arguments: start index and end index (end index is optional)
// if end index is not provided, it extracts till the end of the string.

// let newString = firstName.slice(0,4);//abhi
// let newString = firstName.slice(0,6);//abhish
let newString = firstName.slice(1);//bhishek
console.log(newString);