// template string :

// it is enclosed by backticks (` `) instead of single or double quotes.
// ${ } syntax is used to embed expressions within the string which 

// used for :
// ✅Multi-line strings
// ✅ String interpolation (inserting variables and expressions)
// ✅ HTML templates or dynamic string generation


let age = 22;
let firstName = "abhishek";

// let aboutMe = "my name is " + firstName + " and my age is " + age; // old way of string concatenation

let aboutMe = ` my name is ${firstName} and my age is ${age}`; // tempelate string way of string concatenation
console.log(aboutMe); // output : my name is abhishek and my age is 23
