//Array destructuring
const myArray = ["value1", "value2","value3", "value4"];
//traditional method of assigning value in other prog lang
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//Method of assigning value of array in js

// const [myvar1, myvar2] = myArray; //if const is used these starts to behave as const variables

// let [myvar1, myvar2, , myvar3] = myArray;

// let myNewArray = myArray.slice(2);// creating a new array out of given

// // myvar1 = "value changed";//now each indexes act as a normal variables
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// console.log("value of myvar3 is", myvar3);//to skip index we use , as we done here

// console.log(myNewArray);l

let [myvar1, myvar2, ...myNewArray] = myArray;//creating another array and storing value in that
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);