// let keyword:

// it is block scoped variable
// it cannot be redeclared
// it can be updated
// it is hoisted but not initialized
// it is introduced in ES2015 

// let firstName = "abhishek";
// console.log(firstName)

// var firstName = "abhishek";
// var firstName = "mithoo"; this kind of updation cannot be done in Let case

let firstName = "abhishek";
// let firstName = "mithoo"; //it shows error because redeclaration is not allowed in let case  
firstName = "mithoo";

console.log(firstName);
