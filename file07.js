//trim()-->removes the empty spaces
//toUpperCase()-->makes strings in capital format
//toLowerCase()-->makes string in lower case format
//slice-->used to extract a portion of an array or string.
 
// let firstName = "  abhishek  ";
let firstName = "AbhiShek";
// console.log(firstName);
console.log(firstName.length);

// firstName = firstName.trim(); //"abhishek" 
// console.log(firstName);
// console.log(firstName.length);

// firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// let newString = firstName.slice(0,4);//abhi
// let newString = firstName.slice(0,6);//abhish
let newString = firstName.slice(1);//bhishek
console.log(newString);