// "typeof" operator :

// it is used to know the data type of a variable or value

// data types in js:
// 1. Primitive data types:
//    a. number => 2, 4. 5.6
//    b. string => "abhishek"
//    c. boolean => true/false
//    d. undefined => a variable which is declared but not assigned any value   
//    e. null => represents "no value" or "empty value"
//    f. symbol => used to create unique identifiers
//    g. Bigint => used to represent integers larger than "2^53 - 1"

// 2. Non-primitive data types:
//    a. object
//---------------------------------

// let age = 22;
// let firstName = "abhishek";
 
// console.log(typeof age); // output: number
// --------------------------------

// convert number to string :

// console.log( typeof (age + "")); // output: string
// parenthesis after typeof is not mandatory
// --------------------------------

//convert string to number

//  let myStr = +"34"; // unary plus operator performs conversion from string to number
//  console.log(typeof myStr); // output: number

let age  = "18";

// age = String(age); // convert number to string
// console.log(typeof age); // output : string
age = Number(age);
console.log(typeof age); // output : number
