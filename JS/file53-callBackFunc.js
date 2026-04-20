// Callback function

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows us to handle asynchronous operations and ensures that certain code is executed only after a specific task is finished.

// function myFunc(a){
//     console.log(a);;
//     console.log("hello world");
// }

// // myFunc([1,2,3]); // Output: [1,2,3] and "hello world"
// myFunc("Dev"); // Output : "Dev" and "hello world"

//===================================================

// Can we pass a function as an argument to another function? 

function myFunc2(name){
    console.log("inside myFunc2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    // sql query to fetch data from database
    // const data = {}  // => real life application of callback function
    console.log("hello there I'm a function and I can accept another function as an argument");
    callback("Abhishek"); // This will execute the callback function and pass "Abhishek" as an argument to it.
}
myFunc(myFunc2); 