// booleans & comparison operator

// comparison operators --> to compare two values
// > , < , >= , <= , == , === , != , !==

// booleans --> true or false
 
let num1 = 8;
let num2 = 7;
let num3 = 8;
let num4 = "8";

console.log(num1 >= num2 );
console.log(num1 <= num2 );
console.log(num1 <= num3);
//----------------------

// == vs ===

// == : only notes values not data types(only in JS)

//=== :checks both, value & D.T.

console.log(num1 == num3);
console.log(num1 == num4);//only checks value NOT D.T.

console.log(num1 === num4);//checks both value and D.T.
//----------------------

// != vs !== 
// != checks Data type(D.T) only, npt value
// !== chceks D.T & value both

// let num1 = 7;
// let num2 = "7";
// console.log(num1 != num2); // output: false

console.log(num1 != num3);//false--> it doesn't check value and DT

console.log(num1 !== num4); //true -->it checks value and DT