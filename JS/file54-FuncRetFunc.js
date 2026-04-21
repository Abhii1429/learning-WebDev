// Function returning function:

// function myFunc(){
//     // return a;
//     // return [1, 2, 3]; // return an array
//     return{name : "Abhishek", age : 23}; // return an object
        // return function(){ // here we are returning a function directly after understanding below concepts
        //     return "hello world"
        // };
// }

// const ans = myFunc(); // ans will store the return value of myFunc()
// console.log(ans);

// Can we also return a function from a function?

// function myFunc(){
//     function hello(){
//         console.log("hello world");
//     }
//     return hello;
// }
// const ans = myFunc(); // ans will store the return value of myFunc(). here "ans" variable became a function which is hello function
// console.log(ans); // output: [Function: hello]

function myFunc(){
    function hello(){
        // console.log("hello world");
        return "hello world";
    }
    return hello;
}
const ans = myFunc(); 
// ans(); // here we are calling the function which is returned by myFunc() function. output: hello world

// let anotherVar = ans(); // we can also store the return value in another variable.

console.log(ans()); // output : hello world

// A high order function is a function which returns another function or takes another function as an argument.